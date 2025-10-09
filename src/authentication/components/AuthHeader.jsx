import Header from "/src/ui/Header";
import Logo from "/src/ui/Logo";
import Paragraph from "/src/ui/Paragraph";

export default function AuthHeader() {
  return (
    <Header classname={"flex flex-col items-center justify-center"}>
      <Logo show={true} />
      <Paragraph classname="medium:text-base middle:text-lg mt-1 text-sm font-bold text-slate-500">
        WalkWise
      </Paragraph>
    </Header>
  );
}
