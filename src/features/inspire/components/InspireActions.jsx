import { LuRectangleVertical, LuChartColumnIncreasing, LuZap } from "react-icons/lu";

import Group from "/src/ui/Group";
import Button from "/src/ui/Button";
import SpanText from "/src/ui/SpanText";
import Card from "/src/components/Card";
import HeaderText from "/src/ui/HeaderText";

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
      <HeaderText type="semiHeader">
        <LuZap className="icons" />
        <SpanText>Quick Actions</SpanText>
      </HeaderText>
      <Group>
        {buttons.map((data, index) => (
          <Group key={index} classname={`${index === 1 ? "mt-2" : ""}`}>
            <Button
              type="colors"
              to={data.to}
              classname={"flex gap-3 w-full py-3"}
            >
              <data.icon className="h-5 w-5 text-white" />
              {data.text}
            </Button>
          </Group>
        ))}
      </Group>
    </Card>
  );
}
