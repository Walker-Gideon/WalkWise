import { LuCheck } from "react-icons/lu";
import Container from "/src/ui/Container";
import Box from "/src/ui/Box";

export default function InformationContent({
  index,
  icon,
  title,
  subtitle,
  points,
  url,
}) {
  // 
  return (
    <Container
      adjust={true}
      classname={`px-2 py-4 md:px-6 md:py-0 lg:px-15`}
    >
      <div className="flex flex-col-reverse gap-8 md:grid md:h-100 md:grid-cols-2 md:items-center lg:gap-20">
      <div className={`${index === 1 ? `md:order-2` : ``} ${index === 3 ? `md:order-2` : ``}`}>
        <div className="flex itemc-center space-x-4 text-sm font-semibold">
          <span className="rounded-full p-3 bg-gradient-to-r from-slate-200 to-slate-300">{icon}</span>
          <p>{title}</p>
        </div>

        <p className="px-2 py-3 text-xl font-bold md:text-2xl">
          {subtitle}
        </p>

      <div className="px-2">
        {points.map((data, index) => (
          <ul
            key={index}
            className="flex gap-2 py-0.5 text-sm md:text-[0.9rem]"
          >
            <li>
              <Box
                adjustWidth={true}
                classname="rounded-full p-1 bg-gradient-to-r from-slate-200 to-slate-300"
              >
                <LuCheck className="h-3 w-3 text-slate-600" />
              </Box>
            </li>
            <li className="font-medium text-slate-500">{data}</li>
          </ul>
        ))}
      </div>
      </div>

      <div>
        <img src={url} alt="" />
      </div>
      </div>
    </Container>
  );
}
