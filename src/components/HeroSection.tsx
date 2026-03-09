import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Fuel } from "lucide-react";
import gsap from "gsap";
import heroImage from "@/assets/hero-station.jpg";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(imageRef.current, 
      { scale: 1.15, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.4 }
    )
    .fromTo(headingRef.current,
      { opacity: 0, y: 60, clipPath: "inset(100% 0 0 0)" },
      { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)", duration: 1 },
      "-=0.8"
    )
    .fromTo(subRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7 },
      "-=0.5"
    )
    .fromTo(ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.3"
    )
    .fromTo(statsRef.current?.children ? Array.from(statsRef.current.children) : [],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
      "-=0.3"
    );
  }, []);

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div ref={imageRef} className="absolute inset-0">
        <img src={heroImage} alt="Caltex Station" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-caltex-dark/90 via-caltex-dark/70 to-caltex-dark/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-caltex-dark/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding w-full pt-32 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-8">
            <Fuel size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary-foreground/90">Powered by Techron® Technology</span>
          </div>

          <h1 ref={headingRef} className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.05] mb-6">
            Quality Fuel for
            <br />
            <span className="text-gradient-red">Every Journey</span>
          </h1>

          <p ref={subRef} className="text-lg md:text-xl text-primary-foreground/70 max-w-xl mb-10 font-body leading-relaxed">
            From research to the real world, Caltex with Techron® delivers clean, reliable fuel trusted by motorists, mechanics, and manufacturers across South Africa.
          </p>

          <div ref={ctaRef} className="flex flex-wrap gap-4">
            <Button variant="hero" size="xl">
              Find a Station <MapPin size={18} />
            </Button>
            <Button variant="heroOutline" size="xl">
              Explore Services <ArrowRight size={18} />
            </Button>
          </div>
        </div>

        {/* Stats Bar */}
        <div ref={statsRef} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
          {[
            { value: "800+", label: "Stations Nationwide" },
            { value: "50+", label: "Years of Service" },
            { value: "24/7", label: "Customer Support" },
            { value: "R20.30", label: "95 ULP (cpl)" },
          ].map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">{stat.value}</div>
              <div className="text-sm text-primary-foreground/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/40">
        <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
        <div className="w-5 h-8 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-primary-foreground/50 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
