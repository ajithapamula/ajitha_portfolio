import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Cpu, BrainCircuit, Download } from "lucide-react";
import CodeRain from "./CodeRain";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 circuit-pattern" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-purple" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl" />
      
      <CodeRain />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">Available for Work</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="text-foreground">Hi, I'm </span>
              <span className="text-gradient glow-text">Ajitha</span>
              <br />
              <span className="text-gradient-purple">Pamula</span>
            </h1>

            {/* Role */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <BrainCircuit className="w-6 h-6 text-primary" />
              <span className="text-xl md:text-2xl text-foreground font-semibold">
                AI/ML Engineer
              </span>
            </div>

            {/* Subtitle with expertise */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-6">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                LLMs
              </span>
              <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
                Generative AI
              </span>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                RAG Pipelines
              </span>
              <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
                Agentic AI
              </span>
            </div>

            {/* Description */}
            <p className="text-muted-foreground/80 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Specializing in <span className="text-primary">LLMs</span>, <span className="text-accent">Generative AI</span>, 
              RAG Pipelines, and enterprise-grade automation systems. Building scalable, cloud-ready AI solutions 
              using LangChain, CrewAI, LangGraph, AWS, and Docker.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button variant="hero" size="xl" asChild>
                <a href="#contact">
                  <Mail className="w-5 h-5" />
                  Contact Me
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="https://ajithapamula.github.io/Ajitha_Pamula.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5" />
                  Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <a 
                href="https://linkedin.com/in/ajithapamula" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-card hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://github.com/ajithapamula" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-card hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </a>
              <a 
                href="mailto:pamulaajitha04@gmail.com" 
                className="p-3 rounded-full glass-card hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl blur-2xl scale-110" />
              
              {/* Profile Image Container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-2 border-primary/30 glass-card animate-float">
                <img 
                  src={profileImage} 
                  alt="Ajitha Pamula - AI/ML Engineer"
                  className="w-full h-full object-cover"
                />
                
                {/* AI Badge overlay */}
                <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-primary/30">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-xs font-medium text-primary">AI</span>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center backdrop-blur-sm border border-primary/30 animate-bounce">
                <Cpu className="w-4 h-4 text-primary" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center backdrop-blur-sm border border-accent/30 animate-bounce" style={{ animationDelay: '0.5s' }}>
                <BrainCircuit className="w-4 h-4 text-accent" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-16">
          <div className="text-center glass-card p-4 rounded-xl">
            <div className="text-2xl md:text-3xl font-bold text-gradient">4+</div>
            <div className="text-sm text-muted-foreground">AI Projects</div>
          </div>
          <div className="text-center glass-card p-4 rounded-xl">
            <div className="text-2xl md:text-3xl font-bold text-gradient-purple">99%</div>
            <div className="text-sm text-muted-foreground">Model Accuracy</div>
          </div>
          <div className="text-center glass-card p-4 rounded-xl">
            <div className="text-2xl md:text-3xl font-bold text-gradient">70%</div>
            <div className="text-sm text-muted-foreground">Effort Reduced</div>
          </div>
          <div className="text-center glass-card p-4 rounded-xl">
            <div className="text-2xl md:text-3xl font-bold text-gradient-purple">Cloud</div>
            <div className="text-sm text-muted-foreground">AWS & Azure</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary/60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
