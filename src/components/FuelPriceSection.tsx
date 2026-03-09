import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Fuel, TrendingDown, TrendingUp, MapPin, Search, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const fuelPrices = [
  { name: "95 Unleaded Petrol", sub: "with Techron®", price: "20.30", trend: "down" as const },
  { name: "93 Unleaded Petrol", sub: "with Techron®", price: "20.19", trend: "down" as const },
  { name: "Diesel 50", sub: "with Techron® D", price: "18.42", trend: "down" as const },
  { name: "93 LRP Petrol", sub: "with Techron®", price: "20.30", trend: "up" as const },
];

const FuelPriceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(".fuel-heading",
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ".fuel-heading", start: "top 85%" },
        }
      );

      gsap.fromTo(".fuel-card",
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.4)",
          scrollTrigger: { trigger: ".fuel-cards", start: "top 82%" },
        }
      );

      gsap.fromTo(".station-finder",
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ".station-finder", start: "top 85%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="find-station" className="py-28 md:py-36 bg-dark-radial relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/[0.03] rounded-full blur-[120px]" />

      <div className="section-padding section-max relative">
        {/* Header */}
        <div className="fuel-heading text-center max-w-2xl mx-auto mb-16">
          <span className="section-label bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground/70 mb-5 inline-block">
            Today's Fuel Prices
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4 leading-tight">
            Inland Fuel Prices
          </h2>
          <p className="text-primary-foreground/40 text-lg">
            Last updated: March 2026 · Prices in cents per litre
          </p>
        </div>

        {/* Price Cards */}
        <div className="fuel-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-20">
          {fuelPrices.map((fuel) => (
            <div key={fuel.name} className="fuel-card card-glass-dark rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-400 hover:-translate-y-1.5 group cursor-pointer">
              <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/25 transition-colors">
                <Fuel size={18} className="text-primary" />
              </div>
              <div className="flex items-baseline justify-center gap-1 mb-1">
                <span className="text-sm text-primary-foreground/40">R</span>
                <span className="text-4xl font-display font-bold text-primary-foreground tracking-tight">{fuel.price}</span>
              </div>
              <div className="text-xs text-primary-foreground/30 mb-4">cents per litre</div>
              <div className="text-sm text-primary-foreground/70 font-medium leading-snug mb-1">{fuel.name}</div>
              <div className="text-xs text-primary-foreground/40 mb-4">{fuel.sub}</div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary-foreground/5">
                {fuel.trend === "down" ? (
                  <>
                    <TrendingDown size={12} className="text-caltex-emerald" />
                    <span className="text-caltex-emerald">Decreased</span>
                  </>
                ) : (
                  <>
                    <TrendingUp size={12} className="text-caltex-gold" />
                    <span className="text-caltex-gold">Increased</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Station Finder */}
        <div className="station-finder max-w-3xl mx-auto">
          <div className="card-glass-dark rounded-3xl p-8 md:p-10 text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/15 flex items-center justify-center mx-auto mb-6">
              <MapPin size={28} className="text-primary" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
              Find Your Nearest Caltex Station
            </h3>
            <p className="text-primary-foreground/50 mb-8 max-w-md mx-auto">
              With over 800 stations across South Africa, there's always a Caltex near you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <div className="flex-1 relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-foreground/30" />
                <input
                  type="text"
                  placeholder="Enter your city or suburb..."
                  className="w-full h-12 pl-11 pr-4 rounded-xl bg-primary-foreground/8 border border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 text-sm focus:outline-none focus:border-primary/40 transition-colors"
                />
              </div>
              <Button variant="hero" className="h-12 px-6">
                Find Station <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuelPriceSection;
