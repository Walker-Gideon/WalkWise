import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import CreatedNotification from "./CreatedNotification";
import CreatedAddButton from "./CreatedAddButton";
import CreatedHeader from "./CreatedHeader";
import CreatedInputs from "./CreatedInputs";
import CreatedTag from "./CreatedTag";
import Form from "/src/ui/Form";
import Box from "/src/ui/Box";

import useCreateFlashcard from "../../../hooks/useCreateFlashcard";
import useUpdateFlashcard from "../../../hooks/useUpdateFlashcard";
import Spinner from "../../../../../ui/Spinner";

export default function CreatedForm({ editingId = null }) {
  const { control, register, handleSubmit, reset } = useForm();
  const { createFlashcard, isCreating } = useCreateFlashcard();
  const { updateMutation, isUpdating } = useUpdateFlashcard();

  const onSubmit = async (data) => {
    try {
      // 1. Check for user

      // 2. Title logic
      const title = data.tags?.trim() || "Untitled";

      // 3. Clean empty pairs
      const cleanedPairs = data.pairs
        .map((pair) => ({
          term: pair.term?.trim(),
          definition: pair.definition?.trim(),
        }))
        .filter((pair) => pair.term !== "" && pair.definition !== "");

      if (cleanedPairs.length === 0) {
        console.log("Flashcard cannot be empty.");
        return;
      }

      // 4. Build flashcard object
      const flashcard = {
        id: crypto.randomUUID(), // optional: Firestore can generate its own
        userId: null, // update when auth is ready
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

      console.log("Final Flashcard:", flashcard);

      // 5. React Query mutate
      if (editingId === null) {
        createFlashcard(
          { flashcard },
          {
            onSuccess: () => {
              reset();
            },
          },
        );
      } else {
        updateMutation({ id: editingId, data: flashcard });
      }
    } catch (error) {
      // toast this error if any
      console.error(error.message);
    }
  };

  return (
    <>
      {isCreating && <Spinner />}
      <Form onsubmit={handleSubmit(onSubmit)}>
        <CreatedHeader onHandleSubmit={handleSubmit} />
        <Box
          adjustWidth={true}
          classname={
            "mx-auto medium:mt-8 mt-14 max-w-3xl maxmid:max-w-4xl medium:h-[78vh] overflow-y-scroll"
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

/*
When you add Firebase Auth later, simply update:

const user = auth.currentUser;
flashcard.userId = user?.uid;


About the Create Flashcard

1.tag
2. Inputs
3. Onsubmit
// 4. Created notification 

const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

<Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", { require: "This field is required" })}
        />

    
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="test" {...register("example")} />
      <input {...register("exampleRequired", { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <button>Submit</button>
    </form>

*/
