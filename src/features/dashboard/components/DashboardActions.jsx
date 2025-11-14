import actions from "/src/data/dashboardActionsData";
import HeaderText from "/src/ui/HeaderText";
import Badge from "/src/components/Badge";
import Card from "/src/components/Card";
import SpanText from "/src/ui/SpanText";
import Button from "/src/ui/Button";
import Group from "/src/ui/Group";

export default function DashboardActions() {
  return (
    <Card>
      <HeaderText type="secondary" classname="mb-4">
        Quick Actions
      </HeaderText>
      <Group classname="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {actions.map((action, index) => (
          <Button key={index} group={true} to={action.to}>
            <Badge type="secondary" classname="transition-colors">
              <action.icon className={"icons group-hover:text-slate-500"} />
            </Badge>
            <SpanText classname="text-sm font-medium secondary-text-color">
              {action.text}
            </SpanText>
          </Button>
        ))}
      </Group>
    </Card>
  );
}
