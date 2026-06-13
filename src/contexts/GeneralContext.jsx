import { createContext, useState } from "react";

export const GeneralContext = createContext();
export { useGeneral } from "./useGeneral";

export function GeneralProvider({ children }) {
  // Inspire
  const [weeklyData, setWeeklyData] = useState([]);

  // Flashcard
  const [studyTime, setStudyTime] = useState(0);

  const value = {
    studyTime,
    weeklyData,
    setStudyTime,
    setWeeklyData,
  };

  return (
    <GeneralContext.Provider value={value}>{children}</GeneralContext.Provider>
  );
}

export default GeneralProvider;
