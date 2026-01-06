import { createContext, useContext, useState } from "react";

const ScheduleContext = createContext();

function ScheduleProvider({ children }) {
  const [isDisplaySessionForm, setIsDisplaySessionForm] = useState(false);
  const [activeView, setActiveView] = useState("today");

  const [selectedSessionTitle, setSelectedSessionTitle] = useState("");
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const value = {
    activeView,
    selectedId,
    isDeleteModal,
    selectedSessionTitle,
    isDisplaySessionForm,
    setActiveView,
    setSelectedId,
    setIsDeleteModal,
    setSelectedSessionTitle,
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
