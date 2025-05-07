
import React from "react";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";
import { CheckCircle, Users, Globe, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const stats = [
    { value: "45+", label: "Team Members" },
    { value: "5+", label: "Years Experience" },
    { value: "23+", label: "Projects Delivered" },
    { value: "12+", label: "Global Clients" }
  ];

  const achievements = [
    { icon: CheckCircle, text: "ISO 27001 Certified" },
    { icon: Users, text: "Microsoft Gold Partner" },
    { icon: Globe, text: "AWS Advanced Partner" },
    { icon: Award, text: "Google Cloud Partner" }
  ];

  return (
    <section id="about" className="py-24 bg-enterprise-blue text-white relative overflow-hidden">
      {/* Background overlay pattern */}
      <div 
        className="absolute inset-0 opacity-5" 
        style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: '60px 60px'
        }}
      />
      
      <div ref={ref} className="enterprise-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className={cn(
            "transition-all duration-700 transform",
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-enterprise-teal">About GORANTLA</h2>
            <p className="text-lg text-white/90 mb-6">
              GORANTLA INFOTECH SOLUTIONS PVT LTD is a global technology company delivering cutting-edge software solutions, cloud engineering, and digital transformation services to enterprises worldwide.
            </p>
            <p className="text-white/80 mb-6">
              Founded in 2018, we've grown from a small team of passionate technologists to a talented team of over 45 technology experts. Our mission is to empower businesses with innovative technology solutions that drive growth and competitive advantage.
            </p>
            <div className="mt-8">
              <Link to="/about">
                <Button
                  className="bg-enterprise-teal hover:bg-enterprise-teal/90 text-white"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>

            {/* Achievements */}
            <div className="mt-12 grid grid-cols-2 gap-4">
              {achievements.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index} 
                    className={cn(
                      "flex items-center gap-3 transition-all duration-700",
                      inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                      inView && `delay-[${(index + 3) * 200}ms]`
                    )}
                  >
                    <Icon className="h-5 w-5 text-enterprise-teal" />
                    <span className="text-white/90">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right column - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={cn(
                  "bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center flex flex-col items-center justify-center transition-all duration-700 transform",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
                  inView && `delay-[${index * 200}ms]`
                )}
              >
                <span className="text-4xl font-bold text-enterprise-teal mb-2">{stat.value}</span>
                <span className="text-white/80">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
