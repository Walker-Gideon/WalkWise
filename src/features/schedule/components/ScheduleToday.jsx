import { LuCheck, LuPlay, LuPlus, LuClock, LuZap } from "react-icons/lu";
import { RiDeleteBin5Line, RiEditLine } from "react-icons/ri";

// import Conditional from "/src/components/Conditional";
import HeaderText from "/src/ui/HeaderText";
import Paragraph from "/src/ui/Paragraph";
import Menus from "/src/components/Menus";
import Card from "/src/components/Card";
import Button from "/src/ui/Button";
import Group from "/src/ui/Group";
import Flex from "/src/ui/Flex";

import { useSchedule } from "../context/ScheduleContext";

export default function ScheduleToday() {
  const { setIsDisplaySessionForm } = useSchedule();

  return (
    <>
      <Flex variant="between">
        <HeaderText type="secondary">Today's Sessions</HeaderText>
        <Button
          type="colors"
          onclick={() => setIsDisplaySessionForm((show) => !show)}
          classname={"flex items-center gap-1"}
        >
          <LuPlus className="h-4 w-4" />
          Add Session
        </Button>
      </Flex>
      {/* <Group classname={"h-190 space-y-3 overflow-y-scroll"}>
        <Flex variant="center" classname="h-full w-full">
          <Paragraph
            variant="small"
            classname={"text-slate-400"}
          >
            No sessions scheduled for today.
          </Paragraph>
        </Flex>
      </Group> */}
      {/* <Conditional condition={false}>
      </Conditional> */}
      <Group classname={"h-190 space-y-3 overflow-y-scroll"}>
        <Card>
          <Flex variant="between">
            <Flex variant="center">
            <div
              className={`h-4 w-4 rounded-full bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-600 dark:to-slate-700`}
            ></div>

            {/* Card Discription */}
            <div>
               <p className={"font-medium text-slate-900 dark:text-white"} >Schedule title</p>
               <p className="text-sm text-slate-500 dark:text-slate-400">
                schedule$Count cards • schedule$EstimatedTime min
               </p>
            </div>
          </Flex>
          <Group>
            <Menus>
              <Menus.Toggle />

              <Menus.Lists>
                <Menus.Buttons onClick={() => {}}>
                  <LuPlay className="w-4 h-4" />
                  Play
                </Menus.Buttons>
                <Menus.Buttons onClick={() => {}}>
                  <RiEditLine className="w-4 h-4" />
                  Edit
                </Menus.Buttons>
                <Menus.Buttons onClick={() => {}}>
                  <RiDeleteBin5Line className="w-4 h-4" />
                  Delete
                </Menus.Buttons>
              </Menus.Lists>
            </Menus>
          </Group>
          </Flex>
        </Card>
      </Group>
    </>
  );
}
