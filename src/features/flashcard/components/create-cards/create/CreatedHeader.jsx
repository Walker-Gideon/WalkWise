import Group from "/src/ui/Group";
import Heading from "/src/components/Heading";
import CreatedActionButton from "./CreatedActionButton";

export default function CreatedHeader({ isDirty }) {
  return (
    <Heading
      headerText="Create flashcard"
      paragraphText="Create, review, and master key concepts effortlessly."
      theme={true}
      paragraphStyling={"dark:text-slate-300 hidden md:block"}
    >
      <Group classname={"space-x-2 hidden middle:flex"}>
        <CreatedActionButton isDirty={isDirty} />
      </Group>
    </Heading>
  );
}
