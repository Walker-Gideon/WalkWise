import Container from "/src/ui/Container";
import SettingsHeader from "./components/SettingsHeader";
import SettingsDisplay from "./components/SettingsDisplay";

export default function Settings() {
  return (
    <Container adjust={true} classname={"h-full overflow-y-auto"}>
      <SettingsHeader />
      <SettingsDisplay />
    </Container>
  );
}
