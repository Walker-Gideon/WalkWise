import FormRow from "/src/components/FormRow";
import Input from "/src/ui/Input";

export default function CreatedTag() {
  return (
    <FormRow label="Tags (optional)" classname={"px-0.5"}>
      <Input
        id="tags"
        name="tags"
        type="text"
        // value={}
        // onChange={}
        placeholder="e.g. Biology, Chapter 2"
        classname={"w-full text-slate-900 dark:text-white input"}
        // disabled={}
      />
    </FormRow>
  );
}
