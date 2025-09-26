import Container from "/src/ui/Container";
import Box from "/src/ui/Box";
import Flex from "/src/ui/Flex";
import HeaderText from "/src/ui/HeaderText";
import Paragraph from "/src/ui/Paragraph";

export default function Hero() {
  return (
    <Container
      id="home"
      adjust={true}
      classname="h-[80vh] w-full px-4 medium:px-6"
    >
      <Flex variant="center" classname={"h-full"}>
        <Box
          classname={"flex items-center flex-col justify-center text-center"}
        >
          <HeaderText variant="huge">
            Build Habits That Power Your Mind.
          </HeaderText>
          <Paragraph
            classname={
              "medium:pt-5 medium:text-base max-w-2xl pt-3 text-sm text-slate-500"
            }
          >
            Unlock a world of knowledge with expertly crafted study tools —
            flashcards, notes, AI help, and motivation — all in one place to
            power your learning with{" "}
            <span className="font-semibold">WalkWise</span>.
          </Paragraph>
        </Box>
      </Flex>
    </Container>
  );
}
