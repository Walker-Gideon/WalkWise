import CreatedNotification from "./CreatedNotification";
import CreatedAddButton from "./CreatedAddButton";
import CreatedHeader from "./CreatedHeader";
import CreatedInputs from "./CreatedInputs";
import CreatedTag from "./CreatedTag";
import Form from "/src/ui/Form";
import Box from "/src/ui/Box";

export default function CreatedForm() {
  return (
    <>
      <CreatedHeader />
      <Box
        adjustWidth={true}
        classname={
          "mx-auto medium:mt-8 mt-14 max-w-3xl maxmid:max-w-4xl medium:h-[78vh] overflow-y-scroll"
        }
      >
        <Form onsubmit={() => {}}>
          <CreatedTag />
          <CreatedInputs />
          <CreatedAddButton
            pairs={pairs}
            onPairs={setPairs}
            MAX_PAIRS={MAX_PAIRS}
          />
          <CreatedNotification pairs={pairs} MAX_PAIRS={MAX_PAIRS} />
        </Form>
      </Box>
    </>
  );
}

/*
About the Create Flashcard


*/
