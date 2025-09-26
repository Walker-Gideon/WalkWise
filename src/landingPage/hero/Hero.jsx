import Box from "/src/ui/Box";
import Flex from "/src/ui/Flex";

export default function Hero() {
  return (
    <div id="home" className="h-[80vh] w-full px-4">
      <Flex variant="center" classname={"h-full"}>
        <Box classname={"flex items-center justify-center"}>
          <h1 className="medium:text-5xl text-center text-3xl font-bold">
            Build Habits That Power Your Mind.
          </h1>
        </Box>
      </Flex>
    </div>
  );
}
