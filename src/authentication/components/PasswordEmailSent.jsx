import Flex from "/src/ui/Flex";
import Header from "/src/ui/Header";
import Button from "/src/ui/Button";
import Logo from "/src/components/Logo";
import Paragraph from "/src/ui/Paragraph";
import Container from "/src/ui/Container";


export default function PasswordEmailSent() {
  return (
    <Container classname={"flex items-center justify-center flex-col"}>
      <Flex
        variant="center"
        classname={"min-h-dvh flex-col w-full max-w-md md:max-w-lg px-8 medium:px-0"}
      > 
        <Header classname={"w-full flex flex-col items-center justify-start mb-6"}>
          <div className={"w-full flex flex-row gap-2 items-center justify-start mb-12"}>
            <Logo show={true} />
            <Paragraph classname={"mt-1 text-3xl font-bold text-slate-500"}>WalkWise</Paragraph>
          </div>
          <Paragraph classname={"text-start w-full mt-1 text-2xl font-bold"}>Check your email</Paragraph>
        </Header>

        <div className={"w-full flex flex-col items-start justify-start gap-1 mb-8 text-base font-semibold leading-relaxed text-start text-slate-500"}>
          <Paragraph>
            We've sent a reset link to your email. Click it to set a new password.
          </Paragraph>
          <Paragraph>
            Please check your spam folder if you don't see it within a few minutes.
          </Paragraph>
        </div>

        <Button
          to="/sign-in" 
          type="colors" 
          ariaLabel="Back to Login"
          classname={"w-full py-3"}
        >
          Back to Login
        </Button>
      </Flex>
    </Container>
  );
}
