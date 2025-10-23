import { useState } from "react";

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
        </Form>
      </Box>
    </>
  );
}
