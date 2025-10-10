import { FiEyeOff, FiEye } from "react-icons/fi";
import { LuLoader } from "react-icons/lu";
import Container from "/src/ui/Container";
import Button from "/src/ui/Button";
import Input from "/src/ui/Input";
import Flex from "/src/ui/Flex";
import Box from "/src/ui/Box";
import Form from "/src/ui/Form";

export default function SignUpForm() {
  return (
    <Container adjust={true} classname={"medium:w-80 mt-4 w-70"}>
      <Form>
        {/* disabled={} value={} onChange={} */}
        <Flex classname={"flex-col"}>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            required={true}
            classname={"w-full"}
          />
          <Input
            type="text"
            name="username"
            placeholder="Username"
            required={true}
            classname={"w-full mt-2"}
          />
        </Flex>
        <Box adjustWidth={true} classname={"relative my-2"}>
          {/* !hidePassword ? "text" : "password" */}
          <Input
            type="text"
            name="password"
            placeholder="Password"
            required={true}
            classname={"w-full"}
          />
          {/* {hidePassword ? (
              <FiEye className={stylings.icon} />
            ) : (
              <FiEyeOff className={stylings.icon} />
            )} */}
          <Button
            classname={"absolute top-2.5 right-2 disabled:cursor-not-allowed"}
          >
            <FiEye className="text-sm" />
          </Button>
        </Box>
        <Box adjustWidth={true} classname={"relative pb-2"}>
          {/* {!hideConfirmPassword ? "text" : "password"} */}
          <Input
            type="text"
            name="confirm-password"
            placeholder="Confirm password"
            required={true}
            classname={"w-full"}
          />
          <Button
            classname={"absolute top-2.5 right-2 disabled:cursor-not-allowed"}
          >
            <FiEye className="text-sm" />
          </Button>
        </Box>

        <Button classname="w-full py-2 disabled:bg-slate-600 disabled:cursor-not-allowed flex items-center justify-center gap-3">
          <LuLoader className="for spinning h-5 w-5 animate-spin" />
          Sign up
        </Button>
      </Form>
    </Container>
  );
}
