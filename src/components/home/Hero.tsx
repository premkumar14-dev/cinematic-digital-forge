
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedText from "@/components/ui/AnimatedText";
import { GradientBackground } from "@/components/ui/GradientBackground";
import { Link } from "react-router-dom";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <GradientBackground className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Modern, minimalist background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50/30 z-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        
        {/* Subtle accent elements */}
        <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-enterprise-teal/5 blur-3xl"></div>
        <div className="absolute bottom-20 left-[5%] w-80 h-80 rounded-full bg-enterprise-blue/5 blur-3xl"></div>
        <div className="absolute top-[40%] left-[35%] w-40 h-40 rounded-full bg-enterprise-blue/10 blur-2xl"></div>
      </div>
      
      {/* Subtle floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] right-[20%] w-40 h-40 rounded-full border border-enterprise-teal/20 animate-float-slow"></div>
        <div className="absolute top-[30%] left-[15%] w-28 h-28 rounded-full border border-enterprise-blue/20 animate-float-medium"></div>
        <div className="absolute bottom-[20%] right-[25%] w-20 h-20 rounded-full border border-enterprise-purple/20 animate-float-fast"></div>
      </div>

      <div className="enterprise-container relative z-10 py-20 mt-16">
        <div className="max-w-3xl mx-auto">
          {/* Main headline */}
          <div className="mb-8 text-center">
            <AnimatedText
              text="Engineering the Future."
              type="line"
              animation="fade"
              isVisible={isVisible}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-enterprise-blue mb-4"
            />
            <AnimatedText
              text="Delivering Global-Scale Innovation."
              type="line"
              animation="fade"
              delay={800}
              isVisible={isVisible}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-enterprise"
            />
          </div>

          {/* Subheadline */}
          <AnimatedText 
            text="At GORANTLA INFOTECH SOLUTIONS, we architect next-gen software ecosystems, accelerate cloud transformation, and build scalable digital infrastructures for global enterprises."
            delay={1600}
            isVisible={isVisible}
            className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto text-center"
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
                className="group relative hover:text-enterprise-teal border-enterprise-teal/30 hover:border-enterprise-teal px-8 py-6"
              >
                <span className="relative z-10">Let's Talk</span>
              </Button>
            </Link>
          </div>

          {/* Enhanced scroll cue */}
          <div className={cn(
            "mt-20 flex flex-col items-center justify-center transition-all duration-500 delay-300",
            isVisible ? "opacity-100" : "opacity-0"
          )}>
            <div className="w-8 h-14 rounded-full border-2 border-gray-400 flex items-start justify-center p-1">
              <div className="w-2 h-3 bg-gray-400 rounded-full animate-[bounce_2s_infinite]" />
            </div>
            <p className="text-sm text-gray-400 mt-2 font-light tracking-wider">Scroll to explore</p>
          </div>
        </div>
      </div>
    </GradientBackground>
  );
}

export default Hero;
