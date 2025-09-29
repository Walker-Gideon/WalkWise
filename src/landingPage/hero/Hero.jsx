import { LuArrowDown, LuChevronRight } from "react-icons/lu";
import HeroInformation from "./components/HeroInformation";
import HeroImages from "./components/HeroImages";
import Container from "/src/ui/Container";
import Box from "/src/ui/Box";
import Flex from "/src/ui/Flex";
import Button from "/src/ui/Button";

export default function Hero() {
  return (
    <Container
      id="home"
      adjust={true}
      classname="h-full w-full px-4 medium:px-6 mt-15 medium:mt-20 lg:mt-25"
    >
      <Flex variant="center" classname={"h-full flex-col"}>
        <Box
          classname={"flex items-center flex-col justify-center text-center"}
        >
          <HeroInformation />
          <Flex variant="center" classname="gap-3 mt-8">
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
        <HeroImages />
      </Flex>
    </Container>
  );
}
