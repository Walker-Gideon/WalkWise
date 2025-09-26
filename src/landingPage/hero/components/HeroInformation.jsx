import HeaderText from "/src/ui/HeaderText";
import Paragraph from "/src/ui/Paragraph";
import SpanText from "/src/ui/SpanText";

export default function HeroInformation() {
  return (
    <>
      <HeaderText variant="huge">Build Habits That Power Your Mind.</HeaderText>
      <Paragraph
        classname={
          "medium:pt-5 medium:text-base max-w-2xl pt-3 text-sm text-slate-500"
        }
      >
        Unlock a world of knowledge with expertly crafted study tools —
        flashcards, notes, AI help, and motivation — all in one place to power
        your learning with{" "}
        <SpanText classname="font-semibold">WalkWise</SpanText>.
      </Paragraph>
    </>
  );
}
