import { useEffect } from "react";

import Hero from "./hero/Hero";
import Footer from "./footer/Footer";
import MoreInformation from "./infoOn/MoreInformation";
import LandingPageHeader from "./landing-page-header/LandingPageHeader";
import AdditionalInformation from "./additionalInfo/AdditionalInformation";

export default function LandingPage() {
  useEffect(() => {
    document.title = "WalkWise | Build Habits That Power Your Mind";
    
    // Add/Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "Unlock a world of knowledge with expertly crafted study tools — flashcards, notes, AI help, and motivation — all in one place to power your learning with WalkWise.";
  }, []);

  return (
    <div className="overflow-x-clip">
      <LandingPageHeader />
      <Hero />
      <main className="mt-8 h-full">
        <AdditionalInformation />
        <MoreInformation />
      </main>
      <Footer />
    </div>
  );
}

