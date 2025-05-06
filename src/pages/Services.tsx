
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { Code, Cloud, BarChart, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";

const Services = () => {
  const { serviceType } = useParams();
  
  const servicesData = [
    {
      id: "software",
      icon: Code,
      title: "Software Development",
      description: "Custom enterprise applications, microservices architecture, and scalable software solutions tailored to your business needs.",
      detailedDescription: "Our software development services deliver innovative, scalable, and secure applications that drive business growth. We specialize in enterprise-grade software, custom application development, API integrations, and modernization of legacy systems.",
      features: [
        "Full-stack development with modern technologies",
        "Microservices and cloud-native architectures",
        "DevOps integration and CI/CD pipelines",
        "Quality assurance and automated testing"
      ]
    },
    {
      id: "cloud",
      icon: Cloud,
      title: "Cloud Engineering",
      description: "Accelerate digital transformation with our comprehensive cloud solutions, migration services, and optimization strategies.",
      detailedDescription: "Our cloud engineering services help businesses leverage the full potential of cloud computing. From strategic planning and architecture design to implementation and ongoing management, we ensure smooth cloud migration and optimization.",
      features: [
        "Multi-cloud and hybrid cloud solutions",
        "Cloud migration and modernization",
        "Infrastructure as Code (IaC)",
        "Cloud security and compliance"
      ]
    },
    {
      id: "digital",
      icon: BarChart,
      title: "Digital Transformation",
      description: "Reimagine your business processes with digital solutions that drive efficiency, innovation, and competitive advantage.",
      detailedDescription: "Our digital transformation services help organizations reimagine their business processes and customer experiences through innovative digital solutions. We combine strategy, technology, and industry expertise to drive meaningful change.",
      features: [
        "Digital strategy consulting",
        "Business process automation",
        "Customer experience enhancement",
        "Data-driven decision making"
      ]
    },
    {
      id: "consulting",
      icon: Cpu,
      title: "IT Consulting",
      description: "Strategic technology consulting with industry expertise to align your IT investments with business objectives.",
      detailedDescription: "Our IT consulting services provide expert guidance to help organizations make informed technology decisions. We offer strategic advice on IT governance, architecture, operations, and investments to maximize business value.",
      features: [
        "IT strategy and roadmap development",
        "Technology assessment and selection",
        "Project and program management",
        "Enterprise architecture design"
      ]
    }
  ];

  // If a specific service type is selected, show detailed view
  if (serviceType) {
    const selectedService = servicesData.find(s => s.id === serviceType);
    if (!selectedService) {
      return (
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-24">
            <div className="enterprise-container py-16">
              <h1 className="text-3xl font-bold text-enterprise-blue">Service Not Found</h1>
              <p className="mt-4">The requested service does not exist.</p>
              <Link to="/services" className="mt-6 inline-block">
                <Button>Back to Services</Button>
              </Link>
            </div>
          </main>
          <Footer />
        </div>
      );
    }

    const ServiceIcon = selectedService.icon;
    
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-24">
          <div className="bg-gradient-to-b from-blue-50/30 to-white py-16">
            <div className="enterprise-container">
              <div className="mb-6">
                <Link to="/services" className="text-enterprise-teal hover:text-enterprise-blue transition-colors">
                  ← Back to All Services
                </Link>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  <h1 className="text-4xl font-bold text-enterprise-blue mb-6">{selectedService.title}</h1>
                  <p className="text-lg mb-8">{selectedService.detailedDescription}</p>
                  
                  <h2 className="text-2xl font-semibold text-enterprise-blue mb-4">Key Features</h2>
                  <ul className="list-disc pl-6 space-y-2 mb-8">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="text-gray-700">{feature}</li>
                    ))}
                  </ul>
                  
                  <Link to="/contact">
                    <Button size="lg" className="bg-enterprise-teal hover:bg-enterprise-teal/90 text-white">
                      Request a Consultation
                    </Button>
                  </Link>
                </div>
                
                <div className="md:w-1/3">
                  <GlassCard className="h-full flex flex-col justify-center items-center p-8">
                    <div className="w-20 h-20 rounded-full bg-enterprise-teal/10 flex items-center justify-center mb-6">
                      <ServiceIcon className="h-10 w-10 text-enterprise-teal" />
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-4">{selectedService.title}</h3>
                    <p className="text-center text-gray-600">{selectedService.description}</p>
                  </GlassCard>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Main services overview page
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-white z-0" />
          <div className="enterprise-container relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-enterprise-blue">
                Our Services
              </h1>
              <p className="text-gray-600">
                End-to-end technology solutions designed to transform your business
                and drive sustainable growth in today's digital landscape.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {servicesData.map((service) => (
                <Link to={`/services/${service.id}`} key={service.id}>
                  <GlassCard hoverEffect className="h-full">
                    <div className="w-12 h-12 rounded-lg bg-enterprise-teal/10 flex items-center justify-center text-enterprise-teal mb-5">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-enterprise-blue">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Button variant="link" className="p-0 text-enterprise-teal hover:text-enterprise-blue">
                      Learn more →
                    </Button>
                  </GlassCard>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
