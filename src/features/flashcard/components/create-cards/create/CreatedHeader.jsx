import Group from "/src/ui/Group";
import Heading from "/src/components/Heading";
import CreatedActionButton from "./CreatedActionButton";

export default function CreatedHeader() {
  return (
    <Heading
      headerText="Create A New flashcard Set"
      paragraphText="Create, review, and master key concepts effortlessly."
      theme={true}
      paragraphStyling={"dark:text-slate-300"}
    >
      <Group classname={"space-x-2 hidden middle:flex"}>
        <CreatedActionButton />
      </Group>
    </Heading>
  );
}
