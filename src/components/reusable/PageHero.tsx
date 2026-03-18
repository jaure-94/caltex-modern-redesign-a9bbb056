import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import gsap from "gsap";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  imageAlt?: string;
  breadcrumbs?: BreadcrumbItem[];
  /** Accent label shown above the title */
  label?: string;
  /** Overlay darkness: 0-100, default 65 */
  overlayOpacity?: number;
}

const PageHero = ({
  title,
  subtitle,
  image,
  imageAlt = "",
  breadcrumbs,
  label,
  overlayOpacity = 65,
}: PageHeroProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(imageRef.current,
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.6, ease: "power2.out" }
      );

      tl.fromTo(".hero-breadcrumb",
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6 },
        0.5
      );

      tl.fromTo(".hero-label",
        { opacity: 0, y: 20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6 },
        0.6
      );

      tl.fromTo(".hero-title",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power4.out" },
        0.7
      );

      tl.fromTo(".hero-subtitle",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        1.0
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[50vh] md:min-h-[60vh] flex items-end overflow-hidden bg-caltex-dark">
      {/* Background */}
      <div ref={imageRef} className="absolute inset-[-10px] opacity-0">
        <img src={image} alt={imageAlt} className="w-full h-full object-cover" />
      </div>

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to top, hsl(215 30% 6% / ${overlayOpacity / 100}) 0%, hsl(215 30% 6% / ${overlayOpacity * 0.5 / 100}) 50%, hsl(215 30% 6% / ${overlayOpacity * 0.3 / 100}) 100%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 section-padding w-full pb-14 md:pb-20 pt-36">
        <div className="section-max">
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="hero-breadcrumb opacity-0 flex items-center gap-1.5 text-sm mb-6 flex-wrap">
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight className="w-3.5 h-3.5 text-primary-foreground/30" />}
                  {crumb.href ? (
                    <Link to={crumb.href} className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-primary-foreground/80 font-medium">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}

          {/* Label */}
          {label && (
            <div className="hero-label opacity-0 mb-5">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase bg-primary/20 text-primary border border-primary/30">
                {label}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="hero-title opacity-0 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.08] max-w-4xl text-balance">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="hero-subtitle opacity-0 text-lg md:text-xl text-primary-foreground/60 max-w-2xl mt-6 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default PageHero;
