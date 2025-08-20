import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import ScrollAnimation from '../ScrollAnimation';
import { ExternalLink, Github, Zap, Brain, Globe, Gamepad2 } from 'lucide-react';
import skinLesionImg from '@/assets/skin-lesion-project.jpg';
import intellicaneImg from '@/assets/intellicane-project.jpg';
import cardiologyBotImg from '@/assets/cardiology-bot-project.jpg';
import transformerImg from '@/assets/transformer-project.jpg';
import f1RagImg from '@/assets/f1-rag-project.jpg';
import raystockImg from '@/assets/raystock-project.jpg';
import pokedexImg from '@/assets/pokedex-project.jpg';
import speechBotImg from '@/assets/speech-bot-project.jpg';
import sosFpgaImg from '@/assets/sos-fpga-project.jpg';
import racingGameImg from '@/assets/racing-game-project.jpg';

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projectImages = {
    1: skinLesionImg,
    2: intellicaneImg,
    3: cardiologyBotImg,
    4: transformerImg,
    5: f1RagImg,
    6: raystockImg,
    7: pokedexImg,
    8: speechBotImg,
    9: sosFpgaImg,
    10: racingGameImg,
  };

  const categories = [
    { id: 'all', name: 'All Projects', icon: <Zap className="w-4 h-4" /> },
    { id: 'ml', name: 'ML & AI', icon: <Brain className="w-4 h-4" /> },
    { id: 'web', name: 'Full-Stack', icon: <Globe className="w-4 h-4" /> },
    { id: 'hardware', name: 'Hardware & Games', icon: <Gamepad2 className="w-4 h-4" /> },
  ];

  const projects = [
    {
      id: 1,
      title: "Skin Lesion Classification",
      category: "ml",
      description: "Deep learning model for automated skin lesion diagnosis using ResNet18 architecture.",
      longDescription: "Developed a comprehensive skin lesion classification system using deep learning techniques. The project involved implementing ResNet18 architecture, integrating Grad-CAM for explainable AI, and creating an intuitive Streamlit web application for medical professionals.",
      technologies: ["Python", "PyTorch", "ResNet18", "Grad-CAM", "Streamlit"],
      metrics: ["79% Test Accuracy", "Medical-grade Precision", "Real-time Inference"],
      github: "https://github.com/RayanAhsan",
      demo: "https://streamlit-app.com",
      achievements: [
        "Implemented state-of-the-art ResNet18 architecture",
        "Integrated Grad-CAM for model interpretability", 
        "Achieved 79% accuracy on test dataset",
        "Deployed production-ready Streamlit application"
      ]
    },
    {
      id: 2,
      title: "IntelliCane - AI Smart Cane",
      category: "ml",
      description: "AI-powered smart cane with object detection for visually impaired assistance.",
      longDescription: "Revolutionary assistive technology combining computer vision with embedded systems. Features YOLOv8 object detection, Arduino-based feedback systems, and Raspberry Pi processing for real-time navigation assistance.",
      technologies: ["Python", "YOLOv8", "Arduino", "Raspberry Pi", "Computer Vision"],
      metrics: ["81% Detection Accuracy", "Real-time Processing", "Low Power Consumption"],
      github: "https://github.com/RayanAhsan",
      achievements: [
        "Implemented YOLOv8 for real-time object detection",
        "Achieved 81% object detection accuracy",
        "Integrated Arduino haptic feedback system",
        "Optimized for battery-powered operation"
      ]
    },
    {
      id: 3, 
      title: "Fine-Tuned LLM Cardiology Bot",
      category: "ml",
      description: "Specialized medical chatbot using fine-tuned LLaMA-2-7B model for cardiology consultations.",
      longDescription: "Advanced conversational AI system specifically trained for cardiology consultations. Utilized Parameter-Efficient Fine-Tuning (PEFT) with QLoRA for efficient training, achieving high answer relevancy with reduced inference latency.",
      technologies: ["Python", "LLaMA-2-7B", "PEFT", "QLoRA", "JavaScript", "Medical NLP"],
      metrics: ["0.83 Answer Relevancy", "Reduced Latency", "Medical Accuracy"],
      github: "https://github.com/RayanAhsan",
      demo: "https://cardiology-bot.com",
      achievements: [
        "Fine-tuned LLaMA-2-7B with PEFT and QLoRA",
        "Achieved 0.83 answer relevancy score",
        "Built responsive JavaScript UI interface",
        "Optimized for reduced inference latency"
      ]
    },
    {
      id: 4,
      title: "Transformer Implementation",
      category: "ml", 
      description: "From-scratch implementation of 'Attention Is All You Need' transformer architecture.",
      longDescription: "Complete implementation of the groundbreaking transformer architecture from the seminal paper. Built without using pre-existing transformer libraries to understand the underlying mechanisms of attention and self-attention.",
      technologies: ["Python", "PyTorch", "Transformer", "Attention Mechanism", "NLP"],
      metrics: ["BLEU Score: 25.7", "From Scratch", "Research Grade"],
      github: "https://github.com/RayanAhsan",
      achievements: [
        "Implemented multi-head attention mechanism",
        "Built positional encoding system",
        "Achieved BLEU score of 25.7",
        "Created comprehensive documentation"
      ]
    },
    {
      id: 5,
      title: "RAG Formula 1 Chatbot", 
      category: "ml",
      description: "Retrieval-Augmented Generation chatbot for Formula 1 statistics and information.",
      longDescription: "Sophisticated chatbot combining retrieval and generation for Formula 1 queries. Uses FAISS for efficient similarity search and provides accurate answers about F1 statistics, driver information, and race data.",
      technologies: ["Python", "FAISS", "RAG", "NLP", "Vector Search"],
      metrics: ["73% Exact Match", "82% F1 Score", "Real-time Retrieval"],
      github: "https://github.com/RayanAhsan",
      demo: "https://f1-chatbot.com",
      achievements: [
        "Implemented FAISS vector similarity search",
        "Achieved 73% exact match accuracy",
        "Scored 82% on F1 evaluation metric",
        "Built comprehensive F1 knowledge base"
      ]
    },
    {
      id: 6,
      title: "RayStock - Inventory Dashboard",
      category: "web",
      description: "Full-stack inventory management system with analytics and real-time updates.",
      longDescription: "Comprehensive inventory management solution featuring real-time analytics, dynamic dashboards, and efficient data visualization. Built with modern web technologies for scalability and performance.",
      technologies: ["Next.js", "Tailwind CSS", "PostgreSQL", "Recharts", "TypeScript"],
      metrics: ["Real-time Updates", "Scalable Architecture", "Responsive Design"],
      github: "https://github.com/RayanAhsan",
      demo: "https://raystock.vercel.app",
      achievements: [
        "Built with Next.js and TypeScript",
        "Implemented PostgreSQL database schema",
        "Created interactive Recharts visualizations",
        "Deployed scalable cloud architecture"
      ]
    },
    {
      id: 7,
      title: "Pokedex Application",
      category: "web",
      description: "Interactive Pokemon encyclopedia with authentication and favorites system.",
      longDescription: "Modern Pokemon encyclopedia application featuring comprehensive Pokemon data, user authentication, and personalized favorites system. Built with React and Firebase for real-time data synchronization.",
      technologies: ["React", "TypeScript", "SCSS", "Firebase", "Firestore", "Google Auth"],
      metrics: ["800+ Pokemon", "Real-time Sync", "User Authentication"],
      github: "https://github.com/RayanAhsan",
      demo: "https://pokedex-app.com",
      achievements: [
        "Implemented Google OAuth authentication",
        "Built responsive TypeScript components", 
        "Integrated Firestore real-time database",
        "Created custom SCSS styling system"
      ]
    },
    {
      id: 8,
      title: "Speech Bot - Translation App",
      category: "web",
      description: "Real-time speech transcription and translation application.",
      longDescription: "Advanced speech processing application providing real-time transcription and multi-language translation. Features modern UI design and efficient backend processing for seamless user experience.",
      technologies: ["React", "Tailwind CSS", "Node.js", "Speech Recognition", "Translation API"],
      metrics: ["Real-time Processing", "Multi-language", "High Accuracy"],
      github: "https://github.com/RayanAhsan", 
      demo: "https://speech-bot.com",
      achievements: [
        "Implemented real-time speech recognition",
        "Built multi-language translation system",
        "Created responsive Tailwind UI",
        "Optimized Node.js backend performance"
      ]
    },
    {
      id: 9,
      title: "SOS Game - FPGA Implementation",
      category: "hardware",
      description: "Advanced tic-tac-toe variant implemented on FPGA using Verilog.",
      longDescription: "Hardware implementation of the SOS game (advanced tic-tac-toe) using Verilog HDL on FPGA. Features complex game logic, user interface, and optimized hardware resource utilization.",
      technologies: ["Verilog", "FPGA", "Digital Logic", "Hardware Design"],
      metrics: ["Hardware Optimized", "Real-time Gameplay", "Low Latency"],
      github: "https://github.com/RayanAhsan",
      achievements: [
        "Implemented complex game logic in Verilog",
        "Optimized FPGA resource utilization", 
        "Created responsive hardware interface",
        "Achieved real-time gameplay performance"
      ]
    },
    {
      id: 10,
      title: "Racing Game - Multiplayer C++",
      category: "hardware", 
      description: "Multiplayer racing game with realistic physics simulation built in C++.",
      longDescription: "High-performance multiplayer racing game featuring realistic physics simulation, collision detection, and network multiplayer capabilities. Built from scratch in C++ with custom game engine components.",
      technologies: ["C++", "Game Physics", "Multiplayer", "Graphics Programming"],
      metrics: ["60+ FPS", "Realistic Physics", "Multiplayer Support"],
      github: "https://github.com/RayanAhsan",
      achievements: [
        "Implemented realistic physics simulation",
        "Built custom collision detection system",
        "Created multiplayer networking protocol", 
        "Achieved 60+ FPS performance"
      ]
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Portfolio
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of innovative projects spanning machine learning, 
              full-stack development, and hardware engineering.
            </p>
          </div>
        </ScrollAnimation>

        {/* Category Filter */}
        <ScrollAnimation delay={200}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={`transition-all duration-300 ${
                  selectedCategory === category.id 
                    ? 'btn-hero' 
                    : 'hover:border-primary/50'
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </Button>
            ))}
          </div>
        </ScrollAnimation>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollAnimation key={project.id} delay={300 + index * 100}>
              <Card className="project-card h-full flex flex-col">
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                    <img 
                      src={projectImages[project.id as keyof typeof projectImages]} 
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.currentTarget;
                        const fallback = target.nextElementSibling as HTMLElement;
                        target.style.display = 'none';
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div className="text-center absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20" style={{display: 'none'}}>
                      <div className="text-4xl mb-2">
                        {project.category === 'ml' && '🧠'}
                        {project.category === 'web' && '🌐'}
                        {project.category === 'hardware' && '⚡'}
                      </div>
                      <p className="text-sm text-muted-foreground">Project Preview</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex space-x-2">
                      {project.github && (
                        <Button size="sm" variant="secondary" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button size="sm" variant="secondary" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-primary">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Metrics */}
                  <div className="space-y-1 mb-4">
                    {project.metrics.slice(0, 2).map((metric) => (
                      <div key={metric} className="text-xs text-secondary font-medium">
                        • {metric}
                      </div>
                    ))}
                  </div>

                  {/* View Details Button */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="w-full mt-auto">
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl text-primary">
                          {project.title}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-6">
                        <p className="text-muted-foreground leading-relaxed">
                          {project.longDescription}
                        </p>
                        
                        {/* All Technologies */}
                        <div>
                          <h4 className="font-semibold mb-2">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Key Achievements */}
                        <div>
                          <h4 className="font-semibold mb-2">Key Achievements</h4>
                          <ul className="space-y-1">
                            {project.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground">
                                • {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Links */}
                        <div className="flex space-x-4">
                          {project.github && (
                            <Button asChild>
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-2" />
                                View Code
                              </a>
                            </Button>
                          )}
                          {project.demo && (
                            <Button variant="outline" asChild>
                              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Live Demo
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
