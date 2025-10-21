import { LuRectangleVertical } from "react-icons/lu";
import HeaderText from "/src/ui/HeaderText";
import Container from "/src/ui/Container";
import Header from "/src/ui/Header";
import Button from "/src/ui/Button";
import Badge from "/src/components/Badge";
import Main from "/src/ui/Main";
import Box from "/src/ui/Box";

export default function Flashcard() {
  return (
    <Container>
      <Header>
        <HeaderText variant="header">My Flashcards</HeaderText>
      </Header>
      <Main classname={"h-[560px]"}>
        <Box
          adjustWidth={true}
          classname={"h-full w-full flex items-center justify-center flex-col"}
        >
          {/* text-slate-500 dark:text-slate-400 */}
          <Badge type="icons">
            {/* dark:text-slate-300 */}
            <LuRectangleVertical className="icons" />
          </Badge>
          <Button>Create Flashcard</Button>
        </Box>
      </Main>
    </Container>
  );
}
