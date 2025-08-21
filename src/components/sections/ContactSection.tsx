import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import ScrollAnimation from '../ScrollAnimation';
import { Mail, Phone, Linkedin, Github, Send, MapPin } from 'lucide-react';
import emailjs from 'emailjs-com'; // Import EmailJS

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('fS5_UdmascpU3a5F7'); // Replace with your actual public key
  }, []);

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "Rayan.ahsan28@gmail.com",
      href: "mailto:Rayan.ahsan28@gmail.com",
      color: "text-primary"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone", 
      value: "905-462-2436",
      href: "tel:905-462-2436",
      color: "text-secondary"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/rayan-ahsan-60023928b/",
      color: "text-accent"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "View my code",
      href: "https://github.com/RayanAhsan",
      color: "text-primary"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        'service_2be3yh6',    // Replace with your service ID
        'template_xo9awhl',   // Replace with your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'rayan.ahsan28@gmail.com' // Your email where you want to receive messages
        },
        'fS5_UdmascpU3a5F7'     // Replace with your public key (optional, since initialized above)
      );

      console.log('EmailJS Result:', result);
      
      // Show success toast
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      
      // Show error toast
      toast({
        title: "Failed to send message",
        description: "Something went wrong. Please try again or email me directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to discuss opportunities, collaborate on projects, or just say hello? 
              I'd love to hear from you!
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <ScrollAnimation delay={200}>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-primary">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm always open to discussing new opportunities, innovative projects, 
                  and meaningful collaborations. Whether you're looking for a dedicated 
                  developer, want to explore AI solutions, or just want to chat about 
                  technology, feel free to reach out!
                </p>
              </div>
            </ScrollAnimation>

            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <ScrollAnimation key={contact.label} delay={300 + index * 100}>
                  <Card className="project-card hover:border-primary/30">
                    <CardContent className="p-6">
                      <a 
                        href={contact.href}
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center space-x-4 group"
                      >
                        <div className={`p-3 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 ${contact.color} group-hover:scale-110 transition-transform duration-300`}>
                          {contact.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg">{contact.label}</h4>
                          <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                            {contact.value}
                          </p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>

            <ScrollAnimation delay={700}>
              <Card className="project-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-accent/20 to-primary/20 text-accent">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Location</h4>
                      <p className="text-muted-foreground">
                        Toronto, Ontario, Canada<br />
                        <span className="text-sm">Available for remote and on-site opportunities</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>

          {/* Contact Form */}
          <ScrollAnimation delay={400}>
            <Card className="project-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-secondary">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="transition-all duration-300 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="transition-all duration-300 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="transition-all duration-300 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, opportunity, or just say hello!"
                      className="transition-all duration-300 focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="btn-hero w-full text-lg py-6"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    Prefer a direct approach?{' '}
                    <a 
                      href="mailto:rayan.ahsan28@gmail.com" 
                      className="text-primary hover:text-secondary transition-colors duration-300 font-medium"
                    >
                      Email me directly
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>

        {/* Call to Action */}
        <ScrollAnimation delay={800}>
          <div className="text-center mt-16">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-muted-foreground mb-8">
                Let's collaborate and create innovative solutions that make a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="btn-hero px-8 py-6"
                  asChild
                >
                  <a href="mailto:Rayan.ahsan28@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Start a Conversation
                  </a>
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="btn-secondary px-8 py-6"
                  asChild
                >
                  <a 
                    href="https://www.linkedin.com/in/rayan-ahsan-60023928b/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ContactSection;