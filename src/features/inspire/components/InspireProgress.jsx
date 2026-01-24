import HeaderText from "/src/ui/HeaderText";
import Paragraph from "/src/ui/Paragraph";
import Badge from "/src/components/Badge";
import SpanText from "/src/ui/SpanText";
import Card from "/src/components/Card";
import Group from "/src/ui/Group";
import Box from "/src/ui/Box";

import { useGeneral } from "/src/contexts/GeneralContext";
import { useSuccessRate } from "/src/hook/useSuccessRate";
import { useSessions } from "/src/features/schedule/hooks/useSessions";

export default function InspireProgress() {
  const { weeklyData } = useGeneral();

  const { sessions } = useSessions();
  const successRate = useSuccessRate(sessions);

  console.log(successRate);

  return (
    <Card>
      <HeaderText type="secondary" classname={"mb-4"}>
        Study Progress
      </HeaderText>

      <Group classname={"mb-8"}>
        <HeaderText classname={"secondary-text-color mb-2 text-sm font-medium"}>Weekly Study Heatmap</HeaderText>

        <Group classname={"medium:gap-2 grid grid-cols-7 gap-1"}>
          {weeklyData.map((data, index) => (
            <div key={index} className="flex flex-col items-center">
              <SpanText className="mb-1 text-xs text-slate-500 dark:text-slate-400">
                {data.day}
              </SpanText>
              <div
                className={`h-12 w-full rounded-md transition-colors duration-200 ${
                  data.minutes > 60
                    ? "bg-emerald-600"
                    : data.minutes > 30
                      ? "bg-emerald-500"
                      : data.minutes > 0
                        ? "bg-emerald-300"
                        : "bg-slate-200 dark:bg-slate-700"
                }`}
                title={`${data.minutes} minutes`}
              ></div>
            </div>
          ))}
        </Group>
        <Paragraph classname={"mt-3 text-center text-sm text-slate-500 dark:text-slate-400"}>
          Darker shades mean more study time.
        </Paragraph>
      </Group>

      {/* Consistency Bar Chart */}
      <div>
        <HeaderText classname={"secondary-text-color mb-2 text-sm font-medium"}>Consistency Score</HeaderText>

        <div className="flex items-center space-x-4">
          <div className="h-4 w-full rounded-full bg-slate-200 dark:bg-slate-700">
            <div
              className="h-4 rounded-full bg-emerald-600 transition-all duration-500"
                style={{
                  width: `${successRate}%`,
                }}
            ></div>
          </div>
          <span className="text-lg font-bold text-slate-900 dark:text-white">
            {successRate}%
          </span>
        </div>
        <Paragraph classname={"mt-2 text-sm text-slate-500 dark:text-slate-400"}>
          Your overall study consistency.
        </Paragraph>
      </div>
    </Card>
  );
}
