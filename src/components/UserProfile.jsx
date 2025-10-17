import { LuUser } from "react-icons/lu";
import Paragraph from "/src/ui/Paragraph";
import Container from "/src/ui/Container";
import Box from "/src/ui/Box";

export default function UserProfile() {
  return (
    <Container adjust={true} classname={"py-2"}>
      <Box classname={"flex items-center p-2 gap-2 bg-slate-50 "}>
        <Box
          adjustWidth={true}
          classname={
            "rounded-full flex items-center justify-center bg-gradient-to-r from-slate-200 to-slate-300 transition-colors duration-300 dark:from-slate-600 dark:to-slate-700 w-9 h-9"
          }
        >
          <LuUser className={`h-5 w-5 text-white`} />
        </Box>
        <Paragraph
          classname={"font-bold whitespace-nowrap text-slate-900 truncate w-30"}
        >
          username
        </Paragraph>
      </Box>
    </Container>
  );
}
