import {
  LuTarget,
  LuRectangleVertical,
  LuClock,
  LuFlame,
} from "react-icons/lu";
import Group from "/src/ui/Group";

const status = [
  {
    icon: LuTarget,
    data: 0,
    text: "Mastery Cards",
  },
  {
    icon: LuRectangleVertical,
    data: 0,
    text: "Cards Today",
  },
  {
    icon: LuClock,
    data: 0 + "m",
    text: "Study Time",
  },
  {
    icon: LuFlame,
    data: 0,
    text: "Day Streak",
  },
];

export default function DashboardStatus() {
  return (
    <Group classname="medium:grid-cols-2 grid grid-cols-1 gap-4 medium:gap-6 lg:grid-cols-4">
      {status.map((stats, index) => (
        /* dark:border-slate-700 dark:bg-slate-800/70 */
        <div
          key={index}
          className="rounded-2xl border border-stone-300 bg-white/70 p-6 backdrop-blur-xl transition-all duration-300 hover:shadow-lg"
        >
          <div className="mb-2 flex items-center justify-between">
            <div className="rounded-xl bg-gradient-to-r from-slate-200 to-slate-300 p-3 dark:from-slate-600 dark:to-slate-700">
              <stats.icon
                className={`h-5 w-5 text-slate-600 dark:text-slate-300`}
              />
            </div>
            <div className="text-right">
              <p //dark:text-white
                className="medium:text-xl text-lg font-bold text-slate-900"
              >
                {stats.data}
              </p>
              <p className="medium:text-sm text-xs text-nowrap text-slate-500 dark:text-slate-400">
                {stats.text}
              </p>
            </div>
          </div>
        </div>
      ))}
    </Group>
  );
}
