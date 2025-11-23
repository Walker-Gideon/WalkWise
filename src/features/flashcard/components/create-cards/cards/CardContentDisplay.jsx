import { RiDeleteBin5Line } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";
import { LuPlay } from "react-icons/lu";

import HeaderText from "/src/ui/HeaderText";
import Paragraph from "/src/ui/Paragraph";
import Container from "/src/ui/Container";
import Card from "/src/components/Card";
import Group from "/src/ui/Group";
import { getFlashcards } from "../../../../../service/apiFlashcard";
import { useQuery } from "@tanstack/react-query";

// import { useFlashcards } from "../../../hooks/useFlashcards";

export default function CardContentDisplay({ userId }) {
  const query = useQuery({
    queryKey: ["flashcards", userId],
    queryFn: () => getFlashcards(userId),
  });

  console.log(query.data);

  query.data.map((flashcard) => console.log(flashcard));

  // const { data: flashcards, isLoading, error } = useFlashcards(userId);

  // console.log(flashcards);

  return (
    <Container adjust={true} classname={"px-6 grid grid-cols-4 gap-6"}>
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </Container>
  );
}

function Cards() {
  const styling = {
    button:
      "rounded-sm bg-slate-500 p-2 text-white opacity-0 transition-colors group-hover:opacity-100 hover:bg-slate-600",
    icon: "h-4 w-4",
  };

  return (
    <Card classname={"cursor-pointer group"}>
      <HeaderText classname={"mb-6"}>Titile</HeaderText>
      <Group classname={"flex items-center justify-between"}>
        <Paragraph type="xs" classname={"text-slate-500 dark:text-slate-400"}>
          # card(s)
        </Paragraph>
        <Paragraph>
          timing{" "}
          <GoDotFill className="h-3 w-3 text-slate-500 dark:text-slate-400" />
        </Paragraph>
      </Group>
    </Card>
  );
}
