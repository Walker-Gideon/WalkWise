import actions from "/src/data/dashboardActionsData";

export default function DashboardActions() {
  return <div>
    {actions.map((action, index) => ())}
  </div>;
}
