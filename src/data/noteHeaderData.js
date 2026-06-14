import {
  LuAlignLeft,
  LuAlignRight,
  LuAlignCenter,
  LuAlignJustify,
} from "react-icons/lu";

export const editingTools = [
  {
    text: "H1",
    style: "px-2.5",
    activeCheck: (editor) => editor.isActive("heading", { level: 1 }),
    command: (editor) =>
      editor.chain().focus().toggleHeading({ level: 1 }).run(),
  },
  {
    text: "H2",
    activeCheck: (editor) => editor.isActive("heading", { level: 2 }),
    command: (editor) =>
      editor.chain().focus().toggleHeading({ level: 2 }).run(),
  },
  {
    text: "B",
    style: "font-bold px-[13px]",
    activeCheck: (editor) => editor.isActive("bold"),
    command: (editor) => editor.chain().focus().toggleBold().run(),
  },
  {
    text: "I",
    style: "italic px-[14px]",
    activeCheck: (editor) => editor.isActive("italic"),
    command: (editor) => editor.chain().focus().toggleItalic().run(),
  },
  {
    text: "U",
    style: "underline px-[11px]",
    activeCheck: (editor) => editor.isActive("underline"),
    command: (editor) => editor.chain().focus().toggleUnderline().run(),
  },
  {
    text: "H",
    style: "px-[11px]",
    activeCheck: (editor) => editor.isActive("highlight"),
    command: (editor) => editor.chain().focus().toggleHighlight().run(),
  },
];

export const alignments = [
  { align: "left", icon: LuAlignLeft },
  { align: "center", icon: LuAlignCenter },
  { align: "right", icon: LuAlignRight },
  { align: "justify", icon: LuAlignJustify },
];
