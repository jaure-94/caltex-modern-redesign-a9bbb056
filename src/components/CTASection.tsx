import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import businessImg from "@/assets/business.jpg";

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const els = sectionRef.current.querySelectorAll(".cta-animate");
    gsap.fromTo(els,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="business" className="py-24 md:py-32 bg-muted/50">
      <div className="section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="cta-animate text-sm font-semibold tracking-widest uppercase text-primary mb-3 block">Business Opportunities</span>
            <h2 className="cta-animate font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              A Caltex Franchise Awaits You
            </h2>
            <p className="cta-animate text-muted-foreground text-lg leading-relaxed mb-8">
              Caltex has several exciting franchise opportunities available across South Africa. Join a trusted brand with over 50 years of excellence in the fuel industry.
            </p>
            <div className="cta-animate flex flex-wrap gap-4">
              <Button variant="hero" size="lg">
                Explore Franchise <Building2 size={18} />
              </Button>
              <Button variant="outline" size="lg">
                Learn More <ArrowRight size={18} />
              </Button>
            </div>
          </div>
          <div className="cta-animate relative rounded-3xl overflow-hidden shadow-card">
            <img src={businessImg} alt="Business partnership" className="w-full h-[400px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-caltex-dark/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
