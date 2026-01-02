import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import ExploreNeeds from "./pages/ExploreNeeds";
import RegisterOrphanage from "./pages/RegisterOrphanage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SuccessStories from "./pages/SuccessStories";
import AboutUs from "./pages/AboutUs";
import FindOrphanages from "./pages/FindOrphanages";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/explore" element={<ExploreNeeds />} />
              <Route path="/register" element={<RegisterOrphanage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/stories" element={<SuccessStories />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/find-orphanages" element={<FindOrphanages />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
