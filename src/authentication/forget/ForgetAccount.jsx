import Container from "../../ui/Container";
import Flex from "../../ui/Flex";
import Box from "../../ui/Box";

export default function ForgetAccount() {
  return (
    <>
      <Flex variant="center" classname={"min-h-[95vh] flex-col"}>
        <Box adjustWidth={true} classname={"medium:max-w-3xl px-14"}>
          <Box adjustWidth={true} classname={"medium:text-base mb-6 text-sm"}>
            <h1 className="medium:text-2xl middle:text-3xl mt-2 mb-2 text-xl font-bold">
              Reset your password
            </h1>

            <p>
              Enter the email you signed up with. We'll send you a link to log
              in and reset your password. If you signed up with your parent’s
              email, we’ll send them a link.
            </p>
          </Box>
        </Box>
      </Flex>
    </>
  );
}
