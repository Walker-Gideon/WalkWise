import { RiDeleteBin5Line } from "react-icons/ri";

import HeaderText from "/src/ui/HeaderText";
import Container from "/src/ui/Container";
import Paragraph from "/src/ui/Paragraph";
import Button from "/src/ui/Button";

import useFormattedDate from "/src/hook/useFormattedDate";

function NoteDate({ createdAt }) {
    const formattedDate = useFormattedDate(createdAt);
    return <>{formattedDate}</>;
}

export default function NoteDisplay({ notes }) {
  return (
    <Container classname={"mb-4 h-full overflow-y-scroll"}>
      {notes.map((note) => (
        <div
          key={note.id}
          //   hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-700
          className={`my-1 flex w-full cursor-pointer items-center justify-between gap-2 border-b border-stone-300`}
        >
          <div role="button" onClick={() => {}} className="w-full py-2 pl-4">
            <HeaderText
              variant="secondary"
              classname={"w-40 truncate whitespace-nowrap primary-text-color"}
            >
              {note.title}
            </HeaderText>
            <Paragraph
              variant="small"
              classname={"secondary-text-color text-xs"}
            >
              <NoteDate createdAt={note.createdAt} />
            </Paragraph>
          </div>
          <Button
            variant="secondary"
            onclick={() => {}}
            classname={"text-slate-700 pr-4"}
          >
            <RiDeleteBin5Line className="h-5 w-5" />
          </Button>
        </div>
      ))}
    </Container>
  );
}
