import { LuLightbulb, LuFlame } from "react-icons/lu";

import HeaderText from "/src/ui/HeaderText";
import SpanText from "/src/ui/SpanText";
import Card from "/src/components/Card";

export default function DashboardMotivation() {
  return (
    <Card>
      <HeaderText type="secondary" classname={"mb-4 flex items-center gap-2"}>
        <LuLightbulb className="icons mb-1" />
        <SpanText>Daily Inspiration</SpanText>
      </HeaderText>
      <blockquote className="secondary-text-color mb-4 text-sm italic">
        {/* "{currentQuote ? currentQuote?.text : "Loading quote..."}" */}
        The mind is not a vessel to be filled, but a fire to be kindled.
      </blockquote>
    </Card>
  );
}
