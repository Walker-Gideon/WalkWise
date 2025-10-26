import Logo from "/src/components/Logo";
import Header from "/src/ui/Header";
import Box from "/src/ui/Box";

export default function NavigationHeader() {
  return (
    <Header
      classname={"borderStyling border-b p-4 flex items-center justify-center"}
    >
      <Box classname={"rounded-sm py-2"}>
        <Logo />
      </Box>
    </Header>
  );
}
