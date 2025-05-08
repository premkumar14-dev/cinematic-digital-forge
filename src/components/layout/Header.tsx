
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X } from "lucide-react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

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

  const handleMenuMouseEnter = (label: string) => {
    clearMenuTimeout();
    menuOpenRef.current = true;
    setMegaMenuOpen(label);
  };

  const handleMenuMouseLeave = () => {
    menuOpenRef.current = false;
    
    menuTimeoutRef.current = setTimeout(() => {
      if (!menuOpenRef.current) {
        setMegaMenuOpen(null);
      }
    }, 300);
  };

  const handleSubmenuMouseEnter = () => {
    clearMenuTimeout();
    menuOpenRef.current = true;
  };

  const handleSubmenuMouseLeave = () => {
    menuOpenRef.current = false;
    menuTimeoutRef.current = setTimeout(() => {
      if (!menuOpenRef.current) {
        setMegaMenuOpen(null);
      }
    }, 300);
  };

  useEffect(() => {
    return () => {
      clearMenuTimeout();
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        "bg-white/95 py-3 shadow-md backdrop-blur-md"
      )}
    >
      <div className="enterprise-container flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <div className="relative h-14 w-14 mr-4 flex-shrink-0 overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-enterprise-blue via-blue-500 to-enterprise-teal rounded-xl shadow-lg"></div>
            
            <div className="absolute inset-[3px] bg-white rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="h-10 w-10">
                <path 
                  d="M32 8C19.2 8 8.8 18.4 8.8 31.2c0 10.4 6.8 19.2 16 22.4.8.8 1.6 2.4.8 3.2-1.6 1.6-4 1.6-5.6 1.6 2.4 1.6 5.6 2.4 8.8 2.4 10.4 0 19.2-6.4 23.2-15.2 1.6-3.2 2.4-6.4 2.4-10.4 0-4-1.6-8-3.2-11.2-3.2-8.8-11.2-16-19.2-16z"
                  fill="url(#grad)" 
                />
                <text x="22" y="40" fontSize="28" fontFamily="Arial" fontWeight="bold" fill="#fff">G</text>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0066cc" />
                  <stop offset="100%" stopColor="#00ccaa" />
                </linearGradient>
              </svg>
            </div>
            
            <div className="absolute top-0 right-0 w-3 h-3 rounded-full bg-enterprise-teal animate-pulse-subtle"></div>
            <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-enterprise-blue to-enterprise-teal"></div>
          </div>
          
          <div className="font-sans tracking-tight">
            <div className="text-2xl font-bold bg-gradient-to-r from-enterprise-blue to-enterprise-teal bg-clip-text text-transparent">
              GORANTLA INFOTECH
            </div>
          </div>
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex space-x-1">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                {item.megaMenu ? (
                  <NavigationMenuTrigger 
                    className={cn(
                      "bg-transparent text-enterprise-blue hover:bg-enterprise-blue/5 data-[state=open]:bg-enterprise-blue/5 px-4"
                    )}
                  >
                    {item.label}
                  </NavigationMenuTrigger>
                ) : (
                  <Link to={item.href} className={cn(
                    "flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md transition-colors relative group",
                    item.label === "Contact" 
                      ? "bg-enterprise-teal text-white hover:bg-enterprise-teal/90 hover:shadow-md" 
                      : "text-enterprise-blue hover:bg-enterprise-blue/5"
                  )}>
                    {item.label}
                    {item.label !== "Contact" && (
                      <span className="absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-enterprise-teal group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300"></span>
                    )}
                  </Link>
                )}

                {item.megaMenu && (
                  <NavigationMenuContent className="bg-white shadow-xl border border-gray-100 p-4 rounded-xl w-[400px] z-50">
                    <ul className="grid grid-cols-2 gap-3">
                      {item.subItems?.map((subItem) => (
                        <li key={subItem.label}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={subItem.href}
                              className="block p-3 hover:bg-enterprise-teal/10 rounded-md text-enterprise-blue hover:text-enterprise-teal transition-colors"
                            >
                              <span className="text-sm font-medium">{subItem.label}</span>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <button
          className="md:hidden text-enterprise-blue rounded-full p-2 hover:bg-enterprise-blue/5"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg absolute top-full left-0 w-full animate-fade-in shadow-lg border-t border-gray-100">
          <div className="py-4 enterprise-container">
            {navItems.map((item) => (
              <div key={item.label} className="mb-2">
                {item.label === "Contact" ? (
                  <Link
                    to={item.href}
                    className="block py-3 px-4 mb-2 bg-enterprise-teal text-white rounded-md text-center font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <Link
                    to={item.href}
                    className="block py-3 px-4 hover:bg-enterprise-teal/10 hover:text-enterprise-teal rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
                
                {item.megaMenu && (
                  <div className="pl-6 border-l-2 border-enterprise-teal/20 ml-4 mt-2 mb-3 grid grid-cols-2 gap-1">
                    {item.subItems?.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.href}
                        className="block py-2 px-3 text-sm hover:bg-enterprise-teal/10 hover:text-enterprise-teal rounded-md"
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
