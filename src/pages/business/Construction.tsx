import PageHero from "@/components/reusable/PageHero";
import ContentSection from "@/components/reusable/ContentSection";
import FeatureGrid from "@/components/reusable/FeatureGrid";
import CTABanner from "@/components/reusable/CTABanner";
import { HardHat, Droplets, Wrench, ShieldCheck, Gauge, Settings, Clock, Truck } from "lucide-react";
import heroImage from "@/assets/construction-hero.jpg";
import equipmentImage from "@/assets/construction-equipment.jpg";
import lubricantImage from "@/assets/construction-lubricant.jpg";
import siteImage from "@/assets/construction-site.jpg";

const Construction = () => {
  return (
    <main>
      <PageHero
        label="Industries"
        title="Built to Withstand the Toughest Sites"
        subtitle="Heavy-duty fuels, lubricants and greases engineered to keep your construction fleet productive — from earthworks to handover."
        image={heroImage}
        imageAlt="Yellow wheel loader parked on a construction site against a blue sky"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Motorists", href: "/" },
          { label: "Industries" },
          { label: "Construction" },
        ]}
      />

      <ContentSection
        label="Built for the Site"
        heading="Performance that holds up under pressure"
        body={[
          "Construction equipment operates under extreme stress — heavy loads, high temperatures, abrasive dust and long shifts. Every hour of unplanned downtime erodes margins and delays project delivery.",
          "Caltex provides a complete portfolio of fuels, engine oils, hydraulic fluids and greases formulated to extend component life, reduce maintenance costs and keep your earthmoving, lifting and paving fleet running shift after shift.",
        ]}
        image={equipmentImage}
        imageAlt="Heavy excavator and bulldozer working on a construction site"
        imagePosition="right"
        features={[
          "Extended drain intervals to maximise machine availability",
          "Superior wear protection in dusty, high-load conditions",
          "Stable performance across extreme operating temperatures",
          "Approved for leading OEMs including Cat, Komatsu and Volvo",
        ]}
        ctaText="Find a Caltex Station"
        ctaHref="/find-a-station"
      />

      <FeatureGrid
        label="Why Caltex"
        heading="The advantage on every site"
        subtitle="From compact loaders to giant excavators, our products are designed to perform in the most demanding construction environments."
        variant="muted"
        columns={4}
        features={[
          {
            icon: <ShieldCheck className="w-6 h-6" />,
            title: "Component Protection",
            description: "Advanced additive chemistry shields engines, hydraulics and final drives from wear, sludge and deposits.",
          },
          {
            icon: <Clock className="w-6 h-6" />,
            title: "Maximised Uptime",
            description: "Long-life formulations mean fewer service stops and more productive hours on critical project paths.",
          },
          {
            icon: <Gauge className="w-6 h-6" />,
            title: "Fuel Efficiency",
            description: "Caltex Diesel with Techron® D delivers cleaner combustion, restored power and improved fuel economy.",
          },
          {
            icon: <Truck className="w-6 h-6" />,
            title: "Reliable Supply",
            description: "Nationwide bulk fuel and lubricant delivery keeps your sites stocked, no matter how remote the location.",
          },
        ]}
      />

      <ContentSection
        label="Lubricants for Construction"
        heading="Delo® heavy-duty lubricants — proven on site"
        body={[
          "Caltex Delo® engine oils, transmission fluids, hydraulic oils and greases are formulated with ISOSYN® Technology to deliver outstanding wear protection, oxidation stability and deposit control under severe duty cycles.",
          "Whether you run a single excavator or a mixed fleet of earthmovers, our lubricants help simplify inventory while delivering consistent, OEM-approved performance across every machine.",
        ]}
        image={lubricantImage}
        imageAlt="Industrial lubricant being poured into heavy equipment"
        imagePosition="left"
        features={[
          "Delo 400 multigrade engine oils for off-highway diesel engines",
          "Rando® hydraulic fluids for high-pressure systems",
          "Meropa® industrial gear oils for transmissions and final drives",
          "Multifak® and Delo® greases for chassis, pins and bearings",
        ]}
        ctaText="Explore Lubricants"
        ctaHref="/motorists/products/lubricants"
      />

      <FeatureGrid
        heading="Solutions across your fleet"
        subtitle="A complete portfolio engineered to support every machine and every phase of construction work."
        variant="default"
        columns={3}
        features={[
          {
            icon: <HardHat className="w-6 h-6" />,
            title: "Earthmoving Equipment",
            description: "Heavy-duty engine oils and hydraulic fluids for excavators, bulldozers, wheel loaders and articulated dump trucks.",
          },
          {
            icon: <Settings className="w-6 h-6" />,
            title: "Cranes & Lifting",
            description: "High-performance gear oils and greases that protect slewing rings, winches and boom mechanisms under heavy load.",
          },
          {
            icon: <Droplets className="w-6 h-6" />,
            title: "Hydraulic Systems",
            description: "Premium hydraulic fluids that resist oxidation and wear, extending pump and valve life in demanding conditions.",
          },
          {
            icon: <Wrench className="w-6 h-6" />,
            title: "Compressors & Generators",
            description: "Long-life lubricants for stationary site equipment including generators, compressors and concrete plants.",
          },
          {
            icon: <Gauge className="w-6 h-6" />,
            title: "Diesel with Techron® D",
            description: "Premium diesel that cleans injectors, restores lost power and improves fuel economy across off-highway fleets.",
          },
          {
            icon: <ShieldCheck className="w-6 h-6" />,
            title: "Greases & Specialties",
            description: "Heavy-duty greases for pins, bushings and high-load bearings exposed to dust, water and shock loading.",
          },
        ]}
      />

      <ContentSection
        label="A Trusted Partner"
        heading="Backing South Africa's builders"
        body={[
          "From major infrastructure programmes to commercial developments and mining-adjacent civil works, Caltex has supported South Africa's construction sector for decades.",
          "Backed by Chevron's global research and a nationwide distribution network, our team understands site logistics and is ready to support your project with the right products, technical advice and reliable bulk supply.",
        ]}
        image={siteImage}
        imageAlt="Construction cranes silhouetted against a sunset sky"
        imagePosition="right"
        variant="muted"
        features={[
          "Nationwide bulk fuel and lubricant delivery",
          "On-site technical support and used-oil analysis programmes",
          "Tailored supply solutions for contractors and project sites",
        ]}
      />

      <CTABanner
        heading="Ready to keep your fleet moving?"
        subtitle="Speak to our construction specialists about fuel, lubricants and bulk supply tailored to your project."
        primaryCta="Contact Our Team"
        primaryHref="/contact"
        secondaryCta="Explore Diesel"
        secondaryHref="/business/products/diesel"
        variant="red"
      />
    </main>
  );
};

export default Construction;
