import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ScrollAnimation from '../ScrollAnimation';
import { BookOpen, Zap, Waves, Plane, Download, FileText } from 'lucide-react';

const AboutSection = () => {
  const interests = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Coding & Development",
      description: "Passionate about creating efficient, scalable solutions"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "AI Research",
      description: "Exploring machine learning and neural networks"
    },
    {
      icon: <Waves className="w-6 h-6" />,
      title: "Swimming",
      description: "Competitive swimmer and fitness enthusiast"
    },
    {
      icon: <Plane className="w-6 h-6" />,
      title: "RC Planes",
      description: "Building and flying radio-controlled aircraft"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A passionate Computer Engineering student combining technical expertise 
              with creative problem-solving to build the future.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="space-y-6">
            <ScrollAnimation delay={200}>
              <Card className="project-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">My Journey</h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      I'm a third-year Computer Engineering student at the{' '}
                      <span className="text-secondary font-semibold">University of Toronto</span>,
                      pursuing a minor in AI and Business Engineering. My passion lies in 
                      the intersection of technology and innovation.
                    </p>
                    <p>
                      From developing machine learning models to building full-stack applications,
                      I love tackling complex challenges that push the boundaries of what's possible.
                      My goal is to create technology that makes a meaningful impact on people's lives.
                    </p>
                    <p>
                      When I'm not coding, you'll find me in the pool training for competitions,
                      or in my workshop building and flying RC planes – hobbies that teach me 
                      precision, patience, and the importance of iterative improvement.
                    </p>
                  </div>

                  {/* Resume Download Buttons */}
                  <div className="mt-8 pt-6 border-t border-border">
                    <h4 className="text-lg font-semibold mb-4 text-center">Download My Resume</h4>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button 
                        asChild
                        className="btn-hero flex-1 sm:flex-none"
                        size="lg"
                      >
                        <a 
                          href="/path-to-your-swe-resume.pdf" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Software Engineering
                        </a>
                      </Button>
                      <Button 
                        asChild
                        variant="outline"
                        className="btn-secondary flex-1 sm:flex-none"
                        size="lg"
                      >
                        <a 
                          href="/path-to-your-ml-resume.pdf" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <FileText className="w-4 h-4 mr-2" />
                          Machine Learning
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
              <Card className="project-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-accent mb-4">Education</h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-lg">University of Toronto</h4>
                      <p className="text-secondary">Computer Engineering (B.A.Sc.)</p>
                      <p className="text-sm text-muted-foreground">2022 - 2026 (Expected)</p>
                    </div>
                    <div className="border-l-4 border-secondary pl-4">
                      <h4 className="font-semibold">Minor in AI & Business Engineering</h4>
                      <p className="text-sm text-muted-foreground">
                        Focus on machine learning, neural networks, and technology commercialization
                      </p>
                    </div>
                  </div>

                  {/* Alternative: Resume buttons in Education card */}
                  <div className="mt-6 pt-4 border-t border-border">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button 
                        asChild
                        size="sm"
                        className="btn-hero flex-1"
                      >
                        <a 
                          href="/path-to-your-swe-resume.pdf" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          SWE Resume
                        </a>
                      </Button>
                      <Button 
                        asChild
                        variant="outline"
                        size="sm"
                        className="flex-1"
                      >
                        <a 
                          href="/path-to-your-ml-resume.pdf" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <FileText className="w-4 h-4 mr-2" />
                          ML Resume
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>

          {/* Interests & Hobbies */}
          <div className="space-y-6">
            <ScrollAnimation delay={300}>
              <h3 className="text-2xl font-bold text-center lg:text-left mb-8">
                Interests & Hobbies
              </h3>
            </ScrollAnimation>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {interests.map((interest, index) => (
                <ScrollAnimation key={interest.title} delay={400 + index * 100}>
                  <Card className="project-card group cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground mb-4 group-hover:scale-110 transition-transform duration-300">
                        {interest.icon}
                      </div>
                      <h4 className="font-semibold text-lg mb-2">{interest.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {interest.description}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;