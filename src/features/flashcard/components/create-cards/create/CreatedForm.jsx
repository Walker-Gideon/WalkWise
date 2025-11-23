import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

import CreatedNotification from "./CreatedNotification";
import CreatedAddButton from "./CreatedAddButton";
import CreatedHeader from "./CreatedHeader";
import CreatedInputs from "./CreatedInputs";
import CreatedTag from "./CreatedTag";
import Form from "/src/ui/Form";
import Box from "/src/ui/Box";

import { createFlashcard, updateFlashcard } from "/src/service/apiFlashcard";

export default function CreatedForm({ editingId = null }) {
  const { control, register, handleSubmit, reset } = useForm();

  const { mutate: createMutation, isPending: isCreating } = useMutation({
    mutationFn: createFlashcard,
    onSuccess: () => {
      console.log("Flashcard created!");
      reset();
    },
    onError: (err) => {
      console.error(err);
    },
  });

  const { mutate: updateMutation, isPending: isUpdating } = useMutation({
    mutationFn: ({ id, data }) => updateFlashcard(id, data),
    onSuccess: () => {
      console.log("Flashcard updated!");
      reset();
    },
    onError: (err) => {
      console.error(err);
    },
  });

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
        title,
        pairs: cleanedPairs,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),

        // When auth is ready:
        // userId: user?.uid || null,
      };

      console.log("Final Flashcard:", flashcard);

      // 5. React Query mutate
      if (editingId === null) {
        createMutation(flashcard);
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
