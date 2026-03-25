import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import techronFuel from "@/assets/techron-fuel.jpg";
import engineClean from "@/assets/engine-clean.jpg";

gsap.registerPlugin(ScrollTrigger);

const TechronSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(".techron-heading",
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: ".techron-heading", start: "top 85%" },
        }
      );

      // Cards stagger
      gsap.fromTo(".techron-card",
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.2, ease: "power3.out",
          scrollTrigger: { trigger: ".techron-cards", start: "top 80%" },
        }
      );

      // Feature list
      gsap.fromTo(".techron-feature",
        { opacity: 0, x: -30 },
        {
          opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: ".techron-features", start: "top 80%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="motorists" className="py-28 md:py-36 bg-background relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="section-padding section-max relative">
        {/* Section Header */}
        <div className="techron-heading text-center max-w-3xl mx-auto mb-20">
          <span className="section-label mb-6 inline-block">Techron® Technology</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground mb-5 leading-tight">
            Our Best Petrol Ever.{" "}
            <span className="text-gradient-red">Now with Clean & Glide™</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            From research to the real world, Techron® is a cleaning additive in all grades of Caltex fuel — trusted by motorists, mechanics, and manufacturers around the world.
          </p>
        </div>

        {/* Two Feature Cards */}
        <div className="techron-cards grid md:grid-cols-2 gap-6 lg:gap-8 mb-20">
          {/* Card 1 - Techron Fuel */}
          <div className="techron-card group relative rounded-3xl overflow-hidden bg-caltex-dark min-h-[420px] cursor-pointer">
            <img src={techronFuel} alt="Techron Fuel" className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-caltex-dark via-caltex-dark/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
              <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Petrol</span>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
                Caltex with Techron®
              </h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed mb-5 max-w-md">
                Clean & Glide Technology™ removes harmful engine deposits and prevents new ones from forming, keeping your engine running at peak performance.
              </p>
              <Button variant="hero" size="sm">
                <a href="/motorists/products/techron-technology" className="flex flex-row items-center gap-2">Learn More <ArrowRight size={14} /></a>
              </Button>
            </div>
          </div>

          {/* Card 2 - Engine Performance */}
          <div className="techron-card group relative rounded-3xl overflow-hidden bg-caltex-dark min-h-[420px] cursor-pointer">
            <img src={engineClean} alt="Clean Engine" className="absolute inset-0 w-full h-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-caltex-dark via-caltex-dark/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
              <span className="text-caltex-gold text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Diesel</span>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
                Diesel 50 with Techron®
              </h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed mb-5 max-w-md">
                Good diesel just got better. Advanced formula delivers improved fuel economy, engine protection, and reduced emissions for commercial and personal vehicles.
              </p>
              <Button variant="hero" size="sm">
                <a href="/business/products/diesel" className="flex flex-row items-center gap-2">
                  Explore Diesel <ArrowRight size={14} />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Feature List */}
        <div className="techron-features grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Cleans Engine Deposits", desc: "Removes existing harmful deposits from fuel injectors and intake valves" },
            { title: "Maximizes Power", desc: "Restored engine performance with improved acceleration and responsiveness" },
            { title: "Reduces Emissions", desc: "Cleaner combustion means fewer harmful exhaust emissions" },
            { title: "Protects Your Engine", desc: "Shields critical engine parts from future deposit build-up" },
          ].map((feature, i) => (
            <div key={feature.title} className="techron-feature group p-6 rounded-2xl border border-border/60 hover:border-primary/20 bg-card hover:bg-primary/[0.02] transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center mb-4 text-primary font-display font-bold text-lg group-hover:bg-primary/15 transition-colors">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h4 className="font-display font-semibold text-foreground mb-2">{feature.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechronSection;
