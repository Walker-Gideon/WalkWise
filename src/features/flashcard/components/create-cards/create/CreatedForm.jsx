import { useEffect } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { auth } from "/src/service/firebase";

import Box from "/src/ui/Box";
import Form from "/src/ui/Form";
import Spinner from "/src/ui/Spinner";
import CreatedTag from "./CreatedTag";
import CreatedInputs from "./CreatedInputs";
import CreatedHeader from "./CreatedHeader";
import CreatedAddButton from "./CreatedAddButton";
import CreatedNotification from "./CreatedNotification";

import { updateUser } from "/src/service/apiUser";
import { useFetchCards } from "/src/hook/useCards";
import { useUserData } from "/src/user/hook/useUserData";
import { useFlashcard } from "../../../context/FlashcardContext";
import useUpdateFlashcard from "../../../hooks/useUpdateFlashcard";
import useCreateFlashcard from "../../../hooks/useCreateFlashcard";

export default function CreatedForm() {
  const { userData } = useUserData();
  const { flashcards } = useFetchCards();
  const { updateMutation, isUpdating } = useUpdateFlashcard();
  const { control, register, handleSubmit, reset } = useForm();
  const { createFlashcard, isCreating } = useCreateFlashcard();
  const { setIsDisplay, setPairs, editingId, setEditingId } = useFlashcard();

  useEffect(() => {
    if (editingId && flashcards) {
      const cardToEdit = flashcards.find((card) => card.id === editingId);
      if (cardToEdit) {
        setPairs(cardToEdit.pairs);
        reset({
          tags: cardToEdit.title,
          pairs: cardToEdit.pairs
        });
      }
    }
  }, [editingId, flashcards, setPairs, reset]);

  const onSubmit = async (data) => {
    const user = auth.currentUser;
    if (!user) return;

    try {
      const title = data.tags?.trim() || "Untitled";
      const cleanedPairs = data.pairs
        .map((pair) => ({
          term: pair.term?.trim(),
          definition: pair.definition?.trim(),
        }))
        .filter((pair) => pair.term !== "" && pair.definition !== "");

      if (cleanedPairs.length === 0) {
        return;
      }

      const flashcard = {
        userId: user.uid,
        title,
        pairs: cleanedPairs.map((pair) => ({
          term: pair.term,
          definition: pair.definition,
          mastery: 0,
          lastReviewed: null,
        })),
        status: "pending",
        completed: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      if (editingId === null) {
        createFlashcard(flashcard, {
          onSuccess: (newCard) => {
            reset();
            setPairs([
              { term: "", definition: "" },
              { term: "", definition: "" },
            ]);
            setIsDisplay(false);

            if (user) {
              const updatedFlashcards = userData?.flashcards
                ? [...userData.flashcards, newCard.id]
                : [newCard.id];

              updateUser(user.uid, {
                lastActiveDate: new Date().toISOString(),
                flashcards: updatedFlashcards,
              });
            }
          },
        });
      } else {
        updateMutation(
          { id: editingId, data: flashcard },
          {
            onSuccess: () => {
              reset();
              setPairs([
                { term: "", definition: "" },
                { term: "", definition: "" },
              ]);
              setIsDisplay(false);
              setEditingId(null);

              if (user) {
                updateUser(user.uid, {
                  lastActiveDate: new Date().toISOString(),
                });
              }
            },
          },
        );
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      {(isCreating || isUpdating) && <Spinner />}
      <Form onsubmit={handleSubmit(onSubmit)} classname={"flex min-h-0 flex-1 flex-col"}>
        <CreatedHeader onHandleSubmit={handleSubmit} />
        <Box
          adjustWidth={true}
          classname={
            "max-w-3xl maxmid:max-w-4xl mx-auto medium:mt-8 mt-14 px-8 overflow-y-auto min-h-0 flex-1 w-full"
          }
        >
          <CreatedTag register={register} />
          <CreatedInputs control={control} />
          <CreatedAddButton />
          <CreatedNotification />
        </Box>
      </Form>
    </>
  );
}