import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import aiEvaluatorImg from "@/assets/project-ai-evaluator.jpg";
import eduAppImg from "@/assets/project-edu-app.jpg";
import videoTranscriptionImg from "@/assets/project-video-transcription.jpg";
import fakeNewsImg from "@/assets/project-fake-news.jpg";

const Projects = () => {
  const projects = [
    {
      title: "AI Evaluator – Multi-Agent Code Review System",
      tech: "Python, FastAPI, LangChain, LangGraph, MCP, GitHub API, Docker, AWS",
      description:
        "A multi-agent autonomous system that performs code review, scoring, and feedback generation.",
      highlights: [
        "Automated scoring with 70% reduction in manual effort",
        "Created pipelines for Code, Pitch, Design, and Aggregation agents",
        "Integrated real-time GitHub analysis using MCP servers",
        "Deployed scalable microservices on AWS using Docker",
      ],
      image: aiEvaluatorImg,
      github: "https://github.com/ajithapamula/ai_evaluator",
    },
    {
      title: "Edu-App – AI-Powered Voice Interview & Learning Platform",
      tech: "Python, Whisper STT, GPT, FastAPI, MongoDB, PostgreSQL, Docker, AWS, Azure",
      description: "Voice-first interactive learning system using STT → LLM → TTS workflow.",
      highlights: [
        "Built mock test automation (MCQs, coding, pseudocode)",
        "Engineered strong database pipelines",
        "Deployed cloud-ready, containerized services",
      ],
      image: eduAppImg,
      github: "https://github.com/ajithapamula/Edu-App",
    },
    {
      title: "AI Video Transcription & Summarization",
      tech: "Whisper STT, LLM Summarization, Python",
      description: "Processes raw audio/video, generates transcripts and summaries.",
      highlights: [
        "Built automated workloads",
        "Integrated Whisper + LLM for accurate transcription",
        "Optimized for accuracy and performance",
      ],
      image: videoTranscriptionImg,
      github: "https://github.com/ajithapamula/ai-video-transcription-summarization",
    },
    {
      title: "Fake News Detection – NLP & Machine Learning Pipeline",
      tech: "Python, scikit-learn, Pandas, NumPy",
      description: "ML-based misinformation detection pipeline achieving 99% accuracy.",
      highlights: [
        "Developed full NLP workflow",
        "Evaluated multiple ML models",
        "Created deployable production pipeline",
      ],
      image: fakeNewsImg,
      github: "https://github.com/ajithapamula/Fake-news-detection",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <div className="h-1 w-20 bg-primary mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl hover-glow transition-all animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 mb-4 -mx-6 -mt-6 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold pr-4">{project.title}</h3>
                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
              </div>

              <p className="text-xs text-primary mb-3 font-mono">{project.tech}</p>

              <p className="text-muted-foreground mb-4">{project.description}</p>

              <div className="space-y-2">
                <p className="text-sm font-semibold">Key Contributions:</p>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {project.github !== "#" && (
                <Button variant="secondary" size="sm" className="mt-4 w-full" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
