import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ChevronRight } from "lucide-react";

interface SubLink {
  label: string;
  href: string;
}

interface MenuCategory {
  title: string;
  links: SubLink[];
}

interface NavMegaMenuProps {
  categories: MenuCategory[];
  isOpen: boolean;
  isScrolled: boolean;
}

const motoristMenu: MenuCategory[] = [
  {
    title: "Industries",
    links: [
      { label: "Agriculture", href: "#motorists-agriculture" },
      { label: "Construction", href: "#motorists-construction" },
      { label: "Mining", href: "#motorists-mining" },
      { label: "Power", href: "#motorists-power" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Techron Technology", href: "/motorists/products/techron-technology" },
      { label: "Lubricants", href: "/motorists/products/lubricants" },
    ],
  },
  {
    title: "Franchise",
    links: [
      { label: "Own Your Own Station", href: "#franchise" },
    ],
  },
];

const businessMenu: MenuCategory[] = [
  {
    title: "Industries",
    links: [
      { label: "Agriculture", href: "#business-agriculture" },
      { label: "Construction", href: "#business-construction" },
      { label: "Mining", href: "#business-mining" },
      { label: "Power", href: "#business-power" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Caltex Diesel Fuel", href: "/business/products/diesel-fuel" },
      { label: "Automotive Gasoline", href: "#gasoline" },
      { label: "Fuel Oil", href: "#fuel-oil" },
      { label: "Aviation (Jet) Fuel", href: "#jet-fuel" },
      { label: "Asphalt", href: "#asphalt" },
    ],
  },
];

const NavMegaMenu = ({ categories, isOpen, isScrolled }: NavMegaMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuRef.current) return;

    if (isOpen) {
      gsap.set(menuRef.current, { display: "block", pointerEvents: "auto" });
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: -8, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.25, ease: "power3.out" }
      );
      const items = menuRef.current.querySelectorAll(".mega-link");
      gsap.fromTo(
        items,
        { opacity: 0, x: -10 },
        { opacity: 1, x: 0, duration: 0.2, stagger: 0.02, ease: "power2.out", delay: 0.1 }
      );
    } else {
      gsap.to(menuRef.current, {
        opacity: 0,
        y: -6,
        duration: 0.18,
        ease: "power2.in",
        onComplete: () => {
          if (menuRef.current) gsap.set(menuRef.current, { display: "none", pointerEvents: "none" });
        },
      });
    }
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
      style={{ display: "none" }}
    >
      <div
        className={`rounded-2xl border shadow-2xl backdrop-blur-xl min-w-[420px] overflow-hidden ${
          isScrolled
            ? "bg-background border-border"
            : "bg-secondary/95 border-white/10"
        }`}
      >
        {/* Top accent stripe */}
        <div className="h-[3px] bg-gradient-to-r from-primary via-primary/70 to-transparent" />

        <div className="p-5 flex gap-6">
          {categories.map((category) => (
            <div key={category.title} className="min-w-[140px]">
              <h4
                className={`text-[11px] font-bold uppercase tracking-[0.15em] mb-3 ${
                  isScrolled ? "text-primary" : "text-primary"
                }`}
              >
                {category.title}
              </h4>
              <ul className="space-y-0.5">
                {category.links.map((link) => {
                  const isRoute = link.href.startsWith("/");
                  const Comp = isRoute ? Link : "a";
                  const linkProps = isRoute ? { to: link.href } : { href: link.href };
                  return (
                    <li key={link.label}>
                      <Comp
                        {...(linkProps as any)}
                        className={`mega-link group flex items-center gap-2 px-2.5 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 ${
                          isScrolled
                            ? "text-muted-foreground hover:text-primary hover:bg-primary/5"
                            : "text-secondary-foreground/70 hover:text-primary-foreground hover:bg-white/10"
                        }`}
                      >
                        <ChevronRight
                          className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 text-primary"
                        />
                        {link.label}
                      </Comp>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { NavMegaMenu, motoristMenu, businessMenu };
export type { MenuCategory };
