import MainHeader from "../../ui/MainHeader";
import Button from "/src/ui/Button";
import Logo from "/src/ui/Logo";

export default function LandindPageHeader() {
  return (
    <MainHeader
      classname={
        "flex h-16 items-center justify-between border-b border-stone-300 bg-white/30 px-4 shadow-sm backdrop-blur-sm md:px-8 lg:px-30"
      }
    >
      <Logo to="home" cursor={true} />
      <div className="">
        <Button>Log In</Button>
        <Button>Sign Up</Button>
      </div>
    </MainHeader>
  );
}
