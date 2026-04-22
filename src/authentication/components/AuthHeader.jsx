import Header from "/src/ui/Header";
import Logo from "/src/components/Logo";
import Paragraph from "/src/ui/Paragraph";

export default function AuthHeader({ type }) {
  return (
    <Header 
      classname={"w-full flex flex-col items-center justify-start mb-6"}
    >
      <div 
        className={"w-full flex flex-row gap-2 items-center justify-start mb-12"}
      >
        <Logo show={true} />
        <Paragraph 
          classname={"mt-1 text-3xl font-bold text-slate-500"}
        >
          WalkWise
        </Paragraph>
      </div>
      <Paragraph 
        classname={"text-start w-full mt-1 text-2xl font-bold"}
      >
        {type ? "Create account" : "Login account"}
      </Paragraph>
    </Header>
  );
}
