
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "/" },
  { 
    label: "Services", 
    href: "/services",
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
    href: "/solutions",
    megaMenu: true,
    subItems: [
      { label: "FinTech", href: "/solutions/fintech" },
      { label: "Healthcare", href: "/solutions/healthcare" },
      { label: "Retail", href: "/solutions/retail" },
      { label: "Logistics", href: "/solutions/logistics" },
    ]
  },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState<string | null>(null);
  const [megaMenuHover, setMegaMenuHover] = useState(false);

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

  const handleMenuMouseEnter = (label: string) => {
    setMegaMenuOpen(label);
    setMegaMenuHover(true);
  };

  const handleMenuMouseLeave = () => {
    // Only close if not hovering over the submenu
    if (!megaMenuHover) {
      setMegaMenuOpen(null);
    }
  };

  const handleSubMenuMouseEnter = () => {
    setMegaMenuHover(true);
  };

  const handleSubMenuMouseLeave = () => {
    setMegaMenuHover(false);
    setMegaMenuOpen(null);
  };

  const renderNavLink = (item: typeof navItems[0]) => {
    return (
      <Link
        to={item.href}
        className="nav-link font-medium text-sm"
        onMouseEnter={() => item.megaMenu && handleMenuMouseEnter(item.label)}
        onMouseLeave={handleMenuMouseLeave}
      >
        <span className="flex items-center">
          {item.label} 
          {item.megaMenu && <ChevronDown className="ml-1 h-4 w-4" />}
        </span>
      </Link>
    );
  };

  const renderMobileNavLink = (item: typeof navItems[0]) => {
    return (
      <Link
        to={item.href}
        className="block py-3 px-4 hover:bg-enterprise-teal/10 hover:text-enterprise-teal"
        onClick={() => setMobileMenuOpen(false)}
      >
        {item.label}
      </Link>
    );
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
          <div className="h-8 w-8 bg-enterprise-blue rounded-md flex items-center justify-center mr-2 text-white text-xs font-bold">
            GIS
          </div>
          <div>
            <span className="text-xl font-bold text-enterprise-blue">
              GORANTLA<span className="text-enterprise-teal animate-pulse-subtle">.</span>
            </span>
            <span className="text-sm block text-gray-600 -mt-1">INFOTECH</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              {renderNavLink(item)}
              
              {/* Mega Menu */}
              {item.megaMenu && megaMenuOpen === item.label && (
                <div 
                  className="absolute top-full left-0 mt-1 min-w-[240px] glass-effect rounded-md shadow-lg overflow-hidden animate-fade-in"
                  onMouseEnter={handleSubMenuMouseEnter}
                  onMouseLeave={handleSubMenuMouseLeave}
                >
                  <div className="p-2">
                    {item.subItems?.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.href}
                        className="block px-4 py-2 text-sm hover:bg-enterprise-teal/10 hover:text-enterprise-teal rounded transition-colors"
                        onClick={() => setMegaMenuOpen(null)}
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
          <Link to="/contact">
            <Button 
              className="bg-enterprise-teal hover:bg-enterprise-teal/90 text-white"
            >
              Let's Talk
            </Button>
          </Link>
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
                {renderMobileNavLink(item)}
                {item.megaMenu && (
                  <div className="pl-6 border-l-2 border-enterprise-teal/20 ml-4 mt-1 mb-3">
                    {item.subItems?.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.href}
                        className="block py-2 px-3 text-sm hover:bg-enterprise-teal/10 hover:text-enterprise-teal rounded"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 px-4">
              <Link to="/contact">
                <Button 
                  className="w-full bg-enterprise-teal hover:bg-enterprise-teal/90 text-white"
                >
                  Let's Talk
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
