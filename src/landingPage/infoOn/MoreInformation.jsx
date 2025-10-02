import { LuCheck } from "react-icons/lu";
import InformationOnHeader from "./components/InformationOnHeader"
import informationData from "/src/data/moreInformationData"
import UnorderedList from "/src/ui/UnorderedList"
import Container from "/src/ui/Container"
import SpanText from "/src/ui/SpanText"
import List from "/src/ui/List"
import Box from "/src/ui/Box"

export default function MoreInformation() {
  return (
  <Container adjust={true} classname="middle:grid middle:grid-cols-3 middle:items-center middle:gap-10 bg-slate-100 p-8 md:p-14 lg:px-35 lg:py-20">
    <InformationOnHeader />

    <Box adjustWidth={true} classname="text-left">
      {informationData.map((data, index) => (
        <Box adjustWidth={true} key={index} classname="mb-2 flex items-center gap-2">
          <UnorderedList classname="flex gap-2 py-0.5 text-sm md:text-[0.9rem]">
            <List>
              <Box adjustWidth={true} classname="rounded-full p-1 bg-gradient-to-r from-slate-200 to-slate-300">
                <LuCheck className="h-3 w-3 text-slate-600" />
              </Box>
            </List>
            <List>
              <div className="middle:text-[0.8rem] text-xs text-slate-800">
                <p className="middle:text-[0.9rem] text-sm font-medium text-slate-900">
                  {data.header}
                </p>
                <p className="text-slate-500">{data.text}</p>
              </div>
            </List>
          </UnorderedList>
        </Box>
      ))}
    </Box>
  </Container>
)};
