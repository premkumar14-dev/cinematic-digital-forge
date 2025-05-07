
import React from "react";
import { cn } from "@/lib/utils";
import { GlassCard } from "@/components/ui/GlassCard";
import { useInView } from "react-intersection-observer";
import { Target, Award, TrendingUp } from "lucide-react";

interface ValueCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  isInView: boolean;
  index: number;
  stats?: { value: string; label: string }[];
}

const ValueCard: React.FC<ValueCardProps> = ({ icon: Icon, title, description, isInView, index, stats }) => {
  return (
    <div
      className={cn(
        "relative transition-all duration-700 transform h-full",
        isInView 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-20",
        isInView && `delay-[${index * 200}ms]`
      )}
    >
      <GlassCard className="h-full p-8 relative z-10 group overflow-hidden border border-gray-100 hover:border-enterprise-blue/20 transition-all duration-500">
        {/* Modern gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-80"></div>
        
        {/* Animated accent elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-enterprise-blue/5 rounded-full transform translate-x-16 -translate-y-16 group-hover:-translate-x-8 group-hover:translate-y-4 transition-all duration-700"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-enterprise-teal/5 rounded-full transform -translate-x-20 translate-y-20 group-hover:translate-x-4 group-hover:-translate-y-4 transition-all duration-700"></div>
        
        {/* Modern icon container */}
        <div className="relative z-10 mb-6 inline-block">
          <div className="w-16 h-16 bg-gradient-to-br from-enterprise-blue/10 to-enterprise-teal/10 rounded-xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
            <Icon className="h-8 w-8 text-enterprise-blue group-hover:text-enterprise-teal transition-colors duration-300" />
          </div>
          <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-enterprise-teal/20 rounded-lg transform rotate-45 group-hover:scale-150 group-hover:rotate-90 transition-all duration-500"></div>
        </div>
        
        <div className="relative z-10">
          <h3 className="text-2xl font-semibold mb-4 text-enterprise-blue group-hover:text-enterprise-teal transition-colors duration-300">{title}</h3>
          <p className="text-gray-600 mb-6">{description}</p>
          
          {/* Statistics display with modern styling */}
          {stats && (
            <div className="grid grid-cols-2 gap-4 mt-8 pt-4 border-t border-gray-100">
              {stats.map((stat, i) => (
                <div key={i} className="relative overflow-hidden rounded-lg p-4 bg-gradient-to-br from-white to-gray-50 group-hover:from-enterprise-blue/5 group-hover:to-white transition-colors duration-300">
                  <div className="text-2xl font-bold text-enterprise-blue group-hover:text-enterprise-teal transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-enterprise-blue/30 to-enterprise-teal/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </GlassCard>
    </div>
  );
};

export function Mission() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower businesses with cutting-edge technology solutions that drive innovation, efficiency, and sustainable growth in an increasingly digital world.",
      stats: [
        { value: "500+", label: "Projects Delivered" },
        { value: "15+", label: "Years of Excellence" }
      ]
    },
    {
      icon: TrendingUp,
      title: "Our Vision",
      description: "To be the global leader in digital transformation, recognized for our technical excellence, innovative solutions, and unwavering commitment to client success.",
      stats: [
        { value: "98%", label: "Client Retention" },
        { value: "24/7", label: "Support" }
      ]
    },
    {
      icon: Award,
      title: "Our Values",
      description: "Excellence, Innovation, Integrity, Collaboration, and Client-Centricity form the foundation of our organization and guide every decision we make.",
      stats: [
        { value: "200+", label: "Global Experts" },
        { value: "12", label: "Industry Awards" }
      ]
    }
  ];

  return (
    <section id="mission" className="py-24 relative overflow-hidden">
      {/* Modern, subtle background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,240,255,0.2)_0,rgba(255,255,255,0)_60%)]"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-30"></div>
      </div>
      
      <div className="enterprise-container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          {/* Modern section title */}
          <div className="inline-block relative mb-4">
            <span className="inline-block px-4 py-1 bg-enterprise-blue/5 text-enterprise-blue font-medium text-sm rounded-full mb-4">OUR FOUNDATION</span>
            <h2 className="text-3xl md:text-4xl font-bold text-enterprise-blue relative z-10">
              Mission, Vision & Values
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-enterprise-blue to-enterprise-teal rounded-full"></div>
            </h2>
          </div>
          
          <p className="text-gray-600 mt-6">
            Guided by purpose and driven by excellence, we're committed to transforming 
            the digital landscape for businesses worldwide.
          </p>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-10">
          {values.map((value, index) => (
            <ValueCard
              key={value.title}
              icon={value.icon}
              title={value.title}
              description={value.description}
              isInView={inView}
              index={index}
              stats={value.stats}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Mission;
