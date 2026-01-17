import { formatTime } from "/src/helper/helpers";

export function useStudyTiming(sessions) {
  if (!sessions) return { formattedTime: "00 : 00", rawTime: 0 };

  const totalTime = sessions.reduce((acc, session) => {
    // Only count completed sessions or those with duration
    const duration = session.duration || 0;
    return acc + duration;
  }, 0);

  return {
    formattedTime: formatTime(totalTime),
    rawTime: totalTime
  };
}