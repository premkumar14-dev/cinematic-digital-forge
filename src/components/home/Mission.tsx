
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
      <GlassCard className="h-full p-8 relative z-10 group overflow-hidden border border-transparent hover:border-enterprise-blue/20 transition-all duration-500">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-enterprise-blue/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 group-hover:bg-enterprise-teal/5 transition-colors duration-500"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-enterprise-teal/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2 group-hover:bg-enterprise-blue/5 transition-colors duration-500"></div>
        
        {/* Enhanced icon container */}
        <div className="absolute -top-6 left-6 w-16 h-16 rounded-xl bg-gradient-to-br from-enterprise-blue to-enterprise-blue-600 flex items-center justify-center shadow-lg shadow-enterprise-blue/20 group-hover:shadow-enterprise-teal/20 group-hover:from-enterprise-teal group-hover:to-enterprise-blue transition-all duration-500">
          <Icon className="h-8 w-8 text-white" />
        </div>
        
        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-4 text-enterprise-blue group-hover:text-enterprise-teal transition-colors duration-300">{title}</h3>
          <p className="text-gray-600 mb-6">{description}</p>
          
          {/* Statistics display */}
          {stats && (
            <div className="grid grid-cols-2 gap-4 mt-8 pt-4 border-t border-gray-100">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold text-enterprise-blue group-hover:text-enterprise-teal transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
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
      {/* Enhanced background with subtle patterns */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-white"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-[0.02] mix-blend-overlay"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-60 h-60 bg-enterprise-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-enterprise-teal/5 rounded-full blur-3xl"></div>
      
      <div className="enterprise-container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          {/* Enhanced section title */}
          <div className="inline-block relative mb-4">
            <span className="absolute -top-6 left-0 right-0 text-5xl font-bold text-enterprise-blue/5">VALUES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-enterprise-blue relative z-10">
              Mission, Vision & Values
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-enterprise-blue to-enterprise-teal mx-auto mt-4 rounded-full"></div>
          </div>
          
          <p className="text-gray-600">
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
