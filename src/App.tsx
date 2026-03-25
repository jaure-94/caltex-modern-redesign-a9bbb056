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
import Lubricants from "@/pages/motorists/Lubricants";
import Diesel from "@/pages/business/Diesel";
import FindStation from "@/pages/FindStation";
import Blog from "@/pages/Blog";
import NotFound from "@/pages/NotFound";

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
            <Route path="/motorists/products/techron-technology" element={<TechronTechnology />} />
            <Route path="/motorists/products/lubricants" element={<Lubricants />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
