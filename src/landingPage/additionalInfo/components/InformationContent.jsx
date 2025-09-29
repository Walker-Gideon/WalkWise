import { LuCheck } from "react-icons/lu";
import Container from "/src/ui/Container";
import Box from "/src/ui/Box";

export default function InformationContent({
  index,
  icon,
  title,
  subtitle,
  points,
  images,
}) {
  // px-2 py-4 md:px-6 md:py-0 lg:px-15
  return (
    <Container
      adjust={true}
      classname={`${index === 1 ? `md:order-2` : ``} ${index === 3 ? `md:order-2` : ``}`}
    >
      {/* flex flex-col-reverse gap-8 md:grid md:h-100 md:grid-cols-2 md:items-center lg:gap-20 */}
      <div>
      {icon}
      {title}
      {subtitle}
      <>
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
      </>
      </div>

      <div>
        <img src={images} alt="" />
      </div>
    </Container>
  );
}
