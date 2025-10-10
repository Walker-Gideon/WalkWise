import AuthCloseButton from "../components/AuthCloseButton";
import AuthHeader from "../components/AuthHeader";
import SignUpForm from "./components/SignUpForm";
import Container from "/src/ui/Container";
import Flex from "/src/ui/Flex";
import Box from "/src/ui/Box";
import Paragraph from "/src/ui/Paragraph";
import Button from "/src/ui/Button";

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
          <SignUpForm />
          <Flex variant="center" classname={"mt-4"}>
            <Paragraph classname={"text-sm whitespace-nowrap text-slate-400"}>
              Already have an account?
            </Paragraph>
            <Button
              to="/sign-in"
              classname={"text-[0.8rem] font-semibold mt-1"}
            >
              Log in
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
}
