
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedText from "@/components/ui/AnimatedText";
import { Link } from "react-router-dom";

// Premium high-quality hero slides with better visibility and clarity
const heroSlides = [
  {
    id: 1,
    bgImage: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    headline: "Enterprise Technology That Scales",
    subheadline: "Building resilient solutions for tomorrow's challenges"
  },
  {
    id: 2,
    bgImage: "https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    headline: "Innovation Through Experience",
    subheadline: "Our expertise, your competitive advantage"
  },
  {
    id: 3,
    bgImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
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
      
      {/* Improved overlay with better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 backdrop-blur-[2px] z-0"></div>
      
      <div className="enterprise-container relative z-10 py-24 mt-16">
        <div className="max-w-4xl mx-auto">
          {/* Main headline with premium typography */}
          <div className="mb-12 text-center">
            {/* Animated company name */}
            <div className={cn(
              "inline-block mb-6 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 transform transition-all duration-1000",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            )}>
              <span className="text-white font-medium tracking-wide">GORANTLA INFOTECH</span>
            </div>
            
            {/* Main headline with premium styling */}
            <AnimatedText
              text="Transforming Vision Into Reality"
              type="line"
              animation="fade"
              isVisible={isVisible}
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg"
            />
            
            <AnimatedText
              text={currentSlide.headline}
              type="line"
              animation="fade"
              delay={800}
              isVisible={isVisible}
              className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-enterprise-teal to-white drop-shadow-md"
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
              className="text-2xl text-white mb-12 mx-auto text-center font-light drop-shadow-md"
            />
          </div>

          {/* Premium redesigned CTAs */}
          <div className={cn(
            "flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 transform transition-all duration-500",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            <Link to="/services" className="group w-full sm:w-auto">
              <Button 
                size="lg" 
                className="group relative overflow-hidden bg-gradient-to-br from-enterprise-blue to-enterprise-teal hover:from-enterprise-teal hover:to-enterprise-blue text-white px-8 py-7 rounded-md shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-all duration-700"></div>
                <span className="relative z-10 font-medium tracking-wide text-lg">Explore Solutions</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2 relative z-10" />
              </Button>
            </Link>
            
            <Link to="/contact" className="group w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="outline"
                className="group relative bg-white/10 border-2 border-white hover:bg-white/20 text-white hover:text-white px-8 py-[1.65rem] rounded-md transition-all hover:shadow-lg w-full sm:w-auto"
              >
                <div className="absolute inset-0 w-full h-full bg-enterprise-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 font-medium tracking-wide text-lg">Get in Touch</span>
              </Button>
            </Link>
          </div>

          {/* Premium slide indicators */}
          <div className="flex justify-center mt-16 space-x-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-500 shadow-md",
                  activeSlide === index 
                    ? "bg-white w-16" 
                    : "bg-white/50 w-8 hover:bg-white/70"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Subtle scroll indicator for premium UX */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/90 animate-bounce">
            <span className="text-xs mb-2 font-semibold tracking-wider">Scroll to explore</span>
            <div className="h-12 w-0.5 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
