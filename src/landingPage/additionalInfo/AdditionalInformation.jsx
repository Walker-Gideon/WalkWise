import Container from "/src/ui/Container";
import additionaInformationData from "/src/data/additionalInformationData.js";
import InformationContent from "./components/InformationContent";

export default function AdditionalInformation() {
  return (
    // mx-3 md:mx-6 lg:mx-20
    <Container adjust={true} id="features" classname={""}>
      {additionaInformationData.map((data, index) => (
        // className={`mb-20 ${index === 0 || index === 2 ? `w-full rounded-4xl bg-slate-50` : ``} `}
        <Container key={index} adjust={true} classname={`my-35 ${data.color}`}>
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
