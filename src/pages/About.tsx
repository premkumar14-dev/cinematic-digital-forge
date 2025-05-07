
import React, { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useInView } from "react-intersection-observer";
import { GlassCard } from "@/components/ui/GlassCard";
import { Target, Award, TrendingUp, Users } from "lucide-react";
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
    { year: "2018", title: "Company Founded", description: "GORANTLA INFOTECH SOLUTIONS established on April 9th with a vision to transform enterprises through technology." },
    { year: "2019", title: "First Major Client", description: "Secured our first enterprise client and delivered a successful digital transformation project." },
    { year: "2020", title: "Service Expansion", description: "Expanded our service offerings to include cloud transformation and managed services." },
    { year: "2021", title: "Strategic Partnerships", description: "Formed strategic alliances with major cloud and technology providers." },
    { year: "2022", title: "Team Growth", description: "Doubled our team size to meet growing client demand for our services." },
    { year: "2023", title: "Industry Recognition", description: "Recognized for excellence in digital transformation services." },
  ];
  
  const stats = [
    { label: "Years in Business", value: "5+" },
    { label: "Global Clients", value: "12+" },
    { label: "Team Members", value: "45+" },
    { label: "Projects Delivered", value: "23+" },
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
      icon: Award, 
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
                Founded in 2018, we combine technical excellence, industry knowledge, and a client-centric 
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
                  Founded on April 9th, 2018, GORANTLA INFOTECH SOLUTIONS PVT LTD began with a vision to bridge the gap between technology 
                  innovation and business value. What started as a small team of passionate technologists has grown 
                  into a thriving company with over 45 talented professionals.
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
                Our growth and impact since our founding in 2018 reflects our commitment to excellence and client success.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
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
        
        {/* Office Information */}
        <section className="py-16">
          <div className="enterprise-container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-enterprise-blue mb-4">Our Office</h2>
              <p className="text-gray-700">
                Visit us at our headquarters in Hyderabad, India
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <GlassCard className="p-6 h-full">
                  <h3 className="text-xl font-semibold text-enterprise-blue mb-6">Headquarters</h3>
                  <p className="text-gray-700 mb-4">
                    3rd Floor Sri Durga Sai Hub, 301,<br />
                    13th phase rd, opposite prajay megapolis,<br />
                    kukatpally housing board colony<br />
                    Hyderabad, Telangana 500072<br />
                    India
                  </p>
                  <p className="mb-6">
                    <span className="font-medium">Phone:</span> +91 89394 44844<br />
                    <span className="font-medium">Email:</span> info@gorantlainfotech.com
                  </p>
                  <Button className="bg-enterprise-teal hover:bg-enterprise-teal/90 text-white">
                    <a href="https://www.google.com/maps/search/3rd+Floor+Sri+Durga+Sai+Hub,301,+13th+phase+rd,+opposite+prajay+megapolis,+kukatpally+housing+board+colony+Hyderabad+Telangana+500072+India" target="_blank" rel="noreferrer" className="flex items-center">
                      View on Map
                    </a>
                  </Button>
                </GlassCard>
              </div>
              <div className="md:w-1/2 aspect-video bg-gray-100 rounded-lg overflow-hidden h-64 md:h-auto">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.3822264961155!2d78.4086!3d17.4845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91a09f0abc71%3A0xe0b0e79a3a134297!2sKukatpally%20Housing%20Board%20Colony%2C%20Kukatpally%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1684773046613!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
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
