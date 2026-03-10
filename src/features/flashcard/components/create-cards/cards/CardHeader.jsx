import InitCardActionButton from "./InitCardActionButton";
import Heading from "/src/components/Heading";

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
