import { Code2, Brain, Eye, Database, Cloud, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming",
      skills: ["Python", "SQL"],
    },
    {
      icon: Brain,
      title: "ML & Deep Learning",
      skills: [
        "Supervised Learning",
        "Unsupervised Learning",
        "TensorFlow",
        "PyTorch",
        "Keras",
        "CNNs",
        "RNNs",
      ],
    },
    {
      icon: Brain,
      title: "Generative AI & LLMs",
      skills: [
        "OpenAI API",
        "HuggingFace",
        "Prompt Engineering",
        "RAG Pipelines",
        "Llama",
        "Ollama",
        "LangChain",
        "CrewAI",
        "LangGraph",
      ],
    },
    {
      icon: Eye,
      title: "Computer Vision",
      skills: ["OpenCV", "YOLO", "Object Detection", "Image Classification"],
    },
    {
      icon: Database,
      title: "Data & Databases",
      skills: [
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Power BI",
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "ChromaDB",
        "Pinecone",
        "Weaviate",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["AWS (EC2, S3)", "Azure", "Docker", "Linux", "GitHub Actions", "CI/CD"],
    },
    {
      icon: Globe,
      title: "Web & APIs",
      skills: ["FastAPI", "Flask", "Django", "REST APIs", "WebSockets"],
    },
    {
      icon: Brain,
      title: "Agentic AI",
      skills: ["Multi-Agent Orchestration", "MCP", "n8n", "LangFlow"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Skills & <span className="text-gradient">Expertise</span>
        </h2>
        <div className="h-1 w-20 bg-primary mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl hover-glow transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-secondary px-3 py-1 rounded-full text-sm text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
