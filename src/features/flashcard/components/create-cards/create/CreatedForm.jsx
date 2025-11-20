import CreatedNotification from "./CreatedNotification";
import CreatedAddButton from "./CreatedAddButton";
import CreatedHeader from "./CreatedHeader";
import CreatedInputs from "./CreatedInputs";
import CreatedTag from "./CreatedTag";
import Form from "/src/ui/Form";
import Box from "/src/ui/Box";
import { useForm } from "react-hook-form";

export default function CreatedForm() {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

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
          <CreatedTag />
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

*/
