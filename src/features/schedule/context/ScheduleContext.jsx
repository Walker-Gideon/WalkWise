import { createContext, useContext, useState } from "react";

const ScheduleContext = createContext();

function ScheduleProvider({ children }) {
  const [isDisplaySessionForm, setIsDisplaySessionForm] = useState(false);
  const [activeView, setActiveView] = useState("today");

  const value = {
    activeView,
    isDisplaySessionForm,
    setActiveView,
    setIsDisplaySessionForm,
  };

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
