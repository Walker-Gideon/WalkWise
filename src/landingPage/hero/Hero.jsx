import Container from "/src/ui/Container";
import Box from "/src/ui/Box";
import Flex from "/src/ui/Flex";
import HeaderText from "/src/ui/HeaderText";

export default function Hero() {
  return (
    <Container id="home" adjust={true} classname="h-[80vh] w-full px-4">
      <Flex variant="center" classname={"h-full"}>
        <Box classname={"flex items-center justify-center"}>
          <HeaderText variant="huge" classname={"text-center"}>
            Build Habits That Power Your Mind.
          </HeaderText>
        </Box>
      </Flex>
    </Container>
  );
}
