import React from 'react';
import { Button } from '@/components/ui/button';
import ScrollAnimation from '../ScrollAnimation';
import profileImage from '@/assets/rayan-profile.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <ScrollAnimation>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground">Hi, I'm</p>
                <h1 className="text-5xl md:text-7xl font-bold gradient-text">
                  Rayan Ahsan
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                  Computer Engineering Student
                </h2>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Passionate about <span className="text-primary font-semibold">full-stack development</span> and{' '}
                <span className="text-secondary font-semibold">artificial intelligence</span>. 
                Building impactful, scalable, and user-focused software solutions that make a difference.
              </p>
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="btn-hero px-8 py-6 text-lg"
                  onClick={() => scrollToSection('portfolio')}
                >
                  View My Work
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="btn-secondary px-8 py-6 text-lg"
                  onClick={() => scrollToSection('contact')}
                >
                  Get In Touch
                </Button>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={600}>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span>University of Toronto</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                  <span>AI & Business Engineering</span>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Profile Image */}
          <ScrollAnimation delay={300} className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-2xl opacity-20 animate-glow-pulse"></div>
              <div className="relative overflow-hidden rounded-2xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
                <img
                  src={profileImage}
                  alt="Rayan Ahsan - Computer Engineering Student"
                  className="w-80 h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Scroll indicator */}
        <ScrollAnimation delay={800} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2 animate-bounce-gentle">
            <span className="text-sm text-muted-foreground">Scroll to explore</span>
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default HeroSection;