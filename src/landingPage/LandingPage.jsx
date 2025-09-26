import AdditionalInformation from "./additionalInfo/AdditionalInformation";
import Footer from "./footer/Footer";
import Hero from "./hero/Hero";
import MoreInformation from "./infoOn/MoreInformation";
import LandindPageHeader from "./landing-page-header/LandindPageHeader";

export default function LandingPage() {
  return (
    <div className="overflow-hidden">
      <LandindPageHeader />
      <Hero />
      {/* lg:px-30 */}
      <main className="h-full px-4 md:px-8">
        <AdditionalInformation />
        <MoreInformation />
      </main>
      <Footer />
    </div>
  );
}
