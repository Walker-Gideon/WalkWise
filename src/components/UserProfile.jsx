import { LuUser } from "react-icons/lu";
import Box from "/src/ui/Box";
import Paragraph from "../ui/Paragraph";

export default function UserProfile() {
  return (
    <div>
      <Box>
        <Box
          classname={
            "rounded-full flex items-center justify-center bg-gradient-to-r from-slate-200 to-slate-300 transition-colors duration-300 dark:from-slate-600 dark:to-slate-700 medium:h-15 medium:w-15 w-12 h-12"
          }
        >
          <LuUser className={`h-8 w-8 text-white`} />
        </Box>
        <Paragraph
          classname={
            "text-sm medium:text-lg font-bold whitespace-nowrap text-slate-900 truncate w-30"
          }
        >
          username
        </Paragraph>
      </Box>
    </div>
  );
}
