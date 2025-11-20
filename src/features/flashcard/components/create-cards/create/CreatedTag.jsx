import FormRow from "/src/components/FormRow";

export default function CreatedTag({ register }) {
  return (
    <FormRow label="Tags (optional)" classname={"px-0.5"}>
      <input
        id="tags"
        name="tags"
        type="text"
        defaultValue=""
        placeholder="e.g. Biology, Chapter 2"
        className={"input w-full text-slate-900 dark:text-white"}
        {...register("tags", {
          require: "This field is required",
        })}
        // disabled={}
      />
    </FormRow>
  );
}
