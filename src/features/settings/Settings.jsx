import SettingsHeader from "./components/SettingsHeader";
import SettingsLeft from "./components/SettingsLeft";
import SettingsRight from "./components/SettingsRight";
import Container from "/src/ui/Container";
import Main from "/src/ui/Main";

export default function Settings() {
  return (
    <Container>
      <SettingsHeader />
      <Main classname={""}>
        <SettingsRight />
        <SettingsLeft />
      </Main>
    </Container>
  );
}
