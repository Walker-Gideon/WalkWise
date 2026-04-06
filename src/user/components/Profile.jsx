import { LuUser } from "react-icons/lu";

import Box from "/src/ui/Box";
import Group from "/src/ui/Group";
import UserDetails from "./UserDetails";

import { useNav } from "/src/contexts/NavigationContext";

export default function Profile() {
    const { isExpanded } = useNav();
    
    return (
        <Group classname={`group relative inline-flex`}>
            <Box
                adjustWidth={true}
                classname={
                    "rounded-full flex items-center justify-center w-9 h-9 border-2 borderStyling"
                }
            >
                <LuUser className={`h-5 w-5 text-slate-500 dark:text-white`} />
            </Box>
            <Group
                classname={`pointer-events-none absolute top-0.5 left-12 z-50 -translate-y-1/2 transform rounded-sm bg-slate-500 px-2 py-1 text-sm font-semibold whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100 ${isExpanded ? "medium:block" : "hidden"}`}
            >
                <UserDetails
                    classname1={"text-slate-50"}
                    classname2={"text-slate-50"}
                />
            </Group>
        </Group>
    );
}