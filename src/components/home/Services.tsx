
import React from "react";
import { cn } from "@/lib/utils";
import { GlassCard } from "@/components/ui/GlassCard";
import { useInView } from "react-intersection-observer";
import { Code, Cloud, BarChart, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
  isInView: boolean;
  id: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, index, isInView, id }) => {
  return (
    <div
      className={cn(
        "group transition-all duration-500 transform h-full",
        isInView
          ? "translate-y-0 opacity-100"
          : "translate-y-20 opacity-0",
        isInView && `delay-[${index * 200}ms]`
      )}
    >
      <GlassCard 
        hoverEffect
        className="h-full relative overflow-hidden z-10 border border-transparent group-hover:border-enterprise-teal/20 transition-all duration-300"
      >
        {/* Background gradient that appears on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-enterprise-teal/5 to-enterprise-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Icon with enhanced hover effect */}
        <div className="relative z-10">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-enterprise-teal/10 to-enterprise-blue/10 flex items-center justify-center text-enterprise-teal mb-6 group-hover:scale-110 transition-transform duration-300 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-enterprise-teal/20 to-enterprise-blue/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
            <Icon className="h-8 w-8 relative z-10 group-hover:text-enterprise-blue transition-colors duration-300" />
          </div>
        </div>
        
        {/* Content with enhanced hover effects */}
        <h3 className="text-xl font-semibold mb-3 text-enterprise-blue group-hover:text-enterprise-teal transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 mb-6 line-clamp-3">{description}</p>
        
        <Link to={`/services/${id}`} className="mt-auto inline-block">
          <Button variant="link" className="p-0 text-enterprise-teal group-hover:text-enterprise-blue transition-colors duration-300 relative">
            Learn more
            <span className="ml-2 transition-transform group-hover:translate-x-1 inline-block">→</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-enterprise-teal/50 group-hover:w-full transition-all duration-300"></span>
          </Button>
        </Link>
      </GlassCard>
    </div>
  );
};

export function Services() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const servicesData = [
    {
      id: "software",
      icon: Code,
      title: "Software Development",
      description: "Custom enterprise applications, microservices architecture, and scalable software solutions tailored to your business needs."
    },
    {
      id: "cloud",
      icon: Cloud,
      title: "Cloud Engineering",
      description: "Accelerate digital transformation with our comprehensive cloud solutions, migration services, and optimization strategies."
    },
    {
      id: "digital",
      icon: BarChart,
      title: "Digital Transformation",
      description: "Reimagine your business processes with digital solutions that drive efficiency, innovation, and competitive advantage."
    },
    {
      id: "consulting",
      icon: Cpu,
      title: "IT Consulting",
      description: "Strategic technology consulting with industry expertise to align your IT investments with business objectives."
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Enhanced background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/30 z-0" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')] bg-cover bg-center opacity-[0.02] mix-blend-overlay" />
      
      <div className="enterprise-container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          {/* Enhanced section title with decorative elements */}
          <div className="flex items-center justify-center mb-4">
            <div className="w-10 h-0.5 bg-enterprise-teal/30 rounded"></div>
            <h2 className="text-3xl md:text-4xl font-bold mx-4 text-enterprise-blue relative">
              Our Services
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-enterprise-teal rounded"></span>
            </h2>
            <div className="w-10 h-0.5 bg-enterprise-teal/30 rounded"></div>
          </div>
          
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
              id={service.id}
            />
          ))}
        </div>
        
        {/* View all services button */}
        <div className="flex justify-center mt-12">
          <Link to="/services">
            <Button className="bg-white hover:bg-enterprise-blue hover:text-white text-enterprise-blue border border-enterprise-blue/30 transition-all duration-300 px-8">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;
