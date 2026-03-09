import { useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import { useSiteStore } from "@/store/siteStore";
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
  const { isNavScrolled, isMobileMenuOpen, setIsNavScrolled, toggleMobileMenu, setIsMobileMenuOpen } = useSiteStore();
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const navLinksRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setIsNavScrolled]);

  // Entrance animation
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    if (logoRef.current) {
      tl.fromTo(logoRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }
      );
    }

    if (navLinksRef.current) {
      const links = navLinksRef.current.querySelectorAll(".nav-link");
      tl.fromTo(links,
        { opacity: 0, y: -12 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: "power2.out" },
        "-=0.3"
      );
    }

    if (ctaRef.current) {
      tl.fromTo(ctaRef.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power3.out" },
        "-=0.2"
      );
    }
  }, []);

  // Mobile menu animation
  useEffect(() => {
    if (!mobileMenuRef.current) return;
    
    if (isMobileMenuOpen) {
      gsap.set(mobileMenuRef.current, { display: "block" });
      gsap.fromTo(mobileMenuRef.current,
        { opacity: 0, height: 0 },
        { opacity: 1, height: "auto", duration: 0.45, ease: "power3.out" }
      );
      const items = mobileMenuRef.current.querySelectorAll(".mobile-link");
      gsap.fromTo(items,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.35, stagger: 0.04, ease: "power2.out", delay: 0.15 }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        opacity: 0, height: 0, duration: 0.3, ease: "power3.in",
        onComplete: () => {
          if (mobileMenuRef.current) gsap.set(mobileMenuRef.current, { display: "none" });
        }
      });
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [setIsMobileMenuOpen]);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isNavScrolled ? "glass-nav-scrolled py-2" : "glass-nav py-4"
      }`}
    >
      <div className="section-padding">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a ref={logoRef} href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center gap-3 group opacity-0">
            <div className="relative">
              <img src={caltexLogo} alt="Caltex" className="h-10 w-10 transition-transform duration-500 group-hover:rotate-[20deg] group-hover:scale-110" />
            </div>
            <span className={`font-display text-xl font-bold tracking-tight transition-colors duration-300 ${
              isNavScrolled ? "text-secondary" : "text-primary-foreground"
            }`}>
              CALTEX
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div ref={navLinksRef} className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`nav-link opacity-0 relative px-4 py-2.5 text-[13px] font-medium transition-all duration-300 rounded-lg group ${
                  isNavScrolled
                    ? "text-muted-foreground hover:text-primary hover:bg-primary/5"
                    : "text-primary-foreground/75 hover:text-primary-foreground hover:bg-primary-foreground/10"
                }`}
              >
                {item.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary rounded-full transition-all duration-300 group-hover:w-2/3" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div ref={ctaRef} className="hidden lg:flex items-center gap-3 opacity-0">
            <Button 
              variant={isNavScrolled ? "outline" : "heroOutline"} 
              size="sm"
              onClick={(e) => handleNavClick(e as any, "#find-station")}
            >
              Find a Station
            </Button>
            <Button variant="hero" size="sm">
              Get in Touch
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 ${
              isNavScrolled ? "text-foreground hover:bg-muted" : "text-primary-foreground hover:bg-primary-foreground/10"
            }`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute left-0 block h-0.5 w-6 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? "top-[11px] rotate-45" : "top-1"
              }`} />
              <span className={`absolute left-0 top-[11px] block h-0.5 w-6 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0 scale-x-0" : "opacity-100"
              }`} />
              <span className={`absolute left-0 block h-0.5 w-6 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? "top-[11px] -rotate-45" : "top-[19px]"
              }`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div ref={mobileMenuRef} className="lg:hidden overflow-hidden" style={{ display: "none" }}>
        <div className={`section-padding pb-8 pt-4 space-y-1 ${isNavScrolled ? "" : "bg-secondary/95 backdrop-blur-xl"}`}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`mobile-link block px-4 py-3.5 text-base font-medium rounded-xl transition-all duration-200 ${
                isNavScrolled
                  ? "text-foreground hover:text-primary hover:bg-muted"
                  : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-5 flex flex-col gap-3">
            <Button variant="hero" className="w-full" size="lg">Get in Touch</Button>
            <Button variant={isNavScrolled ? "outline" : "heroOutline"} className="w-full" size="lg">Find a Station</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
