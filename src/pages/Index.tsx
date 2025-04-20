import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import FeaturesSection from "@/components/FeaturesSection";
import EquipmentSection from "@/components/EquipmentSection";
import CtaSection from "@/components/CtaSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroBanner />
        <FeaturesSection />
        <EquipmentSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;