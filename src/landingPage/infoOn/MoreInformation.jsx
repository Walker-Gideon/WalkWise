import { LuCheck } from "react-icons/lu";
import informationData from "/src/data/moreInformationData"

export default function MoreInformation() {
  return (
  <div className="middle:grid middle:grid-cols-3 middle:items-center middle:gap-10 bg-slate-100 p-8 md:p-14 lg:px-35 lg:py-20">
    <header className="middle:col-span-2 mb-8 text-left font-medium">
      <h1 className="middle:text-6xl text-4xl font-bold">Why WalkWise?</h1>

      <p className="py-1 text-sm text-slate-500 md:text-base">
        Forget last-minute cramming — learn the smarter way.
      </p>

      <p className="text-xl font-semibold md:text-2xl">
        WalkWise isn’t just another study app. It’s your all-in-one learning
        assistant, built for real students facing real challenges.
      </p>
    </header>

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
