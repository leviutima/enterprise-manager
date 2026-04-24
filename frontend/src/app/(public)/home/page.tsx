import { HeroSection } from "./components/hero-section";
import { SplitSection } from "./components/split-section";
import { HowItWorks } from "./components/how-works";
import { FeaturesGrid } from "./components/features-grid";
import { Footer } from "@/src/shared/ui/footer";
import { CTASection } from "./components/cta";
import { Navbar } from "@/src/shared/ui/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <SplitSection />
      <HowItWorks />
      <FeaturesGrid />
      <CTASection />
      <Footer />
    </main>
  );
}
