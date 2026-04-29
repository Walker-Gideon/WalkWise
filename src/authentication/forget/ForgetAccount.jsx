import Form from "/src/ui/Form";
import Flex from "/src/ui/Flex";
import Label from "/src/ui/Label";
import Input from "/src/ui/Input";
import Button from "/src/ui/Button";
import Paragraph from "/src/ui/Paragraph";
import Container from "/src/ui/Container";
import AuthHeader from "/src/authentication/components/AuthHeader";
import AuthCloseButton from "/src/authentication/components/AuthCloseButton";

export default function ForgetAccount() {
  return (
    <Container 
      adjust={true} 
      classname={"flex items-center justify-center flex-col"}
    >
      <AuthCloseButton showBack={true} />
      <Flex 
        variant="center" 
        classname={"min-h-screen flex-col w-full max-w-md md:max-w-lg px-8 medium:px-0"}
      >
        <AuthHeader type="forget" />
        <Paragraph classname={"mb-4 text-sm"}>
          Enter the email you signed up with. We'll send you a link to log
          in and reset your password. If you signed up with your parent’s
          email, we’ll send them a link.
        </Paragraph>
        <Form classname={"w-full"}>
          <Flex classname="mb-4 flex-col">
            <Label classname={"medium:text-sm mb-1 text-xs"}>Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="user@email.com"
              required={true}
              classname="w-full disabled:opacity-50"
            />
          </Flex>
          <Button 
            type="colors" 
            ariaLabel="Send Link"
            classname="w-full"
          >
            {/* {isLoading ? "Sending..." : "Send Link"} */}
            Send Link
          </Button>
        </Form>
      </Flex>
    </Container>
  );
}
