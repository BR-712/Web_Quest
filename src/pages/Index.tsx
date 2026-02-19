import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/landing/HeroSection";
import ImpactStats from "@/components/landing/ImpactStats";
import ServicesSection from "@/components/landing/ServicesSection";
import WhyQuest from "@/components/landing/WhyQuest";
import ClientsSection from "@/components/landing/ClientsSection";
import TeamSection from "@/components/landing/TeamSection";
import ContactSection from "@/components/landing/ContactSection";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ImpactStats />
        <ServicesSection />
        <WhyQuest />
        <ClientsSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
