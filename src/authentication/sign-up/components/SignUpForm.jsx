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
            type=""
            name=""
            placeholder=""
            required={true}
            classname={""}
          />
          <Input
            type=""
            name=""
            placeholder=""
            required={true}
            classname={""}
          />
        </Flex>
        <Box adjustWidth={true} classname={""}>
          <Input
            type=""
            name=""
            placeholder=""
            required={true}
            classname={""}
          />
          <Button></Button>
        </Box>
        <Box adjustWidth={true} classname={""}>
          <Input
            type=""
            name=""
            placeholder=""
            required={true}
            classname={""}
          />
          <Button></Button>
        </Box>
        <Button>Sign up</Button>
      </Form>
    </Container>
  );
}
