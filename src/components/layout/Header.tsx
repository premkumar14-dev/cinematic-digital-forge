
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X } from "lucide-react";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger 
} from "@/components/ui/navigation-menu";

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
      { label: "IT Consulting", href: "/services/consulting" },
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
  const location = useLocation();

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

  // Check if the current location matches a nav item
  const isActive = (href: string) => {
    return location.pathname === href || location.pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled 
          ? "modern-navbar py-2" 
          : "bg-gradient-to-r from-black/75 to-black/60 backdrop-blur-md py-3"
      )}
    >
      <div className="enterprise-container flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          {/* Modern, sleek logo design */}
          <div className="relative h-10 w-10 mr-3 flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-modern rounded-lg shadow-lg"></div>
            <div className="absolute inset-[2px] bg-white rounded-md flex items-center justify-center">
              <svg viewBox="0 0 36 36" className="h-7 w-7">
                <path
                  d="M10,10 L10,26 C10,27.6568542 11.3431458,29 13,29 L23,29 C24.6568542,29 26,27.6568542 26,26 L26,10 C26,8.34314575 24.6568542,7 23,7 L13,7 C11.3431458,7 10,8.34314575 10,10 Z"
                  fill="url(#logo-gradient)"
                  stroke="none"
                />
                <text x="18" y="22" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle" dominantBaseline="middle">G</text>
                <defs>
                  <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4A5AEF" />
                    <stop offset="100%" stopColor="#8C52FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          
          {/* Modern company name typography */}
          <div className="font-sans">
            <div className={cn(
              "text-xl font-bold tracking-tight transition-colors",
              scrolled ? "gradient-text" : "text-white"
            )}>
              GORANTLA
            </div>
            <div className={cn(
              "text-xs font-medium tracking-widest -mt-1",
              scrolled ? "text-gray-600" : "text-gray-300"
            )}>
              INFOTECH
            </div>
          </div>
        </Link>

        {/* Modern navigation with improved dropdowns */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex space-x-1">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                {item.megaMenu ? (
                  <NavigationMenuTrigger 
                    className={cn(
                      "bg-transparent data-[state=open]:bg-white/20 px-4 transition-colors",
                      scrolled 
                        ? "text-gray-800 hover:bg-gray-100/70 data-[state=open]:bg-gray-100/70" 
                        : "text-white hover:bg-white/10 data-[state=open]:text-white"
                    )}
                  >
                    {item.label}
                  </NavigationMenuTrigger>
                ) : (
                  <Link 
                    to={item.href} 
                    className={cn(
                      "flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md transition-colors relative group",
                      isActive(item.href) && "font-semibold",
                      item.label === "Contact" 
                        ? "bg-gradient-button text-white hover:shadow-lg" 
                        : scrolled 
                          ? "text-gray-800 hover:bg-gray-100/70" 
                          : "text-white hover:bg-white/10"
                    )}
                  >
                    {item.label}
                    {item.label !== "Contact" && !isActive(item.href) && (
                      <span className="absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-enterprise-purple group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300"></span>
                    )}
                    {isActive(item.href) && item.label !== "Contact" && (
                      <span className="absolute -bottom-0.5 left-1/4 w-1/2 h-0.5 bg-enterprise-purple"></span>
                    )}
                  </Link>
                )}

                {item.megaMenu && (
                  <NavigationMenuContent 
                    className="z-50 bg-white rounded-xl shadow-xl border-0 mt-2 p-4 w-[280px] absolute data-[motion=from-start]:animate-fade-in data-[motion=from-end]:animate-fade-in data-[motion=to-start]:animate-fade-out data-[motion=to-end]:animate-fade-out"
                  >
                    <ul className="grid grid-cols-1 gap-2">
                      {item.subItems?.map((subItem) => (
                        <li key={subItem.label} className="w-full">
                          <NavigationMenuLink asChild>
                            <Link
                              to={subItem.href}
                              className="block p-3 w-full hover:bg-gradient-to-r hover:from-enterprise-purple/5 hover:to-enterprise-blue/5 rounded-md text-gray-700 hover:text-enterprise-purple transition-colors"
                            >
                              <span className="font-medium">{subItem.label}</span>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.href}
                            className="mt-2 block p-3 text-center w-full bg-gray-50 hover:bg-gradient-to-r hover:from-enterprise-blue/10 hover:to-enterprise-purple/10 rounded-md text-enterprise-blue font-medium"
                          >
                            View All {item.label}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <button
          className={cn(
            "md:hidden rounded-full p-2 transition-colors",
            scrolled ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-white/10"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu with improved design */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg absolute top-full left-0 w-full animate-fade-in shadow-lg">
          <div className="py-4 enterprise-container">
            {navItems.map((item) => (
              <div key={item.label} className="mb-2">
                {item.label === "Contact" ? (
                  <Link
                    to={item.href}
                    className="block py-3 px-4 mb-2 bg-gradient-button text-white rounded-md text-center font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <Link
                    to={item.href}
                    className={cn(
                      "block py-3 px-4 hover:bg-gradient-to-r hover:from-enterprise-blue/5 hover:to-enterprise-purple/5 hover:text-enterprise-purple rounded-md transition-colors",
                      isActive(item.href) && "text-enterprise-purple font-medium"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
                
                {item.megaMenu && (
                  <div className="pl-6 border-l-2 border-enterprise-purple/20 ml-4 mt-2 mb-3 grid grid-cols-1 gap-1">
                    {item.subItems?.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.href}
                        className="block py-2 px-3 text-sm hover:bg-gradient-to-r hover:from-enterprise-blue/5 hover:to-enterprise-purple/5 hover:text-enterprise-purple rounded-md"
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
