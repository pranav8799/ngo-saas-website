import { Link, useLocation } from "wouter";
import { Menu, X, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/who-we-are", label: "Who We Are" },
  { href: "/services", label: "Our Services" },
  { href: "/admission", label: "Admission" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm border-gray-100 py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-lg group-hover:shadow-primary/25 transition-all">
              <span className="font-display font-bold text-xl">N</span>
            </div>
            <span className={cn("font-display font-bold text-xl tracking-tight transition-colors", scrolled ? "text-foreground" : "text-foreground")}>
              NextGenNGO
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary cursor-pointer relative py-1",
                      location === link.href ? "text-primary font-semibold" : "text-muted-foreground"
                    )}
                  >
                    {link.label}
                    {location === link.href && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
                    )}
                  </span>
                </Link>
              ))}
            </div>
            <Link href="/donation">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 rounded-full px-6 transition-all hover:-translate-y-0.5"
              >
                <Heart className="w-4 h-4 mr-2 fill-white/20" />
                Donate Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-4 shadow-xl animate-in slide-in-from-top-5">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={cn(
                    "block px-4 py-3 rounded-lg text-base font-medium transition-colors cursor-pointer",
                    location === link.href ? "bg-primary/5 text-primary" : "text-muted-foreground hover:bg-gray-50"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <Link href="/donation">
              <Button className="w-full mt-2 rounded-xl" onClick={() => setIsOpen(false)}>
                Donate Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
