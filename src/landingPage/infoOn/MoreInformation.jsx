import { LuCheck } from "react-icons/lu";
import informationData from "/src/data/moreInformationData"
import InformationOnHeader from "./components/InformationOnHeader"

export default function MoreInformation() {
  return (
  <div className="middle:grid middle:grid-cols-3 middle:items-center middle:gap-10 bg-slate-100 p-8 md:p-14 lg:px-35 lg:py-20">
    <InformationOnHeader />

    <div className="text-left">
      {informationData.map((data, index) => (
        <div key={index} className="mb-2 flex gap-2">
          <ul className="flex gap-2 py-0.5 text-sm md:text-[0.9rem]">
            <li>
              <span classname="rounded-full p-1 bg-gradient-to-r from-slate-200 to-slate-300">
                <LuCheck className="h-3 w-3 text-slate-600" />
              </span>
            </li>
            <li>
              <div className="middle:text-[0.8rem] text-xs text-slate-800">
                <p className="middle:text-[0.9rem] text-sm font-medium text-slate-900">
                  {data.header}
                </p>
                <p className="text-slate-500">{data.text}</p>
              </div>
            </li>
          </ul>
        </div>
      ))}
    </div>
  </div>
)};
