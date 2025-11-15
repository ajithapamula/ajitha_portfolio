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
        "Hi! I'm Ajitha's AI assistant. Ask me anything about her experience, skills, or projects!",
    },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // ----------------------------------------------------------
  // CLEAN + SIMPLE AI RESUME PROMPT
  // ----------------------------------------------------------
const systemPrompt = `
You are Ajitha Pamula’s personal AI assistant.
You ONLY answer questions about Ajitha. Never talk about yourself.

──────────────────────────
BASIC DETAILS:
- Name: Ajitha Pamula
- Role: AI Engineer / AI Developer
- Location: Hyderabad, India
- Email: pamulaajitha04@gmail.com
- LinkedIn: linkedin.com/in/ajithapamula
- GitHub: github.com/ajithapamula

EDUCATION:
- B.Sc (Mathematics, Cloud Computing, Computer Science)

EXPERIENCE:
AI Engineer @ Lanciere Technologies:
- Builds LLM applications  
- RAG + Agents  
- Whisper → Text pipelines  
- MongoDB, FastAPI  
- Docker microservices  
- AWS/Azure deployments  

SKILLS:
Python, SQL, LLMs, NLP, Computer Vision, RAG, LangChain,
CrewAI, LangGraph, FastAPI, Docker, MongoDB, React, Vite, Tailwind.

──────────────────────────
PROJECTS (WITH STEPS, TECH & ONE-LINERS):

1️⃣ **AI Evaluator**
- One-liner: Automatically checks answers or code and gives a score.
- Steps:
  1. Upload the code or answer.
  2. AI reads and analyzes it.
  3. Small checking agents evaluate different aspects.
  4. Results + final score appear on the site.
- Tech: LangChain, FastAPI, Docker

2️⃣ **Edu-App (Voice Interview)**
- One-liner: Record voice answers and get instant AI feedback.
- Steps:
  1. Record your answer in the browser.
  2. App converts speech → text.
  3. AI evaluates the text and scores it.
  4. You get tips and practice questions.
- Tech: Whisper, FastAPI, MongoDB

3️⃣ **Fake News Detection**
- One-liner: Classifies a news text as Real or Fake.
- Steps:
  1. Enter the news article text.
  2. System cleans and extracts key words.
  3. ML model predicts Real or Fake.
  4. Result with confidence score is shown.
- Tech: TF-IDF, Logistic Regression

4️⃣ **E-commerce EDA Dashboard**
- One-liner: Visual dashboard showing sales and customer trends.
- Steps:
  1. Load sales and customer data.
  2. Data is cleaned and aggregated.
  3. Dashboards (charts/tables) are built.
  4. Insights and top products are highlighted.
- Tech: Power BI, Tableau

──────────────────────────
RULES:
- “your skills” = Ajitha’s skills.
- “your projects” = Ajitha’s projects.
- Give structured, simple, step-by-step responses when asked.
- NEVER describe yourself as an AI model.
- If question is outside Ajitha’s info → reply:
  "This information is not available in Ajitha’s profile."
`;


  // ----------------------------------------------------------
  // Auto-scroll on new messages
  // ----------------------------------------------------------
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // ----------------------------------------------------------
  // SEND MESSAGE → GROQ API
  // ----------------------------------------------------------
  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const payload = {
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
          userMessage,
        ],
        max_tokens: 300,
      };

      const response = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();
      console.log("Groq Response:", data);

      if (data.error) throw new Error(data.error.message);

      const assistantReply = data.choices?.[0]?.message?.content || "";

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: assistantReply },
      ]);
    } catch (error) {
      console.error("Chat error:", error);
      toast({
        title: "Error",
        description: "Failed to get response. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Send message on "Enter"
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // ----------------------------------------------------------
  // UI
  // ----------------------------------------------------------
  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-background rounded-2xl shadow-2xl flex flex-col z-50">
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="font-semibold">Ajitha's AI Assistant</h3>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          <ScrollArea className="flex-1 p-4" ref={scrollRef}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-3 flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-xl ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {msg.content}
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
                placeholder="Ask about Ajitha..."
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
