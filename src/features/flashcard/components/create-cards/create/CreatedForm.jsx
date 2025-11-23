import { useForm } from "react-hook-form";

import CreatedNotification from "./CreatedNotification";
import CreatedAddButton from "./CreatedAddButton";
import CreatedHeader from "./CreatedHeader";
import CreatedInputs from "./CreatedInputs";
import CreatedTag from "./CreatedTag";
import Form from "/src/ui/Form";
import Box from "/src/ui/Box";

export default function CreatedForm() {
  const { control, register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    // 1. Check for user

    // 2. Check the term is empty if yes set it to untitle

    // 3. Check for empty term or definition

    // 4. Creating flashcard

    // 5. Editing flashcard

    console.log(data);
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
