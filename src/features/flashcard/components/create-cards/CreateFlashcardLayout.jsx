import HeaderText from "/src/ui/HeaderText";
import Container from "/src/ui/Container";
import Header from "/src/ui/Header";
import Group from "/src/ui/Group";

export default function CreateFlashcardLayout() {
  return (
    <Container adjust={true}>
      <Header type="padding" classname={""}>
        <HeaderText variant="header">Create A New flashcard Set</HeaderText>
      </Header>

      <Group classname="mx-auto medium:mt-8 mt-14 max-w-3xl maxmid:max-w-4xl medium:h-[70vh] bg-red-500">
        <form className="space-y-2">
          {/* input tag */}

          {/* add flashcard button */}

          {/* optional tag for set name */}

          {/* action button */}

          {/* notify information */}
        </form>
      </Group>
    </Container>
  );
}
