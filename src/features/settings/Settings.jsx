import SettingsHeader from "./components/SettingsHeader";
import SettingsDisplay from "./components/SettingsDisplay";
import Container from "/src/ui/Container";

export default function Settings() {
  return (
    <Container adjust={true}>
      <SettingsHeader />
      <SettingsDisplay />
    </Container>
  );
}
