
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Solutions from "./pages/Solutions";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ERPService from "./pages/services/ERPService";
import QAService from "./pages/services/QAService";
import ProjectService from "./pages/services/ProjectService";
import OffshoreService from "./pages/services/OffshoreService";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider delayDuration={0}>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceType" element={<Services />} />
          <Route path="/services/erp" element={<ERPService />} />
          <Route path="/services/qa" element={<QAService />} />
          <Route path="/services/project" element={<ProjectService />} />
          <Route path="/services/offshore" element={<OffshoreService />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/:solutionType" element={<Solutions />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
