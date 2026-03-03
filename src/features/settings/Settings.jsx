import SettingsDisplay from "./components/SettingsDisplay";
import SettingsHeader from "./components/SettingsHeader";
import Container from "/src/ui/Container";

export default function Settings() {
  return (
    <Container adjust={true} classname={"h-full"}>
      <SettingsHeader />
      <SettingsDisplay />
    </Container>
  );
}
