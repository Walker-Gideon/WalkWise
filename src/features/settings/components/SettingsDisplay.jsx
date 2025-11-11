import Card from "/src/components/Card";
import Paragraph from "/src/ui/Paragraph";
import HeaderText from "/src/ui/HeaderText";
import Header from "/src/ui/Header";
import Group from "/src/ui/Group";

export default function SettingsRight() {
  return (
    <Card classname={"mt-6 w-[50%] ml-5"}>
      <Header classname={"mb-4"}>
        <HeaderText variant="secondary">Profile Information</HeaderText>
        <Paragraph variant="small" classname={"dark:text-slate-400"}>
          Update your profile information visible to other users
        </Paragraph>
      </Header>

      <Group>
        <Group></Group>
      </Group>
    </Card>
  );
}
