import { createContext, useContext, useState } from "react";

const ScheduleContext = createContext();

function ScheduleProvider({ children }) {
  const [activeView, setActiveView] = useState("today");

  const value = { activeView, setActiveView };

  return (
    <ScheduleContext.Provider value={value}>
      {children}
    </ScheduleContext.Provider>
  );
}

function useSchedule() {
  const context = useContext(ScheduleContext);

  if (context === undefined)
    throw new Error("Schedul context was called outside of it provider");

  return context;
}

export { ScheduleProvider, useSchedule };
