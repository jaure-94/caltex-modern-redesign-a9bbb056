import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import gsap from "gsap";
import { useSiteStore } from "@/store/siteStore";
import heroImage from "@/assets/caltex-fuel-station-4.jpg";

const heroWords = ["Journey", "Engine", "Business", "Family"];

const HeroSection = () => {
  const { setIsPageLoaded } = useSiteStore();
  const [currentWord, setCurrentWord] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const rotatingWordRef = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);

  // Word rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % heroWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Animate word change
  useEffect(() => {
    if (rotatingWordRef.current) {
      gsap.fromTo(rotatingWordRef.current,
        { opacity: 0, y: 30, rotateX: -40 },
        { opacity: 1, y: 0, rotateX: 0, duration: 0.6, ease: "back.out(1.5)" }
      );
    }
  }, [currentWord]);

  // Master entrance timeline
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => setIsPageLoaded(true),
    });

    // Image zoom-in reveal
    tl.fromTo(imageRef.current,
      { scale: 1.3, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2, ease: "power2.out" }
    );

    // Overlay
    tl.fromTo(overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.2 },
      0
    );

    // Badge
    tl.fromTo(badgeRef.current,
      { opacity: 0, y: 20, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.7 },
      0.6
    );

    // Heading - split letter reveal
    tl.fromTo(headingRef.current,
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" },
      0.7
    );

    // Subtext
    tl.fromTo(subRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      1.1
    );

    // CTA buttons
    tl.fromTo(ctaRef.current,
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.7 },
      1.3
    );

    // Stats
    if (statsRef.current) {
      const statItems = statsRef.current.querySelectorAll(".stat-item");
      tl.fromTo(statItems,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
        1.5
      );
    }

    // Decorative
    tl.fromTo(decorRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1 },
      1.2
    );

    // Subtle parallax on the hero image
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      gsap.to(imageRef.current, { x, y, duration: 1.5, ease: "power1.out" });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [setIsPageLoaded]);

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen flex items-center overflow-hidden bg-caltex-dark">
      {/* Background Image with Ken Burns */}
      <div ref={imageRef} className="absolute inset-[-20px]">
        <img src={heroImage} alt="Caltex Station at Night" className="w-full h-full object-cover scale-105" />
      </div>

      {/* Overlays */}
      <div ref={overlayRef} className="absolute inset-0 opacity-0">
        <div className="absolute inset-0 bg-gradient-to-r from-caltex-dark/95 via-caltex-dark/75 to-caltex-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-caltex-dark/80 via-transparent to-caltex-dark/30" />
      </div>

      {/* Decorative elements */}
      <div ref={decorRef} className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-0 pointer-events-none">
        <div className="absolute inset-0 rounded-full border border-primary/10 animate-pulse-soft" />
        <div className="absolute inset-8 rounded-full border border-primary/8" />
        <div className="absolute inset-16 rounded-full border border-primary/5" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding w-full pt-36 pb-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div ref={badgeRef} className="opacity-0 mb-8">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary-foreground/8 backdrop-blur-md border border-primary-foreground/10 text-sm font-medium text-primary-foreground/80">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
              Now with Clean & Glide Technology™
            </span>
          </div>

          {/* Heading */}
          <h1 ref={headingRef} className="opacity-0 font-display text-[3.2rem] sm:text-6xl md:text-7xl lg:text-[5.2rem] font-bold text-primary-foreground leading-[1.05] mb-7 text-balance">
            Quality Fuel for
            <br />
            Every{" "}
            <span ref={rotatingWordRef} className="text-gradient-red inline-block">
              {heroWords[currentWord]}
            </span>
          </h1>

          {/* Subtitle */}
          <p ref={subRef} className="opacity-0 text-lg md:text-xl text-primary-foreground/60 max-w-xl mb-10 font-body leading-relaxed">
            Caltex with Techron® delivers clean, reliable fuel trusted by motorists, mechanics, and manufacturers across South Africa. Powering journeys since 1936.
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="opacity-0 flex flex-wrap gap-4">
            <Button variant="hero" size="xl">
              Find a Station <MapPin size={18} />
            </Button>
            <Button variant="heroOutline" size="xl">
              Explore Techron® <ArrowRight size={18} />
            </Button>
          </div>
        </div>

        {/* Stats Row */}
        <div ref={statsRef} className="mt-20 lg:mt-28 flex flex-wrap gap-8 md:gap-14 max-w-4xl">
          {[
            { value: "800+", label: "Stations Nationwide" },
            { value: "87yrs", label: "Fuelling South Africa" },
            { value: "24/7", label: "On The Road" },
            { value: "R20.30", label: "95 ULP per litre" },
          ].map((stat) => (
            <div key={stat.label} className="stat-item opacity-0">
              <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground tracking-tight">{stat.value}</div>
              <div className="text-sm text-primary-foreground/40 mt-1.5 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll CTA */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-primary-foreground/30 z-10">
        <span className="text-[10px] tracking-[0.3em] uppercase font-semibold">Scroll</span>
        <div className="w-[22px] h-[34px] rounded-full border-2 border-primary-foreground/20 flex items-start justify-center p-1.5">
          <div className="w-[3px] h-[8px] rounded-full bg-primary/80 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
