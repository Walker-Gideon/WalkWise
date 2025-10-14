import HeaderText from "/src/ui/HeaderText";
import Container from "/src/ui/Container";
import Paragraph from "/src/ui/Paragraph";
import Button from "/src/ui/Button";
import Input from "/src/ui/Input";
import Label from "/src/ui/Label";
import Flex from "/src/ui/Flex";
import Form from "/src/ui/Form";
import Box from "/src/ui/Box";

export default function ForgetAccount() {
  return (
    <Container adjust={true}>
      <Flex variant="center" classname={"min-h-[95vh] flex-col"}>
        <Box adjustWidth={true} classname={"medium:max-w-3xl px-14"}>
          <Box adjustWidth={true} classname={"medium:text-base mb-6 text-sm"}>
            <HeaderText
              classname={
                "medium:text-2xl middle:text-3xl mt-2 mb-2 text-xl font-bold"
              }
            >
              Reset your password
            </HeaderText>
            <Paragraph>
              Enter the email you signed up with. We'll send you a link to log
              in and reset your password. If you signed up with your parent’s
              email, we’ll send them a link.
            </Paragraph>
          </Box>
          <Form>
            <Flex classname="mb-3 flex-col">
              <Label classname={"medium:text-sm mb-1 text-xs"}>Email</Label>
              <Input
                type="email"
                name="email"
                placeholder="user@email.com"
                required={true}
                classname="w-full disabled:opacity-50"
              />
            </Flex>
            <Button type="colors" classname="w-full">
              {/* {isLoading ? "Sending..." : "Send Link"} */}
              Send Link
            </Button>
          </Form>
        </Box>
      </Flex>
    </Container>
  );
}
