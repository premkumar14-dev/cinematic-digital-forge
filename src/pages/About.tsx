
import React, { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useInView } from "react-intersection-observer";
import { GlassCard } from "@/components/ui/GlassCard";
import { Target, Award, TrendingUp, Users, Globe, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const { ref: statsRef, inView: statsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const { ref: teamRef, inView: teamInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const milestones = [
    { year: "2010", title: "Company Founded", description: "GORANTLA INFOTECH established with a vision to transform enterprises through technology." },
    { year: "2013", title: "International Expansion", description: "Opened our first international office in the United States, expanding our global footprint." },
    { year: "2015", title: "Industry Recognition", description: "Received our first industry award for excellence in cloud transformation services." },
    { year: "2018", title: "Strategic Partnerships", description: "Formed strategic alliances with major cloud and technology providers." },
    { year: "2021", title: "Innovation Center", description: "Launched our Innovation Center focused on emerging technologies and R&D." },
    { year: "2023", title: "Global Recognition", description: "Recognized as a leader in digital transformation by industry analysts." },
  ];
  
  const stats = [
    { label: "Years in Business", value: "14+" },
    { label: "Global Clients", value: "250+" },
    { label: "Team Members", value: "1000+" },
    { label: "Countries", value: "15+" },
    { label: "Projects Delivered", value: "1500+" },
    { label: "Success Rate", value: "98%" },
  ];
  
  const values = [
    { 
      icon: Target, 
      title: "Excellence", 
      description: "We are committed to delivering exceptional quality in every aspect of our work." 
    },
    { 
      icon: TrendingUp, 
      title: "Innovation", 
      description: "We constantly push boundaries and embrace emerging technologies." 
    },
    { 
      icon: Trophy, 
      title: "Integrity", 
      description: "We uphold the highest standards of honesty, transparency, and ethical conduct." 
    },
    { 
      icon: Users, 
      title: "Collaboration", 
      description: "We believe in the power of teamwork and partnerships to achieve remarkable results." 
    },
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-blue-50/30 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-enterprise-teal/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 -left-20 w-60 h-60 bg-enterprise-purple/10 rounded-full blur-3xl" />
          </div>
          
          <div className="enterprise-container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-enterprise-blue mb-6">About GORANTLA INFOTECH</h1>
              <p className="text-lg text-gray-700 mb-8">
                We are a global technology solutions provider committed to helping enterprises thrive in the digital era. 
                With over a decade of experience, we combine technical excellence, industry knowledge, and a client-centric 
                approach to deliver transformative solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button className="bg-enterprise-teal hover:bg-enterprise-teal/90 text-white">
                    Connect With Us
                  </Button>
                </Link>
                <Link to="/careers">
                  <Button variant="outline" className="border-enterprise-blue/20 hover:border-enterprise-blue text-enterprise-blue">
                    Join Our Team
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-16">
          <div className="enterprise-container">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-enterprise-blue mb-4">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  Founded in 2010, GORANTLA INFOTECH SOLUTIONS began with a vision to bridge the gap between technology 
                  innovation and business value. What started as a small team of passionate technologists has grown 
                  into a global enterprise with offices across multiple continents.
                </p>
                <p className="text-gray-700 mb-4">
                  Over the years, we've evolved our service offerings to meet the changing needs of the market, 
                  but our core mission has remained unchanged: to empower organizations to achieve their full 
                  potential through technology.
                </p>
                <p className="text-gray-700">
                  Today, we serve clients across diverse industries, from financial services and healthcare to 
                  retail and manufacturing, helping them navigate their digital transformation journeys with 
                  confidence and clarity.
                </p>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-enterprise-blue mb-6">Our Timeline</h2>
                <div className="border-l-2 border-enterprise-teal/30 pl-6 space-y-8">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="relative">
                      <div className="absolute -left-[31px] w-6 h-6 rounded-full bg-enterprise-teal flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <span className="text-enterprise-teal font-bold">{milestone.year}</span>
                        <h3 className="text-lg font-semibold text-enterprise-blue">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-16 bg-gray-50/50">
          <div className="enterprise-container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-enterprise-blue mb-4">Our Core Values</h2>
              <p className="text-gray-700">
                These principles guide our decisions, shape our culture, and define how we engage with our clients, partners, and communities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <GlassCard key={index} className="relative pt-10">
                  <div className="absolute -top-6 left-6 w-12 h-12 rounded-lg bg-enterprise-blue flex items-center justify-center">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-enterprise-blue">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section ref={statsRef} className="py-16 bg-enterprise-blue text-white">
          <div className="enterprise-container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">By the Numbers</h2>
              <p className="text-white/80">
                Our growth and impact over the years reflects our commitment to excellence and client success.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center p-6 rounded-lg bg-white/10 backdrop-blur-sm transform transition-all duration-700"
                  style={{ 
                    opacity: statsInView ? 1 : 0, 
                    transform: statsInView ? 'translateY(0)' : 'translateY(20px)',
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  <div className="text-4xl font-bold mb-2 text-enterprise-teal">{stat.value}</div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Global Presence */}
        <section className="py-16">
          <div className="enterprise-container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-enterprise-blue mb-4">Global Presence</h2>
              <p className="text-gray-700">
                With offices and delivery centers across multiple continents, we bring global expertise with local understanding.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <GlassCard className="p-6 h-full">
                  <div className="flex items-center mb-6">
                    <Globe className="h-8 w-8 text-enterprise-teal mr-3" />
                    <h3 className="text-xl font-semibold text-enterprise-blue">Our Global Footprint</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-enterprise-teal mt-2 mr-3"></div>
                      <div>
                        <span className="font-semibold">North America:</span> New York, San Francisco, Toronto
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-enterprise-teal mt-2 mr-3"></div>
                      <div>
                        <span className="font-semibold">Europe:</span> London, Berlin, Amsterdam
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-enterprise-teal mt-2 mr-3"></div>
                      <div>
                        <span className="font-semibold">Asia-Pacific:</span> Hyderabad, Bengaluru, Singapore, Sydney
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-enterprise-teal mt-2 mr-3"></div>
                      <div>
                        <span className="font-semibold">Middle East:</span> Dubai, Abu Dhabi
                      </div>
                    </li>
                  </ul>
                </GlassCard>
              </div>
              <div className="md:w-1/2 aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center p-6">
                  <Globe className="h-12 w-12 text-enterprise-teal/50 mx-auto mb-4" />
                  <p className="text-gray-500">Interactive map visualization would be displayed here</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
