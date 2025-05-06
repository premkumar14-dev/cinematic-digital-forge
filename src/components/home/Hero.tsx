
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedText from "@/components/ui/AnimatedText";
import { GradientBackground } from "@/components/ui/GradientBackground";

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
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-enterprise-teal/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-enterprise-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-enterprise-light-blue/10 rounded-full blur-3xl" />
      </div>

      <div className="enterprise-container relative z-10 py-20 mt-16">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main headline */}
          <div className="mb-8">
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
            className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
          />

          {/* CTAs */}
          <div className={cn(
            "flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 transform transition-all duration-500",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            <Button 
              size="lg" 
              className="group bg-enterprise-blue hover:bg-enterprise-blue/90 text-white"
            >
              Explore Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="group hover:text-enterprise-teal border-enterprise-teal/30 hover:border-enterprise-teal"
            >
              Let's Talk
            </Button>
          </div>

          {/* Scroll cue */}
          <div className={cn(
            "mt-20 flex flex-col items-center justify-center transition-all duration-500 delay-300",
            isVisible ? "opacity-100" : "opacity-0"
          )}>
            <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex items-start justify-center p-1">
              <div className="w-1.5 h-2 bg-gray-400 rounded-full animate-[bounce_2s_infinite]" />
            </div>
            <p className="text-sm text-gray-400 mt-2">Scroll to explore</p>
          </div>
        </div>
      </div>
    </GradientBackground>
  );
}

export default Hero;
