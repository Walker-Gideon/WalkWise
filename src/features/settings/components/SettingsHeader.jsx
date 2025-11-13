import Heading from "/src/components/Heading";

export default function SettingsHeader() {
  return (
    <Heading
      headerText="Settings"
      paragraphText="Adjust your settings to suit your workflow."
      theme={true}
      paragraphStyling={"dark:text-slate-300"}
    ></Heading>
  );
}
