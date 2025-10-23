import CreatedForm from "./create/CreatedForm";
import Container from "/src/ui/Container";
import Paragraph from "/src/ui/Paragraph";
import TextArea from "/src/ui/TextArea";
import Button from "/src/ui/Button";
import Group from "/src/ui/Group";
import Input from "/src/ui/Input";
import Label from "/src/ui/Label";
import Form from "/src/ui/Form";
import Flex from "/src/ui/Flex";
import Box from "/src/ui/Box";

export default function CreateFlashcardLayout() {
  return (
    <Container adjust={true}>
      <CreatedForm />
    </Container>
  );
}
