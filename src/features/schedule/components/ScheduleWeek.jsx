import HeaderText from "/src/ui/HeaderText";
import Header from "/src/ui/Header";
import Group from "/src/ui/Group";

export default function ScheduleWeek() {
  return (
    <>
      <Header>
        <HeaderText type="secondary">This Week</HeaderText>
      </Header>
      <Group>Week</Group>
    </>
  );
}
