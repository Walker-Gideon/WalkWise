import { useState } from "react";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import Underline from "@tiptap/extension-underline";
import { EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEditor } from "@tiptap/react";
import toast from "react-hot-toast";

import CreateNoteHeader from "./CreateNoteHeader";
import Container from "/src/ui/Container";
import Group from "/src/ui/Group";
import Input from "/src/ui/Input";
import Box from "/src/ui/Box";

import { useNote } from "../../context/NoteContext";
import useCreateNote from "../../hook/useCreateNote";

export default function CreateNoteLayout() {
  const [title, setTitle] = useState("");
  const [hasContent, setHasContent] = useState(false);
  const { content } = useNote()
  const { createNote, isCreating } = useCreateNote()
  
  // Editing note
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

  function handleSave() {
    const html = editor?.getHTML();
    createNote({ title, content: html });
  }

  const showSaveButton = title.trim().length > 0 && hasContent;
  
  return (
    <Container adjust={true} classname={"flex h-full w-full flex-col overflow-hidden"}>
      <div className="flex-shrink-0">
        <CreateNoteHeader editor={editor} onSave={handleSave} isSaving={isCreating} showSaveButton={showSaveButton} />
      </div>

      <Group classname={"flex flex-col h-full min-h-0 mx-4 my-2"}>
        <Input
          id="note-title"
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          classname={"borderStyling w-full border-b bg-transparent pb-2 text-xl dark:text-white font-bold text-slate-900 placeholder:text-gray-400 focus:outline-none medium:text-2xl"}
        />
        <Box
          adjustWidth={true}
          classname={"min-h-0 mt-2 flex-grow overflow-y-auto text-gray-900 placeholder:text-gray-500 dark:text-white dark:placeholder:text-gray-400 [&_.ProseMirror]:border-0 [&_.ProseMirror]:outline-none [&_.ProseMirror]:focus:outline-none"}
        >
          <EditorContent editor={editor} />
        </Box>
      </Group>
    </Container>
  );
}