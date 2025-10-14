import Container from "../../ui/Container";
import Button from "/src/ui/Button";
import Flex from "/src/ui/Flex";
import Box from "/src/ui/Box";

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
          <form action="">
            <div className="mb-3 flex flex-col">
              <label className="medium:text-sm mb-1 text-xs">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="user@email.com"
                required={true}
                ref={emailRef}
                disabled={isLoading}
                className="input w-full disabled:opacity-50"
              />
            </div>

            <div className="medium:flex medium:items-end medium:justify-end">
              <Button classname="w-full">
                {/* {isLoading ? "Sending..." : "Send Link"} */}
                Send Link
              </Button>
            </div>
          </form>
        </Box>
      </Flex>
    </>
  );
}
