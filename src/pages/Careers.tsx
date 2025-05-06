
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { Search, MapPin, Briefcase, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  remote: boolean;
  posted: string;
}

const Careers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  
  const jobListings: JobListing[] = [
    { 
      id: "fe-dev-1", 
      title: "Senior Frontend Developer", 
      department: "Engineering",
      location: "Hyderabad, India",
      type: "Full-time",
      remote: true,
      posted: "3 days ago"
    },
    { 
      id: "be-dev-1", 
      title: "Backend Developer (Java)", 
      department: "Engineering",
      location: "New York, USA",
      type: "Full-time",
      remote: true,
      posted: "1 week ago"
    },
    { 
      id: "cloud-arch-1", 
      title: "Cloud Architect", 
      department: "Engineering",
      location: "Bengaluru, India",
      type: "Full-time",
      remote: false,
      posted: "2 days ago"
    },
    { 
      id: "product-mgr-1", 
      title: "Product Manager", 
      department: "Product",
      location: "San Francisco, USA",
      type: "Full-time",
      remote: true,
      posted: "1 day ago"
    },
    { 
      id: "ux-design-1", 
      title: "UX Designer", 
      department: "Design",
      location: "London, UK",
      type: "Full-time",
      remote: true,
      posted: "5 days ago"
    },
    { 
      id: "devops-eng-1", 
      title: "DevOps Engineer", 
      department: "Operations",
      location: "Singapore",
      type: "Full-time",
      remote: false,
      posted: "2 weeks ago"
    },
    { 
      id: "data-sci-1", 
      title: "Data Scientist", 
      department: "Data",
      location: "Berlin, Germany",
      type: "Full-time",
      remote: true,
      posted: "3 days ago"
    },
    { 
      id: "sales-exec-1", 
      title: "Sales Executive", 
      department: "Sales",
      location: "Dubai, UAE",
      type: "Full-time",
      remote: false,
      posted: "1 week ago"
    }
  ];
  
  const departments = ["All", ...new Set(jobListings.map(job => job.department))];
  const locations = ["All", ...new Set(jobListings.map(job => job.location))];
  
  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesDepartment = selectedDepartment === "All" || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === "All" || job.location === selectedLocation;
    
    return matchesSearch && matchesDepartment && matchesLocation;
  });
  
  const benefits = [
    "Competitive salary and performance bonuses",
    "Comprehensive health insurance",
    "Flexible work arrangements",
    "Learning and development opportunities",
    "Regular team events and activities",
    "Generous paid time off",
    "Retirement plans with company matching"
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-blue-50/30 to-white">
          <div className="enterprise-container">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-enterprise-blue mb-6">Join Our Team</h1>
              <p className="text-lg text-gray-700 mb-6">
                At GORANTLA INFOTECH, we're looking for passionate individuals who are excited about technology 
                and innovation. Join us in our mission to transform enterprises through cutting-edge solutions.
              </p>
              <div className="mt-8">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search for positions..."
                    className="pl-12 h-14 text-lg rounded-lg"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute left-4 top-4 h-6 w-6 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Job Listings Section */}
        <section className="py-16">
          <div className="enterprise-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-enterprise-blue mb-2">Open Positions</h2>
              <p className="text-gray-700">
                Discover opportunities to make an impact and grow your career with us
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters */}
              <div className="lg:w-1/4">
                <GlassCard>
                  <h3 className="text-lg font-semibold mb-4">Filters</h3>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Department</label>
                    <select
                      className="w-full p-2 border border-gray-200 rounded"
                      value={selectedDepartment}
                      onChange={(e) => setSelectedDepartment(e.target.value)}
                    >
                      {departments.map(dept => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Location</label>
                    <select
                      className="w-full p-2 border border-gray-200 rounded"
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                    >
                      {locations.map(loc => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </select>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedDepartment("All");
                      setSelectedLocation("All");
                    }}
                  >
                    Clear Filters
                  </Button>
                </GlassCard>
              </div>
              
              {/* Job Results */}
              <div className="lg:w-3/4">
                {filteredJobs.length > 0 ? (
                  <div className="space-y-4">
                    {filteredJobs.map(job => (
                      <GlassCard key={job.id} className="p-6 hover:border-enterprise-teal transition-colors duration-300">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div>
                            <h3 className="text-xl font-semibold text-enterprise-blue">{job.title}</h3>
                            <div className="mt-2 space-y-1">
                              <div className="flex items-center text-gray-600 text-sm">
                                <Briefcase className="h-4 w-4 mr-2" />
                                {job.department} • {job.type} {job.remote && "• Remote"}
                              </div>
                              <div className="flex items-center text-gray-600 text-sm">
                                <MapPin className="h-4 w-4 mr-2" />
                                {job.location}
                              </div>
                              <div className="flex items-center text-gray-600 text-sm">
                                <Clock className="h-4 w-4 mr-2" />
                                Posted {job.posted}
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 md:mt-0">
                            <Button className="bg-enterprise-teal hover:bg-enterprise-teal/90 text-white">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </GlassCard>
                    ))}
                  </div>
                ) : (
                  <GlassCard className="text-center py-12">
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">No positions found</h3>
                    <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedDepartment("All");
                        setSelectedLocation("All");
                      }}
                    >
                      Reset Search
                    </Button>
                  </GlassCard>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 bg-gray-50/50">
          <div className="enterprise-container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-enterprise-blue mb-4">Why Work With Us</h2>
              <p className="text-gray-700">
                We believe in creating an environment where talented individuals can thrive, grow, and make a meaningful impact
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-enterprise-blue mb-4">Benefits & Perks</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="min-w-5 h-5 rounded-full bg-enterprise-teal/10 flex items-center justify-center text-enterprise-teal mr-3 mt-0.5">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="rounded-lg overflow-hidden bg-white shadow-sm h-full flex items-center">
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-enterprise-blue mb-4">Our Culture</h3>
                  <p className="text-gray-700 mb-4">
                    We foster a culture of innovation, collaboration, and continuous learning. Our diverse and inclusive 
                    workplace encourages creative thinking and provides opportunities to work on cutting-edge projects 
                    that make a real difference for our clients.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Whether you're a seasoned professional or just starting your career, GORANTLA INFOTECH offers 
                    an environment where you can develop your skills, advance your career, and be part of a team 
                    that's shaping the future of technology.
                  </p>
                  <Link to="/contact">
                    <Button className="group text-enterprise-teal hover:text-enterprise-blue">
                      <span>Connect with our team</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
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

export default Careers;
