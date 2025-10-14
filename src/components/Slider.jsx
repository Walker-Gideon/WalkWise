import Heading from "/src/ui/Heading";
import MainNav from "/src/navigation/MainNav";
import Aside from "/src/ui/Aside";

export default function Slider() {
  return (
    <Aside classname="borderStyling border-r bg-amber-400">
      <Heading />
      <MainNav />
    </Aside>
  );
}
