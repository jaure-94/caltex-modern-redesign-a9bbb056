import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface ContentSectionProps {
  /** Section label (small uppercase text) */
  label?: string;
  heading: string;
  /** Supports line breaks via \n or just plain text */
  body: string | string[];
  image: string;
  imageAlt?: string;
  /** Image on left or right. Default: "right" */
  imagePosition?: "left" | "right";
  /** Optional CTA button */
  ctaText?: string;
  ctaHref?: string;
  /** Optional list of bullet features */
  features?: string[];
  /** Background variant */
  variant?: "default" | "muted" | "dark";
}

const ContentSection = ({
  label,
  heading,
  body,
  image,
  imageAlt = "",
  imagePosition = "right",
  ctaText,
  ctaHref,
  features,
  variant = "default",
}: ContentSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(".cs-text",
        { opacity: 0, x: imagePosition === "right" ? -40 : 40 },
        {
          opacity: 1, x: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );

      gsap.fromTo(".cs-image",
        { opacity: 0, x: imagePosition === "right" ? 40 : -40, scale: 0.97 },
        {
          opacity: 1, x: 0, scale: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );

      gsap.fromTo(".cs-feature",
        { opacity: 0, x: -20 },
        {
          opacity: 1, x: 0, duration: 0.5, stagger: 0.08, ease: "power2.out",
          scrollTrigger: { trigger: ".cs-features-list", start: "top 85%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [imagePosition]);

  const bgClasses = {
    default: "bg-background",
    muted: "bg-muted/40",
    dark: "bg-caltex-dark text-primary-foreground",
  }[variant];

  const bodyParagraphs = Array.isArray(body) ? body : [body];

  return (
    <section ref={sectionRef} className={`py-20 md:py-28 ${bgClasses} relative overflow-hidden`}>
      <div className="section-padding section-max">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${imagePosition === "left" ? "lg:direction-rtl" : ""}`}>
          {/* Text Side */}
          <div className={`cs-text opacity-0 ${imagePosition === "left" ? "lg:order-2" : ""}`}>
            {label && (
              <span className="section-label mb-6 inline-block">{label}</span>
            )}

            <h2 className={`font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-6 ${
              variant === "dark" ? "text-primary-foreground" : "text-foreground"
            }`}>
              {heading}
            </h2>

            {bodyParagraphs.map((p, i) => (
              <p key={i} className={`text-base md:text-lg leading-relaxed mb-4 ${
                variant === "dark" ? "text-primary-foreground/70" : "text-muted-foreground"
              }`}>
                {p}
              </p>
            ))}

            {/* Feature list */}
            {features && features.length > 0 && (
              <ul className="cs-features-list mt-6 space-y-3">
                {features.map((feat, i) => (
                  <li key={i} className="cs-feature opacity-0 flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span className={`text-sm md:text-base ${
                      variant === "dark" ? "text-primary-foreground/80" : "text-foreground/80"
                    }`}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {/* CTA */}
            {ctaText && (
              <div className="mt-8">
                <Button variant={variant === "dark" ? "hero" : "default"} size="lg" asChild={!!ctaHref}>
                  {ctaHref ? (
                    <a href={ctaHref}>{ctaText} <ArrowRight size={16} /></a>
                  ) : (
                    <span>{ctaText} <ArrowRight size={16} /></span>
                  )}
                </Button>
              </div>
            )}
          </div>

          {/* Image Side */}
          <div className={`cs-image opacity-0 ${imagePosition === "left" ? "lg:order-1" : ""}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-card-hover group">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-[350px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Decorative corner accent */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
