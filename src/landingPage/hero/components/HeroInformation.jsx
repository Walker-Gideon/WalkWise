import HeaderText from "/src/ui/HeaderText";
import Paragraph from "/src/ui/Paragraph";
import SpanText from "/src/ui/SpanText";

import { useTypewriter } from "/src/hook/useTypewriter";

export default function HeroInformation() {
  const { displayed } = useTypewriter({
        texts: [
            "Build Habits That Power Your Mind.",
            "Study Smarter, Not Harder.",
            "Your Learning Journey Starts Here.",
        ],
        typeSpeed: 130,
        eraseSpeed: 90,
        pauseAfter: 1800,
    });

  return (
    <>
      <HeaderText variant="huge">
        <SpanText>
          {displayed}
          <span className="inline-block w-[2px] h-[0.8em] bg-slate-900 align-middle ml-0.5 animate-pulse" />
        </SpanText>
      </HeaderText>
      <Paragraph
        type="sm"
        classname={"medium:pt-5 max-w-2xl pt-3 text-slate-500"}
      >
        Unlock a world of knowledge with expertly crafted study tools —
        flashcards, notes, AI help, and motivation — all in one place to power
        your learning with{" "}
        <SpanText classname="font-semibold">WalkWise</SpanText>.
      </Paragraph>
    </>
  );
}
