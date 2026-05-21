import { useEffect, useRef } from "react";
import { Fuel, Store, CreditCard, Wrench, Droplets, Zap, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Fuel,
    title: "Techron® Petrol",
    description: "Our best petrol ever with Clean & Glide Technology™ — keeping your engine running at peak performance.",
    color: "primary",
  },
  {
    icon: Droplets,
    title: "Diesel with Techron®",
    description: "Advanced formula for improved fuel economy and superior engine protection on every fill-up.",
    color: "caltex-gold",
  },
  {
    icon: Store,
    title: "FreshStop",
    description: "Get refreshed anytime. Quality food, beverages, and convenience — open 24/7 at Caltex stations.",
    color: "caltex-navy",
  },
  {
    icon: CreditCard,
    title: "Tap & Go",
    description: "Contactless payment for a faster, safer refuelling experience. Just tap and you're on your way.",
    color: "primary",
  },
  {
    icon: Zap,
    title: "StarCard",
    description: "Manage your fleet fuel expenses efficiently with the Caltex StarCard business programme.",
    color: "caltex-gold",
  },
  {
    icon: Wrench,
    title: "Vehicle Services",
    description: "Expert vehicle maintenance and services to keep your car running safely and reliably on the road.",
    color: "caltex-navy",
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(".services-heading",
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: ".services-heading", start: "top 85%" },
        }
      );

      gsap.fromTo(".service-card",
        { opacity: 0, y: 40, rotateX: 5 },
        {
          opacity: 1, y: 0, rotateX: 0, duration: 0.6, stagger: 0.08, ease: "power3.out",
          scrollTrigger: { trigger: ".services-grid", start: "top 82%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-28 md:py-36 bg-muted/40 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      <div className="section-padding section-max relative">
        {/* Header */}
        <div className="services-heading flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="section-label-navy mb-5 inline-block">Our Services</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Everything for Your
              <br />
              <span className="text-caltex-red">Journey Ahead</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-md lg:text-right">
            From premium fuels to convenient stores, Caltex stations offer everything you need — all under one roof.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="service-card group bg-card rounded-2xl p-7 hover-lift cursor-pointer border border-border/50 hover:border-primary/15 relative overflow-hidden"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-${service.color}/8 flex items-center justify-center group-hover:bg-${service.color}/15 transition-colors duration-300`}>
                      <Icon size={24} className={`text-${service.color}`} />
                    </div>
                    <ArrowUpRight size={18} className="text-muted-foreground/30 group-hover:text-primary transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2.5">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
