import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Bot, Mic, Video, FileSearch, BrainCircuit } from "lucide-react";
import projectAiEvaluator from "@/assets/project-ai-evaluator.jpg";
import projectEduApp from "@/assets/project-edu-app.jpg";
import projectVideoTranscription from "@/assets/project-video-transcription.jpg";
import projectFakeNews from "@/assets/project-fake-news.jpg";

const projects = [
  {
    title: "AI Evaluator – Multi-Agent Code Review System",
    description: "A multi-agent autonomous system that performs code review, scoring, and feedback generation. Automated scoring with 70% reduction in manual effort.",
    highlights: [
      "Created pipelines for Code, Pitch, Design, and Aggregation agents",
      "Integrated real-time GitHub analysis using MCP servers",
      "Deployed scalable microservices on AWS using Docker",
    ],
    tags: ["Python", "FastAPI", "LangChain", "LangGraph", "MCP", "GitHub API", "Docker", "AWS"],
    icon: Bot,
    image: projectAiEvaluator,
    github: "https://github.com/ajithapamula/ai_evaluator",
    color: "primary",
  },
  {
    title: "Edu-App – AI-Powered Voice Interview Platform",
    description: "Voice-first interactive learning system using STT → LLM → TTS workflow for mock test automation including MCQs, coding, and pseudocode.",
    highlights: [
      "Built mock test automation with voice interaction",
      "Engineered robust database pipelines",
      "Deployed cloud-ready, containerized services",
    ],
    tags: ["Python", "Whisper STT", "GPT", "FastAPI", "MongoDB", "PostgreSQL", "Docker", "AWS", "Azure"],
    icon: Mic,
    image: projectEduApp,
    github: "https://github.com/ajithapamula/Edu-App",
    color: "accent",
  },
  {
    title: "AI Video Transcription & Summarization",
    description: "Processes raw audio/video, generates accurate transcripts and AI-powered summaries using Whisper and LLM integration.",
    highlights: [
      "Built automated transcription workloads",
      "Integrated Whisper + LLM for accurate results",
      "Optimized for accuracy and performance",
    ],
    tags: ["Whisper STT", "LLM Summarization", "Python", "FastAPI"],
    icon: Video,
    image: projectVideoTranscription,
    github: "https://github.com/ajithapamula/ai-video-transcription-summarization",
    color: "primary",
  },
  {
    title: "Fake News Detection – NLP & ML Pipeline",
    description: "ML-based misinformation detection pipeline achieving 99% accuracy using advanced NLP techniques and multiple ML model evaluation.",
    highlights: [
      "Developed full NLP preprocessing workflow",
      "Evaluated multiple ML models for best accuracy",
      "Created deployable production pipeline",
    ],
    tags: ["Python", "scikit-learn", "Pandas", "NumPy", "NLP"],
    icon: FileSearch,
    image: projectFakeNews,
    github: "https://github.com/ajithapamula/Fake-news-detection",
    color: "accent",
  },
];

const Projects = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 circuit-pattern opacity-30" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <BrainCircuit className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">Featured Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-purple">AI </span>
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-world AI solutions showcasing expertise in LLMs, multi-agent systems, and intelligent automation
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group glass-card glow-box overflow-hidden transition-all duration-500 hover:scale-[1.02] ${
                project.color === "accent" 
                  ? "hover:shadow-[0_0_40px_hsl(270_91%_65%_/_0.3)]" 
                  : "hover:shadow-[0_0_40px_hsl(189_94%_55%_/_0.3)]"
              }`}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                
                {/* Icon Badge */}
                <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm ${
                  project.color === "accent" ? "bg-accent/20 border border-accent/30" : "bg-primary/20 border border-primary/30"
                }`}>
                  <project.icon className={`w-6 h-6 ${
                    project.color === "accent" ? "text-accent" : "text-primary"
                  }`} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-lg font-bold text-foreground leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className={`w-1.5 h-1.5 rounded-full mt-1.5 ${
                        project.color === "accent" ? "bg-accent" : "bg-primary"
                      }`} />
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-1 text-xs font-medium rounded-md border ${
                        project.color === "accent"
                          ? "bg-accent/5 text-accent/80 border-accent/20"
                          : "bg-primary/5 text-primary/80 border-primary/20"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    variant={project.color === "accent" ? "glow" : "hero"} 
                    size="sm" 
                    className="flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      View on GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/ajithapamula" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
