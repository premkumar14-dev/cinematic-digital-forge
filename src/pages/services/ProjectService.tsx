
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { Check, ArrowRight, Users, Clock, BarChart, Target, FileText, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProjectService = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section with Background Image */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-enterprise-blue/90 to-enterprise-teal/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`, opacity: 0.3 }}></div>
          
          <div className="enterprise-container relative z-10 py-16">
            <div className="mb-6">
              <Link to="/services" className="text-white hover:text-enterprise-teal/80 transition-colors inline-flex items-center">
                <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                Back to All Services
              </Link>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-2/3">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Project Management</h1>
                <p className="text-xl text-white/90 mb-8 max-w-2xl">Professional project planning, execution, and monitoring to ensure timely delivery of your technology initiatives with maximum business value.</p>
                
                <Link to="/contact">
                  <Button size="lg" className="bg-white hover:bg-enterprise-teal text-enterprise-blue hover:text-white transition-all duration-300">
                    Request a Consultation
                  </Button>
                </Link>
              </div>
              
              <div className="md:w-1/3">
                <div className="w-40 h-40 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mx-auto">
                  <Users className="h-20 w-20 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="bg-white py-16">
          <div className="enterprise-container">
            {/* Overview Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-enterprise-blue mb-6">Effective Project Management Solutions</h2>
              <p className="text-lg text-gray-700 mb-8">
                Our project management services ensure your technology initiatives are delivered on time, within budget, and with 
                the expected quality. We combine industry-standard methodologies with agile practices to provide 
                flexible, transparent, and results-oriented project management.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <GlassCard className="h-full">
                  <div className="flex items-start mb-4">
                    <div className="bg-enterprise-teal/10 p-3 rounded-lg mr-4">
                      <Target className="h-6 w-6 text-enterprise-teal" />
                    </div>
                    <h3 className="text-xl font-semibold text-enterprise-blue">Strategic Planning</h3>
                  </div>
                  <p className="text-gray-600">
                    Comprehensive project planning that aligns technology initiatives with 
                    business objectives and stakeholder expectations.
                  </p>
                </GlassCard>
                
                <GlassCard className="h-full">
                  <div className="flex items-start mb-4">
                    <div className="bg-enterprise-teal/10 p-3 rounded-lg mr-4">
                      <Clock className="h-6 w-6 text-enterprise-teal" />
                    </div>
                    <h3 className="text-xl font-semibold text-enterprise-blue">Execution & Control</h3>
                  </div>
                  <p className="text-gray-600">
                    Methodical execution with transparent monitoring and reporting to keep 
                    projects on track and stakeholders informed.
                  </p>
                </GlassCard>
                
                <GlassCard className="h-full">
                  <div className="flex items-start mb-4">
                    <div className="bg-enterprise-teal/10 p-3 rounded-lg mr-4">
                      <BarChart className="h-6 w-6 text-enterprise-teal" />
                    </div>
                    <h3 className="text-xl font-semibold text-enterprise-blue">Continuous Improvement</h3>
                  </div>
                  <p className="text-gray-600">
                    Regular assessments and process refinements to enhance efficiency, 
                    quality, and team performance throughout the project lifecycle.
                  </p>
                </GlassCard>
              </div>
            </div>
            
            {/* Methodologies Section */}
            <div className="mb-16">
              <div className="flex flex-col lg:flex-row gap-10 items-center">
                <div className="lg:w-1/2">
                  <h2 className="text-2xl font-bold text-enterprise-blue mb-6">Our Project Management Methodologies</h2>
                  <p className="text-gray-700 mb-6">
                    We blend traditional and agile methodologies to provide a customized approach that best suits your project's 
                    unique requirements and organizational culture. Our certified project managers bring expertise in multiple frameworks:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-enterprise-teal mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold text-enterprise-blue">Agile/Scrum</h3>
                        <p className="text-gray-600">Iterative approach with regular deliverables and continuous feedback for maximum adaptability.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-enterprise-teal mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold text-enterprise-blue">PMBOK/Waterfall</h3>
                        <p className="text-gray-600">Structured approach with defined phases and deliverables for predictable outcomes.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-enterprise-teal mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold text-enterprise-blue">Hybrid Approaches</h3>
                        <p className="text-gray-600">Custom methodologies that combine best practices from different frameworks.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-enterprise-teal mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold text-enterprise-blue">SAFe (Scaled Agile Framework)</h3>
                        <p className="text-gray-600">Agile implementation at enterprise scale for coordinating multiple teams.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="aspect-video bg-gradient-to-br from-enterprise-blue/5 to-enterprise-teal/5 rounded-xl overflow-hidden relative">
                    <img 
                      src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                      alt="Project Management Process" 
                      className="w-full h-full object-cover mix-blend-overlay opacity-80"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-6">
                        <FileText className="h-12 w-12 text-enterprise-teal mx-auto mb-4" />
                        <p className="text-xl font-semibold text-enterprise-blue">Project Management Excellence</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Our Project Management Process */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-enterprise-blue mb-6 text-center">Our Project Management Process</h2>
              <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
                A systematic approach to ensure project success from inception to completion
              </p>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-enterprise-blue to-enterprise-teal hidden md:block"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                  <div className="relative">
                    <div className="md:absolute md:top-0 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 w-8 h-8 rounded-full bg-enterprise-blue flex items-center justify-center text-white z-10 mb-4 md:mb-0">1</div>
                    <div className="bg-enterprise-blue/5 p-6 rounded-xl h-full">
                      <h3 className="text-lg font-semibold text-enterprise-blue mb-3">Initiation</h3>
                      <p className="text-gray-600">Defining project scope, objectives, and stakeholders</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="md:absolute md:top-0 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 w-8 h-8 rounded-full bg-enterprise-teal flex items-center justify-center text-white z-10 mb-4 md:mb-0">2</div>
                    <div className="bg-enterprise-teal/5 p-6 rounded-xl h-full">
                      <h3 className="text-lg font-semibold text-enterprise-blue mb-3">Planning</h3>
                      <p className="text-gray-600">Creating schedules, resource plans, and risk assessments</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="md:absolute md:top-0 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 w-8 h-8 rounded-full bg-enterprise-blue flex items-center justify-center text-white z-10 mb-4 md:mb-0">3</div>
                    <div className="bg-enterprise-blue/5 p-6 rounded-xl h-full">
                      <h3 className="text-lg font-semibold text-enterprise-blue mb-3">Execution</h3>
                      <p className="text-gray-600">Implementing plans and coordinating team activities</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="md:absolute md:top-0 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 w-8 h-8 rounded-full bg-enterprise-teal flex items-center justify-center text-white z-10 mb-4 md:mb-0">4</div>
                    <div className="bg-enterprise-teal/5 p-6 rounded-xl h-full">
                      <h3 className="text-lg font-semibold text-enterprise-blue mb-3">Monitoring</h3>
                      <p className="text-gray-600">Tracking progress, quality, and risks</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="md:absolute md:top-0 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 w-8 h-8 rounded-full bg-enterprise-blue flex items-center justify-center text-white z-10 mb-4 md:mb-0">5</div>
                    <div className="bg-enterprise-blue/5 p-6 rounded-xl h-full">
                      <h3 className="text-lg font-semibold text-enterprise-blue mb-3">Closure</h3>
                      <p className="text-gray-600">Finalizing deliverables and documenting lessons learned</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Tools and Technologies */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-enterprise-blue mb-8 text-center">Project Management Tools</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                  <div className="mx-auto w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center mb-4">
                    <img src="https://wac-cdn.atlassian.com/assets/img/favicons/atlassian/apple-touch-icon.png" alt="Jira" className="h-10 w-10 object-contain" />
                  </div>
                  <h3 className="font-medium">Jira</h3>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                  <div className="mx-auto w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center mb-4">
                    <img src="https://cdn.worldvectorlogo.com/logos/microsoft-project-1.svg" alt="MS Project" className="h-10 w-10 object-contain" />
                  </div>
                  <h3 className="font-medium">MS Project</h3>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                  <div className="mx-auto w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center mb-4">
                    <img src="https://cdn.worldvectorlogo.com/logos/trello.svg" alt="Trello" className="h-10 w-10 object-contain" />
                  </div>
                  <h3 className="font-medium">Trello</h3>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                  <div className="mx-auto w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center mb-4">
                    <img src="https://cdn.worldvectorlogo.com/logos/asana-logo.svg" alt="Asana" className="h-10 w-10 object-contain" />
                  </div>
                  <h3 className="font-medium">Asana</h3>
                </div>
              </div>
            </div>
            
            {/* Case Study */}
            <div className="mb-16">
              <GlassCard className="bg-gradient-to-r from-enterprise-blue/5 to-enterprise-teal/5">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 mb-6 md:mb-0">
                    <div className="flex items-center mb-4">
                      <Award className="h-6 w-6 text-enterprise-teal mr-3" />
                      <h2 className="text-2xl font-semibold text-enterprise-blue">
                        Success Story
                      </h2>
                    </div>
                    <div className="text-xl font-medium text-enterprise-teal mb-2">
                      Global Financial Institution
                    </div>
                  </div>
                  <div className="md:w-2/3 md:pl-8 md:border-l border-gray-200">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-enterprise-blue">Challenge</h3>
                        <p className="text-gray-600">Complex digital transformation initiative with multiple stakeholders, tight regulatory deadlines, and distributed teams across three continents.</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-enterprise-blue">Solution</h3>
                        <p className="text-gray-600">Implemented a hybrid project management approach combining agile methodologies for development teams with traditional governance structures for regulatory compliance.</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-enterprise-blue">Results</h3>
                        <p className="text-gray-600">Project completed 2 months ahead of schedule with 15% budget savings and full regulatory compliance, receiving company-wide recognition for excellence.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
            
            {/* CTA */}
            <div className="mt-16 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-enterprise-blue mb-6">
                Ready to Transform Your Project Delivery?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Partner with GORANTLA INFOTECH SOLUTIONS to implement professional project management 
                practices that ensure the success of your technology initiatives.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-enterprise-blue hover:bg-enterprise-teal text-white px-8">
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectService;
