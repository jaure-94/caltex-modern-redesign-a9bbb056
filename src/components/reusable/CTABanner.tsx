import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface CTABannerProps {
  heading: string;
  subtitle?: string;
  primaryCta: string;
  primaryHref?: string;
  secondaryCta?: string;
  secondaryHref?: string;
  variant?: "red" | "dark" | "navy";
}

const CTABanner = ({
  heading,
  subtitle,
  primaryCta,
  primaryHref,
  secondaryCta,
  secondaryHref,
  variant = "red",
}: CTABannerProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(".cta-inner",
        { opacity: 0, y: 40, scale: 0.98 },
        {
          opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const bgClass = {
    red: "bg-red-gradient",
    dark: "bg-dark-gradient",
    navy: "bg-navy-gradient",
  }[variant];

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-background">
      <div className="section-padding section-max">
        <div className={`cta-inner opacity-0 ${bgClass} rounded-3xl p-10 md:p-16 text-center relative overflow-hidden`}>
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary-foreground/5 -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-primary-foreground/5 translate-y-1/2 -translate-x-1/3" />

          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 leading-tight text-balance">
              {heading}
            </h2>

            {subtitle && (
              <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
                {subtitle}
              </p>
            )}

            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="heroOutline" size="xl" asChild={!!primaryHref}>
                {primaryHref ? (
                  <Link to={primaryHref}>{primaryCta} <ArrowRight size={18} /></Link>
                ) : (
                  <span>{primaryCta} <ArrowRight size={18} /></span>
                )}
              </Button>

              {secondaryCta && (
                <Button
                  variant="heroOutline"
                  size="xl"
                  asChild={!!secondaryHref}
                  className="border-primary-foreground/20 text-primary-foreground/80"
                >
                  {secondaryHref ? (
                    <Link to={secondaryHref}>{secondaryCta}</Link>
                  ) : (
                    <span>{secondaryCta}</span>
                  )}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
