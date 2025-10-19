import { LuLightbulb, LuFlame } from "react-icons/lu";
import HeaderText from "/src/ui/HeaderText";
import SpanText from "/src/ui/SpanText";
import Card from "/src/components/Card";

export default function DashboardMotivation() {
  return (
    <Card>
      <HeaderText
        type="secondary"
        classname={"mb-4 flex items-center space-x-2"}
      >
        <LuLightbulb
          // dark:text-slate-300
          className="h-5 w-5 text-slate-600"
        />
        <SpanText>Daily Inspiration</SpanText>
      </HeaderText>
      <blockquote className="mb-4 text-sm text-slate-500 italic dark:text-slate-400">
        {/* "{currentQuote ? currentQuote?.text : "Loading quote..."}" */}
        The mind is not a vessel to be filled, but a fire to be kindled.
      </blockquote>
    </Card>
  );
}
