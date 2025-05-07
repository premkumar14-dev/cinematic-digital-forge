
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { Code, Cloud, BarChart, Cpu, Check, ArrowRight } from "lucide-react";
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
      ],
      process: [
        { name: "Discovery", description: "Understanding requirements and business goals" },
        { name: "Architecture", description: "Designing scalable and maintainable systems" },
        { name: "Development", description: "Agile implementation with continuous feedback" },
        { name: "Testing", description: "Comprehensive quality assurance and validation" },
        { name: "Deployment", description: "Smooth production rollout and monitoring" }
      ],
      casestudy: {
        client: "Global Financial Institution",
        challenge: "Legacy system modernization with minimal disruption",
        solution: "Phased microservices migration with parallel systems",
        results: "40% performance improvement and 65% reduction in maintenance costs"
      },
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
      ],
      process: [
        { name: "Assessment", description: "Evaluate current infrastructure and requirements" },
        { name: "Strategy", description: "Develop comprehensive cloud adoption roadmap" },
        { name: "Migration", description: "Execute phased transition with minimal disruption" },
        { name: "Optimization", description: "Continuous performance and cost optimization" },
        { name: "Management", description: "Ongoing monitoring and maintenance" }
      ],
      casestudy: {
        client: "Manufacturing Enterprise",
        challenge: "Aging on-premise infrastructure with rising costs",
        solution: "Hybrid cloud architecture with automated scaling",
        results: "53% reduction in IT costs and 99.99% uptime achievement"
      },
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
      ],
      process: [
        { name: "Analysis", description: "Identify transformation opportunities and challenges" },
        { name: "Roadmap", description: "Create comprehensive digital transformation plan" },
        { name: "Implementation", description: "Deploy solutions with change management" },
        { name: "Integration", description: "Ensure seamless integration across systems" },
        { name: "Evolution", description: "Continuous improvement and adaptation" }
      ],
      casestudy: {
        client: "Retail Chain with 200+ Locations",
        challenge: "Disconnected customer experience across channels",
        solution: "Omnichannel platform with unified customer data",
        results: "27% increase in customer retention and 31% higher average order value"
      },
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
      ],
      process: [
        { name: "Discovery", description: "Understand business goals and current landscape" },
        { name: "Analysis", description: "Evaluate technologies and identify opportunities" },
        { name: "Planning", description: "Develop strategic technology roadmap" },
        { name: "Guidance", description: "Provide expert advisory throughout execution" },
        { name: "Optimization", description: "Continuous improvement recommendations" }
      ],
      casestudy: {
        client: "Healthcare Provider Network",
        challenge: "Fragmented IT systems causing operational inefficiencies",
        solution: "Enterprise architecture redesign and integration strategy",
        results: "42% improvement in operational efficiency and 30% reduction in IT incidents"
      },
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
          {/* Hero Section with Background Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-enterprise-blue/90 to-enterprise-teal/80 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${selectedService.image})`, opacity: 0.3 }}></div>
            
            <div className="enterprise-container relative z-10 py-16">
              <div className="mb-6">
                <Link to="/services" className="text-white hover:text-enterprise-teal/80 transition-colors inline-flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                  Back to All Services
                </Link>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-2/3">
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{selectedService.title}</h1>
                  <p className="text-xl text-white/90 mb-8 max-w-2xl">{selectedService.detailedDescription}</p>
                  
                  <Link to="/contact">
                    <Button size="lg" className="bg-white hover:bg-enterprise-teal text-enterprise-blue hover:text-white transition-all duration-300">
                      Request a Consultation
                    </Button>
                  </Link>
                </div>
                
                <div className="md:w-1/3">
                  <div className="w-40 h-40 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mx-auto">
                    <ServiceIcon className="h-20 w-20 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="bg-white py-16">
            <div className="enterprise-container">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Key Features */}
                <div className="lg:col-span-1">
                  <GlassCard className="h-full">
                    <h2 className="text-2xl font-semibold text-enterprise-blue mb-6 pb-4 border-b border-gray-100">
                      Key Features
                    </h2>
                    <ul className="space-y-4">
                      {selectedService.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className="mr-3 mt-1">
                            <Check className="h-5 w-5 text-enterprise-teal" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </div>
                
                {/* Process */}
                <div className="lg:col-span-2">
                  <GlassCard className="h-full">
                    <h2 className="text-2xl font-semibold text-enterprise-blue mb-6">
                      Our Process
                    </h2>
                    <div className="relative">
                      {/* Process timeline */}
                      <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-gradient-to-b from-enterprise-blue to-enterprise-teal"></div>
                      
                      <div className="space-y-8">
                        {selectedService.process.map((step, index) => (
                          <div key={index} className="flex">
                            <div className="relative">
                              <div className={`absolute left-4 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                                index === 0 ? 'bg-enterprise-blue' : (
                                  index === selectedService.process.length - 1 ? 'bg-enterprise-teal' : 'bg-gradient-to-br from-enterprise-blue to-enterprise-teal'
                                )
                              }`}>
                                <span className="text-white text-xs font-bold">{index + 1}</span>
                              </div>
                            </div>
                            <div className="ml-10">
                              <h3 className="text-lg font-semibold text-enterprise-blue">{step.name}</h3>
                              <p className="text-gray-600">{step.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </div>
              
              {/* Case Study */}
              <div className="mt-10">
                <GlassCard className="bg-gradient-to-r from-enterprise-blue/5 to-enterprise-teal/5">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 mb-6 md:mb-0">
                      <h2 className="text-2xl font-semibold text-enterprise-blue mb-4">
                        Case Study
                      </h2>
                      <div className="text-xl font-medium text-enterprise-teal mb-2">
                        {selectedService.casestudy.client}
                      </div>
                    </div>
                    <div className="md:w-2/3 md:pl-8 md:border-l border-gray-200">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-semibold text-enterprise-blue">Challenge</h3>
                          <p className="text-gray-600">{selectedService.casestudy.challenge}</p>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-enterprise-blue">Solution</h3>
                          <p className="text-gray-600">{selectedService.casestudy.solution}</p>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-enterprise-blue">Results</h3>
                          <p className="text-gray-600">{selectedService.casestudy.results}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </div>
              
              {/* CTA */}
              <div className="mt-16 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-enterprise-blue mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                  Partner with GORANTLA INFOTECH SOLUTIONS to leverage our {selectedService.title.toLowerCase()} expertise
                  and accelerate your digital journey.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-enterprise-blue hover:bg-enterprise-teal text-white px-8">
                    Start Your Transformation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Main services overview page with enhanced design
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-r from-enterprise-blue to-enterprise-teal text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          
          <div className="enterprise-container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Technology Services that Drive Business Growth
              </h1>
              <p className="text-xl opacity-90 mb-8">
                End-to-end solutions designed to address complex business challenges
                and unlock new opportunities in the digital economy.
              </p>
            </div>
          </div>
        </section>
        
        {/* Services Grid With Enhanced Cards */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-white z-0"></div>
          
          <div className="enterprise-container relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {servicesData.map((service) => (
                <Link to={`/services/${service.id}`} key={service.id} className="group">
                  <GlassCard className="h-full p-8 transition-all duration-300 border border-transparent hover:border-enterprise-blue/20 overflow-hidden">
                    <div className="relative">
                      {/* Background image with overlay */}
                      <div className="absolute inset-0 right-0 w-1/2 opacity-0 group-hover:opacity-10 transition-opacity duration-500" 
                        style={{ 
                          backgroundImage: `url(${service.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}>
                      </div>
                      
                      <div className="flex flex-col md:flex-row gap-6 items-start relative z-10">
                        {/* Icon */}
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-enterprise-blue/10 to-enterprise-teal/10 flex items-center justify-center text-enterprise-teal group-hover:scale-110 transition-all duration-300">
                          <service.icon className="h-8 w-8 group-hover:text-enterprise-blue transition-colors duration-300" />
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-2xl font-semibold mb-3 text-enterprise-blue group-hover:text-enterprise-teal transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 mb-6">{service.description}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-6">
                            {service.features.slice(0, 2).map((feature, idx) => (
                              <span key={idx} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-enterprise-blue/10 text-enterprise-blue">
                                <Check className="w-3 h-3 mr-1" />
                                {feature.split(' ').slice(0, 3).join(' ')}...
                              </span>
                            ))}
                          </div>
                          
                          <div className="inline-flex items-center text-enterprise-teal group-hover:text-enterprise-blue transition-colors duration-300">
                            Learn more
                            <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              ))}
            </div>
            
            {/* Testimonial Section */}
            <div className="rounded-xl bg-gradient-to-r from-enterprise-blue to-enterprise-teal p-0.5 mt-20">
              <div className="bg-white rounded-[calc(0.75rem-1px)] p-10">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/3">
                    <div className="w-20 h-20 rounded-full bg-enterprise-blue/10 flex items-center justify-center mx-auto">
                      <svg className="h-10 w-10 text-enterprise-blue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 11H6C3.79086 11 2 9.20914 2 7V6C2 3.79086 3.79086 2 6 2H7C9.20914 2 11 3.79086 11 6V7C11 9.20914 9.20914 11 7 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 11H18C15.7909 11 14 9.20914 14 7V6C14 3.79086 15.7909 2 18 2H19C21.2091 2 23 3.79086 23 6V7C23 9.20914 21.2091 11 19 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10 11V13C10 15.2091 8.20914 17 6 17H5C2.79086 17 1 18.7909 1 21V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 22V21C22 18.7909 20.2091 17 18 17H17C14.7909 17 13 15.2091 13 13V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-xl text-gray-600 italic mb-6">
                      "GORANTLA INFOTECH SOLUTIONS' expertise in cloud transformation was instrumental in our digital journey. Their team delivered beyond our expectations, creating a scalable infrastructure that supports our global operations."
                    </p>
                    <div className="flex items-center">
                      <div className="font-semibold text-enterprise-blue">Sarah Chen</div>
                      <div className="mx-2">•</div>
                      <div className="text-gray-500">CTO, Global Retail Enterprise</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA Section */}
            <div className="text-center mt-20">
              <h2 className="text-3xl font-bold text-enterprise-blue mb-6">Ready to Begin Your Digital Transformation?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Leverage our technology expertise to solve your most challenging business problems and create new opportunities for growth.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-enterprise-blue hover:bg-enterprise-teal text-white transition-all duration-300 px-8 py-6">
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
