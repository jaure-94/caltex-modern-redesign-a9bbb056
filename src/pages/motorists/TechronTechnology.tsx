import { Zap, Shield, Gauge, Leaf } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageHero from "@/components/reusable/PageHero";
import ContentSection from "@/components/reusable/ContentSection";
import FeatureGrid from "@/components/reusable/FeatureGrid";
import CTABanner from "@/components/reusable/CTABanner";

import heroImage from "@/assets/techron-hero.jpg";
import engineImage from "@/assets/techron-engine.jpg";
import drivingImage from "@/assets/techron-driving.jpg";
import fuelPump from "@/assets/fuel-pump.jpg";

const techronFeatures = [
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Cleans Engine Deposits",
    description: "Removes existing harmful deposits from fuel injectors and intake valves, restoring engine efficiency to like-new condition.",
  },
  {
    icon: <Gauge className="w-5 h-5" />,
    title: "Maximizes Power Output",
    description: "Restored fuel flow and cleaner combustion chambers deliver improved acceleration and throttle responsiveness.",
  },
  {
    icon: <Leaf className="w-5 h-5" />,
    title: "Reduces Emissions",
    description: "Cleaner combustion means fewer harmful exhaust emissions — better for your engine and for the environment.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Protects Critical Parts",
    description: "Shields fuel injectors, intake valves, and combustion chambers from future deposit build-up for long-term protection.",
  },
];

const TechronTechnology = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />

      <PageHero
        title="Techron® Technology"
        subtitle="Our most advanced fuel cleaning additive — trusted by motorists, mechanics, and manufacturers worldwide. Now with Clean & Glide Technology™."
        image={heroImage}
        imageAlt="Fuel nozzle dispensing premium Caltex petrol"
        label="Fuel Innovation"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Motorists", href: "/" },
          { label: "Products" },
          { label: "Techron® Technology" },
        ]}
      />

      <ContentSection
        label="The Science"
        heading="What is Techron® Technology?"
        body={[
          "Techron® is Caltex's proprietary fuel additive technology, included in every grade of Caltex petrol. It's the result of decades of research and development by Chevron scientists to create the most effective fuel system cleaning agent available.",
          "Unlike other fuel additives that simply mask engine problems, Techron® works at the molecular level to break down and remove harmful carbon deposits from fuel injectors, intake valves, and combustion chambers — restoring your engine to peak performance.",
        ]}
        image={engineImage}
        imageAlt="Clean engine components powered by Techron technology"
        imagePosition="right"
        features={[
          "Included in all grades of Caltex petrol at no extra cost",
          "Proven effective across thousands of independent tests",
          "Trusted by leading vehicle manufacturers worldwide",
          "Works from your very first tank of Caltex fuel",
        ]}
        ctaText="Learn More About Techron®"
      />

      <FeatureGrid
        label="Key Benefits"
        heading="Why Techron® Makes a Difference"
        subtitle="Every time you fill up with Caltex, Techron® goes to work cleaning your engine and keeping it running at its best."
        features={techronFeatures}
        columns={4}
        variant="muted"
      />

      <ContentSection
        label="Clean & Glide™"
        heading="Our Best Petrol Ever. Now Even Better."
        body={[
          "Clean & Glide Technology™ is the latest evolution of Techron®. It doesn't just clean — it also creates a protective friction-reducing layer on critical engine surfaces, reducing wear and improving fuel efficiency.",
          "Whether you're commuting in Johannesburg traffic or taking a road trip along the Garden Route, Clean & Glide Technology™ ensures your engine delivers smooth, responsive performance kilometre after kilometre.",
        ]}
        image={drivingImage}
        imageAlt="Family enjoying a road trip on a South African highway"
        imagePosition="left"
        variant="default"
        ctaText="Find a Caltex Station"
        ctaHref="/"
      />

      <FeatureGrid
        heading="Proven Performance, Real Results"
        features={[
          { title: "Up to 10% Better Fuel Economy", description: "Clean fuel injectors deliver the precise spray pattern needed for optimal combustion, reducing waste." },
          { title: "Restored Engine Power", description: "Removing deposits from intake valves restores airflow and engine breathing for maximum power output." },
          { title: "Smoother Idling", description: "Clean combustion chambers eliminate rough idling and hesitation common with deposit-laden engines." },
        ]}
        columns={3}
        variant="dark"
      />

      <ContentSection
        label="Available Everywhere"
        heading="Techron® in Every Grade of Caltex Fuel"
        body={[
          "You don't need to pay extra or choose a premium grade to benefit from Techron® technology. It's included in every litre of Caltex petrol — from 93 ULP to 95 ULP — at all 800+ Caltex stations across South Africa.",
          "Simply fill up at your nearest Caltex station and let Techron® go to work. With every tank, your engine gets cleaner, runs smoother, and performs better.",
        ]}
        image={fuelPump}
        imageAlt="Caltex fuel pump at a South African station"
        imagePosition="right"
        variant="muted"
      />

      <CTABanner
        heading="Ready to Experience the Difference?"
        subtitle="Fill up with Caltex and feel the power of Techron® technology. Find your nearest station today."
        primaryCta="Find a Station"
        primaryHref="/"
        secondaryCta="Contact Us"
        secondaryHref="/contact"
        variant="red"
      />

      <Footer />
    </div>
  );
};

export default TechronTechnology;
