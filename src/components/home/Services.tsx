
import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { GlassCard } from "@/components/ui/GlassCard";
import { useInView } from "react-intersection-observer";
import { Code, Cloud, BarChart, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
  isInView: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, index, isInView }) => {
  return (
    <GlassCard 
      hoverEffect
      className={cn(
        "transition-all duration-500 transform",
        isInView 
          ? "translate-y-0 opacity-100" 
          : "translate-y-20 opacity-0",
        // Stagger the animation based on the index
        isInView && `delay-[${index * 200}ms]`
      )}
    >
      <div className="w-12 h-12 rounded-lg bg-enterprise-teal/10 flex items-center justify-center text-enterprise-teal mb-5">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-enterprise-blue">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button variant="link" className="p-0 text-enterprise-teal hover:text-enterprise-blue">
        Learn more →
      </Button>
    </GlassCard>
  );
};

export function Services() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const servicesData = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom enterprise applications, microservices architecture, and scalable software solutions tailored to your business needs."
    },
    {
      icon: Cloud,
      title: "Cloud Engineering",
      description: "Accelerate digital transformation with our comprehensive cloud solutions, migration services, and optimization strategies."
    },
    {
      icon: BarChart,
      title: "Digital Transformation",
      description: "Reimagine your business processes with digital solutions that drive efficiency, innovation, and competitive advantage."
    },
    {
      icon: Cpu,
      title: "IT Consulting",
      description: "Strategic technology consulting with industry expertise to align your IT investments with business objectives."
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/30 z-0" />
      <div className="enterprise-container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-enterprise-blue">
            Our Services
          </h2>
          <p className="text-gray-600">
            End-to-end technology solutions designed to transform your business
            and drive sustainable growth in today's digital landscape.
          </p>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
              isInView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
