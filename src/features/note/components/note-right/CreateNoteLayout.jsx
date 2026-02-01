import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import Underline from "@tiptap/extension-underline";
import { EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEditor } from "@tiptap/react";

import CreateNoteEditor from "./CreateNoteEditor";
import Container from "/src/ui/Container";
import Group from "/src/ui/Group";
import Input from "/src/ui/Input";
import Box from "/src/ui/Box";

import { useNote } from "../../context/NoteContext";

export default function CreateNoteLayout() {
  const { content } = useNote()
  
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
        const html = editor.getHTML();
        if (readAlredyNote) {
          setCurrentNote((prev) => ({ ...prev, content: html }));
        } else {
          setContent(html);
        }
      },
  });
  
  return (
    <Container adjust={true} classname={"flex h-full w-full flex-col overflow-hidden"}>
      <div className="flex-shrink-0">
        <CreateNoteEditor />
      </div>

      <Group classname={"flex flex-col h-full min-h-0 mx-4 my-2"}>
        <Input
          id="note-title"
          type="text"
          name="title"
          placeholder="Title"
          classname={"borderStyling w-full border-b bg-transparent pb-2 text-xl dark:text-white font-bold text-slate-900 placeholder:text-gray-400 focus:outline-none medium:text-2xl"}
          //   disabled={disabled}
        />
        <Box
          adjustWidth={true}
          classname={"min-h-0 flex-grow overflow-y-auto text-gray-900 placeholder:text-gray-500 dark:text-white dark:placeholder:text-gray-400"}
        >
          <EditorContent editor={editor} />
        </Box>
      </Group>
    </Container>
  );
}