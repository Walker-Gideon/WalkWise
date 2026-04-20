import Container from "/src/ui/Container";
import InformationContent from "./components/InformationContent";

import additionaInformationData from "/src/data/additionalInformationData.js";

export default function AdditionalInformation() {
  return (
    <Container 
      adjust={true} 
      id="features" 
      classname={"md:px-8 lg:px-16 px-6"}
    >
      {additionaInformationData.map((data, index) => (
        <Container 
          key={index} 
          adjust={true} 
          classname={`my-25 medium:my-30 ${index === 0 || index === 2 ? `w-full rounded-4xl bg-slate-50` : ``}`}
        >
          <InformationContent
            icon={<data.icon className={`h-5 w-5 text-slate-600`} />}
            index={index}
            url={data.url}
            title={data.title}
            points={data.points}
            subtitle={data.subtitle}
          />
        </Container>
      ))}
    </Container>
  );
}
