import { RiDeleteBin5Line } from "react-icons/ri";

import HeaderText from "/src/ui/HeaderText";
import Container from "/src/ui/Container";
import Paragraph from "/src/ui/Paragraph";
import Button from "/src/ui/Button";
import Group from "/src/ui/Group";

export default function NoteDisplay() {
  return (
    <Container classname={"mb-4 h-screen overflow-y-scroll"}>
      <Group
        //   hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-700
        classname={`my-1 flex w-full cursor-pointer items-center justify-between gap-2 border-b border-stone-300`}
      >
        <div role="button" onClick={() => {}} className="w-full py-2 pl-4">
          <HeaderText
            variant="secondary"
            // dark:text-white
            classname={"w-40 truncate whitespace-nowrap text-slate-900"}
          >
            title
          </HeaderText>
          <Paragraph
            variant="small"
            classname={""}
            //dark:text-slate-400
          >
            time
          </Paragraph>
        </div>
        <Button
          variant="secondary"
          onclick={() => {}}
          //   dark:text-slate-200
          classname={"text-slate-700 pr-4"}
        >
          <RiDeleteBin5Line className="h-5 w-5" />
        </Button>
      </Group>
    </Container>
  );
}
