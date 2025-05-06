
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
}

const ValueCard: React.FC<ValueCardProps> = ({ icon: Icon, title, description, isInView, index }) => {
  return (
    <GlassCard
      className={cn(
        "relative transition-all duration-700 transform h-full",
        isInView 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-20",
        isInView && `delay-[${index * 200}ms]`
      )}
    >
      <div className="absolute -top-6 left-6 w-12 h-12 rounded-lg bg-enterprise-blue flex items-center justify-center">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-3 text-enterprise-blue">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </GlassCard>
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
      description: "To empower businesses with cutting-edge technology solutions that drive innovation, efficiency, and sustainable growth in an increasingly digital world."
    },
    {
      icon: TrendingUp,
      title: "Our Vision",
      description: "To be the global leader in digital transformation, recognized for our technical excellence, innovative solutions, and unwavering commitment to client success."
    },
    {
      icon: Award,
      title: "Our Values",
      description: "Excellence, Innovation, Integrity, Collaboration, and Client-Centricity form the foundation of our organization and guide every decision we make."
    }
  ];

  return (
    <section id="mission" className="py-24 relative bg-gradient-to-b from-blue-50/30 to-white">
      <div className="enterprise-container">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-enterprise-blue">
            Mission, Vision & Values
          </h2>
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
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Mission;
