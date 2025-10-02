import AdditionalInformation from "./additionalInfo/AdditionalInformation";
import Footer from "./footer/Footer";
import Hero from "./hero/Hero";
import MoreInformation from "./infoOn/MoreInformation";
import LandindPageHeader from "./landing-page-header/LandindPageHeader";

export default function LandingPage() {
  return (
    <div>
      <LandindPageHeader />
      <Hero />
      <main className="my-8 h-full">
        <AdditionalInformation />
        <MoreInformation />
      </main>
      <Footer />
    </div>
  );
}
