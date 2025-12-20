import { motion } from "motion/react";
import Group from "/src/ui/Group";
import Overlay from "./Overlay";

export default function Model({ 
  children, 
  styling, 
  onClick, 
  menu,
}) {
  // Navigation menu
  if(menu) {
    return (
      <div 
        role="button" 
        onClick={onClick} 
        className={`absolute inset-0 bg-slate-200/20 backdrop-blur-sm z-40 ${styling}`}
      >
        <motion.div
           initial={{ x: "-100%" }}
           animate={{ x: 0 }}
           exit={{ x: "-100%" }}
           transition={{ duration: 0.3, ease: "easeInOut" }}
           onClick={(e) => e.stopPropagation()}
           className="h-full w-fit"
        >
          {children}
        </motion.div>
      </div>
    )
  }

  // Default is Schedule
  return (
    <div role="button" onClick={onClick}>
      <Overlay>
        <Group
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
