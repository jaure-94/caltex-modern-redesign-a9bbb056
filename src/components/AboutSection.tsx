import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Play } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import stationAerial from "@/assets/sa-highway.jpg";
import familyStation from "@/assets/family-station.jpg";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 800, suffix: "+", label: "Stations Nationwide" },
  { value: 87, suffix: "yrs", label: "Years of Trust" },
  { value: 10, suffix: "k+", label: "Satisfied Motorists" },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [counters, setCounters] = useState(stats.map(() => 0));
  const countersStarted = useRef(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Left side images
      gsap.fromTo(".about-images",
        { opacity: 0, x: -60 },
        {
          opacity: 1, x: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: ".about-images", start: "top 80%" },
        }
      );

      // Right side content
      gsap.fromTo(".about-content > *",
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ".about-content", start: "top 80%" },
        }
      );

      // Counter animation
      ScrollTrigger.create({
        trigger: ".about-stats",
        start: "top 85%",
        once: true,
        onEnter: () => {
          if (countersStarted.current) return;
          countersStarted.current = true;
          stats.forEach((stat, i) => {
            const obj = { val: 0 };
            gsap.to(obj, {
              val: stat.value,
              duration: 2,
              ease: "power2.out",
              onUpdate: () => {
                setCounters((prev) => {
                  const next = [...prev];
                  next[i] = Math.round(obj.val);
                  return next;
                });
              },
            });
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-28 md:py-36 bg-background relative overflow-hidden">
      <div className="section-padding section-max">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left - Images */}
          <div className="about-images relative">
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-card">
              <img src={stationAerial} alt="South African Highway" className="w-full h-[450px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-caltex-dark/20 to-transparent" />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-3 md:right-6 w-52 h-52 md:w-60 md:h-60 rounded-2xl overflow-hidden shadow-lg border-[5px] border-background">
              <img src={familyStation} alt="Happy motorists" className="w-full h-full object-cover" />
            </div>

            {/* Play button decoration */}
            <div className="absolute top-6 right-6 w-14 h-14 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-red-glow">
              <Play size={20} className="text-primary-foreground ml-1" fill="currentColor" />
            </div>

            {/* Dot grid decoration */}
            <div className="absolute -left-4 -top-4 w-24 h-24 dot-pattern rounded-2xl -z-10" />
          </div>

          {/* Right - Content */}
          <div className="about-content">
            <span className="section-label mb-5 inline-block">Why Choose Caltex</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Trusted by Millions of{" "}
              <span className="text-gradient-red">South African Motorists</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              For over 87 years, Caltex has been powering South Africa's journeys. Our commitment to quality fuel, clean stations, and innovative technology makes us the choice of discerning motorists nationwide.
            </p>

            {/* Checklist */}
            <div className="space-y-4 mb-10">
              {[
                "Techron® Clean Engine Technology in every grade",
                "800+ stations across South Africa",
                "FreshStop convenience stores open 24/7",
                "Tap & Go contactless payment nationwide",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium text-[15px]">{item}</span>
                </div>
              ))}
            </div>

            {/* Animated Stats */}
            <div className="about-stats flex gap-8 mb-10 pb-10 border-b border-border">
              {stats.map((stat, i) => (
                <div key={stat.label}>
                  <div className="text-4xl font-display font-bold text-primary tracking-tight">
                    {counters[i]}{stat.suffix}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1.5 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg">
              Learn More About Us <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
