import Container from "/src/ui/Container";
import Button from "/src/ui/Button";
import Flex from "/src/ui/Flex";
import Box from "/src/ui/Box";
import Form from "/src/ui/Form";
import Input from "/src/ui/Input";
import Label from "/src/ui/Label";
import HeaderText from "/src/ui/HeaderText";

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

            <p>
              Enter the email you signed up with. We'll send you a link to log
              in and reset your password. If you signed up with your parent’s
              email, we’ll send them a link.
            </p>
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

            <div className="medium:flex medium:items-end medium:justify-end">
              <Button classname="w-full">
                {/* {isLoading ? "Sending..." : "Send Link"} */}
                Send Link
              </Button>
            </div>
          </Form>
        </Box>
      </Flex>
    </Container>
  );
}
