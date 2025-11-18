import Heading from "/src/components/Heading";
import Button from "/src/ui/Button";

export default function CreateNoteHeader() {
  return (
    <Heading theme={true} paragraphText="Untitled Note" groupStyling={""}>
      <Button type="colors" onclick={() => {}}>
        Save Note
      </Button>
    </Heading>
  );
}
