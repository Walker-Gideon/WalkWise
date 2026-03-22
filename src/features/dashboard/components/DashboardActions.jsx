import { LuZap } from "react-icons/lu";

import Group from "/src/ui/Group";
import Button from "/src/ui/Button";
import SpanText from "/src/ui/SpanText";
import Card from "/src/components/Card";
import Badge from "/src/components/Badge";
import HeaderText from "/src/ui/HeaderText";
import actions from "/src/data/dashboardActionsData";

export default function DashboardActions() {
  return (
    <Card status={true}>
      <HeaderText type="semiHeader">
        <LuZap className="icons" />
        <SpanText>Quick Actions</SpanText>
      </HeaderText>
      <Group classname={"grid grid-cols-2 lg:grid-cols-4 gap-4"}>
        {actions.map((action, index) => (
          <Button key={index} group={true} to={action.to}>
            <Badge type="secondary" status={true} classname={"transition-colors"}>
              <action.icon className={"icons group-hover:text-slate-500"} />
            </Badge>
            <SpanText classname={"text-xs lg:text-sm font-medium secondary-text-color"}>
              {action.text}
            </SpanText>
          </Button>
        ))}
      </Group>
    </Card>
  );
}
