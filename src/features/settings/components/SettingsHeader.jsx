import Heading from "/src/components/Heading";

export default function SettingsHeader() {
  return (
    <Heading
      headerText="Profile"
      paragraphText="Adjust your settings to suit your workflow."
      theme={true}
      paragraphStyling={"hidden md:block"}
    ></Heading>
  );
}
