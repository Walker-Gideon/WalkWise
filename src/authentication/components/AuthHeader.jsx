import Header from "../../ui/Header";

export default function AuthHeader() {
  return (
    <Header>
      <div className="flex flex-col items-center justify-center">
        <Logo logo={true} />

        <p className="medium:text-base middle:text-lg mt-1 text-sm font-bold text-slate-500">
          WalkWise
        </p>
      </div>
    </Header>
  );
}
