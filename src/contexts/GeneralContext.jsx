import { createContext, useContext, useState } from "react";

const GeneralContext = createContext();

function GeneralProvider({ children }) {
  // Inspire
  const [weeklyData, setWeeklyData] = useState([]);

  // Flashcard
  const [studyTime, setStudyTime] = useState(0);

  const value = { 
    studyTime, 
    weeklyData, 
    setStudyTime, 
    setWeeklyData 
  };

  return (
    <GeneralContext.Provider value={value}>{children}</GeneralContext.Provider>
  );
}

function useGeneral() {
  const context = useContext(GeneralContext);

  if (context === undefined)
    throw new Error("General context was called outside of it provider");

  return context;
}

export { GeneralProvider, useGeneral };
