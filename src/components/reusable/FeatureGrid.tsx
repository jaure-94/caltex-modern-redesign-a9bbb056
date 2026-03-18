import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface FeatureItem {
  icon?: ReactNode;
  title: string;
  description: string;
}

export interface FeatureGridProps {
  label?: string;
  heading?: string;
  subtitle?: string;
  features: FeatureItem[];
  /** 2, 3, or 4 columns */
  columns?: 2 | 3 | 4;
  variant?: "default" | "muted" | "dark";
}

const FeatureGrid = ({
  label,
  heading,
  subtitle,
  features,
  columns = 4,
  variant = "default",
}: FeatureGridProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (heading) {
        gsap.fromTo(".fg-heading",
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: ".fg-heading", start: "top 85%" },
          }
        );
      }

      gsap.fromTo(".fg-card",
        { opacity: 0, y: 30, scale: 0.97 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ".fg-grid", start: "top 80%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [heading]);

  const bgClasses = {
    default: "bg-background",
    muted: "bg-muted/40",
    dark: "bg-caltex-dark",
  }[variant];

  const colClasses = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <section ref={sectionRef} className={`py-20 md:py-28 ${bgClasses} relative overflow-hidden`}>
      <div className="section-padding section-max">
        {/* Header */}
        {(heading || label) && (
          <div className="fg-heading opacity-0 text-center max-w-3xl mx-auto mb-16">
            {label && <span className="section-label mb-5 inline-block">{label}</span>}
            {heading && (
              <h2 className={`font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-4 ${
                variant === "dark" ? "text-primary-foreground" : "text-foreground"
              }`}>
                {heading}
              </h2>
            )}
            {subtitle && (
              <p className={`text-lg leading-relaxed ${
                variant === "dark" ? "text-primary-foreground/60" : "text-muted-foreground"
              }`}>
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Grid */}
        <div className={`fg-grid grid ${colClasses} gap-6`}>
          {features.map((feat, i) => (
            <div
              key={feat.title}
              className={`fg-card opacity-0 group p-6 md:p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                variant === "dark"
                  ? "border-primary-foreground/10 bg-primary-foreground/5 hover:border-primary/30 hover:bg-primary-foreground/8"
                  : "border-border/60 bg-card hover:border-primary/20 hover:shadow-card"
              }`}
            >
              {/* Number or Icon */}
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-colors ${
                variant === "dark"
                  ? "bg-primary/15 text-primary"
                  : "bg-primary/8 text-primary group-hover:bg-primary/15"
              }`}>
                {feat.icon || (
                  <span className="font-display font-bold text-lg">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                )}
              </div>

              <h4 className={`font-display font-semibold text-base md:text-lg mb-2 ${
                variant === "dark" ? "text-primary-foreground" : "text-foreground"
              }`}>
                {feat.title}
              </h4>

              <p className={`text-sm leading-relaxed ${
                variant === "dark" ? "text-primary-foreground/60" : "text-muted-foreground"
              }`}>
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
