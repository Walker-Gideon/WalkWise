import Heading from "/src/components/Heading";
import InitCardActionButton from "./InitCardActionButton";

export default function CardHeader() {
  return (
    <Heading
      headerText="My Flashcards"
      paragraphText="Reinforce your memory, one card at a time."
      theme={true}
    >
      <InitCardActionButton styling={false} />
    </Heading>
  );
}
