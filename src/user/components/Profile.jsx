import Group from "/src/ui/Group";
import UserImage from "./UserImage";
import SpanText from "/src/ui/SpanText";

import { useNav } from "/src/contexts/NavigationContext";

export default function Profile({ showLabel }) {
    const { isExpanded } = useNav();
    const effectiveIsExpanded = showLabel ? true : isExpanded;
    
    return (
        <Group classname={`group relative inline-flex`}>
            <UserImage showOnMobile={true} hideOnMobile={true} />
            <Group
                classname={`pointer-events-none absolute top-1/2 left-14 z-40 -translate-y-1/2 transform rounded-sm bg-slate-500 px-2 py-1 text-xs font-semibold whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100 ${!effectiveIsExpanded ? "medium:block" : "hidden"}`}
            >
                <SpanText>Profile</SpanText>
            </Group>
        </Group>
    );
}