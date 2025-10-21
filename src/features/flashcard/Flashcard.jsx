import { LuRectangleVertical } from "react-icons/lu";
import FlashcardHeader from "./components/FlashcardHeader";
import HeaderText from "/src/ui/HeaderText";
import Container from "/src/ui/Container";
import Paragraph from "/src/ui/Paragraph";
import Badge from "/src/components/Badge";
import Button from "/src/ui/Button";
import Group from "/src/ui/Group";
import Main from "/src/ui/Main";

export default function Flashcard() {
  return (
    <Container>
      <FlashcardHeader />
      <Main classname={"h-[500px]"}>
        <Group
          classname={"h-full w-full flex items-center justify-center flex-col"}
        >
          {/* text-slate-500 dark:text-slate-400 */}
          <Badge type="icons">
            {/* dark:text-slate-300 */}
            <LuRectangleVertical className="icons" />
          </Badge>
          <Group classname={"text-center py-2"}>
            <HeaderText variant="secondary">
              You haven't created any flashcards yet.
            </HeaderText>
            <Paragraph type="information">
              Get started by tapping "Create Flashcard"
            </Paragraph>
          </Group>
          <Button
            type="colors"
            onclick={() => {}}
            classname={"focus:ring-slate-300"}
          >
            Create Flashcard
          </Button>
        </Group>
      </Main>
    </Container>
  );
}
