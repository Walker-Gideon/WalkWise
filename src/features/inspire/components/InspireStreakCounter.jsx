import { LuFlame } from "react-icons/lu";

import Paragraph from "/src/ui/Paragraph";
import SpanText from "/src/ui/SpanText";
import Card from "/src/components/Card";

export default function InspireStreakCounter() {
  return (
    <Card classname={"text-center"}>
      <SpanText>
        <LuFlame className="mx-auto h-12 w-12 text-slate-600 dark:text-slate-300" />
      </SpanText>
      <Paragraph
        classname={"text-4xl font-bold primary-text-color my-2"}
      >
        {/* {userData.streakCount} */} X
      </Paragraph>
      <Paragraph classname={"text-lg primary-text-color"}>
        Day Streak!
      </Paragraph>
      {/* {userData.streakCount !== 0 && ( */}
      <Paragraph variant="small" classname={"secondary-text-color"}>
        Don’t break your streak!
      </Paragraph>
      {/* )} */}
    </Card>
  );
}
