import { useEffect, useRef } from "react";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import caltexLogo from "@/assets/caltex-vantage-logo-no-bg.png";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(".footer-content > *",
        { opacity: 0, y: 25 },
        {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out",
          scrollTrigger: { trigger: footerRef.current, start: "top 90%" },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} id="contact" className="bg-caltex-dark text-primary-foreground relative overflow-hidden">
      {/* Top Contact Bar */}
      <div className="bg-red-gradient">
        <div className="section-padding section-max py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-primary-foreground/90">
              <MapPin size={16} />
              <span className="text-sm">1 Parc du Cap, Mispel Road, Bellville, Cape Town, 7530</span>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-primary-foreground/90">
                <Phone size={14} />
                <span className="text-sm font-medium">021 403 7911</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/90">
                <Mail size={14} />
                <span className="text-sm font-medium">info@caltex.co.za</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="section-padding section-max py-20">
        <div className="footer-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <img src={caltexLogo} alt="Caltex" className="h-20" />
            </div>
            <p className="text-primary-foreground/50 text-sm leading-relaxed mb-8 max-w-sm">
              Quality fuels and clean petrol stations across South Africa. Powered by Techron® technology, trusted by millions of motorists since 1936.
            </p>
            <div className="flex gap-2.5">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-primary-foreground/6 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300 text-primary-foreground/50"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-base mb-6 text-primary-foreground/90">Quick Links</h4>
            <ul className="space-y-3.5">
              {["Home", "About Us", "Find a Station", "Fuel Prices", "Contact Us"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-primary-foreground/45 hover:text-primary transition-colors duration-200 flex items-center gap-1 group">
                    {link}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-base mb-6 text-primary-foreground/90">Services</h4>
            <ul className="space-y-3.5">
              {["Techron® Fuels", "FreshStop", "StarCard", "Fleet Solutions", "Franchise"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-primary-foreground/45 hover:text-primary transition-colors duration-200 flex items-center gap-1 group">
                    {link}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Motorists */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-base mb-6 text-primary-foreground/90">Motorists</h4>
            <ul className="space-y-3.5">
              {["Products & Services", "Fuel Price", "UCount Rewards", "Tap & Go", "Insights Blog"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-primary-foreground/45 hover:text-primary transition-colors duration-200 flex items-center gap-1 group">
                    {link}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-base mb-6 text-primary-foreground/90">Legal</h4>
            <ul className="space-y-3.5">
              {["Privacy Policy", "Terms of Use", "Cookie Policy", "Disclaimer", "PAIA Manual"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-primary-foreground/45 hover:text-primary transition-colors duration-200">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/8">
        <div className="section-padding section-max py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/30">
            © {new Date().getFullYear()} Caltex South Africa. All rights reserved. A Chevron brand.
          </p>
          <p className="text-xs text-primary-foreground/30">
            Techron® is a registered trademark of Chevron Intellectual Property LLC.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
