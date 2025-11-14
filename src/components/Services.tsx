import { Sparkles, Brain, Globe, Database, Bot, Cloud } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: "AI & ML Model Development",
      description: "Custom machine learning solutions tailored to your business needs",
    },
    {
      icon: Brain,
      title: "LLM Fine-Tuning & Optimization",
      description: "Optimize large language models for specific use cases and domains",
    },
    {
      icon: Globe,
      title: "Web Application Development",
      description: "Full-stack web applications with modern frameworks and best practices",
    },
    {
      icon: Database,
      title: "RAG Pipeline Development",
      description: "Retrieval-Augmented Generation systems for intelligent document processing",
    },
    {
      icon: Bot,
      title: "Agentic AI Systems",
      description: "Multi-agent systems using LangChain, CrewAI, and LangGraph",
    },
    {
      icon: Cloud,
      title: "Cloud Deployment",
      description: "Scalable deployment of AI systems on AWS and Azure infrastructure",
    },
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Services I <span className="text-gradient">Offer</span>
        </h2>
        <div className="h-1 w-20 bg-primary mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl hover-glow transition-all group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 p-4 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
