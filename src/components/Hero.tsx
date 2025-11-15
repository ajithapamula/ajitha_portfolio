import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                ● AVAILABLE FOR WORK
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="text-gradient">Ajitha Pamula</span>
            </h1>
            
            <p className="text-xl text-muted-foreground">
              AI/ML Engineer
            </p>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Specializing in LLMs, Generative AI, RAG Pipelines, Agentic AI, and 
              enterprise-grade automation systems.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="hover-glow">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
              <Button size="lg" variant="secondary">
                <Download className="mr-2 h-5 w-5" />
                Resume
              </Button>
            </div>
            
            <div className="flex gap-4 pt-4">
              <a
                href="https://linkedin.com/in/ajithapamula"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/ajithapamula"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="mailto:pamulaajitha04@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-float"></div>
              <img
                src={profileImage}
                alt="Ajitha Pamula"
                className="relative rounded-2xl w-80 h-80 object-cover border-2 border-primary/20 hover-glow transition-all"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
