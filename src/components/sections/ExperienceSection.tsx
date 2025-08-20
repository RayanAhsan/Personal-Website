import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ScrollAnimation from '../ScrollAnimation';
import { Calendar, Users, Award, Zap } from 'lucide-react';

const ExperienceSection = () => {
  const achievements = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Smart Home Innovation",
      description: "Designed and implemented Google Home-based smart home system"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Team Leadership",
      description: "Led six-member team using Agile methodologies"
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Professional Collaboration",
      description: "Collaborated with P.Eng Manager, ensured regulatory compliance"
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Project Delivery",
      description: "Delivered scalable, cost-effective, integrated smart home system"
    }
  ];

  const skills = [
    "Project Management",
    "Agile Methodologies", 
    "Google Home Integration",
    "IoT Systems",
    "Team Leadership",
    "Regulatory Compliance",
    "Systems Architecture",
    "Cross-functional Collaboration"
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world experience in project management, team leadership, 
              and innovative technology implementation.
            </p>
          </div>
        </ScrollAnimation>

        <div className="max-w-4xl mx-auto">
          <ScrollAnimation delay={200}>
            <Card className="project-card relative overflow-hidden">
              {/* Timeline dot */}
              <div className="absolute left-8 top-8 w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              <div className="absolute left-9.5 top-12 w-0.5 h-full bg-gradient-to-b from-primary/50 to-transparent"></div>
              
              <CardContent className="p-8 pl-16">
                <div className="space-y-6">
                  {/* Header */}
                  <div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>January 2024 – April 2024</span>
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2">
                      Project Manager
                    </h3>
                    <p className="text-lg text-secondary font-semibold">
                      Engineering Strategies and Practice II
                    </p>
                    <p className="text-muted-foreground">
                      University of Toronto
                    </p>
                  </div>

                  {/* Key Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Key Achievements</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {achievements.map((achievement, index) => (
                        <ScrollAnimation key={achievement.title} delay={300 + index * 100}>
                          <div className="flex items-start space-x-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors duration-300">
                            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-primary-foreground">
                              {achievement.icon}
                            </div>
                            <div>
                              <h5 className="font-semibold text-sm mb-1">
                                {achievement.title}
                              </h5>
                              <p className="text-xs text-muted-foreground">
                                {achievement.description}
                              </p>
                            </div>
                          </div>
                        </ScrollAnimation>
                      ))}
                    </div>
                  </div>

                  {/* Skills Used */}
                  <ScrollAnimation delay={600}>
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Skills & Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill, index) => (
                          <Badge 
                            key={skill} 
                            variant="secondary"
                            className="bg-gradient-to-r from-secondary/20 to-accent/20 hover:from-secondary/30 hover:to-accent/30 transition-all duration-300"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </ScrollAnimation>

                  {/* Impact Statement */}
                  <ScrollAnimation delay={700}>
                    <div className="border-l-4 border-primary pl-4 bg-primary/5 p-4 rounded-r-lg">
                      <p className="text-sm italic text-muted-foreground">
                        "Successfully delivered a comprehensive smart home solution that integrated 
                        multiple IoT devices with Google Home, demonstrating strong project management 
                        skills and technical leadership in a collaborative university environment."
                      </p>
                    </div>
                  </ScrollAnimation>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;