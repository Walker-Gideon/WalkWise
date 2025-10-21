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
              {/* dark:text-slate-400 */}
              <action.icon className={"icons"} />
            </Badge>
            <SpanText
              // dark:text-slate-300
              classname="text-sm font-medium text-slate-700"
            >
              {action.text}
            </SpanText>
          </Button>
        ))}
      </Group>
    </Card>
  );
}
