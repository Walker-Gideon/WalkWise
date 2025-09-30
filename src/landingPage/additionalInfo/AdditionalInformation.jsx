import Container from "/src/ui/Container";
import additionaInformationData from "/src/data/additionalInformationData.js";
import InformationContent from "./components/InformationContent";

export default function AdditionalInformation() {
  return (
    <Container adjust={true} id="features" classname={"md:px-2 lg:px-16"}>
      {additionaInformationData.map((data, index) => (
        <Container key={index} adjust={true} classname={`my-25 medium:my-30 ${index === 0 || index === 2 ? `w-full rounded-4xl bg-slate-50` : ``}`}>
          <InformationContent
            index={index}
            icon={<data.icon className={`h-5 w-5 text-slate-600`} />}
            title={data.title}
            subtitle={data.subtitle}
            points={data.points}
            url={data.url}
          />
        </Container>
      ))}
    </Container>
  );
}
