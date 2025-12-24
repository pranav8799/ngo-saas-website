import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-border/40 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold font-display">
                N
              </div>
              <span className="font-display font-bold text-lg text-foreground">NextGenNGO</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering communities and building sustainable futures through innovation, compassion, and dedicated action.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/who-we-are" },
                { label: "Our Services", href: "/services" },
                { label: "Admission", href: "/admission" },
                { label: "Donate", href: "/donation" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-sm">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-6">Our Programs</h4>
            <ul className="space-y-3">
              {["Education for All", "Healthcare Access", "Women Empowerment", "Environmental Care"].map((item) => (
                <li key={item} className="text-muted-foreground text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>123 Hope Street, Innovation District<br />San Francisco, CA 94103</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>contact@nextgenngo.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} NextGenNGO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
