import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import stationAerial from "@/assets/station-aerial.jpg";
import fuelPump from "@/assets/fuel-pump.jpg";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const elements = sectionRef.current.querySelectorAll(".about-animate");
    gsap.fromTo(elements,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-24 md:py-32">
      <div className="section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div className="about-animate relative">
            <div className="relative rounded-3xl overflow-hidden shadow-card">
              <img src={stationAerial} alt="Caltex Station" className="w-full h-[400px] object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-4 md:right-8 w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-lg border-4 border-background">
              <img src={fuelPump} alt="Fuel Pump" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Content */}
          <div className="about-animate pt-8">
            <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-3 block">Why Choose Us</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Our Exceptional Flair Sets Us Apart
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              From research to the real world, we bring you Techron®, a cleaning additive in all grades of Caltex fuel that's trusted by motorists, mechanics, and manufacturers around the world.
            </p>

            <div className="space-y-4 mb-10">
              {["24/7 Emergency Callout", "Fully Qualified & Insured", "Techron® Clean Engine Technology", "Nationwide Station Network"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 mb-10">
              {[
                { value: "1.3k+", label: "Boilers Installed" },
                { value: "640+", label: "Faucets Fixed" },
                { value: "10k", label: "Satisfaction Guarantee" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-display font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg">
              Learn More <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
