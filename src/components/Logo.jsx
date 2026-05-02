import { useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import SpanText from "/src/ui/SpanText";

export default function Logo({ to, cursor, show }) {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";

  const content = (
    <>
      <SpanText
        classname={
          "flex h-10 w-10 items-center justify-center rounded-full bg-slate-500 text-white dark:text-slate-50"
        }
      >
        w
      </SpanText>
      <SpanText classname={`${show ? `hidden` : `hidden font-bold md:block`}`}>
        walkwise
      </SpanText>
    </>
  );

  const className = `flex items-center gap-1 font-bold text-slate-500 uppercase ${cursor && isHomePage ? `cursor-pointer` : ``}`;

  if (isHomePage) {
    return (
      <ScrollLink
        to={to}
        smooth={true}
        spy={true}
        duration={500}
        offset={-100}
        className={className}
      >
        {content}
      </ScrollLink>
    );
  }

  return (
    <div className={className}>
      {content}
    </div>
  );
}


