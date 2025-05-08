
import React from "react";
import { cn } from "@/lib/utils";
import { GlassCard } from "@/components/ui/GlassCard";
import { useInView } from "react-intersection-observer";
import { Code, Cloud, FileText, CheckCircle, Server, Users } from "lucide-react";
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
        className="h-full relative overflow-hidden border border-gray-100 hover:border-enterprise-teal/30 transition-all duration-300 p-8"
      >
        {/* Accent corner */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-enterprise-teal/10 to-transparent transform translate-x-10 -translate-y-10 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500"></div>
        
        {/* Accent bottom */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-enterprise-blue/40 to-enterprise-teal/40 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></div>
        
        {/* Modern icon container */}
        <div className="relative mb-6">
          <div className="w-14 h-14 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-md flex items-center justify-center group-hover:-translate-y-1 transition-all duration-300">
            <Icon className="h-6 w-6 text-enterprise-teal group-hover:text-enterprise-blue transition-colors duration-300" />
          </div>
          <div className="absolute top-0 right-0 w-5 h-5 bg-enterprise-teal/10 rounded-full transform translate-x-2 -translate-y-2 group-hover:scale-150 group-hover:bg-enterprise-teal/20 transition-all duration-500"></div>
        </div>
        
        {/* Content */}
        <h3 className="text-xl font-semibold mb-3 text-enterprise-blue group-hover:text-enterprise-teal transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <Link to={`/services/${id}`} className="inline-flex items-center text-enterprise-teal group-hover:text-enterprise-blue transition-colors duration-300">
          <span className="mr-1">Learn more</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform duration-300">
            <path d="m9 18 6-6-6-6"/>
          </svg>
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
      id: "erp",
      icon: FileText,
      title: "ERP",
      description: "Streamline operations with our comprehensive Enterprise Resource Planning solutions tailored to your business needs."
    },
    {
      id: "software",
      icon: Code,
      title: "Software Development",
      description: "Custom enterprise applications, microservices architecture, and scalable software solutions tailored to your business needs."
    },
    {
      id: "cloud",
      icon: Cloud,
      title: "Amazon Cloud Services",
      description: "Leverage the power of AWS with our cloud engineering expertise, from migration to optimization and management."
    },
    {
      id: "qa",
      icon: CheckCircle,
      title: "QA & Testing Services",
      description: "Comprehensive quality assurance and testing services to ensure your software meets the highest standards."
    },
    {
      id: "project",
      icon: Users,
      title: "Project Management",
      description: "Professional project planning, execution and monitoring to ensure timely delivery of your technology initiatives."
    },
    {
      id: "offshore",
      icon: Server,
      title: "Offshore Development",
      description: "Access top global talent and reduce costs with our dedicated offshore development team solutions."
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Modern layered background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/30 z-0"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-60 h-60 rounded-full bg-enterprise-blue/5 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-enterprise-teal/5 blur-3xl"></div>
      </div>
      
      <div className="enterprise-container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          {/* Modern section title with accents */}
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center mb-2">
              <span className="h-[1px] w-6 bg-enterprise-teal"></span>
              <span className="mx-2 text-sm text-enterprise-teal font-medium uppercase tracking-wider">What we offer</span>
              <span className="h-[1px] w-6 bg-enterprise-teal"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-enterprise-blue relative inline-block">
              Our Services
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-enterprise-blue to-enterprise-teal rounded-full"></div>
            </h2>
          </div>
          
          <p className="text-gray-600 mt-6 max-w-xl mx-auto">
            Comprehensive technology solutions designed to transform your business
            and drive sustainable growth in today's competitive landscape.
          </p>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        
        {/* Redesigned View all services button */}
        <div className="flex justify-center mt-12">
          <Link to="/services">
            <Button className="bg-gradient-to-r from-enterprise-blue to-enterprise-teal hover:from-enterprise-teal hover:to-enterprise-blue text-white transition-all duration-300 px-8 py-6 text-lg font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1">
              <span className="relative z-10">View All Services</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;
