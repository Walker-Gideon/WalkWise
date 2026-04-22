import Flex from "/src/ui/Flex";
import Button from "/src/ui/Button";
import Container from "/src/ui/Container";
import Paragraph from "/src/ui/Paragraph";
import SignInForm from "./components/SignInForm";
import AuthHeader from "../components/AuthHeader";
import AuthCloseButton from "../components/AuthCloseButton";

export default function SignIn() {
  return (
    <Container 
      id="sign-in"
      classname={"flex items-center justify-center flex-col"}
    >
      <AuthCloseButton />
      <Flex 
        variant="center" 
        classname={"justify-center min-h-[90vh] w-full max-w-md flex-col px-8 medium:px-0"}
      >
        <AuthHeader />
        <SignInForm />

        <Button 
          to="/forgotten" 
          type="buttonText"
          ariaLabel="Forget Password"
          classname={"text-left w-full whitespace-nowrap text-slate-400 my-4 text-sm font-semibold"}
        >
          Forget Password?
        </Button>
        
        <Flex 
          variant="center" 
          classname={"flex-row gap-2"}
        >
          <Paragraph 
            classname={"text-sm whitespace-nowrap text-slate-400"}
          >
            Don't have an account?
          </Paragraph>
          <Button 
            to="/sign-up"
            type="buttonText"
            ariaLabel="Sign Up"
            classname={"text-sm font-semibold"}
          >
            Sign Up
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
}
