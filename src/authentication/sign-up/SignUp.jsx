import AuthCloseButton from "../components/AuthCloseButton";
import AuthHeader from "../components/AuthHeader";
import Container from "/src/ui/Container";
import Flex from "/src/ui/Flex";
import Box from "/src/ui/Box";

export default function SignUp() {
  return (
    <Container>
      <AuthCloseButton />
      <Flex variant="center" classname={"min-h-[90vh]"}>
        <Box
          adjustWidth={true}
          classname={"rounded-xl border border-stone-300 p-6 shadow-lg"}
        >
          <AuthHeader />
          <h1>Sign up to your account</h1>
        </Box>
      </Flex>
    </Container>
  );
}
