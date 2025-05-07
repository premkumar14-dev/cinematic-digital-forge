
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { Check, ArrowRight, CheckCircle, AlertCircle, Search, FileText, LineChart, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const QAService = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section with Background Image */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-enterprise-blue/90 to-enterprise-teal/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1581093196277-9f6c3fdb4312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`, opacity: 0.3 }}></div>
          
          <div className="enterprise-container relative z-10 py-16">
            <div className="mb-6">
              <Link to="/services" className="text-white hover:text-enterprise-teal/80 transition-colors inline-flex items-center">
                <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                Back to All Services
              </Link>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-2/3">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">QA & Testing Services</h1>
                <p className="text-xl text-white/90 mb-8 max-w-2xl">Comprehensive quality assurance and testing services to ensure your software meets the highest standards of performance, reliability, and user experience.</p>
                
                <Link to="/contact">
                  <Button size="lg" className="bg-white hover:bg-enterprise-teal text-enterprise-blue hover:text-white transition-all duration-300">
                    Request a Consultation
                  </Button>
                </Link>
              </div>
              
              <div className="md:w-1/3">
                <div className="w-40 h-40 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mx-auto">
                  <Search className="h-20 w-20 text-white" />
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
              <h2 className="text-3xl font-bold text-enterprise-blue mb-6">Comprehensive QA & Testing Solutions</h2>
              <p className="text-lg text-gray-700 mb-8">
                Our QA and testing services ensure your applications meet the highest quality standards before deployment. 
                We employ a strategic mix of automated and manual testing approaches to validate functionality, performance, 
                and security while optimizing testing cycles and costs.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <GlassCard className="h-full">
                  <div className="flex items-start mb-4">
                    <div className="bg-enterprise-teal/10 p-3 rounded-lg mr-4">
                      <CheckCircle className="h-6 w-6 text-enterprise-teal" />
                    </div>
                    <h3 className="text-xl font-semibold text-enterprise-blue">Functional Testing</h3>
                  </div>
                  <p className="text-gray-600">
                    Comprehensive validation of application functionality to ensure all features 
                    work as designed across various scenarios and user workflows.
                  </p>
                </GlassCard>
                
                <GlassCard className="h-full">
                  <div className="flex items-start mb-4">
                    <div className="bg-enterprise-teal/10 p-3 rounded-lg mr-4">
                      <AlertCircle className="h-6 w-6 text-enterprise-teal" />
                    </div>
                    <h3 className="text-xl font-semibold text-enterprise-blue">Security Testing</h3>
                  </div>
                  <p className="text-gray-600">
                    Rigorous assessment of application security to identify vulnerabilities and 
                    ensure protection against threats and data breaches.
                  </p>
                </GlassCard>
                
                <GlassCard className="h-full">
                  <div className="flex items-start mb-4">
                    <div className="bg-enterprise-teal/10 p-3 rounded-lg mr-4">
                      <LineChart className="h-6 w-6 text-enterprise-teal" />
                    </div>
                    <h3 className="text-xl font-semibold text-enterprise-blue">Performance Testing</h3>
                  </div>
                  <p className="text-gray-600">
                    Stress testing applications under various load conditions to ensure optimal 
                    performance, responsiveness and stability at scale.
                  </p>
                </GlassCard>
              </div>
            </div>
            
            {/* Testing Approach */}
            <div className="mb-16">
              <div className="flex flex-col lg:flex-row gap-10 items-center">
                <div className="lg:w-1/2">
                  <div className="aspect-video bg-gradient-to-br from-enterprise-blue/5 to-enterprise-teal/5 rounded-xl overflow-hidden relative">
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                      alt="QA Testing Process" 
                      className="w-full h-full object-cover mix-blend-overlay opacity-80"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-6">
                        <FileText className="h-12 w-12 text-enterprise-teal mx-auto mb-4" />
                        <p className="text-xl font-semibold text-enterprise-blue">Test Automation Framework</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <h2 className="text-2xl font-bold text-enterprise-blue mb-6">Our Testing Approach</h2>
                  <p className="text-gray-700 mb-6">
                    We combine manual expertise with advanced test automation to ensure thorough quality verification 
                    while maintaining efficiency and speed. Our testing methodology is built on industry best practices 
                    and continuously refined based on emerging technologies.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-enterprise-teal mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold text-enterprise-blue">Shift-Left Testing</h3>
                        <p className="text-gray-600">Introducing testing early in the development lifecycle to catch issues before they become costly.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-enterprise-teal mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold text-enterprise-blue">Test Automation</h3>
                        <p className="text-gray-600">Implementing robust automation frameworks to increase testing efficiency and coverage.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-enterprise-teal mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold text-enterprise-blue">Continuous Testing</h3>
                        <p className="text-gray-600">Integrating testing into CI/CD pipelines for rapid feedback and quality validation.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-enterprise-teal mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold text-enterprise-blue">AI-Enabled Testing</h3>
                        <p className="text-gray-600">Leveraging machine learning to enhance test coverage and identify patterns in defects.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Our QA Process */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-enterprise-blue mb-6 text-center">Our QA Process</h2>
              <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
                We follow a comprehensive and systematic approach to ensure your applications meet the highest quality standards
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="relative">
                  <div className="bg-enterprise-blue/5 p-6 rounded-xl h-full border-t-4 border-enterprise-blue">
                    <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-enterprise-blue flex items-center justify-center text-white font-bold">1</div>
                    <h3 className="text-xl font-semibold text-enterprise-blue mb-3 mt-2">Test Planning</h3>
                    <p className="text-gray-600">Defining the scope, approach, resources, and schedule of testing activities</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-enterprise-teal/5 p-6 rounded-xl h-full border-t-4 border-enterprise-teal">
                    <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-enterprise-teal flex items-center justify-center text-white font-bold">2</div>
                    <h3 className="text-xl font-semibold text-enterprise-blue mb-3 mt-2">Test Design</h3>
                    <p className="text-gray-600">Creating test cases and scenarios based on requirements and user stories</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-enterprise-blue/5 p-6 rounded-xl h-full border-t-4 border-enterprise-blue">
                    <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-enterprise-blue flex items-center justify-center text-white font-bold">3</div>
                    <h3 className="text-xl font-semibold text-enterprise-blue mb-3 mt-2">Test Execution</h3>
                    <p className="text-gray-600">Running tests, logging defects, and providing detailed reports on test results</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-enterprise-teal/5 p-6 rounded-xl h-full border-t-4 border-enterprise-teal">
                    <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-enterprise-teal flex items-center justify-center text-white font-bold">4</div>
                    <h3 className="text-xl font-semibold text-enterprise-blue mb-3 mt-2">Continuous Improvement</h3>
                    <p className="text-gray-600">Refining test strategies based on results and emerging best practices</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Technologies */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-enterprise-blue mb-8 text-center">Testing Tools & Technologies</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                  <div className="mx-auto w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center mb-4">
                    <img src="https://www.selenium.dev/images/selenium_logo_square_green.png" alt="Selenium" className="h-10 w-10 object-contain" />
                  </div>
                  <h3 className="font-medium">Selenium</h3>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                  <div className="mx-auto w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center mb-4">
                    <img src="https://avatars.githubusercontent.com/u/8908513?s=200&v=4" alt="JMeter" className="h-10 w-10 object-contain" />
                  </div>
                  <h3 className="font-medium">JMeter</h3>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                  <div className="mx-auto w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center mb-4">
                    <img src="https://avatars.githubusercontent.com/u/1231870?s=200&v=4" alt="Appium" className="h-10 w-10 object-contain" />
                  </div>
                  <h3 className="font-medium">Appium</h3>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                  <div className="mx-auto w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center mb-4">
                    <img src="https://avatars.githubusercontent.com/u/19369327?s=200&v=4" alt="Cypress" className="h-10 w-10 object-contain" />
                  </div>
                  <h3 className="font-medium">Cypress</h3>
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
                      Major Healthcare Provider
                    </div>
                  </div>
                  <div className="md:w-2/3 md:pl-8 md:border-l border-gray-200">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-enterprise-blue">Challenge</h3>
                        <p className="text-gray-600">Critical patient management system with stringent reliability and security requirements facing frequent defects in production.</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-enterprise-blue">Solution</h3>
                        <p className="text-gray-600">Implemented comprehensive test automation framework with continuous testing integration and security validation pipeline.</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-enterprise-blue">Results</h3>
                        <p className="text-gray-600">92% reduction in production defects, 75% faster release cycles, and full HIPAA compliance verification automated.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
            
            {/* CTA */}
            <div className="mt-16 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-enterprise-blue mb-6">
                Ready to Ensure Quality in Your Application?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Partner with GORANTLA INFOTECH SOLUTIONS to implement comprehensive quality assurance 
                and testing strategies that enhance reliability and user satisfaction.
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

export default QAService;
