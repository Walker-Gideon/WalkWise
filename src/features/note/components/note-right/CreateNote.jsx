import CreateNoteEditor from "./CreateNoteEditor";
import Container from "/src/ui/Container";

export default function CreateNote() {
  return (
    <Container adjust={true} classname={""}>
      <CreateNoteEditor />
      CreateNote
    </Container>
  );
}
