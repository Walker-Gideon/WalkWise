import { LuPlay } from "react-icons/lu";
import { RiEditLine, RiDeleteBin5Line } from "react-icons/ri";

import Group from "/src/components/Group";
import Menus from "/src/components/Menus";
import Paragraph from "/src/ui/Paragraph";
import Card from "/src/ui/Card";
import Flex from "/src/ui/Flex";

export default function SessionCard({title, count, estimatedTime, onPlay, onEdit, onDelete}) {
    return (
        <Group classname={"h-190 space-y-3 overflow-y-scroll"}>
          <Card>
            <Flex variant="between">
              <Flex variant="center">
                <Group classname={"h-4 w-4 rounded-full bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-600 dark:to-slate-700"}>
                </Group>
                <Flex classname={"flex-col"}>
                  <Paragraph classname={"font-medium text-slate-900 dark:text-white"} >{title}</Paragraph>
                  <Paragraph classname="text-sm text-slate-500 dark:text-slate-400">
                    {count} cards • {estimatedTime} min
                  </Paragraph>
                </Flex>
              </Flex>

              <Group>
                <Menus>
                  <Menus.Toggle />

                  <Menus.Lists>
                    <Menus.Buttons onClick={onPlay}>
                      <LuPlay className="w-4 h-4" />
                      Play
                    </Menus.Buttons>
                    <Menus.Buttons onClick={onEdit}>
                      <RiEditLine className="w-4 h-4" />
                      Edit
                    </Menus.Buttons>
                    <Menus.Buttons onClick={onDelete}>
                      <RiDeleteBin5Line className="w-4 h-4" />
                      Delete
                    </Menus.Buttons>
                  </Menus.Lists>
                </Menus>
              </Group>
            </Flex>
          </Card>
      </Group>
    );
}