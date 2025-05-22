
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import ServiceOperations from "./pages/ServiceOperations";
import InventoryHealth from "./pages/InventoryHealth";
import TatAnalytics from "./pages/TatAnalytics";
import EmailDigest from "./pages/EmailDigest";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/service-ops" element={<ServiceOperations />} />
          <Route path="/inventory" element={<InventoryHealth />} />
          <Route path="/tat-analytics" element={<TatAnalytics />} />
          <Route path="/email-digest" element={<EmailDigest />} />
          <Route path="/orders" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
