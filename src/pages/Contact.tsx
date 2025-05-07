
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().optional(),
  phone: z.string().optional(),
  inquiryType: z.string().min(1, { message: "Please select an inquiry type." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      inquiryType: "",
      message: "",
    },
  });
  
  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      // When Supabase is connected, replace this with actual submission logic
      console.log("Form data to submit:", data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Email would be sent to info@gorantlainfotech.com via Supabase function
      
      setFormSubmitted(true);
      form.reset();
      
      toast.success("Message sent successfully!", {
        description: "We'll get back to you shortly.",
      });
      
      // Reset form submitted state after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    } catch (error) {
      toast.error("Failed to send message", {
        description: "Please try again or contact us directly.",
      });
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30"></div>
          
          <div className="enterprise-container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-enterprise-blue mb-6">Let's Connect</h1>
              <p className="text-lg text-gray-700 mb-8">
                Ready to discuss how we can help transform your business?
                Our team of experts is just a message away.
              </p>
              
              <div className="flex flex-col md:flex-row justify-center gap-8 mt-12">
                <a href="tel:+918939444844" className="flex flex-col items-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-full bg-enterprise-blue/10 flex items-center justify-center mb-4 text-enterprise-blue">
                    <Phone className="h-6 w-6" />
                  </div>
                  <p className="text-lg font-medium text-enterprise-blue">Call Us</p>
                  <p className="text-gray-600">+91 89394 44844</p>
                </a>
                
                <a href="mailto:info@gorantlainfotech.com" className="flex flex-col items-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-full bg-enterprise-teal/10 flex items-center justify-center mb-4 text-enterprise-teal">
                    <Mail className="h-6 w-6" />
                  </div>
                  <p className="text-lg font-medium text-enterprise-teal">Email Us</p>
                  <p className="text-gray-600">info@gorantlainfotech.com</p>
                </a>
                
                <div className="flex flex-col items-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-full bg-enterprise-purple/10 flex items-center justify-center mb-4 text-enterprise-purple">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <p className="text-lg font-medium text-enterprise-purple">Visit Us</p>
                  <p className="text-gray-600 text-center text-sm">
                    3rd Floor Sri Durga Sai Hub, 301,<br />
                    13th phase rd, opposite prajay megapolis,<br />
                    kukatpally housing board colony<br />
                    Hyderabad, Telangana 500072
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section className="py-16 bg-white">
          <div className="enterprise-container">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Contact Form */}
                <div>
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-enterprise-blue relative inline-block">
                      Get in Touch
                      <div className="absolute -bottom-2 left-0 h-1 w-20 bg-enterprise-teal rounded-full"></div>
                    </h2>
                    <p className="mt-6 text-gray-600">
                      Have a question or want to discuss a potential project? Fill out the form below, and our team will get back to you promptly.
                    </p>
                  </div>
                  
                  <GlassCard className="relative overflow-hidden border-0 shadow-xl">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-enterprise-teal/5 rounded-full -translate-x-20 -translate-y-20"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-enterprise-blue/5 rounded-full translate-x-20 translate-y-20"></div>
                    
                    {formSubmitted ? (
                      <div className="py-12 px-6 text-center">
                        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                          <Check className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">Thank You!</h3>
                        <p className="text-gray-600 mb-6">
                          Your message has been sent successfully. We'll get back to you as soon as possible.
                        </p>
                        <Button 
                          variant="outline" 
                          onClick={() => setFormSubmitted(false)}
                          className="border-enterprise-teal text-enterprise-teal hover:bg-enterprise-teal hover:text-white"
                        >
                          Send Another Message
                        </Button>
                      </div>
                    ) : (
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="relative z-10 space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Full Name</FormLabel>
                                  <FormControl>
                                    <Input 
                                      placeholder="John Doe" 
                                      className="border-gray-300 focus:border-enterprise-teal focus:ring-enterprise-teal/30"
                                      {...field} 
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email Address</FormLabel>
                                  <FormControl>
                                    <Input 
                                      placeholder="john@example.com" 
                                      className="border-gray-300 focus:border-enterprise-teal focus:ring-enterprise-teal/30"
                                      {...field} 
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="company"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Company</FormLabel>
                                  <FormControl>
                                    <Input 
                                      placeholder="Your Company" 
                                      className="border-gray-300 focus:border-enterprise-teal focus:ring-enterprise-teal/30"
                                      {...field} 
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Phone Number</FormLabel>
                                  <FormControl>
                                    <Input 
                                      placeholder="+91 98765 43210" 
                                      className="border-gray-300 focus:border-enterprise-teal focus:ring-enterprise-teal/30"
                                      {...field} 
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="inquiryType"
                              render={({ field }) => (
                                <FormItem className="md:col-span-2">
                                  <FormLabel>Inquiry Type</FormLabel>
                                  <Select 
                                    onValueChange={field.onChange} 
                                    defaultValue={field.value}
                                  >
                                    <FormControl>
                                      <SelectTrigger className="border-gray-300 focus:border-enterprise-teal focus:ring-enterprise-teal/30">
                                        <SelectValue placeholder="Select an inquiry type" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="general">General Inquiry</SelectItem>
                                      <SelectItem value="services">Services Information</SelectItem>
                                      <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                                      <SelectItem value="careers">Careers</SelectItem>
                                      <SelectItem value="support">Technical Support</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="message"
                              render={({ field }) => (
                                <FormItem className="md:col-span-2">
                                  <FormLabel>Message</FormLabel>
                                  <FormControl>
                                    <Textarea 
                                      placeholder="How can we help you?" 
                                      rows={5} 
                                      className="border-gray-300 focus:border-enterprise-teal focus:ring-enterprise-teal/30"
                                      {...field} 
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          
                          <Button 
                            type="submit" 
                            className="w-full bg-enterprise-blue hover:bg-enterprise-teal text-white transition-colors"
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
                      </Form>
                    )}
                  </GlassCard>
                </div>
                
                {/* Map and Office Info */}
                <div className="lg:pl-8">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-enterprise-blue relative inline-block">
                      Visit Our Office
                      <div className="absolute -bottom-2 left-0 h-1 w-20 bg-enterprise-teal rounded-full"></div>
                    </h2>
                    <p className="mt-6 text-gray-600">
                      We'd love to meet you in person. Drop by our office during business hours.
                    </p>
                  </div>
                  
                  <div className="mb-8 overflow-hidden rounded-lg shadow-lg">
                    {/* Embed a Google Map */}
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.9361750456446!2d78.39239581478447!3d17.47288688802659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91665907f991%3A0x4cc834b7f25e2a37!2sKukatpally%20Housing%20Board%20Colony%2C%20Kukatpally%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1652345678901!5m2!1sen!2sin"
                      width="100%" 
                      height="300" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Office Location"
                    ></iframe>
                  </div>
                  
                  <GlassCard className="mb-8">
                    <h3 className="text-xl font-semibold text-enterprise-blue mb-4">Hyderabad Office</h3>
                    <div className="space-y-4 text-gray-600">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-enterprise-teal mr-3 mt-1 flex-shrink-0" />
                        <p>
                          3rd Floor Sri Durga Sai Hub, 301,<br />
                          13th phase rd, opposite prajay megapolis,<br />
                          kukatpally housing board colony<br />
                          Hyderabad, Telangana 500072<br />
                          India
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-enterprise-teal mr-3 flex-shrink-0" />
                        <p>+91 89394 44844</p>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-enterprise-teal mr-3 flex-shrink-0" />
                        <p>info@gorantlainfotech.com</p>
                      </div>
                    </div>
                  </GlassCard>
                  
                  <GlassCard>
                    <h3 className="text-xl font-semibold text-enterprise-blue mb-4">Business Hours</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600">Monday - Friday</span>
                        <span className="font-medium">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600">Saturday</span>
                        <span className="font-medium">10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-600">Sunday</span>
                        <span className="font-medium text-enterprise-teal">Closed</span>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-gray-50/70">
          <div className="enterprise-container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-enterprise-blue mb-4">Frequently Asked Questions</h2>
                <p className="text-gray-600">Find answers to common questions about working with us.</p>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    question: "What is your typical response time?",
                    answer: "We strive to respond to all inquiries within 24 hours during business days. For urgent matters, we recommend giving us a call."
                  },
                  {
                    question: "Do you provide services internationally?",
                    answer: "Yes, we work with clients globally. Our team is experienced in managing remote projects and accommodating different time zones."
                  },
                  {
                    question: "What information should I include in my initial inquiry?",
                    answer: "To help us provide the most accurate response, please include details about your project, timeline, budget considerations, and any specific requirements or challenges."
                  },
                  {
                    question: "Can I schedule a consultation before committing to a project?",
                    answer: "Absolutely! We offer complimentary initial consultations to discuss your needs, answer questions, and determine if we're the right fit for your project."
                  }
                ].map((item, index) => (
                  <GlassCard key={index} className="transition-all duration-300 hover:shadow-md">
                    <h3 className="text-lg font-semibold text-enterprise-blue mb-2">{item.question}</h3>
                    <p className="text-gray-600">{item.answer}</p>
                  </GlassCard>
                ))}
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
