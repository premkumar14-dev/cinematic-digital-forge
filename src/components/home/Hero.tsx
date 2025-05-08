
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight } from 'lucide-react';

const heroImages = [
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

const heroContent = [
  {
    title: "Digital Innovation",
    subtitle: "for Enterprise Growth",
    text: "We transform businesses with custom technology solutions designed for the modern digital landscape."
  },
  {
    title: "Strategic Technology",
    subtitle: "Partnerships",
    text: "Unlock new opportunities with our collaborative approach to solving complex business challenges."
  },
  {
    title: "Future-Ready",
    subtitle: "Solutions",
    text: "Embrace the future with scalable, secure, and innovative technology solutions for your business."
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 w-full h-full">
        {heroImages.map((image, index) => (
          <div
            key={`hero-image-${index}`}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1500 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex flex-col justify-center enterprise-container pt-16">
        <div className="max-w-3xl">
          {/* Animated Tag */}
          <div className="inline-flex items-center py-1 px-3 rounded-full backdrop-blur-md bg-white/10 border border-white/20 mb-6 animate-fade-up text-sm text-white/90">
            <span className="w-2 h-2 rounded-full bg-enterprise-purple mr-2"></span>
            Technology Solutions for the Digital Age
          </div>
          
          {/* Hero Text Animation */}
          <div className="overflow-hidden">
            {heroContent.map((content, index) => (
              <div
                key={`hero-content-${index}`}
                className={`transition-all duration-1000 ${
                  currentSlide === index 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0 absolute'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                  {content.title} <span className="text-enterprise-purple">{content.subtitle}</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl">{content.text}</p>
              </div>
            ))}
          </div>
          
          {/* CTA Buttons with Modern Design */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-up" style={{ animationDelay: '600ms' }}>
            <Link to="/solutions" className="group">
              <Button 
                size="lg"
                className="bg-gradient-button hover:bg-gradient-dark text-white w-full sm:w-auto px-8 py-6 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-0"
              >
                <span>Explore Solutions</span>
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Link to="/contact" className="group">
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white/70 text-white bg-transparent w-full sm:w-auto px-8 py-6 rounded-lg backdrop-blur-sm hover:backdrop-blur-lg hover:bg-white/10 transform transition-all duration-300 hover:-translate-y-1"
              >
                <span>Get in Touch</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          {/* Slide Indicators */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-2">
            {heroImages.map((_, index) => (
              <button
                key={`indicator-${index}`}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === index 
                    ? 'w-8 bg-enterprise-purple' 
                    : 'w-2 bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
