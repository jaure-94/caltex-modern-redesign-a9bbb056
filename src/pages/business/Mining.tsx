import PageHero from "@/components/reusable/PageHero";
import ContentSection from "@/components/reusable/ContentSection";
import FeatureGrid from "@/components/reusable/FeatureGrid";
import CTABanner from "@/components/reusable/CTABanner";
import { Pickaxe, Droplets, Wrench, ShieldCheck, Gauge, Settings, Clock, Truck, Mountain } from "lucide-react";
import heroImage from "@/assets/mining-hero.jpg";
import haulImage from "@/assets/mining-haul.jpg";
import lubricantImage from "@/assets/mining-lubricant.jpg";
import undergroundImage from "@/assets/mining-underground.jpg";

const Mining = () => {
  return (
    <main>
      <PageHero
        label="Industries"
        title="Lubrication that goes deeper"
        subtitle="Heavy-duty fuels, oils and greases engineered for the extreme demands of South African mining — surface, underground and processing."
        image={heroImage}
        imageAlt="Mining haul truck operating at an open-pit mine site"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Motorists", href: "/" },
          { label: "Industries" },
          { label: "Mining" },
        ]}
      />

      <ContentSection
        label="Built for the Mine"
        heading="Performance where the stakes are highest"
        body={[
          "Mining operations push equipment to its absolute limits — extreme loads, abrasive dust, shock loading, water ingress and continuous duty cycles. A single unplanned stop on a haul truck or shovel can cost thousands of rands an hour in lost production.",
          "Caltex offers a complete portfolio of fuels, engine oils, hydraulic fluids, gear oils and greases proven to extend component life, reduce total cost of ownership and keep your fleet productive across the harshest mining environments.",
        ]}
        image={haulImage}
        imageAlt="Large yellow haul truck at an open-cast mine"
        imagePosition="right"
        features={[
          "Extended drain intervals to maximise asset utilisation",
          "Outstanding wear protection under shock and high loads",
          "Water-resistant greases for wet underground conditions",
          "Approved for leading OEMs including Cat, Komatsu and Liebherr",
        ]}
        ctaText="Find a Caltex Station"
        ctaHref="/find-a-station"
      />

      <FeatureGrid
        label="Why Caltex"
        heading="The advantage at every level"
        subtitle="From open-pit shovels to underground LHDs and fixed plant, our products are formulated for the unique pressures of mining."
        variant="muted"
        columns={4}
        features={[
          {
            icon: <ShieldCheck className="w-6 h-6" />,
            title: "Component Protection",
            description: "Advanced additive chemistry shields engines, drivetrains and bearings against wear, oxidation and contamination.",
          },
          {
            icon: <Clock className="w-6 h-6" />,
            title: "Maximised Uptime",
            description: "Long-life formulations reduce service intervals and keep critical production assets earning, shift after shift.",
          },
          {
            icon: <Gauge className="w-6 h-6" />,
            title: "Lower Total Cost",
            description: "Premium lubricants and Diesel with Techron® D drive down fuel burn, oil consumption and maintenance spend.",
          },
          {
            icon: <Truck className="w-6 h-6" />,
            title: "Reliable Bulk Supply",
            description: "Nationwide distribution and on-site storage solutions keep your operation supplied — even at remote sites.",
          },
        ]}
      />

      <ContentSection
        label="Lubricants for Mining"
        heading="Delo® and Meropa® — proven underground and on surface"
        body={[
          "Caltex Delo® heavy-duty engine oils, transmission fluids and Meropa® industrial gear oils are formulated with ISOSYN® Technology to deliver superior wear protection, deposit control and oxidation stability under severe duty cycles.",
          "Whether you operate haul trucks, draglines, shovels, LHDs or fixed processing plant, our lubricants help simplify inventory while delivering OEM-approved performance across your entire mining fleet.",
        ]}
        image={lubricantImage}
        imageAlt="Industrial lubricant being applied to large mining gearbox"
        imagePosition="left"
        features={[
          "Delo 400 multigrade engine oils for off-highway diesel engines",
          "Meropa® heavy-duty industrial gear oils for mills and gearboxes",
          "Rando® hydraulic fluids for high-pressure mining hydraulics",
          "Multifak® and Delo® greases for pins, bushings and wire ropes",
        ]}
        ctaText="Explore Lubricants"
        ctaHref="/motorists/products/lubricants"
      />

      <FeatureGrid
        heading="Solutions across your operation"
        subtitle="A complete portfolio engineered to support every machine — from the pit face to the processing plant."
        variant="default"
        columns={3}
        features={[
          {
            icon: <Truck className="w-6 h-6" />,
            title: "Haul Trucks & Shovels",
            description: "Heavy-duty engine oils, transmission fluids and final drive lubricants for the largest off-highway equipment.",
          },
          {
            icon: <Mountain className="w-6 h-6" />,
            title: "Underground Equipment",
            description: "Specialist oils and water-resistant greases for LHDs, drill rigs, bolters and underground utility vehicles.",
          },
          {
            icon: <Settings className="w-6 h-6" />,
            title: "Mills & Crushers",
            description: "High-performance gear oils and circulating oils that protect SAG mills, ball mills, crushers and screens.",
          },
          {
            icon: <Droplets className="w-6 h-6" />,
            title: "Hydraulic Systems",
            description: "Premium hydraulic fluids that resist oxidation and wear, extending pump and valve life in tough conditions.",
          },
          {
            icon: <Gauge className="w-6 h-6" />,
            title: "Diesel with Techron® D",
            description: "Premium diesel that cleans injectors, restores lost power and improves fuel economy across mining fleets.",
          },
          {
            icon: <Pickaxe className="w-6 h-6" />,
            title: "Greases & Specialties",
            description: "Heavy-duty greases for high-load bearings, open gears, wire ropes and exposed pivot points.",
          },
        ]}
      />

      <ContentSection
        label="A Trusted Partner"
        heading="Backing South Africa's mining sector"
        body={[
          "From the platinum belt of the Bushveld to the gold fields of Gauteng, the coal seams of Mpumalanga and the iron ore of the Northern Cape — Caltex has supported South African mining operations for decades.",
          "Backed by Chevron's global research and a nationwide distribution network, our team understands site logistics and is ready to support your operation with the right products, technical advice, used-oil analysis and reliable bulk supply.",
        ]}
        image={undergroundImage}
        imageAlt="Underground mining vehicles operating with headlamps in a tunnel"
        imagePosition="right"
        variant="muted"
        features={[
          "Nationwide bulk fuel and lubricant delivery",
          "On-site technical support and used-oil analysis programmes",
          "Tailored supply solutions for surface and underground operations",
        ]}
      />

      <CTABanner
        heading="Ready to drive down your cost per tonne?"
        subtitle="Speak to our mining specialists about fuel, lubricants and bulk supply tailored to your operation."
        primaryCta="Contact Our Team"
        primaryHref="/contact"
        secondaryCta="Explore Diesel"
        secondaryHref="/business/products/diesel"
        variant="red"
      />
    </main>
  );
};

export default Mining;
