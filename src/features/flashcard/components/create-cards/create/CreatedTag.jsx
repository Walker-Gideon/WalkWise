import Group from "/src/ui/Group";
import Input from "/src/ui/Input";
import Label from "/src/ui/Label";

export default function CreatedTag() {
  return (
    <Group>
      <Label htmlfor="tags" classname={"label"}>
        Tags (optional)
      </Label>
      <Input
        id="tags"
        name="tags"
        type="text"
        // value={}
        // onChange={}
        placeholder="e.g. Biology, Chapter 2"
        classname={"inputArea input"}
        // disabled={}
      />
    </Group>
  );
}
