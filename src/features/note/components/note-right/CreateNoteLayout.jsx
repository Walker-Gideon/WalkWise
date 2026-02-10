import { useEditor } from "@tiptap/react";
import { useState, useEffect } from "react";
import StarterKit from "@tiptap/starter-kit";
import { EditorContent } from "@tiptap/react";
import Highlight from "@tiptap/extension-highlight";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";

import Box from "/src/ui/Box";
import Flex from "/src/ui/Flex";
import Group from "/src/ui/Group";
import Input from "/src/ui/Input";
import Spinner from "/src/ui/Spinner";
import Container from "/src/ui/Container";
import CreateNoteHeader from "./CreateNoteHeader";

import { useNote } from "../../context/NoteContext";
import useCreateNote from "../../hook/useCreateNote";
import useUpdateNote from "../../hook/useUpdateNote";
import { useFetchNoteById } from "../../hook/useFetchNoteById";

export default function CreateNoteLayout({ noteId }) {
  const { content, setIsDisplayNote } = useNote();
  const { createNote, isCreating } = useCreateNote();
  const { updateNote, isUpdating } = useUpdateNote();
  const { note: noteData, isPending: isLoadingNote } = useFetchNoteById(noteId);

  const [title, setTitle] = useState("");
  const [hasContent, setHasContent] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
      Underline,
    ],
    content,
    onUpdate: ({ editor }) => {
      setHasContent(!editor.isEmpty);
    },
  });

  useEffect(() => {
    if (editor) {
      if (noteId && noteData) {
        setTitle(noteData.title || "");
        editor.commands.setContent(noteData.content || "");
        setHasContent(!!noteData.content);
      } else if (!noteId) {
        setTitle("");
        editor.commands.setContent(content || "");
        setHasContent(false);
      }
    }
  }, [noteId, noteData, editor, content]);

  function handleSave() {
    const noteTitle = title.trim() || "Untitled Note";
    const noteContent = hasContent ? editor?.getHTML() : "";

    if (noteId) {
      updateNote(
        { noteId, data: { title: noteTitle, content: noteContent } },
        {
          onSuccess: () => {
            setIsDisplayNote(false);
          },
        }
      );
    } else {
      createNote(
        { title: noteTitle, content: noteContent },
        {
          onSuccess: () => {
            setIsDisplayNote(false);
          },
        }
      );
    }
  }

  const showSaveButton = title.trim().length > 0 || hasContent;
  const isSaving = isCreating || isUpdating;

  if (noteId && isLoadingNote) {
    return (
      <Flex variant="center" classname={"h-full"}>
        <Spinner styling={"h-full"} />
      </Flex>
    );
  }

  return (
    <Container
      adjust={true}
      classname={"flex h-full w-full flex-col overflow-hidden"}
    >
      <Box adjustWidth={true} classname={"flex-shrink-0"}>
        <CreateNoteHeader
          noteId={noteId}
          editor={editor}
          onSave={handleSave}
          isSaving={isSaving}
          showSaveButton={showSaveButton}
        />
      </Box>
      <Group classname={"mx-4 my-2 flex h-full min-h-0 flex-col"}>
        <Input
          id="note-title"
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          classname={
            "borderStyling medium:text-2xl w-full border-b bg-transparent pb-2 text-xl font-bold text-slate-900 placeholder:text-gray-400 focus:outline-none dark:text-white"
          }
        />
        <Box
          adjustWidth={true}
          classname={
            "min-h-0 mt-2 flex-grow overflow-y-auto text-gray-900 placeholder:text-gray-500 dark:text-white dark:placeholder:text-gray-400 [&_.ProseMirror]:border-0 [&_.ProseMirror]:outline-none [&_.ProseMirror]:focus:outline-none"
          }
        >
          <EditorContent editor={editor} />
        </Box>
      </Group>
    </Container>
  );
}