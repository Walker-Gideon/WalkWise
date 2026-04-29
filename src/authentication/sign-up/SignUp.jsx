import Box from "/src/ui/Box";
import Flex from "/src/ui/Flex";
import Button from "/src/ui/Button";
import Paragraph from "/src/ui/Paragraph";
import Container from "/src/ui/Container";
import SignUpForm from "./components/SignUpForm";
import AuthHeader from "../components/AuthHeader";
import AuthCloseButton from "../components/AuthCloseButton";

export default function SignUp() {
  return (
    <Container 
      adjust={true}
      classname={"flex items-center justify-center flex-col"}
    >
      <AuthCloseButton />
      <Flex 
        variant="center" 
        classname={"justify-center min-h-screen w-full max-w-md flex-col px-8 medium:px-0"}
      >
        <AuthHeader type="sign-up" />
        <SignUpForm />

        <Flex 
          variant="center" 
          classname={"mt-4 gap-2"}
        >
          <Paragraph classname={"text-sm whitespace-nowrap text-slate-400"}>
            Already have an account?
          </Paragraph>
          <Button
            to="/sign-in"
            type="buttonText"
            ariaLabel="Log in"
            classname={"text-sm font-semibold"}
          >
            Log in
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
}
