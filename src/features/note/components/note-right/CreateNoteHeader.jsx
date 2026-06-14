import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { LuArrowLeft } from "react-icons/lu";

import Flex from "/src/ui/Flex";
import Group from "/src/ui/Group";
import Button from "/src/ui/Button";
import Spinner from "/src/ui/Spinner";
import Conditional from "/src/components/Conditional";
import { editingTools, alignments } from "/src/data/noteHeaderData.js";

import { useNote } from "../../context/NoteContext";

export default function CreateNoteHeader({
  noteId,
  editor,
  onSave,
  isSaving,
  showSaveButton,
}) {
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
      classname={
        "mx-4 py-4 md:py-3 gap-2 border-b borderStyling flex-wrap items-center medium:justify-between"
      }
    >
      <Flex classname={"w-full medium:w-auto"}>
        <Flex
          variant="between"
          classname={"w-full medium:w-auto gap-4 medium:gap-2 items-center"}
        >
          <Group classname={"h-[92%] medium:h-[75%]"}>
            <Button
              variant="secondary"
              type="back"
              onclick={handleBack}
              classname={"shrink-0"}
            >
              <LuArrowLeft className="h-5 w-5" />
            </Button>
          </Group>

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
          {isSaving ? (
            <Spinner primary={true} spinnerWidth="h-4 w-4" label="Saving..." />
          ) : noteId ? (
            "Update Note"
          ) : (
            "Save Note"
          )}
        </Button>
      </Conditional>
    </Flex>
  );
}
