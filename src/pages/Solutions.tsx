
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { Banknote, Heart, ShoppingBag, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";

const Solutions = () => {
  const { solutionType } = useParams();
  
  const solutionsData = [
    {
      id: "fintech",
      icon: Banknote,
      title: "FinTech",
      description: "Innovative financial technology solutions for modern banking, payment systems, and investment platforms.",
      detailedDescription: "Our FinTech solutions deliver secure, compliant, and innovative technological advancements to financial institutions and financial service providers. We help organizations modernize legacy systems, enhance customer experiences, and adapt to the rapidly evolving digital financial landscape.",
      features: [
        "Digital banking platforms",
        "Payment processing systems",
        "Blockchain implementations",
        "Regulatory compliance solutions"
      ]
    },
    {
      id: "healthcare",
      icon: Heart,
      title: "Healthcare",
      description: "Digital health solutions that improve patient care, streamline operations, and ensure regulatory compliance.",
      detailedDescription: "Our healthcare solutions address the complex challenges faced by healthcare providers, payers, and life sciences organizations. We deliver secure, compliant, and patient-centric digital health platforms that improve care delivery, operational efficiency, and patient outcomes.",
      features: [
        "Electronic health record systems",
        "Telehealth platforms",
        "Healthcare analytics",
        "HIPAA-compliant cloud solutions"
      ]
    },
    {
      id: "retail",
      icon: ShoppingBag,
      title: "Retail",
      description: "Omnichannel retail solutions that create seamless shopping experiences and optimize backend operations.",
      detailedDescription: "Our retail solutions help businesses adapt to changing consumer behaviors and expectations. We deliver omnichannel experiences, enable data-driven decision making, and optimize operations to help retailers remain competitive in a digital-first market.",
      features: [
        "E-commerce platforms",
        "Inventory management systems",
        "Customer relationship management",
        "Retail analytics and insights"
      ]
    },
    {
      id: "logistics",
      icon: Truck,
      title: "Logistics",
      description: "End-to-end supply chain solutions that optimize logistics operations and improve visibility.",
      detailedDescription: "Our logistics solutions address the increasingly complex challenges faced by supply chain and logistics organizations. We help businesses optimize routes, improve warehouse operations, enhance visibility, and reduce costs through advanced technologies and data analytics.",
      features: [
        "Supply chain management systems",
        "Route optimization solutions",
        "Warehouse management systems",
        "Real-time tracking and visibility"
      ]
    }
  ];

  // If a specific solution type is selected, show detailed view
  if (solutionType) {
    const selectedSolution = solutionsData.find(s => s.id === solutionType);
    if (!selectedSolution) {
      return (
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-24">
            <div className="enterprise-container py-16">
              <h1 className="text-3xl font-bold text-enterprise-blue">Solution Not Found</h1>
              <p className="mt-4">The requested solution does not exist.</p>
              <Link to="/solutions" className="mt-6 inline-block">
                <Button>Back to Solutions</Button>
              </Link>
            </div>
          </main>
          <Footer />
        </div>
      );
    }

    const SolutionIcon = selectedSolution.icon;
    
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-24">
          <div className="bg-gradient-to-b from-blue-50/30 to-white py-16">
            <div className="enterprise-container">
              <div className="mb-6">
                <Link to="/solutions" className="text-enterprise-teal hover:text-enterprise-blue transition-colors">
                  ← Back to All Solutions
                </Link>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  <h1 className="text-4xl font-bold text-enterprise-blue mb-6">{selectedSolution.title} Solutions</h1>
                  <p className="text-lg mb-8">{selectedSolution.detailedDescription}</p>
                  
                  <h2 className="text-2xl font-semibold text-enterprise-blue mb-4">Key Features</h2>
                  <ul className="list-disc pl-6 space-y-2 mb-8">
                    {selectedSolution.features.map((feature, index) => (
                      <li key={index} className="text-gray-700">{feature}</li>
                    ))}
                  </ul>
                  
                  <Link to="/contact">
                    <Button size="lg" className="bg-enterprise-teal hover:bg-enterprise-teal/90 text-white">
                      Request a Consultation
                    </Button>
                  </Link>
                </div>
                
                <div className="md:w-1/3">
                  <GlassCard className="h-full flex flex-col justify-center items-center p-8">
                    <div className="w-20 h-20 rounded-full bg-enterprise-teal/10 flex items-center justify-center mb-6">
                      <SolutionIcon className="h-10 w-10 text-enterprise-teal" />
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-4">{selectedSolution.title} Solutions</h3>
                    <p className="text-center text-gray-600">{selectedSolution.description}</p>
                  </GlassCard>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Main solutions overview page
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-white z-0" />
          <div className="enterprise-container relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-enterprise-blue">
                Industry Solutions
              </h1>
              <p className="text-gray-600">
                Tailored technology solutions designed for the unique challenges and opportunities
                across different industries and verticals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {solutionsData.map((solution) => (
                <Link to={`/solutions/${solution.id}`} key={solution.id}>
                  <GlassCard hoverEffect className="h-full">
                    <div className="w-12 h-12 rounded-lg bg-enterprise-teal/10 flex items-center justify-center text-enterprise-teal mb-5">
                      <solution.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-enterprise-blue">{solution.title}</h3>
                    <p className="text-gray-600 mb-4">{solution.description}</p>
                    <Button variant="link" className="p-0 text-enterprise-teal hover:text-enterprise-blue">
                      Learn more →
                    </Button>
                  </GlassCard>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;
