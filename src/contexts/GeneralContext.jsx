import { createContext, useContext, useState } from "react";

const GeneralContext = createContext();

function GeneralProvider({ children }) {
  // Inspire
  const [weeklyData, setWeeklyData] = useState([]);

  const value = { weeklyData };

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
