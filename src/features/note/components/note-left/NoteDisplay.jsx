import { useEffect, useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useSearchParams } from "react-router-dom";

import ConfirmDelete from "/src/components/ConfirmDelete";
import Conditional from "/src/components/Conditional";
import HeaderText from "/src/ui/HeaderText";
import Container from "/src/ui/Container";
import Paragraph from "/src/ui/Paragraph";
import Spinner from "/src/ui/Spinner";
import Button from "/src/ui/Button";
import Flex from "/src/ui/Flex";

import useFormattedDate from "/src/hook/useFormattedDate";
import useDeleteNote from "../../hook/useDeleteNote";
import { useNote } from "../../context/NoteContext";

function NoteDate({ createdAt }) {
    const formattedDate = useFormattedDate(createdAt);
    return <>{formattedDate}</>;
}

export default function NoteDisplay({ notes }) {
  const { query } = useNote();
  const { isDeleting, deleteNote } = useDeleteNote();

  const [selectedId, setSelectedId] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [selectedNoteTitle, setSelectedNoteTitle] = useState("");

  useEffect(() => {
    if (query) {
      setIsSearching(true);
      const timer = setTimeout(() => setIsSearching(false), 500);
      return () => clearTimeout(timer);
    } else {
      setIsSearching(false);
    }
  }, [query]);

  const noteId = searchParams.get("noteId");

  const filtereNote = notes
    ?.filter((note) => note.title.toLowerCase().includes(query.toLowerCase()));

  function handleDisplayNote(id) {
    setSearchParams({ noteId: id });
  }

  function handleCloseModel() {
    setIsDeleteModal(false);

    if (selectedId === noteId) {
      setSearchParams({});
    }
    
    setSelectedId(null);
    setSelectedNoteTitle("");
  }

  function handleDeleteClick(id, title) {
    setSelectedId(id);
    setSelectedNoteTitle(title);
  }

  function handleConfirmDelete() {
    if (selectedId) {
      deleteNote(selectedId);
      handleCloseModel();
    }
  }

  if(isSearching) {
    return (
      <Flex variant="center" classname={"h-full"}>
        <Spinner styling={"h-full"} />
      </Flex>
    )
  }

  return (
    <>
      <Container adjust={true} classname={"h-full overflow-y-auto"}>
        {!isSearching && filtereNote.map((note) => (
          <div
            key={note.id}
            className={`my-1 flex w-full cursor-pointer items-center justify-between gap-2 border-b border-stone-300 ${noteId === note.id ? "bg-slate-300 dark:bg-slate-700" : ""}`}
          >
            <div 
              role="button" 
              className="w-full py-2 pl-4"
              onClick={() => handleDisplayNote(note.id)} 
            >
              <HeaderText
                variant="secondary"
                classname={"w-40 truncate whitespace-nowrap primary-text-color"}
              >
                {note.title}
              </HeaderText>
              <Paragraph
                variant="small"
                classname={"secondary-text-color text-xs"}
              >
                <NoteDate createdAt={note.createdAt} />
              </Paragraph>
            </div>
            <Button
              variant="secondary"
              onclick={() => {
                handleDeleteClick(note.id, note.title);
                setIsDeleteModal(true);
              }}
              classname={"text-slate-700 dark:text-slate-100 pr-4"}
            >
              <RiDeleteBin5Line className="h-5 w-5" />
            </Button>
          </div>
        ))}
      </Container>
      <Conditional condition={isDeleteModal}>
        <ConfirmDelete
          disabled={isDeleting}
          onCloseModal={handleCloseModel}
          onConfirm={handleConfirmDelete}
          resourceName={selectedNoteTitle}
        />
      </Conditional>
    </>
  );
}
