import Group from "/src/ui/Group";
import Overlay from "./Overlay";

export default function Model({ children, styling, onClick }) {
  // Create one for saving the note

  // Default is Schedule
  return (
    <div role="button" onClick={onClick}>
    <Overlay>
      <Group
      // medium:w-full w-85
        classname={
          `max-w-md rounded-2xl border borderStyling bg-white dark:bg-slate-900/70 p-6 shadow-2xl ${styling}`
        }
      >
        {children}
      </Group>
    </Overlay>
    </div>
  );
}
