import { Link } from "react-scroll";

export default function Logo({ to }) {
  return (
    <div>
      <Link
        to={to}
        smooth={true}
        spy={true}
        duration={500}
        offset={-100}
        className="flex cursor-pointer items-center gap-1 font-bold text-slate-500 uppercase"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-500 text-white dark:text-slate-50">
          w
        </span>
        <span className={`hidden font-bold md:block`}>walkwise</span>
      </Link>
    </div>
  );
}
