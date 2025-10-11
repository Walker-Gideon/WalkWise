import AuthCloseButton from "../components/AuthCloseButton";
import AuthHeader from "../components/AuthHeader";
import SignInForm from "./components/SignInForm";
import Container from "/src/ui/Container";
import Flex from "/src/ui/Flex";
import Box from "/src/ui/Box";
import Button from "/src/ui/Button";

export default function SignIn() {
  return (
    <Container>
      <AuthCloseButton />
      <Flex variant="center" classname={"min-h-[90vh]"}>
        <Box
          adjustWidth={true}
          classname={"rounded-xl border border-stone-300 p-6 shadow-lg"}
        >
          <AuthHeader />
          <SignInForm />
          <Flex variant="between" classname={"mt-4"}>
            <Button to="/forgotten">Forget Password?</Button>
            <Button to="/sign-up">Sign Up</Button>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
}
