import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import TechronTechnology from "@/pages/motorists/TechronTechnology";
import OwnAStation from "@/pages/motorists/OwnAStation";
import Lubricants from "@/pages/motorists/Lubricants";
import Diesel from "@/pages/business/Diesel";
import Agriculture from "@/pages/business/Agriculture";
import Construction from "./pages/business/Construction";
import Mining from "@/pages/business/Mining";
import Power from "@/pages/business/Power";
import FindStation from "@/pages/FindStation";
import Blog from "@/pages/Blog";
import NotFound from "@/pages/NotFound";
import '@/index.css';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/find-a-station" element={<FindStation />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/business/products/diesel" element={<Diesel />} />
            <Route path="/business/industries/agriculture" element={<Agriculture />} />
            <Route path="/business/industries/construction" element={<Construction />} />
            <Route path="/business/industries/mining" element={<Mining />} />
            <Route path="/business/industries/power" element={<Power />} />
            <Route path="/motorists/products/techron-technology" element={<TechronTechnology />} />
            <Route path="/motorists/products/lubricants" element={<Lubricants />} />
            <Route path="/motorists/own-a-station" element={<OwnAStation />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
