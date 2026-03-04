import Main from "/src/ui/Main";
import Group from "/src/ui/Group";
import Container from "/src/ui/Container";
import SessionForm from "./components/SessionForm";
import Conditional from "/src/components/Conditional";
import ScheduleStatus from "./components/ScheduleStatus";
import ScheduleHeader from "./components/ScheduleHeader";
import ConfirmDelete from "/src/components/ConfirmDelete";
import ScheduleActions from "./components/ScheduleActions";
import ScheduleRemainder from "./components/ScheduleRemainder";
import ScheduleContentLayout from "./components/ScheduleContentLayout";

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
    <Container classname={"flex h-full flex-col"}>
      <ScheduleHeader />
      <Main
        classname={"min-h-0 flex-1 space-y-6 overflow-y-scroll p-6"}
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
      <Conditional condition={isDisplaySessionForm}>
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
