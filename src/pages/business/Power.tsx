import PageHero from "@/components/reusable/PageHero";
import ContentSection from "@/components/reusable/ContentSection";
import FeatureGrid from "@/components/reusable/FeatureGrid";
import CTABanner from "@/components/reusable/CTABanner";
import { Zap, Droplets, Wrench, ShieldCheck, Gauge, Settings, Clock, Flame, Wind } from "lucide-react";
import heroImage from "@/assets/power-hero.jpg";
import turbineImage from "@/assets/power-turbine.jpg";
import lubricantImage from "@/assets/power-lubricant.jpg";
import gridImage from "@/assets/power-grid.jpg";

const Power = () => {
  return (
    <main>
      <PageHero
        label="Industries"
        title="Keeping the lights on"
        subtitle="High-performance lubricants and fuels engineered to protect the turbines, engines and rotating equipment that power South Africa."
        image={heroImage}
        imageAlt="Power generation facility silhouetted against a sunset sky"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Motorists", href: "/" },
          { label: "Industries" },
          { label: "Power Generation" },
        ]}
      />

      <ContentSection
        label="Built for Power"
        heading="Reliability is non-negotiable"
        body={[
          "Power generation assets run continuously under extreme thermal and mechanical stress. Whether it's a gas turbine on baseload, a diesel genset providing standby power, or a wind turbine gearbox at the top of a tower — unplanned downtime is unacceptable.",
          "Caltex offers a complete portfolio of turbine oils, gas and diesel engine oils, hydraulic fluids and greases formulated to extend service intervals, protect critical components and keep your generation assets producing megawatts year after year.",
        ]}
        image={turbineImage}
        imageAlt="Industrial gas turbine inside a power plant"
        imagePosition="right"
        features={[
          "Outstanding oxidation stability for long oil life",
          "Superior wear protection for highly loaded bearings and gears",
          "Excellent water and air separation for clean systems",
          "Approved for major OEMs including GE, Siemens and Cat",
        ]}
        ctaText="Find a Caltex Station"
        ctaHref="/find-a-station"
      />

      <FeatureGrid
        label="Why Caltex"
        heading="The power-generation advantage"
        subtitle="From utility-scale plants to industrial gensets and renewable assets, our products are formulated for continuous, high-stakes duty."
        variant="muted"
        columns={4}
        features={[
          {
            icon: <ShieldCheck className="w-6 h-6" />,
            title: "Asset Protection",
            description: "Advanced additive chemistry shields turbines, gearboxes and engines against wear, varnish and oxidation.",
          },
          {
            icon: <Clock className="w-6 h-6" />,
            title: "Extended Oil Life",
            description: "Long-life formulations keep critical equipment in service longer, with fewer drains and outages.",
          },
          {
            icon: <Gauge className="w-6 h-6" />,
            title: "Operational Efficiency",
            description: "Lower friction and cleaner systems translate to better heat rate, lower fuel burn and reduced emissions.",
          },
          {
            icon: <Wrench className="w-6 h-6" />,
            title: "Technical Support",
            description: "Local technical experts and used-oil analysis programmes help you protect critical generation assets.",
          },
        ]}
      />

      <ContentSection
        label="Lubricants for Power"
        heading="GST®, Delo® and Meropa® — proven in generation"
        body={[
          "Caltex GST® turbine oils, Delo® heavy-duty engine oils, Meropa® industrial gear oils and Rando® hydraulic fluids are formulated to deliver exceptional oxidation stability, deposit control and load-carrying performance under continuous duty.",
          "From simple-cycle and combined-cycle gas turbines to reciprocating engines, wind turbine gearboxes and balance-of-plant equipment, our lubricants help simplify inventory while delivering OEM-approved performance across your fleet.",
        ]}
        image={lubricantImage}
        imageAlt="Premium turbine oil being poured into rotating equipment"
        imagePosition="left"
        features={[
          "GST® premium turbine oils for steam and gas turbines",
          "Delo® heavy-duty engine oils for diesel and gas gensets",
          "Meropa® WM industrial gear oils for wind turbine gearboxes",
          "Rando® hydraulic fluids for governor and BOP systems",
        ]}
        ctaText="Explore Lubricants"
        ctaHref="/motorists/products/lubricants"
      />

      <FeatureGrid
        heading="Solutions across your plant"
        subtitle="A complete portfolio engineered to support every rotating, reciprocating and hydraulic asset on site."
        variant="default"
        columns={3}
        features={[
          {
            icon: <Flame className="w-6 h-6" />,
            title: "Gas & Steam Turbines",
            description: "Premium turbine oils that resist varnish, oxidation and foaming under continuous high-temperature operation.",
          },
          {
            icon: <Zap className="w-6 h-6" />,
            title: "Diesel & Gas Gensets",
            description: "Heavy-duty engine oils for standby, prime and continuous-duty reciprocating power generation.",
          },
          {
            icon: <Wind className="w-6 h-6" />,
            title: "Wind Turbines",
            description: "Specialist gear oils and greases formulated for the unique loads and temperatures of wind turbine gearboxes.",
          },
          {
            icon: <Settings className="w-6 h-6" />,
            title: "Compressors & Pumps",
            description: "Long-life lubricants for balance-of-plant equipment including air compressors, feed-water and lube-oil pumps.",
          },
          {
            icon: <Droplets className="w-6 h-6" />,
            title: "Hydraulic Systems",
            description: "Premium hydraulic and governor fluids for control systems, valves and actuators across the plant.",
          },
          {
            icon: <ShieldCheck className="w-6 h-6" />,
            title: "Greases & Specialties",
            description: "Heavy-duty greases for motor bearings, couplings, valves and exposed pivot points across the facility.",
          },
        ]}
      />

      <ContentSection
        label="A Trusted Partner"
        heading="Backing South Africa's energy sector"
        body={[
          "From utility-scale generation and independent power producers to industrial captive plants, mine standby gensets and renewable wind and solar assets, Caltex has supported South Africa's energy sector for decades.",
          "Backed by Chevron's global research and a nationwide distribution network, our team is ready to support your operation with the right products, technical advice, condition-monitoring programmes and reliable bulk supply.",
        ]}
        image={gridImage}
        imageAlt="High-voltage transmission lines and pylons silhouetted against a sunset"
        imagePosition="right"
        variant="muted"
        features={[
          "Nationwide bulk lubricant and fuel delivery",
          "On-site technical support and used-oil analysis programmes",
          "Tailored supply solutions for utilities, IPPs and industrial sites",
        ]}
      />

      <CTABanner
        heading="Ready to protect your generation assets?"
        subtitle="Speak to our power-generation specialists about lubricants, fuels and bulk supply tailored to your plant."
        primaryCta="Contact Our Team"
        primaryHref="/contact"
        secondaryCta="Explore Diesel"
        secondaryHref="/business/products/diesel"
        variant="red"
      />
    </main>
  );
};

export default Power;
