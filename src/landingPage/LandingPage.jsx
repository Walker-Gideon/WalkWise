import Hero from "./hero/Hero";
import Footer from "./footer/Footer";
import MoreInformation from "./infoOn/MoreInformation";
import LandindPageHeader from "./landing-page-header/LandindPageHeader";
import AdditionalInformation from "./additionalInfo/AdditionalInformation";

export default function LandingPage() {
  return (
    <div className="overflow-x-hidden">
      <LandindPageHeader />
      <Hero />
      <main className="mt-8 h-full">
        <AdditionalInformation />
        <MoreInformation />
      </main>
      <Footer />
    </div>
  );
}
