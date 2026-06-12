import { useEffect } from "react"
import { motion } from "motion/react";
import { useSearchParams, useLocation } from "react-router-dom";
import { LuFlame, LuTrophy, LuClock, LuLibrary } from "react-icons/lu";

import Button from "/src/ui/Button";
import Model from "/src/components/Model";

import { formatTime } from "/src/helper/helpers";
import { useFetchCards } from "/src/hook/useCards";
import { useUserData } from "/src/user/hook/useUserData";
import { useGeneral } from "/src/contexts/GeneralContext";
import { useFlashcard } from "../../../context/FlashcardContext";
import { useUpdateSession } from "/src/features/schedule/hooks/useUpdateSession";

export default function FlashcardSummaryModal() {
    const { studyTime } = useGeneral();
    const { userData } = useUserData();
    const { flashcards } = useFetchCards();
    const { updateSession } = useUpdateSession();
    const { setFinished, activeId } = useFlashcard();

    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const sessionId = searchParams.get("session");

    useEffect(() => {
        if (sessionId) {
            updateSession({ 
                id: sessionId, 
                data: { 
                    status: 'completed', 
                    completedAt: new Date(),
                    duration: studyTime
                }, 
                silent: true 
            });
        }
    }, [sessionId, updateSession, studyTime]);

    const card = flashcards?.find((card) => card.id === activeId);
    const cardLength = card?.pairs?.length || 0;

    function handleToFlashcard() {
        setFinished(false);
        const previousFilter = location.state?.previousFilter || "title";
        setSearchParams({ filter: previousFilter });
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
    };

    return (
        <Model styling={"primary-text-color mx-4 medium:mx-0 w-full max-w-[400px]"}>
            <div className="flex flex-col items-center px-2 py-4">
                {/* Header Section */}
                <motion.div 
                    initial={{ scale: 0.5, opacity: 0 }} 
                    animate={{ scale: 1, opacity: 1 }} 
                    transition={{ type: "spring", bounce: 0.5 }}
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-500 mb-4 dark:bg-green-900/30 dark:text-green-400"
                >
                    <LuTrophy className="h-10 w-10" />
                </motion.div>

                <h2 className="text-2xl font-bold text-center text-slate-800 dark:text-white mb-2">
                    Session Complete!
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-center mb-8">
                    Great job reviewing all your flashcards today.
                </p>

                {/* Stats Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-2 gap-4 w-full mb-8"
                >
                    {/* Stat Card 1 */}
                    <motion.div variants={itemVariants} className="flex flex-col items-center justify-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                        <LuLibrary className="h-6 w-6 text-blue-500 mb-2" />
                        <span className="text-2xl font-bold text-slate-800 dark:text-white">{cardLength}</span>
                        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">Cards</span>
                    </motion.div>

                    {/* Stat Card 2 */}
                    <motion.div variants={itemVariants} className="flex flex-col items-center justify-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                        <LuClock className="h-6 w-6 text-indigo-500 mb-2" />
                        <span className="text-2xl font-bold text-slate-800 dark:text-white">{formatTime(studyTime)}</span>
                        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">Time</span>
                    </motion.div>

                    {/* Stat Card 3 (Full Width) */}
                    <motion.div variants={itemVariants} className="col-span-2 flex flex-row items-center justify-between p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl border border-orange-100 dark:border-orange-500/20 shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-500 dark:bg-orange-500/20">
                                <LuFlame className="h-5 w-5" />
                            </div>
                            <span className="font-semibold text-orange-900 dark:text-orange-300">Current Streak</span>
                        </div>
                        <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">{userData?.streakCount || 0}</span>
                            <span className="text-sm font-medium text-orange-500 dark:text-orange-400 ml-1">days</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Action Button */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="w-full mt-2"
                >
                    <Button 
                        variant="primary" 
                        ariaLabel="Continue learning"
                        onClick={handleToFlashcard}
                        className="w-full py-3.5 text-base rounded-xl transition-transform hover:-translate-y-1 active:translate-y-0 flex justify-center"
                    >
                        Continue Learning
                    </Button>
                </motion.div>
            </div>
        </Model>
    );
}