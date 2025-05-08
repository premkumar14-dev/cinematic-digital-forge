
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/95 py-2 shadow-md backdrop-blur-md" : "bg-gradient-to-r from-black/60 to-black/40 backdrop-blur-md py-3"
      )}
    >
      <div className="enterprise-container flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          {/* Modern, sleek logo design */}
          <div className="relative h-10 w-10 mr-3 flex-shrink-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#3a7bd5] to-[#00d2ff] rounded-md shadow-lg"></div>
            <div className="absolute inset-[2px] bg-white rounded-md flex items-center justify-center">
              <svg viewBox="0 0 36 36" className="h-7 w-7">
                <path
                  d="M7,14 C7,9.58172 10.5817,6 15,6 L21,6 C25.4183,6 29,9.58172 29,14 L29,22 C29,26.4183 25.4183,30 21,30 L15,30 C10.5817,30 7,26.4183 7,22 L7,14 Z"
                  fill="url(#logo-gradient)"
                  stroke="none"
                />
                <text x="18" y="22" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle" dominantBaseline="middle">G</text>
                <defs>
                  <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3a7bd5" />
                    <stop offset="100%" stopColor="#00d2ff" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          
          {/* Modern company name typography */}
          <div className="font-sans">
            <div className={cn(
              "text-xl font-bold tracking-tight transition-colors",
              scrolled ? "bg-gradient-to-r from-[#3a7bd5] to-[#00d2ff] bg-clip-text text-transparent" : "text-white"
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
                      "bg-transparent hover:bg-white/10 data-[state=open]:bg-white/10 px-4",
                      scrolled ? "text-gray-800" : "text-white"
                    )}
                  >
                    {item.label}
                  </NavigationMenuTrigger>
                ) : (
                  <Link to={item.href} className={cn(
                    "flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md transition-colors relative group",
                    item.label === "Contact" 
                      ? "bg-gradient-to-r from-[#3a7bd5] to-[#00d2ff] text-white hover:shadow-md" 
                      : scrolled ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-white/10"
                  )}>
                    {item.label}
                    {item.label !== "Contact" && (
                      <span className="absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-[#00d2ff] group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300"></span>
                    )}
                  </Link>
                )}

                {item.megaMenu && (
                  <NavigationMenuContent 
                    className="bg-white shadow-xl border border-gray-100 p-4 rounded-xl w-[450px] z-50 absolute left-auto right-0 transform-none"
                  >
                    <ul className="grid grid-cols-2 gap-3">
                      {item.subItems?.map((subItem) => (
                        <li key={subItem.label} className="w-full">
                          <NavigationMenuLink asChild>
                            <Link
                              to={subItem.href}
                              className="block p-3 w-full hover:bg-gradient-to-r hover:from-[#3a7bd5]/5 hover:to-[#00d2ff]/5 rounded-md text-gray-700 hover:text-[#3a7bd5] transition-colors"
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
          className={cn(
            "md:hidden rounded-full p-2 transition-colors",
            scrolled ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-white/10"
          )}
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
                    className="block py-3 px-4 mb-2 bg-gradient-to-r from-[#3a7bd5] to-[#00d2ff] text-white rounded-md text-center font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <Link
                    to={item.href}
                    className="block py-3 px-4 hover:bg-gradient-to-r hover:from-[#3a7bd5]/5 hover:to-[#00d2ff]/5 hover:text-[#3a7bd5] rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
                
                {item.megaMenu && (
                  <div className="pl-6 border-l-2 border-[#00d2ff]/20 ml-4 mt-2 mb-3 grid grid-cols-2 gap-1">
                    {item.subItems?.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.href}
                        className="block py-2 px-3 text-sm hover:bg-gradient-to-r hover:from-[#3a7bd5]/5 hover:to-[#00d2ff]/5 hover:text-[#3a7bd5] rounded-md"
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
