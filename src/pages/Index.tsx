import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechronSection from "@/components/TechronSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import FuelPriceSection from "@/components/FuelPriceSection";
import CTASection from "@/components/CTASection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TechronSection />
      <ServicesSection />
      <AboutSection />
      <FuelPriceSection />
      <CTASection />
      <BlogSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
