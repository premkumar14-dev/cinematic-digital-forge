
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Mission from "@/components/home/Mission";
import About from "@/components/home/About";
import Technologies from "@/components/home/Technologies";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Mission />
        <About />
        <Technologies />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
