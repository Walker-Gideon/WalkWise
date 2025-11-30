import { LuX } from "react-icons/lu";

import HeaderText from "/src/ui/HeaderText";
import Paragraph from "/src/ui/Paragraph";
import Button from "/src/ui/Button";
import Group from "/src/ui/Group";
import Flex from "/src/ui/Flex";
import Model from "./Model";

export default function ConfirmDelete({
  resourceName,
  onConfirm,
  disabled,
  onCloseModal,
}) {
  return (
    <Model styling={"w-85 medium:w-full"} onClick={onCloseModal}>
      <Flex classname={"justify-end"}>
        <Button
          variant="secondary"
          onclick={onCloseModal}
          classname={"medium:text-2xl text-xl dark:text-slate-50 dark:hover:bg-slate-900 hover:bg-slate-300 p-0.5 rounded-sm"}
        >
          <LuX />
        </Button>
      </Flex>
      <Group classname={"space-y-3"}>
        <HeaderText type="primary">Delete {resourceName}</HeaderText>
        <Paragraph variant="small" classname={"primary-text-color"}>
          Are you sure you want to delete this {resourceName} permanently? This action cannot be undone.
        </Paragraph>

        <Flex classname={"gap-2 justify-end"}>
          <Button
            type="border"
            classname={"dark:text-slate-50"}
            disabled={disabled}
            onclick={onCloseModal}
          >
            Cancel
          </Button>
          <Button 
            type="danger"
            disabled={disabled} 
            onclick={onConfirm}
          >
            Delete
          </Button>
        </Flex>
      </Group>
    </Model>
  );
}

