import AuthCloseButton from "../components/AuthCloseButton";
import AuthHeader from "../components/AuthHeader";
import Container from "/src/ui/Container";
import Flex from "/src/ui/Flex";
import Box from "/src/ui/Box";
import Paragraph from "/src/ui/Paragraph";
import Button from "/src/ui/Button";

export default function SignIn() {
  return (
    <Container>
      <AuthCloseButton />
      <h1>Sign up to your account</h1>
    </Container>
  );
}
