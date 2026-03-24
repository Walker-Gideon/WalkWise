import Group from "/src/ui/Group";
import CardHeader from "./cards/CardHeader";
import CardsSubHeader from "./cards/CardsSubHeader";
import CardContentDisplay from "./cards/CardContentDisplay";

export default function CardsInitDisplay() {
  return (
    <Group classname={"h-screen overflow-y-scroll"}>
      <CardHeader />
      <Group classname={"mb-6"}>
        <CardsSubHeader />
        <CardContentDisplay />
      </Group>
    </Group>
  );
}
