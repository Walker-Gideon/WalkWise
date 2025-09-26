import Box from "/src/ui/Box";
import Flex from "/src/ui/Flex";

export default function Hero() {
  return (
    <div id="home">
      <Flex variant="center" classname={"bg-green-50 h-screen w-full px-4"}>
        <Box>Hero</Box>
      </Flex>
    </div>
  );
}
