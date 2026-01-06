import ScheduleContentLayout from "./components/ScheduleContentLayout";
import ScheduleRemainder from "./components/ScheduleRemainder";
import ConfirmDelete from "/src/components/ConfirmDelete";
import ScheduleActions from "./components/ScheduleActions";
import ScheduleHeader from "./components/ScheduleHeader";
import ScheduleStatus from "./components/ScheduleStatus";
import Conditional from "/src/components/Conditional";
import SessionForm from "./components/SessionForm";
import Container from "/src/ui/Container";
import Group from "/src/ui/Group";
import Main from "/src/ui/Main";

import { useSchedule } from "./context/ScheduleContext";
import useDeleteSession from "./hooks/useDeleteSession";

export default function Schedules() {
  const { isDeleting, deleteSession } = useDeleteSession();
  const { selectedId, isDeleteModal, isDisplaySessionForm, setSelectedId, selectedSessionTitle, setSelectedSessionTitle, setIsDeleteModal } = useSchedule();

  function handleCloseModal() {
    setSelectedId(null);
    setIsDeleteModal(false);
    setSelectedSessionTitle("");
  }

  function handleDeleteSession() {
    if (selectedId) {
      deleteSession(selectedId);
      handleCloseModal();
    }
  }

  return (
    <Container>
      <ScheduleHeader />
      <Main
        classname={"h-screen medium:h-[510px] space-y-6 overflow-y-scroll p-6"}
      >
        <ScheduleStatus />
        <Group classname={"grid grid-cols-1 gap-x-6 gap-y-3 lg:grid-cols-3"}>
          <ScheduleContentLayout />
          <Group classname={"space-y-6"}>
            <ScheduleActions />
            <ScheduleRemainder />
          </Group>
        </Group>
      </Main>

      <Conditional
        condition={isDisplaySessionForm}
      >
        <SessionForm />
      </Conditional>
      
      <Conditional condition={isDeleteModal}>
        <ConfirmDelete
          resourceName={selectedSessionTitle}
          disabled={isDeleting}
          onCloseModal={handleCloseModal}
          onConfirm={handleDeleteSession}
        />
      </Conditional>
    </Container>
  );
}
