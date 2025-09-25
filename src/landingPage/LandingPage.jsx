import AdditionalInformation from "./additionalInfo/AdditionalInformation";
import Footer from "./footer/Footer";
import Hero from "./hero/Hero";
import MoreInformation from "./infoOn/MoreInformation";
import LPHeader from "./landing-page-header/LPHeader";

export default function LandingPage() {
  return (
    <div>
      <LPHeader />
      <main>
        <Hero />
        <AdditionalInformation />
        <MoreInformation />
      </main>
      <Footer />
    </div>
  );
}
