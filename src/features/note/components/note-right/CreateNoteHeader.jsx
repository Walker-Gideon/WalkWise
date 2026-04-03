import { useState, useEffect } from "react";
import {
  LuArrowLeft,
  LuAlignLeft,
  LuAlignRight,
  LuAlignCenter,
  LuAlignJustify,
} from "react-icons/lu";

import Flex from "/src/ui/Flex";
import Button from "/src/ui/Button";
import Conditional from "/src/components/Conditional";

const editingTools = [
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

const alignments = [
  { align: "left", icon: LuAlignLeft },
  { align: "center", icon: LuAlignCenter },
  { align: "right", icon: LuAlignRight },
  { align: "justify", icon: LuAlignJustify },
];

export default function CreateNoteHeader({ noteId, editor, onSave, isSaving, showSaveButton }) {
  const [editorState, setEditorState] = useState(0);

  useEffect(() => {
    if (!editor) return;

    const updateState = () => {
      setEditorState((prev) => prev + 1);
    };

    editor.on("transaction", updateState);

    return () => {
      editor.off("transaction", updateState);
    };
  }, [editor]);

  if (!editor) return null;

  function handleBack() {
    // setIsDisplayNote(false);
    console.log("Back");
  }

  const styling = {
    base: "borderStyling dark:text-white",
    isActive: "bg-slate-500 text-white hover:bg-slate-600",
    notActive:
      "text-slate-900 hover:text-white dark:text-white hover:bg-slate-600",
  };

  // mx-4 py-4 md:py-0 md:h-16 border-b borderStyling flex-col md:flex-row md:justify-between

  return (
    <Flex
      classname={"mx-4 py-4 md:py-0 md:h-16 border-b borderStyling flex-col medium:flex-row medium:justify-between"}
    >
      <Flex classname={"gap-4 md:gap-2 flex-col medium:flex-row"}>
        <Flex classname={"gap-2"}>
          <Button
            variant="secondary"
            type="back"
            onclick={handleBack}
            classname={"md:hidden"}
          >
            <LuArrowLeft className="w-5 h-5" />
          </Button>

          {editingTools.map((data, index) => (
            <Button
              key={index}
              type="customize"
              variant="secondary"
              classname={`${data.style} ${styling.base} ${data.activeCheck(editor) ? `${styling.isActive}` : `${styling.notActive}`}`}
              onclick={(e) => {
                e.preventDefault();
                data.command(editor);
              }}
            >
              {data.text}
            </Button>
          ))}
        </Flex>

        <Flex classname={"gap-2"}>
          {alignments.map((btn, index) => (
            <Button
              key={index}
              type="customize"
              variant="secondary"
              classname={`px-[9.5px] py-[11px] ${styling.base} ${
                editor.isActive({ textAlign: btn.align })
                  ? `${styling.isActive}`
                  : `${styling.notActive}`
              }`}
              onclick={(e) => {
                e.preventDefault();
                // Toggle: if already active, unset; otherwise set
                if (editor.isActive({ textAlign: btn.align })) {
                  editor.chain().focus().unsetTextAlign().run();
                } else {
                  editor.chain().focus().setTextAlign(btn.align).run();
                }
              }}
            >
              <btn.icon />
            </Button>
          ))}
        </Flex>
      </Flex>

      <Conditional condition={showSaveButton}>
        <Button
          type="colors"
          onclick={(e) => {
            e.preventDefault();
            onSave();
          }}
          disabled={isSaving}
          classname={"mt-3 medium:mt-0 w-full medium:w-auto medium:h-fit"}
        >
          {isSaving ? "Saving..." : noteId ? "Update Note" : "Save Note"}
        </Button>
      </Conditional>
    </Flex>
  );
}
