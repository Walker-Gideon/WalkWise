import Container from "/src/ui/Container";
import Box from "/src/ui/Box";
import Flex from "/src/ui/Flex";
import HeaderText from "/src/ui/HeaderText";
import Paragraph from "/src/ui/Paragraph";
import SpanText from "/src/ui/SpanText";
import Button from "/src/ui/Button";
import { LuArrowDown } from "react-icons/lu";
import { LuChevronRight } from "react-icons/lu";
import { Link } from "react-scroll";

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
            <SpanText classname="font-semibold">WalkWise</SpanText>.
          </Paragraph>

          <div className="">
            <Button to="/sign-up">
              Get Started
              <LuChevronRight className="mt-0.5 text-sm font-bold" />
            </Button>
            <Link
              to="features"
              smooth={true}
              spy={true}
              duration={500}
              offset={-100}
            >
              <Button
                variant="outline"
                classname="button border-stone-300 text-slate-700 px-4 py-[7px] font-bold flex items-center gap-2 hover:border-slate-400"
              >
                Explore Features
                <LuArrowDown className="mt-0.5 text-sm font-bold text-slate-700" />
              </Button>
            </Link>
          </div>
        </Box>
      </Flex>
    </Container>
  );
}
