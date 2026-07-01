import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionTransition from "@/components/effects/SectionTransition";
import StatsSection from "@/components/StatsSection";
import ModelsGrid from "@/components/ModelsGrid";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-20">
        <Hero />
        <SectionTransition />
        <StatsSection />
        <ModelsGrid />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
