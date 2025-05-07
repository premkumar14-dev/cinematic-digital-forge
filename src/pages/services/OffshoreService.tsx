
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { Check, ArrowRight, Globe, Clock, Shield, Users, FileText, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OffshoreService = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section with Background Image */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-enterprise-blue/90 to-enterprise-teal/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`, opacity: 0.3 }}></div>
          
          <div className="enterprise-container relative z-10 py-16">
            <div className="mb-6">
              <Link to="/services" className="text-white hover:text-enterprise-teal/80 transition-colors inline-flex items-center">
                <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                Back to All Services
              </Link>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-2/3">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Offshore Software Development</h1>
                <p className="text-xl text-white/90 mb-8 max-w-2xl">Access top global talent and reduce costs with our dedicated offshore development team solutions tailored to your business needs.</p>
                
                <Link to="/contact">
                  <Button size="lg" className="bg-white hover:bg-enterprise-teal text-enterprise-blue hover:text-white transition-all duration-300">
                    Request a Consultation
                  </Button>
                </Link>
              </div>
              
              <div className="md:w-1/3">
                <div className="w-40 h-40 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mx-auto">
                  <Globe className="h-20 w-20 text-white" />
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
              <h2 className="text-3xl font-bold text-enterprise-blue mb-6">Offshore Development Excellence</h2>
              <p className="text-lg text-gray-700 mb-8">
                Our offshore software development services provide a perfect balance of cost savings, expertise, and quality. 
                Based in Hyderabad, India, our offshore teams work seamlessly with your organization, operating as an extension 
                of your in-house capabilities while significantly reducing your operational costs.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <GlassCard className="h-full">
                  <div className="flex items-start mb-4">
                    <div className="bg-enterprise-teal/10 p-3 rounded-lg mr-4">
                      <Users className="h-6 w-6 text-enterprise-teal" />
                    </div>
                    <h3 className="text-xl font-semibold text-enterprise-blue">Dedicated Teams</h3>
                  </div>
                  <p className="text-gray-600">
                    Fully managed development teams that work exclusively on your projects, aligned with your 
                    business goals, processes, and culture.
                  </p>
                </GlassCard>
                
                <GlassCard className="h-full">
                  <div className="flex items-start mb-4">
                    <div className="bg-enterprise-teal/10 p-3 rounded-lg mr-4">
                      <Clock className="h-6 w-6 text-enterprise-teal" />
                    </div>
                    <h3 className="text-xl font-semibold text-enterprise-blue">24/7 Development Cycle</h3>
                  </div>
                  <p className="text-gray-600">
                    Leverage time zone advantages for round-the-clock productivity, faster delivery, 
                    and responsive support.
                  </p>
                </GlassCard>
                
                <GlassCard className="h-full">
                  <div className="flex items-start mb-4">
                    <div className="bg-enterprise-teal/10 p-3 rounded-lg mr-4">
                      <Shield className="h-6 w-6 text-enterprise-teal" />
                    </div>
                    <h3 className="text-xl font-semibold text-enterprise-blue">Security & Compliance</h3>
                  </div>
                  <p className="text-gray-600">
                    Rigorous security protocols, robust IP protection, and strict compliance with 
                    international standards and regulations.
                  </p>
                </GlassCard>
              </div>
            </div>
            
            {/* Benefits Section */}
            <div className="mb-16">
              <div className="flex flex-col lg:flex-row gap-10 items-center">
                <div className="lg:w-1/2">
                  <div className="aspect-video bg-gradient-to-br from-enterprise-blue/5 to-enterprise-teal/5 rounded-xl overflow-hidden relative">
                    <img 
                      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                      alt="Offshore Development Team" 
                      className="w-full h-full object-cover mix-blend-overlay opacity-80"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-6">
                        <FileText className="h-12 w-12 text-enterprise-teal mx-auto mb-4" />
                        <p className="text-xl font-semibold text-enterprise-blue">Global Talent Network</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <h2 className="text-2xl font-bold text-enterprise-blue mb-6">Key Benefits of Our Offshore Services</h2>
                  <p className="text-gray-700 mb-6">
                    Our offshore development model delivers significant advantages for businesses of all sizes, enabling 
                    you to accelerate development cycles, reduce costs, and access specialized expertise.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-enterprise-teal mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold text-enterprise-blue">Cost Efficiency</h3>
                        <p className="text-gray-600">Reduce development costs by 40-60% compared to onshore teams without compromising quality.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-enterprise-teal mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold text-enterprise-blue">Scalability</h3>
                        <p className="text-gray-600">Quickly scale your team up or down based on project requirements and business needs.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-enterprise-teal mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold text-enterprise-blue">Specialized Expertise</h3>
                        <p className="text-gray-600">Access hard-to-find skills and specialized technology expertise without local hiring challenges.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-enterprise-teal mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold text-enterprise-blue">Focus on Core Business</h3>
                        <p className="text-gray-600">Delegate development tasks to offshore experts while your in-house team focuses on strategic initiatives.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Our Offshore Delivery Model */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-enterprise-blue mb-6 text-center">Our Offshore Delivery Model</h2>
              <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
                A proven approach to ensure successful offshore collaboration and results
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="relative">
                  <GlassCard className="h-full">
                    <div className="bg-enterprise-blue/10 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                      <span className="text-enterprise-blue font-bold text-xl">1</span>
                    </div>
                    <h3 className="text-xl font-semibold text-enterprise-blue mb-3">Team Formation</h3>
                    <p className="text-gray-600">Selecting the right talent with specific skills for your project requirements</p>
                  </GlassCard>
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="text-enterprise-teal" />
                  </div>
                </div>
                
                <div className="relative">
                  <GlassCard className="h-full">
                    <div className="bg-enterprise-teal/10 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                      <span className="text-enterprise-teal font-bold text-xl">2</span>
                    </div>
                    <h3 className="text-xl font-semibold text-enterprise-blue mb-3">Integration</h3>
                    <p className="text-gray-600">Incorporating the offshore team into your processes, tools, and culture</p>
                  </GlassCard>
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="text-enterprise-teal" />
                  </div>
                </div>
                
                <div className="relative">
                  <GlassCard className="h-full">
                    <div className="bg-enterprise-blue/10 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                      <span className="text-enterprise-blue font-bold text-xl">3</span>
                    </div>
                    <h3 className="text-xl font-semibold text-enterprise-blue mb-3">Execution</h3>
                    <p className="text-gray-600">Collaborative development with regular communication and progress tracking</p>
                  </GlassCard>
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="text-enterprise-teal" />
                  </div>
                </div>
                
                <div>
                  <GlassCard className="h-full">
                    <div className="bg-enterprise-teal/10 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                      <span className="text-enterprise-teal font-bold text-xl">4</span>
                    </div>
                    <h3 className="text-xl font-semibold text-enterprise-blue mb-3">Continuous Improvement</h3>
                    <p className="text-gray-600">Regular reviews, feedback loops, and optimization of the offshore model</p>
                  </GlassCard>
                </div>
              </div>
            </div>
            
            {/* Engagement Models */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-enterprise-blue mb-8 text-center">Flexible Engagement Models</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <GlassCard className="bg-enterprise-blue/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-enterprise-blue/10 rounded-bl-full"></div>
                  <h3 className="text-xl font-semibold text-enterprise-blue mb-4">Dedicated Team</h3>
                  <p className="text-gray-600 mb-6">Full-time developers working exclusively on your projects with direct management</p>
                  <ul className="space-y-2 mb-8">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-enterprise-teal mr-2" />
                      <span className="text-sm text-gray-600">Long-term collaboration</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-enterprise-teal mr-2" />
                      <span className="text-sm text-gray-600">Direct team management</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-enterprise-teal mr-2" />
                      <span className="text-sm text-gray-600">Full-time commitment</span>
                    </li>
                  </ul>
                  <div className="text-enterprise-blue font-medium">Best for ongoing development</div>
                </GlassCard>
                
                <GlassCard className="bg-enterprise-teal/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-enterprise-teal/10 rounded-bl-full"></div>
                  <h3 className="text-xl font-semibold text-enterprise-blue mb-4">Project-Based</h3>
                  <p className="text-gray-600 mb-6">Fixed-scope projects with defined deliverables, timeline, and budget</p>
                  <ul className="space-y-2 mb-8">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-enterprise-teal mr-2" />
                      <span className="text-sm text-gray-600">Clear scope and deliverables</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-enterprise-teal mr-2" />
                      <span className="text-sm text-gray-600">Fixed price arrangement</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-enterprise-teal mr-2" />
                      <span className="text-sm text-gray-600">Defined timeline</span>
                    </li>
                  </ul>
                  <div className="text-enterprise-blue font-medium">Best for specific objectives</div>
                </GlassCard>
                
                <GlassCard className="bg-enterprise-blue/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-enterprise-blue/10 rounded-bl-full"></div>
                  <h3 className="text-xl font-semibold text-enterprise-blue mb-4">Staff Augmentation</h3>
                  <p className="text-gray-600 mb-6">On-demand developers to supplement your team for short to mid-term needs</p>
                  <ul className="space-y-2 mb-8">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-enterprise-teal mr-2" />
                      <span className="text-sm text-gray-600">Highly flexible resources</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-enterprise-teal mr-2" />
                      <span className="text-sm text-gray-600">Time and material billing</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-enterprise-teal mr-2" />
                      <span className="text-sm text-gray-600">Quick onboarding</span>
                    </li>
                  </ul>
                  <div className="text-enterprise-blue font-medium">Best for scaling needs</div>
                </GlassCard>
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
                      US-Based Software Company
                    </div>
                  </div>
                  <div className="md:w-2/3 md:pl-8 md:border-l border-gray-200">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-enterprise-blue">Challenge</h3>
                        <p className="text-gray-600">Needed to accelerate product development while managing costs during a growth phase with difficulty finding local specialized talent.</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-enterprise-blue">Solution</h3>
                        <p className="text-gray-600">Established a dedicated offshore team of 12 developers with specialized skills in cloud architecture, DevOps, and microservices.</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-enterprise-blue">Results</h3>
                        <p className="text-gray-600">Reduced development costs by 52%, shortened time-to-market by 40%, and successfully launched three new product features ahead of schedule.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
            
            {/* CTA */}
            <div className="mt-16 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-enterprise-blue mb-6">
                Ready to Build Your Offshore Development Team?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Partner with GORANTLA INFOTECH SOLUTIONS to access top development talent while 
                optimizing your operational costs and accelerating product delivery.
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

export default OffshoreService;
