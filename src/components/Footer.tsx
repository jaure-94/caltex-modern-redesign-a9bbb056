import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import caltexLogo from "@/assets/caltex-logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground">
      {/* Top bar */}
      <div className="bg-primary py-4">
        <div className="section-padding flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <MapPin size={18} className="text-primary-foreground" />
            <span className="text-sm text-primary-foreground">2987 Woodstone Rd, Santa Ana, Illinois 65486</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={18} className="text-primary-foreground" />
            <span className="text-sm text-primary-foreground">(302) 555-0107</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail size={18} className="text-primary-foreground" />
            <span className="text-sm text-primary-foreground">info@caltex.co.za</span>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <img src={caltexLogo} alt="Caltex" className="h-8 w-8" />
              <span className="font-display text-xl font-bold">CALTEX</span>
            </div>
            <p className="text-secondary-foreground/60 text-sm leading-relaxed mb-6">
              Quality fuels and clean petrol stations across South Africa. Trusted by millions of motorists.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            { title: "Quick Links", links: ["Home", "About", "Services", "Blog", "Contact", "FAQ"] },
            { title: "Services", links: ["Techron® Fuels", "FreshStop", "StarCard", "Fleet Solutions", "Franchise"] },
            { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Sitemap"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-semibold text-lg mb-5">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors duration-200">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="section-padding py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary-foreground/40">© 2026 Caltex South Africa. All rights reserved.</p>
          <p className="text-sm text-secondary-foreground/40">Powered by Techron® Technology</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
