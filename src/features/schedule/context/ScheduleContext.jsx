import { createContext, useContext } from "react";

const ScheduleContext = createContext();

function ScheduleProvider({ children }) {
  const value = {};

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
