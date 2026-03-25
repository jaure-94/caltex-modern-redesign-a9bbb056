import { useEffect, useRef } from "react";
import gsap from "gsap";
import StationMap from "@/components/StationMap";
import { MapPin } from "lucide-react";

const FindStation = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".find-label",
        { opacity: 0, y: 20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6 },
        0.4
      );

      tl.fromTo(
        ".find-title",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power4.out" },
        0.5
      );

      tl.fromTo(
        ".find-subtitle",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.6 },
        0.7
      );

      tl.fromTo(
        mapContainerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        0.9
      );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-background">

      {/* Hero header */}
      <div
        ref={headerRef}
        className="relative pt-32 pb-8 md:pt-36 md:pb-10"
        style={{ background: "var(--gradient-hero)" }}
      >
        {/* Decorative grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 section-padding">
          <div className="section-max text-center">
            <div className="find-label opacity-0 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase bg-primary/20 text-primary border border-primary/30 mb-5">
              <MapPin className="w-3.5 h-3.5" />
              Station Locator
            </div>
            <h1 className="find-title opacity-0 font-display text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground leading-[1.1]">
              Find a Caltex Station
            </h1>
            <p className="find-subtitle opacity-0 text-base md:text-lg text-primary-foreground/60 max-w-xl mx-auto mt-4 leading-relaxed">
              Locate the nearest Caltex station for quality Techron fuels, services, and convenience — wherever you are.
            </p>
          </div>
        </div>

        {/* Bottom curve */}
        <div className="absolute -bottom-px left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" className="w-full">
            <path
              d="M0 40V20C360 0 720 0 1080 20C1260 30 1380 35 1440 40H0Z"
              fill="hsl(var(--background))"
            />
          </svg>
        </div>
      </div>

      {/* Map section */}
      <div ref={mapContainerRef} className="opacity-0 section-padding pb-0">
        <div className="section-max">
          <div className="rounded-2xl overflow-hidden border border-border shadow-2xl shadow-black/5 -mt-4 md:-mt-8">
            <div className="relative h-[60vh] md:h-[70vh] lg:h-[75vh]">
              <StationMap />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom spacing */}
      <div className="h-20" />

    </div>
  );
};

export default FindStation;
