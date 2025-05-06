
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "/" },
  { 
    label: "Services", 
    href: "#services",
    megaMenu: true,
    subItems: [
      { label: "Software Development", href: "/services/software" },
      { label: "Cloud Engineering", href: "/services/cloud" },
      { label: "Digital Transformation", href: "/services/digital" },
      { label: "Consulting", href: "/services/consulting" },
    ]
  },
  { 
    label: "Solutions", 
    href: "#solutions",
    megaMenu: true,
    subItems: [
      { label: "FinTech", href: "/solutions/fintech" },
      { label: "Healthcare", href: "/solutions/healthcare" },
      { label: "Retail", href: "/solutions/retail" },
      { label: "Logistics", href: "/solutions/logistics" },
    ]
  },
  { label: "About", href: "#about" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState<string | null>(null);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Handle internal links that scroll to sections
  const handleSectionNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "glass-effect py-3" : "bg-transparent py-5"
      )}
    >
      <div className="enterprise-container flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-enterprise-blue">
            GORANTLA<span className="text-enterprise-teal animate-pulse-subtle">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                to={item.href}
                className="nav-link font-medium text-sm"
                onClick={(e) => handleSectionNavigation(e, item.href)}
                onMouseEnter={() => item.megaMenu && setMegaMenuOpen(item.label)}
                onMouseLeave={() => setMegaMenuOpen(null)}
              >
                <span className="flex items-center">
                  {item.label} 
                  {item.megaMenu && <ChevronDown className="ml-1 h-4 w-4" />}
                </span>
              </Link>
              
              {/* Mega Menu */}
              {item.megaMenu && megaMenuOpen === item.label && (
                <div 
                  className="absolute top-full left-0 mt-1 min-w-[240px] glass-effect rounded-md shadow-lg overflow-hidden animate-fade-in"
                  onMouseEnter={() => setMegaMenuOpen(item.label)}
                  onMouseLeave={() => setMegaMenuOpen(null)}
                >
                  <div className="p-2">
                    {item.subItems?.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.href}
                        className="block px-4 py-2 text-sm hover:bg-enterprise-teal/10 hover:text-enterprise-teal rounded transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button 
            className="bg-enterprise-teal hover:bg-enterprise-teal/90 text-white"
          >
            Let's Talk
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-enterprise-blue"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-effect absolute top-full left-0 w-full animate-fade-in">
          <div className="py-4 enterprise-container">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.href}
                  className="block py-3 px-4 hover:bg-enterprise-teal/10 hover:text-enterprise-teal"
                  onClick={(e) => handleSectionNavigation(e, item.href)}
                >
                  {item.label}
                </Link>
              </div>
            ))}
            <div className="mt-4 px-4">
              <Button 
                className="w-full bg-enterprise-teal hover:bg-enterprise-teal/90 text-white"
              >
                Let's Talk
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
