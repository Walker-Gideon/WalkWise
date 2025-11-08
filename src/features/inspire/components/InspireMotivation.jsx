import { LuLightbulb } from "react-icons/lu";

import HeaderText from "/src/ui/HeaderText";
import SpanText from "/src/ui/SpanText";
import Group from "/src/ui/Group";
import Card from "/src/components/Card";

export default function InspireMotivation() {
  return (
    <Card>
      <SpanText classname={"mb-4 flex items-center space-x-3"}>
        <LuLightbulb className="h-6 w-6 text-slate-600 dark:text-slate-300" />
        <HeaderText>Daily Inspiration</HeaderText>
      </SpanText>
      <Group>
        {currentQuote ? (
          <>
            <blockquote className="mb-4 text-lg text-slate-500 italic dark:text-slate-400">
              "{currentQuote.text}"
            </blockquote>
            <p className="text-right text-sm">— {currentQuote.author}</p>
          </>
        ) : (
          <>
            <div className="italic dark:text-slate-400">Loading quote...</div>
          </>
        )}
      </Group>
    </Card>
  );
}
