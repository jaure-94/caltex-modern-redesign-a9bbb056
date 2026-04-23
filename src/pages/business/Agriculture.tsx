import PageHero from "@/components/reusable/PageHero";
import ContentSection from "@/components/reusable/ContentSection";
import FeatureGrid from "@/components/reusable/FeatureGrid";
import CTABanner from "@/components/reusable/CTABanner";
import { Tractor, Droplets, Wrench, ShieldCheck, Gauge, Leaf, Settings, Clock } from "lucide-react";
import heroImage from "@/assets/agriculture-hero.jpg";
import tractorImage from "@/assets/agriculture-tractor.jpg";
import lubricantImage from "@/assets/agriculture-lubricant.jpg";
import harvesterImage from "@/assets/agriculture-harvester.jpg";

const Agriculture = () => {
  return (
    <main>
      <PageHero
        label="Industries"
        title="Powering South African Agriculture"
        subtitle="Specialised fuels and lubricants engineered to keep your farming operation running through every season — from planting to harvest."
        image={heroImage}
        imageAlt="Aerial view of a tractor harvesting a green farm field"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Motorists", href: "/" },
          { label: "Industries" },
          { label: "Agriculture" },
        ]}
      />

      <ContentSection
        label="Built for the Farm"
        heading="Reliability you can rely on, season after season"
        body={[
          "Agricultural equipment works in some of the harshest conditions imaginable — extreme heat, dust, heavy loads and long operating hours. Caltex understands these demands.",
          "Our specialised range of fuels and lubricants is designed to protect your tractors, harvesters, irrigation pumps and stationary engines, helping to extend service life and reduce costly downtime when every hour in the field counts.",
        ]}
        image={tractorImage}
        imageAlt="Tractor working a farm field at golden hour"
        imagePosition="right"
        features={[
          "Extended drain intervals to maximise productive uptime",
          "Superior wear protection in dusty, high-load conditions",
          "Reliable cold-start and high-temperature performance",
          "Compatible with leading OEM equipment manufacturers",
        ]}
        ctaText="Find a Caltex Station"
        ctaHref="/find-a-station"
      />

      <FeatureGrid
        label="Our Promise"
        heading="Why farmers choose Caltex"
        subtitle="From row-crop tractors to grain harvesters and irrigation systems, our products are formulated to perform when it matters most."
        variant="muted"
        columns={4}
        features={[
          {
            icon: <ShieldCheck className="w-6 h-6" />,
            title: "Equipment Protection",
            description: "Advanced additive technology guards critical engine and hydraulic components against wear and deposits.",
          },
          {
            icon: <Clock className="w-6 h-6" />,
            title: "Maximised Uptime",
            description: "Extended service intervals mean less time in the workshop and more time in the field during peak season.",
          },
          {
            icon: <Gauge className="w-6 h-6" />,
            title: "Fuel Efficiency",
            description: "Caltex Diesel with Techron® D delivers cleaner combustion and improved fuel economy across your fleet.",
          },
          {
            icon: <Leaf className="w-6 h-6" />,
            title: "Lower Emissions",
            description: "Cleaner-burning fuels help meet modern emissions standards while protecting after-treatment systems.",
          },
        ]}
      />

      <ContentSection
        label="Lubricants for Agriculture"
        heading="Delo® and Havoline® — engineered for the field"
        body={[
          "Caltex Delo® heavy-duty engine oils, transmission fluids and greases are formulated with ISOSYN® Technology to deliver outstanding wear protection, deposit control and oxidation stability.",
          "Whether you operate a single tractor or a large mixed fleet, our lubricants help you simplify product inventory while delivering proven performance across diesel engines, hydraulic systems, gearboxes and final drives.",
        ]}
        image={lubricantImage}
        imageAlt="Lubricant being poured into agricultural machinery"
        imagePosition="left"
        features={[
          "Delo 400 multigrade engine oils for modern diesel engines",
          "Multi-purpose tractor hydraulic fluids (THF/UTTO)",
          "Heavy-duty greases for chassis and wheel bearings",
          "Industrial gear oils for stationary equipment",
        ]}
        ctaText="Explore Lubricants"
        ctaHref="/motorists/products/lubricants"
      />

      <FeatureGrid
        heading="Solutions across your operation"
        subtitle="A complete portfolio designed to support every machine on the farm — powered by decades of agricultural expertise."
        variant="default"
        columns={3}
        features={[
          {
            icon: <Tractor className="w-6 h-6" />,
            title: "Tractors & Harvesters",
            description: "High-performance diesel and engine oils engineered for the long hours and heavy loads of modern row-crop and harvesting equipment.",
          },
          {
            icon: <Droplets className="w-6 h-6" />,
            title: "Irrigation & Pumps",
            description: "Reliable lubricants and fuels for stationary diesel pumps, centre pivots and pressurised irrigation systems.",
          },
          {
            icon: <Wrench className="w-6 h-6" />,
            title: "Hydraulics & Transmissions",
            description: "Multi-purpose tractor fluids that protect transmissions, hydraulic systems, wet brakes and final drives in one product.",
          },
          {
            icon: <Settings className="w-6 h-6" />,
            title: "Stationary Engines",
            description: "Long-life lubricants for generators, compressors and gearboxes used across crop processing and storage facilities.",
          },
          {
            icon: <Gauge className="w-6 h-6" />,
            title: "Diesel with Techron® D",
            description: "Premium diesel that cleans injectors, restores power and delivers improved fuel economy across mixed fleets.",
          },
          {
            icon: <ShieldCheck className="w-6 h-6" />,
            title: "Greases & Specialties",
            description: "Heavy-duty greases for high-load bearings, pivot points and exposed components in dusty environments.",
          },
        ]}
      />

      <ContentSection
        label="A Trusted Partner"
        heading="More than just a supplier"
        body={[
          "For nearly a century, Caltex has worked alongside South African farmers — from the wheatlands of the Western Cape to the maize fields of the Free State and the sugar estates of KwaZulu-Natal.",
          "Backed by Chevron's global research and a nationwide distribution network, our team understands local conditions and is ready to support your operation with the right products, technical advice and reliable supply.",
        ]}
        image={harvesterImage}
        imageAlt="Combine harvester at work in a wheat field at sunset"
        imagePosition="right"
        variant="muted"
        features={[
          "Nationwide bulk fuel and lubricant delivery",
          "On-site technical support and oil analysis programmes",
          "Tailored supply solutions for commercial farming operations",
        ]}
      />

      <CTABanner
        heading="Ready to power your operation?"
        subtitle="Speak to our agricultural specialists about fuel, lubricants and bulk supply tailored to your farm."
        primaryCta="Contact Our Team"
        primaryHref="/contact"
        secondaryCta="Explore Diesel"
        secondaryHref="/business/products/diesel"
        variant="red"
      />
    </main>
  );
};

export default Agriculture;