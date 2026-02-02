import { Brain, Code, Database, Cpu, Cloud, Bot, Workflow, Eye, Sparkles, Globe } from "lucide-react";

const skills = [
  {
    icon: Sparkles,
    title: "Generative AI & LLMs",
    description: "Fine-tuning, RAG pipelines, and prompt engineering",
    tools: ["OpenAI API", "HuggingFace", "Llama", "Ollama", "LangChain"],
    color: "accent",
  },
  {
    icon: Bot,
    title: "Agentic AI Systems",
    description: "Multi-agent orchestration with autonomous reasoning",
    tools: ["CrewAI", "LangGraph", "MCP", "n8n", "LangFlow"],
    color: "primary",
  },
  {
    icon: Brain,
    title: "ML & Deep Learning",
    description: "Neural networks, CNNs, RNNs, and supervised/unsupervised learning",
    tools: ["TensorFlow", "PyTorch", "Keras", "scikit-learn"],
    color: "accent",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Object detection, image classification, and visual AI",
    tools: ["OpenCV", "YOLO", "Image Classification", "Object Detection"],
    color: "primary",
  },
  {
    icon: Database,
    title: "Vector Databases",
    description: "Semantic search and embedding storage for RAG",
    tools: ["ChromaDB", "Pinecone", "Weaviate", "PostgreSQL", "MongoDB"],
    color: "accent",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Scalable deployment on cloud infrastructure",
    tools: ["AWS (EC2, S3)", "Azure", "Docker", "GitHub Actions", "CI/CD"],
    color: "primary",
  },
  {
    icon: Globe,
    title: "Web & APIs",
    description: "Full-stack development with modern frameworks",
    tools: ["FastAPI", "Flask", "Django", "REST APIs", "WebSockets"],
    color: "accent",
  },
  {
    icon: Code,
    title: "Programming & Data",
    description: "Core programming and data analysis skills",
    tools: ["Python", "SQL", "Pandas", "NumPy", "Power BI"],
    color: "primary",
  },
];

const Skills = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 neural-grid opacity-50" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Cpu className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Technical Arsenal</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Skills & </span>
            <span className="text-gradient-purple">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            State-of-the-art tools and frameworks for building intelligent, scalable AI systems
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className={`group glass-card p-6 glow-border transition-all duration-500 hover:bg-card/80 ${
                skill.color === "accent" ? "hover:shadow-[0_0_30px_hsl(270_91%_65%_/_0.2)]" : "hover:shadow-[0_0_30px_hsl(189_94%_55%_/_0.2)]"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors ${
                skill.color === "accent" 
                  ? "bg-accent/10 group-hover:bg-accent/20" 
                  : "bg-primary/10 group-hover:bg-primary/20"
              }`}>
                <skill.icon className={`w-6 h-6 ${skill.color === "accent" ? "text-accent" : "text-primary"}`} />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {skill.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {skill.description}
              </p>

              {/* Tools */}
              <div className="flex flex-wrap gap-1.5">
                {skill.tools.map((tool) => (
                  <span
                    key={tool}
                    className={`px-2 py-0.5 text-xs font-medium rounded-full border ${
                      skill.color === "accent"
                        ? "bg-accent/5 text-accent border-accent/20"
                        : "bg-primary/5 text-primary border-primary/20"
                    }`}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
