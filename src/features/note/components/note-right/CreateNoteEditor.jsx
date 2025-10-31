import {
  LuAlignLeft,
  LuAlignJustify,
  LuAlignRight,
  LuAlignCenter,
} from "react-icons/lu";

import Button from "/src/ui/Button";
import Group from "/src/ui/Group";

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
  const styling = {
    base: "font-medium text-sm border p-2 rounded-sm cursor-pointer border-stone-300 dark:border-slate-700 transition-all duration-200",
    isActive: "bg-slate-500 text-white hover:bg-slate-600",
    notActive:
      "text-slate-900 hover:text-white dark:text-white hover:bg-slate-600",
  };

  return (
    <Group
      classname={
        "mx-4 flex h-16 items-center gap-2 border-b border-stone-300 dark:border-slate-700"
      }
    >
      {editingTools.map((data, index) => (
        <Button
          key={index}
          variant="secondary"
          classname={`${data.style} ${styling.base}`}
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
          variant="secondary"
          classname={`px-[9.5px] py-[11px] ${styling.base}`}
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
    </Group>
  );
}
