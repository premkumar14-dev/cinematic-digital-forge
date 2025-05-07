
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { FileText, CheckCircle, ChevronRight, Users, BarChart, Shield, FileCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ERPService = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section with Background Image */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-enterprise-blue/90 to-enterprise-teal/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1586282391129-76a6df230234?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`, opacity: 0.3 }}></div>
          
          <div className="enterprise-container relative z-10">
            <div className="mb-6">
              <Link to="/services" className="text-white hover:text-enterprise-teal/80 transition-colors inline-flex items-center">
                <ChevronRight className="mr-2 h-4 w-4 rotate-180" />
                Back to All Services
              </Link>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-2/3">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Enterprise Resource Planning</h1>
                <p className="text-xl text-white/90 mb-8 max-w-2xl">Comprehensive ERP solutions that streamline operations, enhance visibility, and drive business growth through integrated management of core business processes.</p>
                
                <Link to="/contact">
                  <Button size="lg" className="bg-white hover:bg-enterprise-teal text-enterprise-blue hover:text-white transition-all duration-300">
                    Request a Consultation
                  </Button>
                </Link>
              </div>
              
              <div className="md:w-1/3">
                <div className="w-40 h-40 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mx-auto">
                  <FileText className="h-20 w-20 text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="enterprise-container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-8">
              {/* Key Features */}
              <div className="lg:col-span-1">
                <GlassCard className="h-full">
                  <h2 className="text-2xl font-semibold text-enterprise-blue mb-6 pb-4 border-b border-gray-100">
                    Key Features
                  </h2>
                  <ul className="space-y-4">
                    {[
                      "Integrated business process management",
                      "Real-time data analytics and reporting",
                      "Inventory and supply chain optimization",
                      "Financial management and accounting",
                      "Human resources and payroll integration",
                      "Customer relationship management"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mr-3 mt-1">
                          <CheckCircle className="h-5 w-5 text-enterprise-teal" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
              
              {/* Overview */}
              <div className="lg:col-span-2">
                <GlassCard className="h-full">
                  <h2 className="text-2xl font-semibold text-enterprise-blue mb-6">
                    Service Overview
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Our ERP solutions integrate core business processes into a single, cohesive system, enabling organizations to streamline operations, enhance productivity, and make data-driven decisions. Whether you're looking to implement a new ERP system, migrate from legacy solutions, or optimize your existing setup, our team of experts can guide you through the entire journey.
                    </p>
                    <p>
                      We take a consultative approach, starting with a comprehensive analysis of your business needs, processes, and goals. Our team then designs and implements a tailored ERP solution that aligns perfectly with your requirements, ensuring a seamless integration with your existing systems.
                    </p>
                    <p>
                      With GORANTLA INFOTECH as your ERP partner, you'll gain access to cutting-edge technology, industry best practices, and ongoing support to maximize the value of your investment and drive sustainable growth.
                    </p>
                  </div>
                </GlassCard>
              </div>
            </div>
            
            {/* Modules Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-enterprise-blue mb-8 text-center">
                Comprehensive ERP Modules
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: FileCode,
                    title: "Financial Management",
                    description: "Streamline financial operations with integrated accounting, budgeting, and forecasting capabilities for enhanced fiscal control."
                  },
                  {
                    icon: Users,
                    title: "Human Resources",
                    description: "Manage your workforce efficiently with comprehensive HR tools for recruitment, performance management, and payroll processing."
                  },
                  {
                    icon: BarChart,
                    title: "Supply Chain Management",
                    description: "Optimize inventory levels, streamline procurement, and enhance supplier relationships with end-to-end supply chain visibility."
                  },
                  {
                    icon: Shield,
                    title: "Compliance & Reporting",
                    description: "Ensure regulatory compliance and generate real-time reports for informed decision-making across all business units."
                  },
                  {
                    icon: Users,
                    title: "Customer Relationship Management",
                    description: "Build stronger customer relationships with integrated CRM capabilities that enhance service and drive sales growth."
                  },
                  {
                    icon: FileText,
                    title: "Project Management",
                    description: "Plan, execute, and monitor projects effectively with resource allocation, time tracking, and performance analytics."
                  }
                ].map((module, index) => (
                  <GlassCard key={index} className="h-full">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="w-12 h-12 rounded-lg bg-enterprise-blue/10 flex items-center justify-center text-enterprise-blue">
                          <module.icon className="h-6 w-6" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-enterprise-blue mb-2">{module.title}</h3>
                        <p className="text-gray-600">{module.description}</p>
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
            
            {/* Implementation Process */}
            <div className="mt-16">
              <h2 className="text-2xl font-semibold text-enterprise-blue mb-8 text-center">
                Our Implementation Approach
              </h2>
              
              <div className="relative">
                {/* Process timeline */}
                <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-enterprise-blue to-enterprise-teal hidden md:block"></div>
                
                <div className="space-y-12">
                  {[
                    {
                      title: "Discovery & Analysis",
                      description: "We begin by understanding your business processes, challenges, and objectives to identify the specific ERP requirements."
                    },
                    {
                      title: "Solution Design",
                      description: "Our team designs a tailored ERP architecture that aligns with your business needs and integrates seamlessly with existing systems."
                    },
                    {
                      title: "Development & Configuration",
                      description: "We configure the ERP modules to match your workflows and develop any custom features needed for your specific requirements."
                    },
                    {
                      title: "Testing & Quality Assurance",
                      description: "Rigorous testing ensures the system functions correctly, handles data properly, and meets all performance requirements."
                    },
                    {
                      title: "Deployment & Training",
                      description: "We implement the solution with minimal disruption and provide comprehensive training to ensure user adoption."
                    },
                    {
                      title: "Ongoing Support & Optimization",
                      description: "Our relationship continues with ongoing support, maintenance, and continuous improvement of your ERP system."
                    }
                  ].map((step, index) => (
                    <div key={index} className="flex flex-col md:flex-row items-center">
                      <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 order-1 md:order-2'}`}>
                        <GlassCard className={`relative ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'} h-full`}>
                          <h3 className="text-xl font-semibold text-enterprise-blue mb-3">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </GlassCard>
                      </div>
                      
                      <div className={`hidden md:flex items-center justify-center z-10 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                        <div className="w-12 h-12 rounded-full bg-white border-4 border-enterprise-blue flex items-center justify-center text-enterprise-blue font-bold">
                          {index + 1}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Case Study */}
            <div className="mt-16">
              <GlassCard className="bg-gradient-to-r from-enterprise-blue/5 to-enterprise-teal/5">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 mb-6 md:mb-0">
                    <h2 className="text-2xl font-semibold text-enterprise-blue mb-4">
                      Success Story
                    </h2>
                    <div className="text-xl font-medium text-enterprise-teal mb-2">
                      Manufacturing Enterprise
                    </div>
                    <div className="inline-block px-3 py-1 bg-enterprise-blue/10 text-enterprise-blue text-sm rounded-full">
                      ERP Implementation
                    </div>
                  </div>
                  <div className="md:w-2/3 md:pl-8 md:border-l border-gray-200">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-enterprise-blue">Challenge</h3>
                        <p className="text-gray-600">A manufacturing company with 500+ employees was struggling with disconnected systems, data silos, and inefficient processes that hindered growth and decision-making.</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-enterprise-blue">Solution</h3>
                        <p className="text-gray-600">We implemented a comprehensive ERP solution that integrated manufacturing, inventory, finance, and HR processes into a single, coherent system with real-time analytics capabilities.</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-enterprise-blue">Results</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="text-2xl font-bold text-enterprise-teal">35%</div>
                            <div className="text-sm text-gray-600">Reduction in operational costs</div>
                          </div>
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="text-2xl font-bold text-enterprise-teal">40%</div>
                            <div className="text-sm text-gray-600">Increase in inventory accuracy</div>
                          </div>
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="text-2xl font-bold text-enterprise-teal">28%</div>
                            <div className="text-sm text-gray-600">Improvement in productivity</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
            
            {/* CTA */}
            <div className="mt-16 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-enterprise-blue mb-6">
                Ready to Transform Your Business with ERP?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Partner with GORANTLA INFOTECH SOLUTIONS to implement a tailor-made ERP solution
                that optimizes your operations and drives sustainable growth.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-enterprise-blue hover:bg-enterprise-teal text-white px-8 py-6">
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

export default ERPService;
