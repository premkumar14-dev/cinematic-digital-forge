
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Mission from "@/components/home/Mission";
import About from "@/components/home/About";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Mission />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
