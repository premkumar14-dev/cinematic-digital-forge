
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedText from "@/components/ui/AnimatedText";
import { Link } from "react-router-dom";

// Premium high-quality hero slides
const heroSlides = [
  {
    id: 1,
    bgImage: "https://images.unsplash.com/photo-1638612913771-8f00622b96fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    headline: "Enterprise Technology That Scales",
    subheadline: "Building resilient solutions for tomorrow's challenges"
  },
  {
    id: 2,
    bgImage: "https://images.unsplash.com/photo-1664575600850-c4b712e6e2bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    headline: "Innovation Through Experience",
    subheadline: "Our expertise, your competitive advantage"
  },
  {
    id: 3,
    bgImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    headline: "Beyond Software Development",
    subheadline: "End-to-end solutions that transform businesses"
  }
];

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
    }, 6000);
    
    return () => clearInterval(slideInterval);
  }, []);

  const currentSlide = heroSlides[activeSlide];

  return (
    <div className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
      {/* Premium background image slider with better transitions */}
      {heroSlides.map((slide, index) => (
        <div 
          key={slide.id}
          className={cn(
            "absolute inset-0 bg-cover bg-center transition-all duration-1500",
            activeSlide === index ? "opacity-100 scale-105" : "opacity-0 scale-100"
          )}
          style={{ backgroundImage: `url(${slide.bgImage})` }}
        />
      ))}
      
      {/* Premium overlay with modern glass effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 backdrop-blur-[3px] z-0"></div>
      
      <div className="enterprise-container relative z-10 py-24 mt-16">
        <div className="max-w-4xl mx-auto">
          {/* Main headline with premium typography */}
          <div className="mb-12 text-center">
            {/* Animated company name */}
            <div className={cn(
              "inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 transform transition-all duration-1000",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            )}>
              <span className="text-enterprise-teal font-medium">GORANTLA INFOTECH</span>
            </div>
            
            {/* Main headline with premium styling */}
            <AnimatedText
              text="Transforming Vision Into Reality"
              type="line"
              animation="fade"
              isVisible={isVisible}
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight"
            />
            
            <AnimatedText
              text={currentSlide.headline}
              type="line"
              animation="fade"
              delay={800}
              isVisible={isVisible}
              className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-enterprise-teal to-white"
            />
          </div>

          {/* Subheadline with premium styling */}
          <div className="relative mx-auto max-w-2xl">
            {/* Decorative accent for premium look */}
            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-1 h-16 bg-enterprise-teal/70 rounded-full hidden md:block"></div>
            
            <AnimatedText 
              text={currentSlide.subheadline}
              delay={1600}
              isVisible={isVisible}
              className="text-2xl text-gray-100 mb-12 mx-auto text-center font-light"
            />
          </div>

          {/* Premium CTAs */}
          <div className={cn(
            "flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 transform transition-all duration-500",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            <Link to="/services" className="group">
              <Button 
                size="lg" 
                className="group relative overflow-hidden bg-gradient-to-r from-enterprise-teal to-enterprise-blue text-white px-8 py-7 rounded-md shadow-lg hover:shadow-xl transition-all"
              >
                <span className="relative z-10 font-medium tracking-wide">Explore Solutions</span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 relative z-10" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline"
                className="group relative border-2 border-white/80 bg-transparent hover:bg-white/10 text-white hover:text-white px-8 py-[1.625rem] rounded-md transition-all hover:shadow-lg"
              >
                <span className="relative z-10 font-medium tracking-wide">Get in Touch</span>
              </Button>
            </Link>
          </div>

          {/* Premium slide indicators */}
          <div className="flex justify-center mt-16 space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-500",
                  activeSlide === index 
                    ? "bg-enterprise-teal w-16" 
                    : "bg-white/30 w-6 hover:bg-white/50"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Subtle scroll indicator for premium UX */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70 animate-bounce">
            <span className="text-xs mb-2">Scroll to explore</span>
            <div className="h-10 w-0.5 bg-white/30 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
