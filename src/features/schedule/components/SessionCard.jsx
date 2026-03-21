import { LuPlay } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import { RiEditLine, RiDeleteBin5Line } from "react-icons/ri";

import Flex from "/src/ui/Flex";
import Group from "/src/ui/Group";
import Card from "/src/components/Card";
import SpanText from "/src/ui/SpanText";
import Paragraph from "/src/ui/Paragraph";
import Menus from "/src/components/Menus";
import Conditional from "/src/components/Conditional";

import { formatTime } from "/src/helper/helpers";

export default function SessionCard({title, count, estimatedTime, duration, status, statusColor, onPlay, onEdit, onDelete}) {
    return (
        <>
          <Card status={true}>
            <Flex variant="between">
              <Flex variant="center" classname={"gap-2 flex-1 min-w-0"}>
                <Group classname={"h-3 w-3 medium:h-4 medium:w-4 rounded-full bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-600 dark:to-slate-700"}>
                </Group>
                <Group classname={"flex-col flex-1 min-w-0"}>
                  <Paragraph type="sm" classname={"font-medium primary-text-color truncate"}>{title}</Paragraph>
                  <Flex classname={"text-sm text-slate-500 dark:text-slate-400 space-x-2 items-center flex-wrap"}>
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
                    
                    <Conditional condition={status === "Completed"}>
                      <Group classname={"flex items-center gap-2"}>
                        <SpanText>Duration </SpanText>
                        <SpanText classname={`bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300 rounded-full px-2 py-0.5 text-xs`}>{formatTime(duration || 0)}</SpanText>
                      </Group>
                    </Conditional>
                  </Flex>
                </Group>
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