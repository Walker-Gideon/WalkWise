import { LuUser } from "react-icons/lu";

import Box from "/src/ui/Box";
import Group from "/src/ui/Group";
import Conditional from "/src/components/Conditional";

import { useUserData } from "/src/user/hook/useUserData";

export default function UserImage({ 
    classname,
    size = "h-12 w-12",
    hideOnMobile = false,
    showOnMobile = false,
 }) {
    const { userData } = useUserData();
    const photoURL = userData?.photoURL;

    return (
        <Group classname={classname}>
            <Box
                adjustWidth={true}
                classname={
                    `rounded-full flex items-center justify-center borderStyling ${size} ${photoURL ? "" : "border-2"} ${hideOnMobile ? "" : "hidden md:flex"} ${showOnMobile ? "" : "flex md:hidden"}`
                }
            >
                <Conditional condition={!photoURL}>
                    <LuUser
                      className={`h-5 w-5 text-slate-500 dark:text-white`}
                    />
                </Conditional>
                <Conditional condition={photoURL}>
                    <Group>
                      <img
                        src={photoURL}
                        alt="User profile"
                        className={`rounded-full object-cover ${size}`}
                      /> 
                    </Group>
                </Conditional>
            </Box>
        </Group>
    );
}