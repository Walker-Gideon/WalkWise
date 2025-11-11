import SettingsHeader from "./components/SettingsHeader";
import SettingsRight from "./components/SettingsRight";
import Container from "/src/ui/Container";

export default function Settings() {
  return (
    <Container adjust={true}>
      <SettingsHeader />
      <SettingsRight />
    </Container>
  );
}
