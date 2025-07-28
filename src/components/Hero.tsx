import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Linkedin, Github } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient">
      <div className="container mx-auto section-padding text-center">
        <div className="max-w-4xl mx-auto fade-in">
          <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-relaxed">
  <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent pb-2 inline-block">
    AI Product Manager
  </span>
</h1>
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Building impactful products that solve real problems. 
            Exploring the intersection of user needs, business goals, and technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="btn-primary-gradient px-8 py-6 text-lg"
              onClick={() => scrollToSection('professional-products')}
            >
              Professional Products
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 text-lg"
              onClick={() => scrollToSection('ai-experiments')}
            >
              AI Experiments
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 text-lg"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
<br></br><br></br>

          <button 
            onClick={() => scrollToSection('professional-products')}
            className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;