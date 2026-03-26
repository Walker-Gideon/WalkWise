import { useEffect } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { auth } from "/src/service/firebase";

import Box from "/src/ui/Box";
import Form from "/src/ui/Form";
import Group from "/src/ui/Group";
import Spinner from "/src/ui/Spinner";
import CreatedTag from "./CreatedTag";
import CreatedInputs from "./CreatedInputs";
import CreatedHeader from "./CreatedHeader";
import CreatedAddButton from "./CreatedAddButton";
import Conditional from "/src/components/Conditional";
import CreatedNotification from "./CreatedNotification";
import CreatedActionButton from "./CreatedActionButton";

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

      const flashcardBase = {
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
        updatedAt: new Date().toISOString(),
      };

      if (editingId === null) {
        const newFlashcard = {
          ...flashcardBase,
          createdAt: new Date().toISOString(),
        };

        createFlashcard(newFlashcard, {
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
          { id: editingId, data: flashcardBase },
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
      <Conditional condition={isCreating || isUpdating}>
        <Spinner spinnerWidth={"h-6 w-6 md:h-8 md:w-8"} />
      </Conditional>
      <Form onsubmit={handleSubmit(onSubmit)} classname={"flex min-h-0 flex-1 flex-col"}>
        <CreatedHeader onHandleSubmit={handleSubmit} />
        <Group classname={"space-x-2 px-8 medium:py-6 py-4 flex justify-end middle:hidden shadow-lg"}>
          <CreatedActionButton />
        </Group>
        <Box
          adjustWidth={true}
          classname={
            "max-w-3xl maxmid:max-w-4xl mx-auto px-8 middle:py-6 overflow-y-auto min-h-0 flex-1 w-full"
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