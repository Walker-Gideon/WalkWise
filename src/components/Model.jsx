import Group from "/src/ui/Group";
import Overlay from "./Overlay";

export default function Model({ children }) {
  // Create one for saving the note

  // Default is Schedule
  return (
    <Overlay>
      <Group
        //  dark:bg-slate-800
        classname={
          "w-full max-w-md rounded-2xl border borderStyling bg-white p-6 shadow-2xl "
        }
      >
        {children}
      </Group>
    </Overlay>
  );
}
