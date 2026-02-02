import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  BrainCircuit,
  Download,
} from "lucide-react";
import CodeRain from "./CodeRain";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 circuit-pattern" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <CodeRain />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">
                Available for Work
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span>Hi, I'm </span>
              <span className="text-gradient">Ajitha</span>
              <br />
              <span className="text-gradient-purple">Pamula</span>
            </h1>

            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <BrainCircuit className="w-6 h-6 text-primary" />
              <span className="text-xl md:text-2xl font-semibold">
                AI / ML Engineer
              </span>
            </div>

            <p className="text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
              Building intelligent systems using LLMs, Generative AI, RAG
              pipelines, and scalable cloud-ready architectures with LangChain,
              AWS, and Docker.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button variant="hero" size="xl" asChild>
                <a href="mailto:pamulaajitha04@gmail.com">
                  <Mail className="w-5 h-5" />
                  Contact Me
                </a>
              </Button>

              {/* ✅ WORKING RESUME BUTTON */}
              <Button variant="outline" size="xl" asChild>
                <a
                  href={`${import.meta.env.BASE_URL}Ajitha_Pamula.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-5 h-5" />
                  Resume
                </a>
              </Button>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://linkedin.com/in/ajithapamula"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-card"
              >
                <Linkedin />
              </a>
              <a
                href="https://github.com/ajithapamula"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-card"
              >
                <Github />
              </a>
              <a
                href="mailto:pamulaajitha04@gmail.com"
                className="p-3 rounded-full glass-card"
              >
                <Mail />
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden glass-card">
              <img
                src={profileImage}
                alt="Ajitha Pamula"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/80">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-xs font-medium">AI</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary/60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
