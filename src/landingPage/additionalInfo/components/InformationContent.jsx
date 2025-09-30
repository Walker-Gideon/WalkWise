import { LuCheck } from "react-icons/lu";
import Container from "/src/ui/Container";
import Paragraph from "/src/ui/Paragraph";
import SpanText from "/src/ui/SpanText";
import Box from "/src/ui/Box";

export default function InformationContent({
  index,
  icon,
  title,
  subtitle,
  points,
  url,
}) {
  return (
    <Container
      adjust={true}
      classname={`px-2 py-4 md:px-6 md:py-0 lg:px-15`}
    >
      <Container adjust={true} classname="flex flex-col-reverse gap-8 md:grid md:h-100 md:grid-cols-2 md:items-center lg:gap-20">
        <Container adjust={true} classname={`${index === 1 ? `md:order-2` : ``} ${index === 3 ? `md:order-2` : ``}`}>
          <Box adjustWidth={true} classname="flex items-center space-x-4 text-sm font-semibold">
            <SpanText type="prime" classname={`rounded-full`}>{icon}</SpanText>
            <Paragraph>{title}</Paragraph>
          </Box>

          <Paragraph type="xl" classname="px-2 py-3 font-bold">
            {subtitle}
          </Paragraph>

          <Box adjustWidth={true} classname="px-2">
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
          </Box>
        </Container>

        <div  className={`object-cover ${index === 1 ? `md:order-1` : ``} ${index === 3 ? `md:order-1` : ``}`}>
          <img src={url} alt="image"
          className="w-full rounded-2xl object-scale-down shadow-md shadow-slate-600" />
        </div>
      </Container>
    </Container>
  );
}
