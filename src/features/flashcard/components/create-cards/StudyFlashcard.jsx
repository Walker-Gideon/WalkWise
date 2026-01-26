import toast from "react-hot-toast";
import { auth } from "/src/service/firebase";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useSearchParams, useLocation } from "react-router-dom";
import { LuArrowLeft, LuArrowRight, LuX, LuCheck } from "react-icons/lu";

import ConfirmDelete from "/src/components/ConfirmDelete";
import StudyFlashcardHeader from "./StudyFlashcardHeader";
import Container from "/src/ui/Container";
import Paragraph from "/src/ui/Paragraph";
import Spinner from "/src/ui/Spinner";
import Button from "/src/ui/Button";
import Group from "/src/ui/Group";
import Flex from "/src/ui/Flex";

import useDeleteFlashcard from "../../hooks/useDeleteFlashcard";
import { useFlashcard } from "../../context/FlashcardContext";
import { useGeneral } from "/src/contexts/GeneralContext";
import { useUserData } from "/src/user/hook/useUserData";
import { useFetchCards } from "/src/hook/useCards";
import { updateUser } from "/src/service/apiUser";
import { formatTime } from "/src/helper/helpers";

export default function StudyFlashcard() {
  const user = auth.currentUser;

  const { userData } = useUserData();
  const { setStudyTime } = useGeneral();
  const { flashcards, isPending, error } = useFetchCards();
  const { isDeleting, deleteFlashcard } = useDeleteFlashcard();
  const { setActiveId, setFinished, setIsPlay, activeId } = useFlashcard();
  
  const timerRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isFlip, setIsFlip] = useState(false);
  const [direction, setDirection] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [sessionResults, setSessionResults] = useState({});

  const location = useLocation();

  const card = flashcards?.find((card) => card.id === activeId);
  const title = card?.title;
  const pairs = card?.pairs;

  const condition = index + 1 === pairs?.length;

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, []);

  function handleNext() {
    if (index < pairs.length - 1) {
      setDirection(1);
      setIndex(index + 1);
      setIsFlip(false);
    }
  }

  function handlePrev() {
    if (index > 0) {
      setDirection(-1);
      setIndex(index - 1);
      setIsFlip(false);
    }
  }

  function handleRate(result) {
    setSessionResults((prev) => ({
      ...prev,
      [index]: result,
    }));

    if (condition) {
      handleFinish();
    } else {
      handleNext();
    }
  }

  function handleConfirmDelete() {
    if (activeId) {
      deleteFlashcard(activeId);
      setIsDeleteModal(false);
      
      const previousFilter = location.state?.previousFilter || "title";
      setSearchParams({ filter: previousFilter });
    }
  }

  function handleCloseModal() {
    setIsDeleteModal(false);
  }

  function handleFinish() {
    clearInterval(timerRef.current);
    setActiveId(activeId);
    setFinished(true);
    setStudyTime(timer);

    if (user) {
      const today = new Date().toDateString();
      const lastActive = userData?.lastActiveDate
        ? new Date(userData.lastActiveDate).toDateString()
        : null;

      let newStreak = userData?.streakCount || 0;
      if (today !== lastActive) {
        newStreak += 1;
      }

      // Calculate total study time
      const currentStudyTime = userData?.studyTime || 0;
      const totalStudyTime = currentStudyTime + timer;

      // Calculate total cards studied
      const currentCardsStudied = userData?.cardsStudied || 0;
      const totalCardsStudied = currentCardsStudied + pairs.length;

      const updateData = {
        lastActiveDate: new Date().toISOString(),
        streakCount: newStreak,
        studyTime: totalStudyTime,
        cardsStudied: totalCardsStudied,
      };

      const currentHour = new Date().getHours();
      // Early Bird Logic
      if (currentHour < 8) {
        updateData.lastEarlyBirdDate = new Date().toISOString();
      }
      // Night Owl Logic
      if (currentHour >= 22) {
        updateData.lastNightOwlDate = new Date().toISOString();
      }

      updateUser(user.uid, updateData);
    }
  }

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  const btnStyling =
    "rounded-full p-3 disabled:cursor-not-allowed disabled:bg-gray-400 borderStyling";

  return (
    <Container classname={"p-4"}>
      <StudyFlashcardHeader title={title} onIsDeleteModal={setIsDeleteModal} timer={formatTime(timer)} />

      {isPending ? (
        <Spinner />
      ) : (
        <Flex
          variant="center"
          classname={"px-8 flex-col gap-8 md:max-w-2xl mx-auto"}
        >
          <div
            className="perspective medium:h-85 h-70 w-full"
            onClick={() => setIsFlip((prev) => !prev)}
          >
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="h-full w-full"
              >
                <div
                  className="relative flex h-full w-full cursor-pointer items-center justify-center text-xl font-medium"
                  style={{ perspective: 1000 }}
                >
                  <motion.div
                    className="relative h-full w-full rounded-2xl border border-stone-300 bg-white/70 shadow-lg transition-all dark:border-slate-700 dark:bg-slate-800/70 dark:text-white"
                    style={{
                      transformStyle: "preserve-3d",
                      position: "relative",
                    }}
                    animate={{ rotateX: !isFlip ? 0 : 180 }}
                    transition={{ duration: 0.6 }}
                  >
                    {/* Front Side */}
                    <div
                      className="absolute inset-0 flex h-full flex-col items-center justify-center px-6 py-4 text-xl font-semibold md:px-10"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <Paragraph
                        classname={
                          "text-2xl font-semibold text-center select-none"
                        }
                      >
                        {pairs[index].term}
                      </Paragraph>
                      <span className="absolute bottom-4 text-xs text-slate-400 italic select-none dark:text-gray-400">
                        Tap to view definition
                      </span>
                    </div>

                    {/* Back Side */}
                    <div
                      className="absolute inset-0 flex items-center justify-center px-6 py-4 md:px-10"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateX(180deg)",
                      }}
                    >
                      <Paragraph
                        classname={
                          "text-2xl font-semibold text-center select-none"
                        }
                      >
                        {pairs[index].definition}
                      </Paragraph>
                      <span className="absolute bottom-4 text-xs text-slate-400 italic select-none dark:text-gray-400">
                        Tap to view term
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <Group classname={"flex items-center gap-8"}>
            {!isFlip ? (
              <>
                <Button
                  variant="secondary"
                  type="border"
                  disabled={index === 0}
                  classname={btnStyling}
                  onclick={handlePrev}
                >
                  <LuArrowLeft className="icons" />
                </Button>
                <Group>
                  <Paragraph classname={"text-xl font-bold primary-text-color"}>
                    {index + 1} / {pairs.length}
                  </Paragraph>
                </Group>
                <Button
                  variant={condition ? "" : "secondary"}
                  type={"border"}
                  classname={
                    condition
                      ? "text-sm text-slate-900 dark:text-white borderStyling"
                      : btnStyling
                  }
                  onclick={condition ? handleFinish : handleNext}
                >
                  {condition ? "Finish" : <LuArrowRight className="icons" />}
                </Button>
              </>
            ) : (
                <>
                <Button
                  type="danger"
                  classname={btnStyling}
                  onclick={() => handleRate("missed")}
                >
                  <LuX className="icons text-white h-5 w-5" />
                </Button>

                <Group>
                  <Paragraph classname={"text-xl font-bold primary-text-color"}>
                   Result
                  </Paragraph>
                </Group>

                <Button
                    classname={`${btnStyling} bg-green-500 hover:bg-green-600 text-white border-green-600`}
                    onclick={() => handleRate("got_it")}
                >
                    <LuCheck className="icons text-white h-5 w-5" />
                </Button>
                </>
            )}
          </Group>
        </Flex>
      )}
      {isDeleteModal && (
        <ConfirmDelete
          resourceName={title}
          disabled={isDeleting}
          onCloseModal={handleCloseModal}
          onConfirm={handleConfirmDelete}
        />
      )}
      {error && toast.error("Error fetching flashcards")}
    </Container>
  );
}
