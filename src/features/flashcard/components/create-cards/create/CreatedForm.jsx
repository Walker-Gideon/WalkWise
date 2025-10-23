import CreatedHeader from "./CreatedHeader";
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
        <Form onsubmit={() => {}}></Form>
      </Box>
    </>
  );
}
