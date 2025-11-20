import { useState } from "react";

import CreatedNotification from "./CreatedNotification";
import CreatedAddButton from "./CreatedAddButton";
import CreatedHeader from "./CreatedHeader";
import CreatedInputs from "./CreatedInputs";
import CreatedTag from "./CreatedTag";
import Form from "/src/ui/Form";
import Box from "/src/ui/Box";

export default function CreatedForm() {
  const [pairs, setPairs] = useState([
    { term: "", definition: "" },
    { term: "", definition: "" },
  ]);
  const [index, setIndex] = useState(0);

  const MAX_PAIRS = 50;

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
          <CreatedInputs
            pairs={pairs}
            index={index}
            onPairs={setPairs}
            onIndex={setIndex}
          />
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
