import { Car, Bike, Truck, Shield, Droplets, Thermometer, Gauge } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageHero from "@/components/reusable/PageHero";
import ContentSection from "@/components/reusable/ContentSection";
import FeatureGrid from "@/components/reusable/FeatureGrid";
import CTABanner from "@/components/reusable/CTABanner";

import heroImage from "@/assets/lubricants-hero.jpg";
import pouringImage from "@/assets/lubricants-pouring.jpg";
import mechanicImage from "@/assets/lubricants-mechanic.jpg";
import motorcycleImage from "@/assets/lubricants-motorcycle.jpg";

const lubricantBenefits = [
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Superior Engine Protection",
    description: "Advanced formulations guard against wear, corrosion, and harmful deposits to extend engine life.",
  },
  {
    icon: <Thermometer className="w-5 h-5" />,
    title: "Thermal Stability",
    description: "Maintains viscosity and performance even under extreme temperatures and heavy-load conditions.",
  },
  {
    icon: <Droplets className="w-5 h-5" />,
    title: "Fuel Economy",
    description: "Low-friction technology reduces energy loss, helping you get more kilometres from every litre.",
  },
  {
    icon: <Gauge className="w-5 h-5" />,
    title: "Peak Performance",
    description: "Keeps engines running smoothly with optimised lubrication for maximum power output.",
  },
];

const vehicleTypes = [
  {
    icon: <Car className="w-5 h-5" />,
    title: "Petrol Cars & Vans",
    description: "Havoline® provides advanced engine protection for your car or van, improving performance and maximising fuel economy.",
  },
  {
    icon: <Truck className="w-5 h-5" />,
    title: "Diesel Cars & Pickups",
    description: "Delo® delivers heavy-duty protection for diesel engines, ensuring reliability and extended drain intervals.",
  },
  {
    icon: <Bike className="w-5 h-5" />,
    title: "Motorcycles & Scooters",
    description: "Havoline® Super 4T keeps your motorcycle engine, gearbox, and wet clutch performing at their best.",
  },
];

const Lubricants = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />

      <PageHero
        title="Lubricants"
        subtitle="Explore premium Havoline® and Delo® engine oils, specially designed to enhance protection and performance in your petrol or diesel vehicles."
        image={heroImage}
        imageAlt="Caltex Havoline and Delo lubricant products"
        label="Motorists"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Motorists", href: "/" },
          { label: "Products" },
          { label: "Lubricants" },
        ]}
      />

      <ContentSection
        label="Our Range"
        heading="The Right Oil for Every Engine"
        body={[
          "To help you make the best choice for your vehicle, Caltex offers a comprehensive range of lubricants for all types of vehicles — from everyday commuters to heavy-duty commercial fleets.",
          "Our Havoline® and Delo® product lines are formulated with cutting-edge additive technology to deliver maximum protection, improved fuel economy, and longer engine life.",
        ]}
        image={pouringImage}
        imageAlt="Premium motor oil being poured into an engine"
        imagePosition="right"
        features={[
          "Full synthetic, semi-synthetic, and mineral options",
          "Meets and exceeds leading OEM specifications",
          "Available at 800+ Caltex stations nationwide",
          "Trusted by millions of motorists worldwide",
        ]}
        ctaText="Find a Station"
        ctaHref="/find-a-station"
      />

      <FeatureGrid
        label="Vehicle Types"
        heading="Lubricants for Every Vehicle"
        subtitle="Whether you drive a sedan, a pickup, or ride a motorcycle — we have the perfect oil for you."
        features={vehicleTypes}
        columns={3}
        variant="muted"
      />

      <FeatureGrid
        label="Why Caltex Lubricants"
        heading="Engineered for Protection & Performance"
        subtitle="Every Caltex lubricant is backed by decades of research and formulated with advanced additive technology."
        features={lubricantBenefits}
        columns={4}
        variant="default"
      />

      <ContentSection
        label="Havoline®"
        heading="Advanced Protection for Petrol Engines"
        body={[
          "Havoline® with Deposit Shield® Technology is our flagship motor oil for passenger cars and vans. It actively prevents harmful deposit formation while cleaning existing deposits for restored engine performance.",
          "Available in full synthetic, semi-synthetic, and mineral grades to suit every driving need and budget — from city commuting to long-distance touring.",
        ]}
        image={mechanicImage}
        imageAlt="Mechanic servicing engine with Havoline motor oil"
        imagePosition="left"
        variant="default"
        ctaText="Explore Havoline®"
      />

      <ContentSection
        label="Motorcycles"
        heading="Havoline® Super 4T for Two-Wheelers"
        body={[
          "Specially formulated for 4-stroke motorcycles and scooters, Havoline® Super 4T delivers outstanding protection for your engine, gearbox, and wet clutch — all from a single oil.",
          "Its advanced formula resists thermal breakdown and maintains stable viscosity, ensuring smooth gear shifts and reliable performance in every riding condition.",
        ]}
        image={motorcycleImage}
        imageAlt="Sport motorcycle on a scenic mountain road"
        imagePosition="right"
        variant="muted"
      />

      <FeatureGrid
        heading="Trusted Performance, Proven Results"
        features={[
          { title: "Extended Engine Life", description: "Superior wear protection keeps critical engine components in peak condition for longer." },
          { title: "Cleaner Engines", description: "Deposit Shield® technology actively prevents sludge and varnish build-up." },
          { title: "Reduced Emissions", description: "Cleaner combustion and optimised lubrication contribute to lower exhaust emissions." },
        ]}
        columns={3}
        variant="dark"
      />

      <CTABanner
        heading="Find the Right Oil for Your Vehicle"
        subtitle="Visit your nearest Caltex station or use our product selector to find the perfect lubricant match."
        primaryCta="Find a Station"
        primaryHref="/find-a-station"
        secondaryCta="Contact Us"
        secondaryHref="/contact"
        variant="red"
      />

      <Footer />
    </div>
  );
};

export default Lubricants;
