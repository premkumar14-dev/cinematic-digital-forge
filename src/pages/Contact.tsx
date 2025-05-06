
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    inquiryType: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, inquiryType: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll get back to you shortly.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        inquiryType: "",
        message: ""
      });
    }, 1500);
  };
  
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: [
        "+91 800-000-0000 (India)",
        "+1 555-123-4567 (US)"
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "contact@gorantla.tech",
        "support@gorantla.tech"
      ]
    },
    {
      icon: MapPin,
      title: "Headquarters",
      details: [
        "123 Tech Park, Suite 100",
        "Hyderabad, Telangana 500081",
        "India"
      ]
    }
  ];
  
  const offices = [
    {
      name: "Hyderabad (HQ)",
      address: "123 Tech Park, Suite 100, Hyderabad, Telangana 500081, India",
      phone: "+91 800-000-0000"
    },
    {
      name: "New York",
      address: "555 Madison Avenue, 5th Floor, New York, NY 10022, USA",
      phone: "+1 555-123-4567"
    },
    {
      name: "London",
      address: "123 Business Park, London, EC2A 1NT, UK",
      phone: "+44 20 1234 5678"
    },
    {
      name: "Singapore",
      address: "10 Marina Boulevard, #12-01, Singapore 018983",
      phone: "+65 6123 4567"
    }
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-blue-50/30 to-white">
          <div className="enterprise-container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-enterprise-blue mb-6">Contact Us</h1>
              <p className="text-lg text-gray-700">
                Have a question, feedback, or interested in our services? We'd love to hear from you.
                Our team is ready to assist you with any inquiries.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Information Section */}
        <section className="py-16">
          <div className="enterprise-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactInfo.map((item, index) => (
                <GlassCard key={index} className="text-center p-6">
                  <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-enterprise-teal/10 text-enterprise-teal mb-4">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-enterprise-blue mb-4">{item.title}</h3>
                  <div className="space-y-1">
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-gray-700">{detail}</p>
                    ))}
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section className="py-16 bg-gray-50/50">
          <div className="enterprise-container">
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-enterprise-blue mb-6">Get in Touch</h2>
                <p className="text-gray-700 mb-8">
                  Fill out the form and our team will get back to you within 24 hours.
                  We're here to help with any questions you might have about our services,
                  career opportunities, or partnership inquiries.
                </p>
                
                <GlassCard>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input 
                          id="name" 
                          name="name" 
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe" 
                          required 
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com" 
                          required 
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">Company</Label>
                        <Input 
                          id="company" 
                          name="company" 
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company" 
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input 
                          id="phone" 
                          name="phone" 
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 555-123-4567" 
                        />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="inquiryType">Inquiry Type</Label>
                        <Select value={formData.inquiryType} onValueChange={handleSelectChange}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="services">Services Information</SelectItem>
                            <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                            <SelectItem value="careers">Careers</SelectItem>
                            <SelectItem value="support">Technical Support</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                          id="message" 
                          name="message" 
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="How can we help you?" 
                          rows={5} 
                          required 
                        />
                      </div>
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-enterprise-teal hover:bg-enterprise-teal/90 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-4 w-4" /> Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                </GlassCard>
              </div>
              
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-enterprise-blue mb-6">Our Offices</h2>
                <p className="text-gray-700 mb-8">
                  With offices around the globe, we're always nearby to assist you with your technology needs
                  and provide local support tailored to your region.
                </p>
                
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <GlassCard key={index} className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="text-xl font-semibold text-enterprise-blue mb-2">{office.name}</h3>
                          <p className="text-gray-700 mb-2">{office.address}</p>
                          <p className="text-gray-700">{office.phone}</p>
                        </div>
                        <Button variant="outline" className="mt-4 md:mt-0">
                          View on Map
                        </Button>
                      </div>
                    </GlassCard>
                  ))}
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

export default Contact;
