import CardContentDisplay from "./cards/CardContentDisplay";
import CardsSubHeader from "./cards/CardsSubHeader";
import CardHeader from "./cards/CardHeader";
import Group from "/src/ui/Group";

export default function CardsInitDisplay() {
  return (
    <Group classname={"h-screen overflow-y-scroll"}>
      <CardHeader />
      <Group classname={"my-6 px-6"}>
        <CardsSubHeader />
        <CardContentDisplay />
      </Group>
    </Group>
  );
}
