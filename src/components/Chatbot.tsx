import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! 👋 I'm Ajitha’s AI Assistant. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // ----------------------------------------------------------
  // AJITHA’S AI ENGINEER RESUME (CLEAN VERSION)
  // ----------------------------------------------------------
  const RESUME_DATA = `
NAME: Ajitha Pamula
ROLE: AI Engineer / Agentic AI Developer
LOCATION: Hyderabad, India
EMAIL: pamulaajitha04@gmail.com

────────────────────────────
SUMMARY
AI Engineer specializing in:
• Large Language Models (LLMs)
• Agentic AI (LangChain, CrewAI, LangGraph)
• RAG pipelines & vector DBs
• Multi-agent automation systems
• Whisper → LLM voice pipelines
• FastAPI microservices
• Docker deployments
• AWS & Azure cloud
• Machine Learning, NLP, Computer Vision

────────────────────────────
SKILLS
Python, SQL,
Machine Learning (Classification, Regression),
Deep Learning (Neural Networks),
TensorFlow, PyTorch,
NLP, Computer Vision,
LangChain, CrewAI, LangGraph, MCP,
RAG: ChromaDB, Pinecone, FAISS,
FastAPI, Docker, Linux,
MongoDB, PostgreSQL,
AWS, Azure

────────────────────────────
EXPERIENCE
AI Engineer — Lanciere Technologies (2025–Present)
• Built multi-agent AI systems for automation
• RAG pipelines with vector DBs
• Whisper STT → LLM conversational systems
• FastAPI microservices deployed via Docker
• Cloud deployments on AWS & Azure
• Developed LLM-based evaluation systems

────────────────────────────
PROJECTS

1. AI Evaluator — Multi-Agent Code Review
• Code Agent, Design Agent, Aggregator
• Tech: LangChain, LangGraph, FastAPI, Docker, AWS

2. Edu-App — AI Voice Interview Platform
• Whisper → Text → LLM evaluation
• MCQs, theory answers, pseudocode scoring
• MongoDB + PostgreSQL pipelines
• Cloud-ready Docker microservices

3. Fake News Detection — ML Pipeline
• TF-IDF + Logistic Regression / SVM
• 99% accuracy on benchmark data

────────────────────────────
EDUCATION
B.Sc (Maths, Cloud Computing, Computer Science)
Government Women's College, Guntur
  `;

  // ----------------------------------------------------------
  // Helper: Extract section by keyword
  // ----------------------------------------------------------
  const extractSection = (keyword: string) => {
    const lower = keyword.toLowerCase();

    if (lower.includes("skill"))
      return RESUME_DATA.match(/SKILLS([\s\S]*?)────────────────────────────/)?.[1] || "No skills found.";

    if (lower.includes("project"))
      return RESUME_DATA.match(/PROJECTS([\s\S]*?)────────────────────────────/)?.[1] || "No projects found.";

    if (lower.includes("experience"))
      return RESUME_DATA.match(/EXPERIENCE([\s\S]*?)────────────────────────────/)?.[1] || "No experience found.";

    if (lower.includes("education"))
      return RESUME_DATA.match(/EDUCATION([\s\S]*)/)?.[1] || "No education found.";

    if (lower.includes("summary") || lower.includes("about"))
      return RESUME_DATA.match(/SUMMARY([\s\S]*?)────────────────────────────/)?.[1] || "No summary found.";

    return "This information is not available in Ajitha’s profile.";
  };

  // ----------------------------------------------------------
  // SMART GREETING ENGINE
  // ----------------------------------------------------------
  const offlineAnswer = (question: string) => {
    const q = question.toLowerCase().trim();

    // Basic greetings
    const greetingWords = ["hi", "hello", "hey", "hii", "hai", "hlo", "yo", "sup", "what's up", "whats up"];

    if (greetingWords.includes(q)) {
      return "Hello! 👋 How can I support you today?";
    }

    // Time-based greetings
    if (q.includes("good morning")) {
      return "Good morning! ☀️ How can I assist you today?";
    }

    if (q.includes("good afternoon")) {
      return "Good afternoon! 😊 What can I help you with?";
    }

    if (q.includes("good evening")) {
      return "Good evening! 🌙 How can I support you?";
    }

    if (q.includes("good night")) {
      return "Good night! 🌙 Take care. Let me know if you need anything before you sleep.";
    }

    // Conversation
    if (q.includes("how are you")) {
      return "I'm doing great! 😊 Thanks for asking. How can I help you today?";
    }

    // Resume-related questions
    return extractSection(question);
  };

  // ----------------------------------------------------------
  // SEND MESSAGE
  // ----------------------------------------------------------
  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);

    setInput("");
    setIsLoading(true);

    try {
      const reply = offlineAnswer(input);

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: reply },
      ]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Auto scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // ----------------------------------------------------------
  // UI (unchanged)
  // ----------------------------------------------------------
  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-xl z-50"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] rounded-2xl shadow-2xl bg-background flex flex-col z-50">
          <div className="p-4 border-b flex justify-between items-center">
            <h3 className="font-semibold">Ajitha’s AI Assistant</h3>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          <ScrollArea className="flex-1 p-4" ref={scrollRef}>
            {messages.map((m, i) => (
              <div key={i} className={`mb-3 flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`px-4 py-2 rounded-xl ${
                    m.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
          </ScrollArea>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask something about Ajitha…"
                disabled={isLoading}
              />
              <Button onClick={sendMessage} disabled={!input.trim() || isLoading} size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
