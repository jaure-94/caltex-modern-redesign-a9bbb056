import { useEffect, useRef } from "react";
import { Fuel, TrendingDown, TrendingUp } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const fuelPrices = [
  { name: "95 Unleaded Petrol with Techron®", price: "R20.30", unit: "cpl", trend: "down" },
  { name: "93 Unleaded Petrol with Techron®", price: "R20.19", unit: "cpl", trend: "down" },
  { name: "95 Lead Replacement Petrol", price: "R20.30", unit: "cpl", trend: "up" },
  { name: "Diesel 50 with Techron®", price: "R18.42", unit: "cpl", trend: "down" },
];

const FuelPriceSection = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const cards = ref.current.querySelectorAll(".price-card");
    gsap.fromTo(cards,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1, scale: 1, duration: 0.5, stagger: 0.08, ease: "back.out(1.2)",
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      }
    );
  }, []);

  return (
    <section ref={ref} id="find-station" className="py-24 md:py-32 bg-dark-gradient">
      <div className="section-padding">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-3 block">Fuel Prices</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Today's Inland Fuel Prices
          </h2>
          <p className="text-primary-foreground/50 text-lg">Last updated: March 2026</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {fuelPrices.map((fuel) => (
            <div key={fuel.name} className="price-card bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 text-center hover:border-primary/40 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Fuel size={20} className="text-primary" />
              </div>
              <div className="text-3xl font-display font-bold text-primary-foreground mb-1">{fuel.price}</div>
              <div className="text-sm text-primary-foreground/40 mb-3">{fuel.unit}</div>
              <div className="text-sm text-primary-foreground/70 leading-snug">{fuel.name}</div>
              <div className="mt-3 inline-flex items-center gap-1 text-xs">
              {fuel.trend === "down" ? (
                  <><TrendingDown size={12} className="text-emerald-400" /><span className="text-emerald-400">Lower</span></>
                ) : (
                  <><TrendingUp size={12} className="text-caltex-gold" /><span className="text-caltex-gold">Higher</span></>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FuelPriceSection;
