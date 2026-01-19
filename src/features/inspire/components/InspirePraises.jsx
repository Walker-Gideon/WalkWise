import { LuAward } from "react-icons/lu";

import HeaderText from "/src/ui/HeaderText";
import Paragraph from "/src/ui/Paragraph";
import SpanText from "/src/ui/SpanText";
import Card from "/src/components/Card";
import Group from "/src/ui/Group";

const inspirePraises = [
  {
    text: "Your biggest deck shows real dedication to that topic."
  }, 
  {
    text: "You've studied over an hour today — great concentration."
  },
  {
    text: "Studying late into the night — your effort won’t go unnoticed."
  },
  {
    text: "You've mastered {masteredFlashcards} flashcards — your memory is sharp."
  },
  {
    text: "Stay consistent. Your future self will thank you."
  },
  {
    text: "You've achieved 90% mastery in {topSubject} — excellent progress."
  },
  {
    text: "One more day and you'll hit a new streak record! Stay focused."
  },
  {
    text: "The {largestDeck} set is growing fast. Keep going."
  },
  {
    text: "{masteredFlashcards} cards down, so many concepts conquered."
  },
  {
    text: "You've reached {totalFlashcards} flashcards — you're making progress."
  },
  {
    text: "You've achieved {totalSessions} study sessions — keep it up!"
  },
  {
    text: "You've reached {totalStreak} study streaks — you're on fire!"
  },
  {
    text: "Your study time today shows real dedication."
  },
  {
    text: "Burning the midnight oil? Night owls like you thrive in silence."
  },
  {
    text: "You've reached {totalFlashcards} flashcards — you're making progress."
  },
]

export default function InspirePraises() {
  return (
    <Card>
      <SpanText classname={"mb-4 flex items-center space-x-3"}>
        <LuAward className="h-6 w-6 text-slate-600 dark:text-slate-300" />
        <HeaderText type="secondary">Your Encouragement</HeaderText>
      </SpanText>
      <Group>
        {/* Conditional here */}
        <Paragraph
          className={"mb-4 text-lg text-slate-500 italic dark:text-slate-400"}
        ></Paragraph>
        {/* Conditional here */}
        <Paragraph classname={"italic text-slate-500 dark:text-slate-400"}>
          Loading praise...
        </Paragraph>
        <Paragraph
          classname={"text-right text-sm primary-text-color"}
        >
          - WalkWise AI
        </Paragraph>
      </Group>
    </Card>
  );
}
