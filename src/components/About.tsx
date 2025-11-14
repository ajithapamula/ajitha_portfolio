import { GraduationCap, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="h-1 w-20 bg-primary mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-8 rounded-2xl hover-glow transition-all">
            <h3 className="text-2xl font-bold mb-4">Bio</h3>
            <p className="text-muted-foreground leading-relaxed">
              AI/ML Engineer with expertise in LLMs, Generative AI, Agentic AI, RAG pipelines, 
              and Multi-Agent Systems. Skilled in NLP, Computer Vision, and Deep Learning, 
              delivering scalable, cloud-ready AI solutions using LangChain, CrewAI, LangGraph, 
              AWS, Azure, and Docker. Proven track record in building enterprise-grade automation 
              and adaptive learning platforms.
            </p>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-8 rounded-2xl hover-glow transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Education</h3>
                  <p className="text-foreground font-medium">
                    B.Sc in Mathematics, Cloud Computing & Computer Science
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Government College for Women, Guntur
                  </p>
                  <p className="text-muted-foreground text-sm">2024 • Score: 75%</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl hover-glow transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Location</h3>
                  <p className="text-foreground">Hyderabad, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
