import Group from "/src/ui/Group";
import Paragraph from "/src/ui/Paragraph";

import { useUserData } from "../hook/useUserData";

export default function UserDetails({ classname1, classname2 }) {
    const { userData } = useUserData();

    return (
        <Group>
            <Paragraph
                classname={`font-bold whitespace-nowrap truncate w-30 ${classname1}`}
            >
                {!userData ? "username" : userData?.username}
            </Paragraph>
            <Paragraph
                classname={`text-xs font-medium truncate w-30 ${classname2}`}
            >
                {!userData ? "example123@gmail.com" : userData?.email}
            </Paragraph>
        </Group>
    );
}