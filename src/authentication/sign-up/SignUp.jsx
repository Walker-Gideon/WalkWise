import Container from "/src/ui/Container";
import AuthCloseButton from "../components/AuthCloseButton";
import AuthHeader from "../components/AuthHeader";

export default function SignUp() {
  return (
    <Container>
      <AuthCloseButton />
      <Container adjust={true}>
        <AuthHeader />
        <h1>Sign up to your account</h1>
      </Container>
    </Container>
  );
}
