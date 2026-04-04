import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
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

import { useNote } from "../../context/NoteContext";

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
  const { setIsDisplayNote } = useNote();
  const [, setSearchParams] = useSearchParams();

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
    setIsDisplayNote(false); 
    setSearchParams({});
  }

  const styling = {
    base: "borderStyling dark:text-white",
    isActive: "bg-slate-500 text-white hover:bg-slate-600",
    notActive:
      "text-slate-900 hover:text-white dark:text-white hover:bg-slate-600",
  };

  return (
    <Flex
      classname={"mx-4 py-4 md:py-3 gap-2 border-b borderStyling flex-wrap items-center medium:justify-between"}
    >
      <Flex classname={"w-full medium:w-auto"}>
        <Flex variant="between" classname={"w-full medium:w-auto gap-4 medium:gap-2 items-center"}>
          <div className="h-full medium:h-auto">
        <Button
          variant="secondary"
          type="back"
          onclick={handleBack}
          classname={"md:hidden shrink-0"}
        >
          <LuArrowLeft className="w-5 h-5" />
        </Button>
        </div>

        <Flex classname={"gap-4 medium:gap-2 flex-wrap"}>
          <Flex classname={"gap-2"}>
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
