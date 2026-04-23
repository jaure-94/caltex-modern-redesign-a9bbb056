import PageHero from "@/components/reusable/PageHero";
import ContentSection from "@/components/reusable/ContentSection";
import FeatureGrid from "@/components/reusable/FeatureGrid";
import CTABanner from "@/components/reusable/CTABanner";
import {
  Briefcase,
  Users,
  TrendingUp,
  ShieldCheck,
  Award,
  GraduationCap,
  Building2,
  HeartHandshake,
  ClipboardCheck,
} from "lucide-react";
import heroImage from "@/assets/own-station-hero.jpg";
import ownerImage from "@/assets/own-station-owner.jpg";
import shopImage from "@/assets/own-station-shop.jpg";
import partnershipImage from "@/assets/own-station-partnership.jpg";

const OwnAStation = () => {
  return (
    <main>
      <PageHero
        label="Franchise Opportunity"
        title="Own a Caltex service station"
        subtitle="Join one of South Africa's most trusted fuel brands and build a business on a legacy of quality, performance and service."
        image={heroImage}
        imageAlt="Modern Caltex service station forecourt at dusk"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Business", href: "/" },
          { label: "Own a Service Station" },
        ]}
      />

      <ContentSection
        label="The Opportunity"
        heading="Build your business with a brand customers trust"
        body={[
          "For over 80 years, Caltex has been a familiar and trusted name on South African roads. As a Caltex Retailer, you become part of a network backed by world-class fuels, premium lubricants and a brand that motorists choose every day.",
          "Operating a Caltex service station is more than running a forecourt — it's a long-term retail business that combines fuel, convenience, food and service under one of the country's most recognised brands.",
        ]}
        image={ownerImage}
        imageAlt="Confident Caltex service station owner standing in front of the forecourt"
        imagePosition="right"
        features={[
          "A globally recognised, locally loved fuel brand",
          "Comprehensive training and ongoing support",
          "Established supply chain and proven retail systems",
          "A nationwide network of fellow Retailers",
        ]}
        ctaText="Find a Caltex Station"
        ctaHref="/find-a-station"
      />

      <FeatureGrid
        label="Why Caltex"
        heading="The Caltex Retailer advantage"
        subtitle="When you partner with Caltex, you gain more than a brand — you gain a complete business platform built for retail success."
        variant="muted"
        columns={4}
        features={[
          {
            icon: <Award className="w-6 h-6" />,
            title: "Trusted Brand",
            description: "Stand behind one of South Africa's most recognised and respected fuel brands, powered by Chevron heritage.",
          },
          {
            icon: <GraduationCap className="w-6 h-6" />,
            title: "World-Class Training",
            description: "Structured retail, operations and HSE training to prepare you and your team for day-one success.",
          },
          {
            icon: <ShieldCheck className="w-6 h-6" />,
            title: "Operational Support",
            description: "Ongoing guidance from Territory Managers, technical specialists and a dedicated retail support team.",
          },
          {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Proven Returns",
            description: "A retail model designed to combine fuel, convenience and quick-service offers into sustainable returns.",
          },
        ]}
      />

      <ContentSection
        label="More Than Fuel"
        heading="A complete retail destination"
        body={[
          "A modern Caltex site is a true destination — premium Techron®-enhanced fuels on the forecourt, FreshStop convenience shopping in the shop, and quality coffee and food-to-go for customers on the move.",
          "Our retail model is designed so that every part of the site works together to grow basket size, drive return visits and deliver a consistent customer experience that keeps motorists coming back.",
        ]}
        image={shopImage}
        imageAlt="Modern convenience store interior at a Caltex forecourt"
        imagePosition="left"
        features={[
          "Premium Techron®-enhanced petrol and diesel",
          "FreshStop convenience retail offering",
          "Quick-service food and barista coffee",
          "Loyalty programmes that reward regular customers",
        ]}
        ctaText="Explore Techron Technology"
        ctaHref="/motorists/products/techron-technology"
      />

      <FeatureGrid
        heading="What we look for in a Retailer"
        subtitle="Operating a Caltex service station is a hands-on, full-time retail business. We're looking for committed entrepreneurs ready to lead from the front."
        variant="default"
        columns={3}
        features={[
          {
            icon: <Briefcase className="w-6 h-6" />,
            title: "Retail Experience",
            description: "A proven track record in retail, hospitality or service-station management that demonstrates operational discipline.",
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Hands-On Operator",
            description: "Willingness to be a full-time, on-site owner-operator leading staff, customers and day-to-day operations.",
          },
          {
            icon: <Building2 className="w-6 h-6" />,
            title: "Financial Strength",
            description: "Access to the capital required to fund the franchise fee, working capital and initial site investment.",
          },
          {
            icon: <HeartHandshake className="w-6 h-6" />,
            title: "Customer Focus",
            description: "A genuine passion for service and a commitment to delivering a consistent, high-quality customer experience.",
          },
          {
            icon: <ShieldCheck className="w-6 h-6" />,
            title: "Compliance Mindset",
            description: "Strong commitment to health, safety, environment and brand standards across every part of the business.",
          },
          {
            icon: <ClipboardCheck className="w-6 h-6" />,
            title: "Transformation Aligned",
            description: "Preference will be given in line with our transformation objectives, supporting an inclusive Retailer network.",
          },
        ]}
      />

      <ContentSection
        label="The Application Process"
        heading="A clear path to becoming a Caltex Retailer"
        body={[
          "Our Retailer selection process is multi-step and thorough — designed to make sure both you and Caltex are set up for long-term success. Applications are completed online, with progress saved as you go so you can return at any stage.",
          "Once your preliminary application is submitted, qualifying applicants are invited to complete the secondary application and a structured assessment, before a final interview and site allocation discussion.",
        ]}
        image={partnershipImage}
        imageAlt="Business handshake symbolising the Caltex franchise partnership"
        imagePosition="right"
        variant="muted"
        features={[
          "Step 1 — Preliminary online application",
          "Step 2 — Secondary application and supporting documents",
          "Step 3 — Assessment, interview and site discussion",
          "Step 4 — Onboarding, training and store opening",
        ]}
        ctaText="Start Your Application"
        ctaHref="/contact"
      />

      <CTABanner
        heading="Ready to operate your own Caltex service station?"
        subtitle="Speak to our Retail team about current opportunities, requirements and the next intake of new Caltex Retailers."
        primaryCta="Start Application Process"
        primaryHref="/contact"
        secondaryCta="Find a Station Near You"
        secondaryHref="/find-a-station"
        variant="red"
      />
    </main>
  );
};

export default OwnAStation;
