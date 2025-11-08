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
  return <div>InspireActions</div>;
}
