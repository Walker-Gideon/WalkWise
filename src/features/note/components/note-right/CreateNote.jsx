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

export default function CreateNote() {

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
    <Container adjust={true} classname={""}>
      <CreateNoteEditor />
      <Group classname={"mx-4 my-2 h-full py-2"}>
        <Input
          id="note-title"
          type="text"
          name="title"
          placeholder="Title"
          //   value={readAlredyNote ? currentNote.title : title}
          //   onChange={
          //     readAlredyNote
          //       ? (e) => setCurrentNote({ ...currentNote, title: e.target.value })
          //       : onTitleChange
          //   }

          //   dark:text-white dark:placeholder:text-gray-500
          classname={
            "w-full border-b borderStyling bg-transparent pb-2 text-xl dark:text-white font-bold text-slate-900 placeholder:text-gray-400 focus:outline-none medium:text-2xl"
          }
          //   disabled={disabled}
        />
        <Box
          adjustWidth={true}
          classname={
            "mt-4 h-full flex-grow text-gray-900 placeholder:text-gray-500 dark:text-white dark:placeholder:text-gray-400"
          }
        >
          <EditorContent editor={editor} />
        </Box>
      </Group>
    </Container>
  );
}
