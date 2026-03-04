import Container from "/src/ui/Container";
import SettingsHeader from "./components/SettingsHeader";
import SettingsDisplay from "./components/SettingsDisplay";

export default function Settings() {
  return (
    <Container adjust={true} classname={"flex h-full flex-col overflow-y-auto"}>
      <SettingsHeader />
      <SettingsDisplay />
    </Container>
  );
}
