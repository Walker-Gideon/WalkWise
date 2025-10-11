import { FiEyeOff, FiEye } from "react-icons/fi";
import { LuLoader } from "react-icons/lu";
import Container from "/src/ui/Container";
import Button from "/src/ui/Button";
import Input from "/src/ui/Input";
import Flex from "/src/ui/Flex";
import Box from "/src/ui/Box";
import Form from "/src/ui/Form";

export default function SignInForm() {
  return (
    <Container adjust={true} classname={"medium:w-80 mt-4 w-70"}>
      <Form>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          required={true}
          classname={"w-full"}
        />
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
          <Button classname={"absolute top-1 -right-2"}>
            <FiEye className="text-sm" />
          </Button>
        </Box>
        <Button
          type="colors"
          classname="w-full flex items-center justify-center"
        >
          <LuLoader className="for spinning h-5 w-5 animate-spin" />
          Sign up
        </Button>
      </Form>
    </Container>
  );
}
