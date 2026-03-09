import { useEffect, useRef } from "react";
import { Fuel, Store, CreditCard, Wrench, Droplets, Zap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Fuel,
    title: "Techron® Petrol",
    description: "Our best petrol ever with Clean & Glide Technology™ that keeps your engine running at its best.",
  },
  {
    icon: Droplets,
    title: "Diesel with Techron®",
    description: "Good diesel just got better. Advanced formula for improved fuel economy and engine protection.",
  },
  {
    icon: Store,
    title: "FreshStop",
    description: "Get refreshed anytime, every day. Convenience stores at Caltex stations with fresh food and beverages.",
  },
  {
    icon: CreditCard,
    title: "Tap & Go",
    description: "Contactless payment for a faster, safer refuelling experience at participating Caltex stations.",
  },
  {
    icon: Wrench,
    title: "Vehicle Services",
    description: "Expert vehicle maintenance and services to keep you on the road with confidence.",
  },
  {
    icon: Zap,
    title: "StarCard",
    description: "Manage your fleet fuel expenses efficiently with the Caltex StarCard programme.",
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headingRef.current || !cardsRef.current) return;

    gsap.fromTo(headingRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
      }
    );

    const cards = cardsRef.current.querySelectorAll(".service-card");
    gsap.fromTo(cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: cardsRef.current, start: "top 80%" },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="motorists" className="py-24 md:py-32 bg-muted/50">
      <div className="section-padding">
        <div ref={headingRef} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-3 block">Our Services</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            From Leaking Faucets to Gushing Pipes
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need for your journey, all under one roof at Caltex stations across South Africa.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="service-card group bg-card rounded-2xl p-8 hover-lift cursor-pointer border border-border/50 hover:border-primary/20"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
