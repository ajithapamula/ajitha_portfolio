import { Button } from "@/components/ui/button";
import {
  Mail,
  MapPin,
  Send,
  BrainCircuit,
  Sparkles,
  Linkedin,
  Github,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    const subject = `New Contact from Portfolio (${formData.projectType || "General"})`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Project Type: ${formData.projectType || "Not specified"}

Message:
${formData.message}
    `;

    window.location.href = `mailto:pamulaajitha04@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    toast.success("Opening email client...");
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="absolute inset-0 neural-grid opacity-30" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <BrainCircuit className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Get In Touch</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Let's Build </span>
            <span className="text-gradient-purple">AI Together</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to transform your ideas into intelligent systems? Let's talk.
          </p>
        </div>

        <div className="glass-card p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Info */}
            <div className="space-y-6">
              <a
                href="mailto:pamulaajitha04@gmail.com"
                className="flex items-center gap-4 p-3 rounded-lg bg-secondary/30"
              >
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-foreground">pamulaajitha04@gmail.com</span>
              </a>

              <div className="flex items-center gap-4 p-3 rounded-lg bg-secondary/30">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-foreground">Hyderabad, India</span>
              </div>

              <a
                href="https://linkedin.com/in/ajithapamula"
                target="_blank"
                className="flex items-center gap-4 p-3 rounded-lg bg-secondary/30"
              >
                <Linkedin className="w-5 h-5 text-primary" />
                <span className="text-foreground">LinkedIn</span>
              </a>

              <a
                href="https://github.com/ajithapamula"
                target="_blank"
                className="flex items-center gap-4 p-3 rounded-lg bg-secondary/30"
              >
                <Github className="w-5 h-5 text-accent" />
                <span className="text-foreground">GitHub</span>
              </a>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10">
                <Sparkles className="w-5 h-5 text-accent" />
                <div>
                  <p className="font-medium">Available for Work</p>
                  <p className="text-xs text-muted-foreground">
                    Open to AI/ML projects & collaborations
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                placeholder="Name *"
                className="w-full px-4 py-3 rounded-lg bg-secondary/50"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />

              <input
                placeholder="Email *"
                className="w-full px-4 py-3 rounded-lg bg-secondary/50"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />

              <select
                className="w-full px-4 py-3 rounded-lg bg-secondary/50"
                value={formData.projectType}
                onChange={(e) =>
                  setFormData({ ...formData, projectType: e.target.value })
                }
              >
                <option value="">Project Type</option>
                <option>LLM / Generative AI</option>
                <option>RAG Pipelines</option>
                <option>Agentic AI</option>
                <option>Computer Vision</option>
                <option>ML Models</option>
              </select>

              <textarea
                rows={4}
                placeholder="Your message *"
                className="w-full px-4 py-3 rounded-lg bg-secondary/50"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />

              <Button type="submit" variant="hero" className="w-full">
                <Send className="w-5 h-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
