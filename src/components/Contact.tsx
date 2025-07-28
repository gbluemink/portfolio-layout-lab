import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, Calendar, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Interested in collaborating or discussing product opportunities? 
            I'd love to hear from you.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <Card className="portfolio-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a 
                        href="mailto:ge.bluemink@gmail.com" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        ge.bluemink@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Linkedin size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <a 
                        href="https://linkedin.com/in/gbluemink" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        /in/gbluemink
                      </a>
                    </div>
                  </div>
                  
                  
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">United States</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Quick Actions */}
            <Card className="portfolio-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Quick Actions</h3>
                <div className="space-y-4">
                  <Button 
                    className="w-full justify-start btn-primary-gradient"
                    asChild
                  >
                    <a href="mailto:ge.bluemink@gmail.com">
                      <Mail size={18} className="mr-3" />
                      Send me an email
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    asChild
                  >
                    <a href="https://calendly.com/gbluemink" target="_blank" rel="noopener noreferrer">
                      <Calendar size={18} className="mr-3" />
                      Schedule a call
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/gbluemink/" target="_blank" rel="noopener noreferrer">
                      <Linkedin size={18} className="mr-3" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                  
                  
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Footer */}
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2025 Product Manager Portfolio
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;