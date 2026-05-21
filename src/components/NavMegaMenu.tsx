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
    title: "Products & Services",
    links: [
      { label: "Techron Technology", href: "/motorists/products/techron-technology" },
      { label: "Lubricants", href: "/motorists/products/lubricants" },
    ],
  },
  {
    title: "Franchise",
    links: [
      { label: "Own Your Own Station", href: "/motorists/own-a-station" },
    ],
  },
];

const businessMenu: MenuCategory[] = [
  {
    title: "Industries",
    links: [
      { label: "Agriculture", href: "/business/industries/agriculture" },
      { label: "Construction", href: "/business/industries/construction" },
      { label: "Mining", href: "/business/industries/mining" },
      { label: "Power", href: "/business/industries/power" },
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
        { opacity: 0, y: -8 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power3.out" }
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
      className={`fixed left-0 right-0 w-screen ${isScrolled ? "top-[68px]" : "top-[84px]"}`}
      style={{ display: "none" }}
    >
      <div className="w-full bg-background border-t border-b border-border shadow-xl">
        {/* Top accent stripe */}
        {/* <div className="h-[3px] bg-gradient-to-r from-primary via-primary/70 to-transparent" /> */}

        <div className="section-padding section-max py-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {categories.map((category) => (
              <div key={category.title}>
                <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] mb-4 text-secondary">
                  {category.title}
                </h4>
                <ul className="space-y-1">
                  {category.links.map((link) => {
                    const isRoute = link.href.startsWith("/");
                    const Comp = isRoute ? Link : "a";
                    const linkProps = isRoute ? { to: link.href } : { href: link.href };
                    return (
                      <li key={link.label}>
                        <Comp
                          {...(linkProps as any)}
                          className="mega-link group flex items-center gap-2 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
                        >
                          <ChevronRight className="w-3.5 h-3.5 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 text-primary" />
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
    </div>
  );
};

export { NavMegaMenu, motoristMenu, businessMenu };
export type { MenuCategory };

