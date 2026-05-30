import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { CoreBankingSection } from "@/components/sections/CoreBankingSection";
import { DigitalBankingSection } from "@/components/sections/DigitalBankingSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { HeroSection } from "@/components/sections/HeroSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { Footer } from "@/components/layout/Footer";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "N7 Banking",
  url: "https://banking-application-alpha.vercel.app",
  brand: [
    {
      "@type": "Brand",
      name: "N7"
    },
    {
      "@type": "Brand",
      name: "CB7"
    }
  ],
  sameAs: ["https://www.linkedin.com"]
};

export default function Home() {
  return (
    <main>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        type="application/ld+json"
      />
      <HeroSection />
      <SolutionsSection />
      <CoreBankingSection />
      <DigitalBankingSection />
      <InsightsSection />
      <CaseStudiesSection />
      <FinalCta />
      <Footer />
    </main>
  );
}
