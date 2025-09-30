import { LuCheck } from "react-icons/lu";
import UnorderedList from "/src/ui/UnorderedList";
import Container from "/src/ui/Container";
import Paragraph from "/src/ui/Paragraph";
import SpanText from "/src/ui/SpanText";
import List from "/src/ui/List";
import Box from "/src/ui/Box";

export default function InformationTextContent({ index, icon, title, subtitle, points }) {
  return (
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
          <UnorderedList
            key={index}
              classname="flex gap-2 py-0.5 text-sm md:text-[0.9rem]"
          >
            <List>
              <Box
                adjustWidth={true}
                classname="rounded-full p-1 bg-gradient-to-r from-slate-200 to-slate-300"
              >
                <LuCheck className="h-3 w-3 text-slate-600" />
              </Box>
            </List>
            <List classname="font-medium text-slate-500">{data}</List>
          </UnorderedList>
        ))}
      </Box>
    </Container>
  )
}
