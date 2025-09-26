import { LuChevronRight } from "react-icons/lu";
import { LuArrowDown } from "react-icons/lu";
import HeroInformation from "./components/HeroInformation";
import Container from "/src/ui/Container";
import Box from "/src/ui/Box";
import Flex from "/src/ui/Flex";
import Button from "/src/ui/Button";

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
          <HeroInformation />
          <Flex
            variant="center"
            // medium:flex-row medium:gap-2 flex flex-col items-center
            classname="gap-3 mt-8"
          >
            <Button
              to="/sign-up"
              type="colors"
              classname={"flex gap-2 items-center px-7"}
            >
              Get Started
              <LuChevronRight className="text-sm font-bold" />
            </Button>
            <Button
              links={true}
              to="features"
              type="border"
              classname={
                "flex items-center gap-2 hover:border-slate-400 border-stone-300"
              }
            >
              Explore Features
              <LuArrowDown className="mt-0.5 text-sm font-bold text-slate-800" />
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
}
