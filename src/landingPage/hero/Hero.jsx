import Container from "/src/ui/Container";
import Box from "/src/ui/Box";
import Flex from "/src/ui/Flex";

export default function Hero() {
  return (
    <Container id="home" adjust={true} classname="h-[80vh] w-full px-4">
      <Flex variant="center" classname={"h-full"}>
        <Box classname={"flex items-center justify-center"}>
          <h1 className="medium:text-5xl text-center text-3xl font-bold">
            Build Habits That Power Your Mind.
          </h1>
        </Box>
      </Flex>
    </Container>
  );
}
