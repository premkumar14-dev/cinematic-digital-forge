
import React, { useState, useEffect, useRef } from "react";
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
      { label: "ERP", href: "/services/erp" },
      { label: "Software Development", href: "/services/software" },
      { label: "Amazon Cloud Services", href: "/services/cloud" },
      { label: "QA & Testing Services", href: "/services/qa" },
      { label: "Project Management", href: "/services/project" },
      { label: "Offshore Software Development", href: "/services/offshore" }
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
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const menuOpenRef = useRef<boolean>(false);

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

  const clearMenuTimeout = () => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
      menuTimeoutRef.current = null;
    }
  };

  // Handle menu mouse enter
  const handleMenuMouseEnter = (label: string) => {
    clearMenuTimeout();
    menuOpenRef.current = true;
    setMegaMenuOpen(label);
  };

  // Handle menu mouse leave with delay
  const handleMenuMouseLeave = () => {
    menuOpenRef.current = false;
    
    // Add a small delay to allow moving to submenu
    menuTimeoutRef.current = setTimeout(() => {
      if (!menuOpenRef.current) {
        setMegaMenuOpen(null);
      }
    }, 300);
  };

  // Handle submenu mouse enter
  const handleSubmenuMouseEnter = () => {
    clearMenuTimeout();
    menuOpenRef.current = true;
  };

  // Handle submenu mouse leave
  const handleSubmenuMouseLeave = () => {
    menuOpenRef.current = false;
    menuTimeoutRef.current = setTimeout(() => {
      if (!menuOpenRef.current) {
        setMegaMenuOpen(null);
      }
    }, 300);
  };

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      clearMenuTimeout();
    };
  }, []);

  const renderNavLink = (item: typeof navItems[0]) => {
    // Highlight Contact button differently
    if (item.label === "Contact") {
      return (
        <Link
          to={item.href}
          className={cn(
            "nav-link font-medium text-sm px-4 py-2 rounded-md transition-colors",
            "bg-gradient-to-r from-enterprise-teal to-enterprise-blue text-white hover:shadow-md"
          )}
        >
          {item.label}
        </Link>
      );
    }

    return (
      <Link
        to={item.href}
        className="nav-link font-medium text-sm relative group"
        onMouseEnter={() => item.megaMenu && handleMenuMouseEnter(item.label)}
        onMouseLeave={handleMenuMouseLeave}
      >
        <span className="flex items-center">
          {item.label} 
          {item.megaMenu && <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />}
        </span>
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-enterprise-teal group-hover:w-full transition-all duration-300"></span>
      </Link>
    );
  };

  const renderMobileNavLink = (item: typeof navItems[0]) => {
    // Highlight Contact button differently
    if (item.label === "Contact") {
      return (
        <Link
          to={item.href}
          className="block py-3 px-4 mb-2 bg-gradient-to-r from-enterprise-teal to-enterprise-blue text-white rounded-md"
          onClick={() => setMobileMenuOpen(false)}
        >
          {item.label}
        </Link>
      );
    }

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
        {/* Updated Logo */}
        <Link to="/" className="flex items-center group">
          {/* Logo Container - Updated with more professional design */}
          <div className="relative h-12 w-12 mr-3 flex-shrink-0">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-enterprise-blue via-enterprise-teal to-enterprise-blue animate-spin-slow"></div>
            
            {/* Inner circle */}
            <div className="absolute inset-[2px] bg-white rounded-full flex items-center justify-center">
              {/* The "G" letter */}
              <div className="text-enterprise-blue font-bold text-2xl">G</div>
            </div>
            
            {/* Small decorative dot */}
            <div className="absolute top-0 right-0 w-3 h-3 rounded-full bg-enterprise-teal"></div>
          </div>
          
          {/* Company Name - Updated */}
          <div>
            <div className="flex items-baseline">
              <span className="text-xl font-bold text-enterprise-blue tracking-tight">
                GORANTLA INFOTECH SOLUTIONS
              </span>
              <span className="text-enterprise-teal ml-0.5">.</span>
            </div>
            <span className="text-xs block text-gray-600 -mt-1 font-medium tracking-wide">PVT LTD</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <div key={item.label} className="relative">
              {renderNavLink(item)}
              
              {/* Enhanced Mega Menu with better hover behavior */}
              {item.megaMenu && megaMenuOpen === item.label && (
                <div 
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 min-w-[280px] glass-effect rounded-xl shadow-xl overflow-hidden animate-fade-in border border-gray-100"
                  onMouseEnter={handleSubmenuMouseEnter}
                  onMouseLeave={handleSubmenuMouseLeave}
                >
                  <div className="p-3">
                    {item.subItems?.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.href}
                        className="block px-5 py-3 text-sm hover:bg-enterprise-teal/10 hover:text-enterprise-teal rounded-lg transition-colors flex items-center group"
                        onClick={() => setMegaMenuOpen(null)}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-enterprise-blue/40 group-hover:bg-enterprise-teal mr-2 transition-colors"></span>
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

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
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
