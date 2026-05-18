import { useMemo, useState, useEffect } from "react";

import { useFetchCards } from "/src/hook/useCards";
import { useUserData } from "/src/user/hook/useUserData";
import useFetchNotes from "/src/features/note/hook/useFetchNotes";
import { useSessions } from "/src/features/schedule/hooks/useSessions";
import useMasteryCards from "/src/features/dashboard/hooks/useMasteryCards";
import useTodayStudyTime from "/src/features/dashboard/hooks/useTodayStudyTime";

import { aiEncouragements } from "/src/data/walkwiseAIData";

export function useWalkWiseAI() {
  const { notes } = useFetchNotes();
  const { userData } = useUserData();
  const { sessions } = useSessions();
  const { flashcards } = useFetchCards();
  const { masteryCount } = useMasteryCards();
  const { totalStudyTime } = useTodayStudyTime();

  const [currentIndex, setCurrentIndex] = useState(0);

  // 1. Gather all qualified encouragements
  const activeEncouragements = useMemo(() => {
    const list = [];

    // Always include a smart time-of-day fallback tip as baseline
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
      list.push(aiEncouragements.timeOfDay.morning());
    } else if (currentHour >= 12 && currentHour < 17) {
      list.push(aiEncouragements.timeOfDay.afternoon());
    } else {
      list.push(aiEncouragements.timeOfDay.evening());
    }

    if (!userData || !flashcards || !notes || !sessions) {
      return list;
    }

    const totalCardsCreated = flashcards.reduce((sum, cardSet) => sum + (cardSet.pairs?.length || 0), 0);
    const totalNotes = notes.length;

    // Priority A: BRAND NEW USER (Nudge them to get started)
    if (totalCardsCreated === 0 && totalNotes === 0) {
      list.push(aiEncouragements.newUser.welcome());
      list.push(aiEncouragements.newUser.firstCardNudge());
      return list; // Exit early for newcomers to keep their experience tailored
    }

    // Priority B: TODAY'S FOCUS/STUDY TIME
    if (totalStudyTime >= 30) {
      list.push(aiEncouragements.milestones.focusTimeToday(totalStudyTime));
    }

    // Priority C: COMPLETED SESSIONS TODAY
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const completedSessionsToday = sessions.filter((session) => {
      if (session.status !== "Completed") return false;
      const dateField = session.completedAt || session.updatedAt || session.createdAt;
      if (!dateField) return false;

      const completedDate = dateField.toDate ? dateField.toDate() : new Date(dateField);
      return completedDate >= today;
    });

    if (completedSessionsToday.length >= 1) {
      list.push(aiEncouragements.sessions.today(completedSessionsToday.length));
    }

    // Priority D: STREAK CELEBRATION
    const streakCount = userData.streakCount || 0;
    if (streakCount >= 1) {
      list.push(aiEncouragements.milestones.streak(streakCount));
    }

    // Priority E: MASTERY MILESTONE
    if (masteryCount >= 1) {
      list.push(aiEncouragements.milestones.mastery(masteryCount));
    }

    // Priority F: NOTES MILESTONE
    if (totalNotes >= 1) {
      list.push(aiEncouragements.milestones.notesCreated(totalNotes));
    }

    // Priority G: SESSIONS COMPLETED WEEKLY & MONTHLY
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - 7);
    const startOfMonth = new Date(today);
    startOfMonth.setDate(today.getDate() - 30);

    const completedWeekly = sessions.filter((session) => {
      if (session.status !== "Completed") return false;
      const dateField = session.completedAt || session.updatedAt || session.createdAt;
      if (!dateField) return false;

      const completedDate = dateField.toDate ? dateField.toDate() : new Date(dateField);
      return completedDate >= startOfWeek;
    }).length;

    const completedMonthly = sessions.filter((session) => {
      if (session.status !== "Completed") return false;
      const dateField = session.completedAt || session.updatedAt || session.createdAt;
      if (!dateField) return false;

      const completedDate = dateField.toDate ? dateField.toDate() : new Date(dateField);
      return completedDate >= startOfMonth;
    }).length;

    if (completedWeekly >= 1) {
      list.push(aiEncouragements.sessions.weekly(completedWeekly));
    }

    if (completedMonthly >= 1) {
      list.push(aiEncouragements.sessions.monthly(completedMonthly));
    }

    // Priority H: CARDS CREATED MILESTONE
    if (totalCardsCreated >= 1) {
      list.push(aiEncouragements.milestones.cardsCreated(totalCardsCreated));
    }

    return list;
  }, [userData, flashcards, notes, sessions, totalStudyTime, masteryCount]);

  // 2. Reset pointer if list size changes to avoid index out of bounds
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeEncouragements.length]);

  // 3. Cycle through encouragements every 12 seconds
  useEffect(() => {
    if (activeEncouragements.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % activeEncouragements.length);
    }, 12000);

    return () => clearInterval(timer);
  }, [activeEncouragements.length]);

  const motivation = activeEncouragements[currentIndex] || { quote: "", author: "WalkWise AI" };

  return motivation;
}
