import SpanText from "/src/ui/SpanText";
import Group from "/src/ui/Group";
import Box from "/src/ui/Box";

import { getStatusColor } from "/src/helper/helpers";

export default function Legend({ status }) {
  const statusColor = getStatusColor(status);
  return (
    <Group classname={"flex items-center space-x-2 text-xs"}>
      <Box
        adjustWidth={true}
        classname={`h-3 w-3 rounded-full ${statusColor}`}
      ></Box>
      <SpanText classname={"primary-text-color"}>{status}</SpanText>
    </Group>
  );
}