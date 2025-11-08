import { LuFlame } from "react-icons/lu";

import Card from "/src/components/Card";

export default function InspireStreakCounter() {
  return (
    <Card>
      <LuFlame className="mx-auto mb-3 h-12 w-12 text-slate-600 dark:text-slate-300" />
      <p className="text-4xl font-bold text-slate-900 dark:text-white">
        {userData.streakCount}
      </p>
      <p className="mb-3 text-lg text-slate-600 dark:text-slate-300">
        Day Streak!
      </p>
      {userData.streakCount !== 0 && (
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Don’t break your streak!
        </p>
      )}
    </Card>
  );
}
