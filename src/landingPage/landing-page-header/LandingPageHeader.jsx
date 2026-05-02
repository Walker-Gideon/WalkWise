import Flex from "/src/ui/Flex";
import Button from "/src/ui/Button";
import Logo from "/src/components/Logo";
import MainHeader from "/src/ui/MainHeader";
import DisplayAndHidden from "/src/components/DisplayAndHidden";

export default function LandingPageHeader() {
  return (
    <MainHeader
      classname={
        "flex h-16 items-center justify-between border-b border-stone-300 bg-white/30 px-4 shadow-lg shadow-slate-600/30 backdrop-blur-sm md:px-8 lg:px-30"
      }
    >
      <Logo to="home" cursor={true} />
      <>
        <DisplayAndHidden>
          <Flex classname={"items-center gap-4 whitespace-nowrap"}>
            <Button
              to="/sign-in"
              type="border"
              classname={"px-8 hover:border-slate-400 border-stone-300"}
            >
              Log In
            </Button>
            <Button to="/sign-up" type="colors" classname={"px-8"}>
              Sign Up
            </Button>
          </Flex>
        </DisplayAndHidden>
        <DisplayAndHidden variant="hidden">
          <Button to="/sign-in" type="colors" classname={"px-6"}>
            Get started
          </Button>
        </DisplayAndHidden>
      </>
    </MainHeader>
  );
}
