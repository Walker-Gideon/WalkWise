import { LuUser } from "react-icons/lu";
import Paragraph from "/src/ui/Paragraph";
import Container from "/src/ui/Container";
import Group from "/src/ui/Group";
import Box from "/src/ui/Box";

export default function UserProfile() {
  return (
    <Container adjust={true} classname={"pt-2"}>
      <Box classname={"flex items-center p-2 gap-2 bg-slate-50 "}>
        <Box
          adjustWidth={true}
          // bg-gradient-to-r from-slate-200 to-slate-300 transition-colors duration-300 dark:from-slate-600 dark:to-slate-700
          classname={
            "rounded-full flex items-center justify-center w-9 h-9 border-2 border-slate-500"
          }
        >
          {/* text-white */}
          <LuUser className={`h-5 w-5 text-slate-500`} />
        </Box>
        <Group>
          <Paragraph
            classname={
              "font-bold whitespace-nowrap text-slate-900 truncate w-30"
            }
          >
            username
          </Paragraph>
          <Paragraph
            type=""
            classname={"text-xs font-medium text-slate-500 truncate w-30"}
          >
            example123@gmail.com
          </Paragraph>
        </Group>
      </Box>
    </Container>
  );
}
