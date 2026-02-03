import {
  LuAlignLeft,
  LuAlignJustify,
  LuAlignRight,
  LuAlignCenter,
} from "react-icons/lu";

import Button from "/src/ui/Button";
import Group from "/src/ui/Group";
import Flex from "/src/ui/Flex";

const editingTools = [
  {
    text: "H1",
    style: "px-2.5",
    /*
    activeCheck: (editor) => editor.isActive("heading", { level: 1 }),
    command: (editor) =>
      editor.chain().focus().toggleHeading({ level: 1 }).run(),*/
  },
  {
    text: "H2",
    /*
    activeCheck: (editor) => editor.isActive("heading", { level: 2 }),
    command: (editor) =>
      editor.chain().focus().toggleHeading({ level: 2 }).run(),*/
  },
  {
    text: "B",
    style: "font-bold px-[13px]",
    /*
    activeCheck: (editor) => editor.isActive("bold"),
    command: (editor) => editor.chain().focus().toggleBold().run(),*/
  },
  {
    text: "I",
    style: "italic px-[14px]",
    /*
    activeCheck: (editor) => editor.isActive("italic"),
    command: (editor) => editor.chain().focus().toggleItalic().run(),*/
  },
  {
    text: "U",
    style: "underline px-[11px]",
    /*
    activeCheck: (editor) => editor.isActive("underline"),
    command: (editor) => editor.chain().focus().toggleUnderline().run(),*/
  },
  {
    text: "H",
    style: "px-[11px]",
    /*
    activeCheck: (editor) => editor.isActive("highlight"),
    command: (editor) => editor.chain().focus().toggleHighlight().run(),*/
  },
];

const alignments = [
  { align: "left", icon: LuAlignLeft },
  { align: "center", icon: LuAlignCenter },
  { align: "right", icon: LuAlignRight },
  { align: "justify", icon: LuAlignJustify },
];

export default function CreateNoteEditor() {
  // export default function CreateNoteEditor({ editor }) {
  /*
  const styling = {
    isActive: "bg-slate-500 text-white hover:bg-slate-600",
    notActive:
      "text-slate-900 hover:text-white dark:text-white hover:bg-slate-600",
  };*/

  return (
    <Flex
      variant="between"
      classname={"mx-4 h-16 border-b borderStyling"}
    >
      <Flex classname={"gap-2"}>
        {editingTools.map((data, index) => (
          <Button
            key={index}
            type="customize"
            variant="secondary"
            classname={`borderStyling dark:text-white ${data.style}`}
            //   classname={`${data.style} ${styling.base} ${data.activeCheck(editor) ? `${styling.isActive}` : `${styling.notActive}`}`}
            onclick={(e) => {
              e.preventDefault();
              // data.command(editor);
            }}
          >
            {data.text}
          </Button>
        ))}

        {alignments.map((btn, index) => (
          <Button
            key={index}
            type="customize"
            variant="secondary"
            classname={`borderStyling dark:text-white px-[9.5px] py-[11px]`}
            //   classname={`px-[9.5px] py-[11px] ${styling.base} ${
            //     editor.isActive({ textAlign: btn.align })
            //       ? `${styling.isActive}`
            //       : `${styling.notActive}`
            //   }`}
            onclick={(e) => {
              e.preventDefault();
              // editor.chain().focus().setTextAlign(btn.align).run();
            }}
          >
            <btn.icon />
          </Button>
        ))}
      </Flex>
      <>
        <Button type="colors" onclick={() => {}}>
          Save Note
        </Button>
      </>
    </Flex>
  );
}
