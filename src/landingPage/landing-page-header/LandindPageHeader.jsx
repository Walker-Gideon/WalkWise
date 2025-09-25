import DisplayAndHidden from "/src/ui/DisplayAndHidden";
import MainHeader from "/src/ui/MainHeader";
import Button from "/src/ui/Button";
import Logo from "/src/ui/Logo";
import Flex from "/src/ui/Flex";

export default function LandindPageHeader() {
  return (
    <MainHeader
      classname={
        "flex h-16 items-center justify-between border-b border-stone-300 bg-white/30 px-4 shadow-sm backdrop-blur-sm md:px-8 lg:px-30"
      }
    >
      <Logo to="home" cursor={true} />
      <>
        <DisplayAndHidden>
          <Flex classname={"items-center gap-2 whitespace-nowrap"}>
            <Button to="/sign-in">Log In</Button>
            <Button to="/sign-up">Sign Up</Button>
          </Flex>
        </DisplayAndHidden>
        <DisplayAndHidden variant="hidden">
          <Button to="/sign-in">Get started</Button>
        </DisplayAndHidden>
      </>
    </MainHeader>
  );
}
