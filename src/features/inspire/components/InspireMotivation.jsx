import { LuLightbulb } from "react-icons/lu";

import HeaderText from "/src/ui/HeaderText";
import Paragraph from "/src/ui/Paragraph";
import SpanText from "/src/ui/SpanText";
import Card from "/src/components/Card";
import Group from "/src/ui/Group";

export default function InspireMotivation() {
  return (
    <Card>
      <SpanText classname={"mb-4 flex items-center space-x-3"}>
        <LuLightbulb className="h-6 w-6 text-slate-600 dark:text-slate-300" />
        <HeaderText type="secondary">Daily Inspiration</HeaderText>
      </SpanText>
      <Group>
        {/* {currentQuote ? ( */}
        <>
          <blockquote className="mb-4 text-lg text-slate-500 italic dark:text-slate-400">
            {/* "{currentQuote.text}" */}"Learning is a treasure that follows
            its owner everywhere."
          </blockquote>
          <Paragraph classname={"text-right text-sm primary-text-color"}>
            {/* — {currentQuote.author} */} Auther Name
          </Paragraph>
        </>
        {/* ) : ( */}
        <>
          {/* <Paragraph classname={"italic dark:text-slate-400"}>
            Loading quote...
          </Paragraph> */}
        </>
        {/* )} */}
      </Group>
    </Card>
  );
}
