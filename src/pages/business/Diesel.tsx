import { Fuel, Shield, Gauge, Zap, Droplets, Factory, Truck, Flame } from "lucide-react";
import PageHero from "@/components/reusable/PageHero";
import ContentSection from "@/components/reusable/ContentSection";
import FeatureGrid from "@/components/reusable/FeatureGrid";
import CTABanner from "@/components/reusable/CTABanner";

import heroImage from "@/assets/diesel-hero.jpg";
import nozzleImage from "@/assets/diesel-nozzle.jpg";
import fleetImage from "@/assets/diesel-fleet.jpg";

const dieselBenefits = [
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Keeps Injectors Clean",
    description: "Techron® D's proven cleaning power removes harmful deposits from fuel injectors, restoring optimal spray patterns.",
  },
  {
    icon: <Gauge className="w-5 h-5" />,
    title: "Maximises Fuel Economy",
    description: "Cleaner injectors mean more efficient combustion — so you get more kilometres from every litre of diesel.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Restores Engine Power",
    description: "By removing deposits that hinder fuel-air mixing, Techron® D helps restore lost power and acceleration.",
  },
  {
    icon: <Droplets className="w-5 h-5" />,
    title: "Reduces Foaming",
    description: "Anti-foam technology ensures faster, cleaner fill-ups with less splashback at the pump.",
  },
];

const industryApplications = [
  {
    icon: <Truck className="w-5 h-5" />,
    title: "Transport & Logistics",
    description: "Keep long-haul fleets running at peak efficiency with reliable diesel that protects injectors over high mileage.",
  },
  {
    icon: <Factory className="w-5 h-5" />,
    title: "Industrial & Manufacturing",
    description: "Suitable for generators, boilers, and heavy machinery — replacing heating oil for steam raising and industrial heating.",
  },
  {
    icon: <Flame className="w-5 h-5" />,
    title: "Mining & Construction",
    description: "High cetane index ensures easy start-up and smooth combustion for demanding off-road and site equipment.",
  },
  {
    icon: <Fuel className="w-5 h-5" />,
    title: "Agriculture",
    description: "Dependable performance for tractors, harvesters, and irrigation pumps across South Africa's farming regions.",
  },
];

const Diesel = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title="Caltex Diesel Fuel"
        subtitle="Premium diesel with Techron® D technology — engineered for cleaner injectors, optimal fuel economy, and reliable performance across all diesel engines."
        image={heroImage}
        imageAlt="Caltex diesel truck on a South African highway"
        label="Business"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Business" },
          { label: "Products" },
          { label: "Diesel Fuel" },
        ]}
      />

      <ContentSection
        label="Techron® D"
        heading="A Clean Engine Is a Powerful Engine"
        body={[
          "Caltex Diesel with Techron® D is a premium performance diesel suitable for all diesel-powered vehicles. Techron® D's proven cleaning power helps keep fuel injectors clean, protects against corrosion, and reduces foaming while filling up.",
          "In diesel engines, the fuel injector nozzle can be as narrow as the width of two human hairs — yet these injectors sit inside the combustion chamber, exposed to extreme heat and vulnerable to deposit formation. Deposits hinder the fuel-air mixing process, causing inefficient combustion.",
        ]}
        image={nozzleImage}
        imageAlt="Diesel fuel nozzle filling a truck"
        imagePosition="right"
        features={[
          "Euro 2M standards with 500ppm sulphur content",
          "High cetane index for easy start-up and smooth combustion",
          "Controlled distillation characteristics for reliable performance",
          "Sufficient viscosity for proper fuel pump and injector lubrication",
        ]}
        ctaText="Find a Station"
        ctaHref="/find-a-station"
      />

      <FeatureGrid
        label="Proven Benefits"
        heading="Why Choose Caltex Diesel?"
        subtitle="Standardised engine and laboratory tests have demonstrated that Techron® D cleans your engine and protects it for the long run."
        features={dieselBenefits}
        columns={4}
        variant="muted"
      />

      <ContentSection
        label="Fleet Solutions"
        heading="Compatible with All Diesel Engines"
        body={[
          "When you choose Caltex Diesel with Techron® D, you're choosing optimal protection from corrosion and foaming for all diesel engines — old and new. All you have left to do is enjoy optimum fuel economy, reliable performance, and a smoother drive.",
          "Our diesel can also replace heating oil for steam raising and industrial heating purposes, whether in small domestic-type boilers or large industrial packaged boilers.",
        ]}
        image={fleetImage}
        imageAlt="Fleet of commercial trucks at a logistics depot"
        imagePosition="left"
        variant="default"
        ctaText="Contact Our Sales Team"
        ctaHref="/contact"
      />

      <FeatureGrid
        label="Industries We Serve"
        heading="Diesel for Every Application"
        subtitle="From long-haul logistics to heavy industry, Caltex Diesel delivers dependable performance wherever your business operates."
        features={industryApplications}
        columns={4}
        variant="dark"
      />

      <CTABanner
        heading="Power Your Fleet with Caltex Diesel"
        subtitle="Speak to us about bulk supply, fleet cards, and how Techron® D can upgrade your diesel fuel."
        primaryCta="Get in Touch"
        primaryHref="/contact"
        secondaryCta="Find a Station"
        secondaryHref="/find-a-station"
        variant="red"
      />
    </div>
  );
};

export default Diesel;
