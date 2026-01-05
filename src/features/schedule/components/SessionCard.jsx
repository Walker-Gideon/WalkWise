import { LuPlay } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import { RiEditLine, RiDeleteBin5Line } from "react-icons/ri";

import Menus from "/src/components/Menus";
import Paragraph from "/src/ui/Paragraph";
import Card from "/src/components/Card";
import SpanText from "/src/ui/SpanText";
import Group from "/src/ui/Group";
import Flex from "/src/ui/Flex";

export default function SessionCard({title, count, estimatedTime, status, statusColor, onPlay, onEdit, onDelete}) {
    return (
        <>
          <Card>
            <Flex variant="between">
              <Flex variant="center" classname={"gap-2"}>
                <Group classname={"h-4 w-4 rounded-full bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-600 dark:to-slate-700"}>
                </Group>
                <Flex classname={"flex-col"}>
                  <Paragraph classname={"font-medium primary-text-color"} >{title}</Paragraph>
                  <Flex classname={"text-sm text-slate-500 dark:text-slate-400 space-x-2 items-center"}>
                    <Group classname={"flex items-center gap-2"}>
                      <SpanText>{count} cards</SpanText>
                      <GoDotFill />
                    </Group>

                    <Group classname={"flex items-center gap-2"}>
                      <SpanText>{estimatedTime}</SpanText>
                      <GoDotFill />
                    </Group>
                    
                    <SpanText>Status </SpanText>
                    <SpanText classname={`${statusColor} rounded-full px-2 py-0.5 text-xs`}>{status}</SpanText>
                  </Flex>
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
      </>
    );
}