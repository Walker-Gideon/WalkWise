import Group from "/src/ui/Group";

export default function Overlay({ classname, children }) {
  return (
    <Group
      classname={`absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm z-50 ${classname}`}
    >
      {children}
    </Group>
  );
}
