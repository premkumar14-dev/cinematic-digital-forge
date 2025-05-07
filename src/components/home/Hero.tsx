
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedText from "@/components/ui/AnimatedText";
import { Link } from "react-router-dom";

// Professional software company hero slides
const heroSlides = [
  {
    id: 1,
    bgImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    headline: "Transforming Ideas Into Digital Solutions",
    subheadline: "Enterprise software development for the modern business landscape"
  },
  {
    id: 2,
    bgImage: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    headline: "Engineered For Excellence",
    subheadline: "Building resilient technology infrastructures for global enterprises"
  },
  {
    id: 3,
    bgImage: "https://images.unsplash.com/photo-1581092921461-7384393132f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    headline: "Innovative Solutions That Scale",
    subheadline: "Continuously evolving to meet tomorrow's technology challenges"
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
    }, 5000);
    
    return () => clearInterval(slideInterval);
  }, []);

  const currentSlide = heroSlides[activeSlide];

  return (
    <div className="relative min-h-[80vh] flex flex-col justify-center">
      {/* Sliding background images with overlay */}
      {heroSlides.map((slide, index) => (
        <div 
          key={slide.id}
          className={cn(
            "absolute inset-0 bg-cover bg-center transition-all duration-1000",
            activeSlide === index ? "opacity-100" : "opacity-0"
          )}
          style={{ backgroundImage: `url(${slide.bgImage})` }}
        />
      ))}
      
      {/* Semi-transparent overlay with modern gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-enterprise-blue/50 to-black/80 z-0"></div>
      
      <div className="enterprise-container relative z-10 py-20 mt-16">
        <div className="max-w-3xl mx-auto">
          {/* Main headline */}
          <div className="mb-8 text-center">
            <AnimatedText
              text="Engineering the Future."
              type="line"
              animation="fade"
              isVisible={isVisible}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
            />
            <AnimatedText
              text={currentSlide.headline}
              type="line"
              animation="fade"
              delay={800}
              isVisible={isVisible}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-enterprise-teal to-white"
            />
          </div>

          {/* Subheadline */}
          <AnimatedText 
            text={currentSlide.subheadline}
            delay={1600}
            isVisible={isVisible}
            className="text-2xl text-gray-200 mb-12 max-w-2xl mx-auto text-center"
          />

          {/* Enhanced CTAs */}
          <div className={cn(
            "flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 transform transition-all duration-500",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            <Link to="/services" className="group">
              <Button 
                size="lg" 
                className="group relative overflow-hidden bg-enterprise-blue hover:bg-enterprise-blue/90 text-white px-8 py-6"
              >
                <span className="relative z-10">Explore Services</span>
                <span className="absolute inset-0 bg-gradient-to-r from-enterprise-teal to-enterprise-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 relative z-10" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline"
                className="group relative border-white hover:bg-white/10 text-white hover:text-white px-8 py-6"
              >
                <span className="relative z-10">Contact Us</span>
              </Button>
            </Link>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center mt-12 space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  activeSlide === index ? "bg-white w-8" : "bg-white/50"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
