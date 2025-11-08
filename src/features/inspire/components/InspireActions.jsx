import { LuRectangleVertical, LuChartColumnIncreasing } from "react-icons/lu";

import HeaderText from "/src/ui/HeaderText";
import Card from "/src/components/Card";
import Button from "/src/ui/Button";
import Group from "/src/ui/Group";

const buttons = [
  {
    icon: LuRectangleVertical,
    text: "Review Cards",
    to: "/flashcards",
    title: "Flashcards",
  },
  {
    icon: LuChartColumnIncreasing,
    text: "View Detailed Analytics",
    to: "/dashboard",
    title: "Dashboard",
  },
];

export default function InspireActions() {
  return (
    <Card>
      <HeaderText variant="secondary" classname={"mb-4"}>
        Quick Actions
      </HeaderText>
      <>
        {buttons.map((data, index) => (
          <Group key={index} classname={`${index === 1 ? "mt-2" : ""}`}>
            <Button
              type="colors"
              to={data.to}
              classname={"w-full flex items-center gap-3 py-3"}
            >
              <data.icon />
              {data.text}
            </Button>
          </Group>
        ))}
      </>
    </Card>
  );
}
