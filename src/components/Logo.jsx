import { Link } from "react-scroll";
import { useNav } from "/src/contexts/NavigationContext";

import SpanText from "/src/ui/SpanText";

export default function Logo({ to, cursor, show }) {
  const { isExpanded } = useNav();

  return (
    <Link
      to={to}
      smooth={true}
      spy={true}
      duration={500}
      offset={-100}
      className={`flex items-center gap-1 font-bold text-slate-500 uppercase ${cursor ? `cursor-pointer` : ``}`}
    >
      <SpanText
        classname={
          "flex h-8 w-8 items-center justify-center rounded-full bg-slate-500 text-white dark:text-slate-50"
        }
      >
        w
      </SpanText>
      <SpanText
        classname={`${show || isExpanded ? `hidden` : `hidden font-bold md:block`}`}
      >
        walkwise
      </SpanText>
    </Link>
  );
}
