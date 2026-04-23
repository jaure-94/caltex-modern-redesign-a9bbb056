import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, TrendingUp, Users, Shield } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import businessImg from "@/assets/caltex-fuel-station-4.jpg";
import freshstopImg from "@/assets/freshstop.png";

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(".cta-content > *",
        { opacity: 0, y: 35 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ".cta-content", start: "top 80%" },
        }
      );

      gsap.fromTo(".cta-cards .cta-card",
        { opacity: 0, x: 40 },
        {
          opacity: 1, x: 0, duration: 0.7, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: ".cta-cards", start: "top 80%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="business" className="py-28 md:py-36 bg-muted/40 relative overflow-hidden">
      <div className="section-padding section-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="cta-content">
            <span className="section-label mb-5 inline-block">Business Opportunities</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              A Caltex Franchise{" "}
              <span className="text-caltex-red">Awaits You</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Join one of South Africa's most trusted fuel brands. Caltex offers exciting franchise opportunities with comprehensive support, training, and a proven business model that delivers results.
            </p>

            {/* Benefit cards */}
            <div className="space-y-4 mb-10">
              {[
                { icon: TrendingUp, title: "Proven Business Model", desc: "87 years of success in the SA market" },
                { icon: Users, title: "Full Training & Support", desc: "Comprehensive onboarding and ongoing assistance" },
                { icon: Shield, title: "Trusted Brand", desc: "One of Africa's most recognized fuel brands" },
              ].map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.title} className="flex gap-4 items-start p-4 rounded-xl hover:bg-card transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-foreground text-sm">{benefit.title}</h4>
                      <p className="text-muted-foreground text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg">
                Explore Franchise <Building2 size={18} />
              </Button>
              <Button variant="outline" size="lg">
                Learn More <ArrowRight size={18} />
              </Button>
            </div>
          </div>

          {/* Right - Image stack */}
          <div className="cta-cards relative">
            <div className="cta-card rounded-3xl overflow-hidden shadow-card mb-5">
              <img src={businessImg} alt="Caltex Business Partnership" className="w-full h-[280px] object-cover" />
            </div>
            <div className="cta-card rounded-3xl overflow-hidden shadow-card">
              <img src={freshstopImg} alt="FreshStop Convenience" className="w-full h-[200px] object-cover" />
            </div>
            {/* Floating stat */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 bg-card rounded-2xl p-5 shadow-lg border border-border/50 hidden md:block">
              <div className="text-3xl font-display font-bold text-primary">Guaranteed</div>
              <div className="text-xs text-muted-foreground mt-1">Franchisee<br />Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
