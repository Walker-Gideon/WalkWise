import Group from "/src/ui/Group";

export default function UserPromptAction() {
  // absolute bottom-0 left-0  bg-black/50
//   bg-white/70 backdrop-blur-xl transition-all duration-300 dark:border-slate-700 dark:bg-slate-900/70
  return (
    <Group
      classname={
        "absolute bottom-0 left-14 rounded-xl border border-stone-300  w-50 h-50 z-50 bg-red-500"
      }
    >
      <p>User Prompt Action</p>
    </Group>
  );
}