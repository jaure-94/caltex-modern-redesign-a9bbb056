import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import gsap from "gsap";
import caltexLogo from "@/assets/caltex-logo.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Find a Station", href: "#find-station" },
  { label: "Motorists", href: "#motorists" },
  { label: "Business", href: "#business" },
  { label: "Contact", href: "#contact" },
  { label: "Blog", href: "#blog" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate nav items on mount
  useEffect(() => {
    if (navItemsRef.current) {
      const items = navItemsRef.current.querySelectorAll(".nav-item");
      gsap.fromTo(items, 
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.06, ease: "power2.out", delay: 0.3 }
      );
    }
  }, []);

  // Animate mobile menu
  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isMobileOpen) {
        gsap.fromTo(mobileMenuRef.current,
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.4, ease: "power3.out" }
        );
        const items = mobileMenuRef.current.querySelectorAll(".mobile-nav-item");
        gsap.fromTo(items,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.3, stagger: 0.05, ease: "power2.out", delay: 0.15 }
        );
      } else {
        gsap.to(mobileMenuRef.current, { height: 0, opacity: 0, duration: 0.3, ease: "power3.in" });
      }
    }
  }, [isMobileOpen]);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-nav-scrolled" : "glass-nav"
      }`}
    >
      <div className="section-padding">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <img src={caltexLogo} alt="Caltex" className="h-9 w-9 transition-transform duration-300 group-hover:rotate-12" />
            <span className="font-display text-xl font-bold tracking-tight text-secondary">
              CALTEX
            </span>
          </a>

          {/* Desktop Nav */}
          <div ref={navItemsRef} className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-item relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-3/4" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" size="sm">
              Find a Station
            </Button>
            <Button variant="hero" size="sm">
              Contact Us
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div ref={mobileMenuRef} className="lg:hidden overflow-hidden" style={{ height: 0, opacity: 0 }}>
        <div className="section-padding pb-6 pt-2 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="mobile-nav-item block px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-lg transition-all duration-200"
              onClick={() => setIsMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-2">
            <Button variant="outline" className="w-full">Find a Station</Button>
            <Button variant="hero" className="w-full">Contact Us</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
