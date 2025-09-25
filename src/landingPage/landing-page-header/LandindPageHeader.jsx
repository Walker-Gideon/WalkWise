import Logo from "../../ui/Logo";

export default function LandindPageHeader() {
  return (
    <header className="sticky top-0 z-50">
      <div className="flex h-16 items-center justify-between border-b border-stone-300 bg-white/30 px-4 shadow-sm backdrop-blur-sm md:px-8 lg:px-30">
        <Logo to="home" cursor={true} />
        <div className="">
          <button>Log In</button>
          <button>Sign Up</button>
        </div>
      </div>
    </header>
  );
}
