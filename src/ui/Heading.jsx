import Logo from "/src/components/Logo";
import Header from "./Header";
import Box from "./Box";

export default function Heading() {
  return (
    <Header
      classname={"borderStyling border-b p-4 flex items-center justify-center"}
    >
      <Box
        // dark:bg-slate-700
        classname={"rounded-sm bg-slate-50 p-2"}
      >
        <Logo />
      </Box>
    </Header>
  );
}
