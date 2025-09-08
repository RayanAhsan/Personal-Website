import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import InteractiveBackground from "./components/InteractiveBackground";
import ParticleCursor from "./components/ParticleCursor";
import Navigation from "./components/Navigation";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import SkillsSection from "./components/sections/SkillsSection";
import PortfolioSection from "./components/sections/PortfolioSection";
import ContactSection from "./components/sections/ContactSection";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="relative min-h-screen">
        <InteractiveBackground />
        <ParticleCursor />
        <Navigation />
        
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <PortfolioSection />
          <ContactSection />
        </main>
        
        <footer className="bg-muted/30 border-t border-border py-8">
          <div className="container mx-auto px-6 text-center">
            <p className="text-muted-foreground">
              Built with React, Three.js, and alot of ☕.
            </p>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
