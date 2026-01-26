import { LuChartNoAxesCombined } from "react-icons/lu";

import HeaderText from "/src/ui/HeaderText";
import Paragraph from "/src/ui/Paragraph";
import SpanText from "/src/ui/SpanText";
import Card from "/src/components/Card";
import Group from "/src/ui/Group";
import Flex from "/src/ui/Flex";
import Box from "/src/ui/Box";

import { useUserData } from "/src/user/hook/useUserData";
import { useSuccessRate } from "/src/hook/useSuccessRate";
import { useSessions } from "/src/features/schedule/hooks/useSessions";

export default function InspireProgress() {
  const { userData } = useUserData();
  const { sessions } = useSessions();
  const successRate = useSuccessRate(sessions);

  // Calculate Weekly Data from userData.studyHistory
  const weeklyData = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i)); // Go back 6 days, then 5, ..., 0
    const dateKey = d.toISOString().split("T")[0];
    const dayName = d.toLocaleDateString("en-US", { weekday: "short" }); // "Mon", "Tue"

    return {
      day: dayName,
      minutes: userData?.studyHistory?.[dateKey] || 0,
    };
  });

  return (
    <Card>
      <HeaderText type="secondary" classname={"mb-4 flex items-center gap-2"}>
        <LuChartNoAxesCombined className="icons mb-1" />
        <SpanText>Study Progress</SpanText>
      </HeaderText>

      <Group classname={"mb-8"}>
        <HeaderText classname={"secondary-text-color mb-2 text-sm font-medium"}>Weekly Study Heatmap</HeaderText>

        <Group classname={"medium:gap-2 grid grid-cols-7 gap-1"}>
          {weeklyData.map((data, index) => (
            <Flex key={index} classname={"flex-col items-center"}>
              <SpanText classname={"mb-1 text-xs text-slate-500 dark:text-white"}>
                {data.day}
              </SpanText>
              <Box classname={`h-12 w-full rounded-md transition-colors duration-200 ${
                  data.minutes > 60
                    ? "bg-emerald-600"
                    : data.minutes > 30
                      ? "bg-emerald-500"
                      : data.minutes > 0
                        ? "bg-emerald-300"
                        : "bg-slate-200 dark:bg-slate-700"
                }`}
                title={`${data.minutes} minutes`}
              ></Box>
            </Flex>
          ))}
        </Group>
        <Paragraph classname={"mt-3 text-center text-sm text-slate-500 dark:text-slate-400"}>
          Darker shades mean more study time.
        </Paragraph>
      </Group>

      <Group classname={"mb-8"}>
        <HeaderText classname={"secondary-text-color mb-2 text-sm font-medium"}>Consistency Score</HeaderText>

        <Flex classname={"items-center space-x-4"}>
          <Box classname={"h-4 w-full rounded-full bg-slate-200 dark:bg-slate-700"}>
            <div className="h-4 rounded-full bg-emerald-600 transition-all duration-500"
                style={{
                  width: `${successRate}%`,
                }}
            ></div>
          </Box>
          <SpanText classname={"text-lg font-bold text-slate-900 dark:text-white"}>
            {successRate}%
          </SpanText>
        </Flex>
        <Paragraph classname={"mt-2 text-sm text-slate-500 dark:text-slate-400"}>
          Your overall study consistency.
        </Paragraph>
      </Group>
    </Card>
  );
}
