import CreateNote from "./CreateNote";
import CreateNoteHeader from "./CreateNoteHeader";

export default function CreateNoteLayout() {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden">
      <div className="flex-shrink-0">
        <CreateNoteHeader />
      </div>
      <CreateNote />
    </div>
  );
}