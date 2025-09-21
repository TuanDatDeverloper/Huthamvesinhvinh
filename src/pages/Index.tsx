import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import Process from "@/components/Process";
import PricingPreview from "@/components/PricingPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <ServicesOverview />
        <Process />
        <PricingPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
