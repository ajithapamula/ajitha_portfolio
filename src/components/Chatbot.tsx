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
        "Hi! I'm Ajitha's AI assistant. Ask me anything about her skills, projects, or experience!",
    },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // ----------------------------------------------------------
  // FULL RESUME DETAILS (SAFE – NO API KEYS)
  // ----------------------------------------------------------
  const RESUME_DATA = `
🔹 **Name:** Ajitha Pamula
🔹 **Role:** AI Engineer / AI Developer
🔹 **Location:** Hyderabad, India  
🔹 **Email:** pamulaajitha04@gmail.com  
🔹 **LinkedIn:** linkedin.com/in/ajithapamula  
🔹 **GitHub:** github.com/ajithapamula  

────────────────────────────
🎓 **EDUCATION**
B.Sc in Mathematics, Cloud Computing, Computer Science

────────────────────────────
💼 **EXPERIENCE — AI Engineer, Lanciere Technologies**
- Builds LLM applications (RAG, Agents, Multi-agent systems)  
- Whisper → Text → LLM pipelines  
- FastAPI, MongoDB, Docker microservices  
- AWS / Azure cloud deployments  
- RAG optimization, embeddings, vector search  

────────────────────────────
🧠 **SKILLS**
Python, SQL, TensorFlow, PyTorch, NLP, CV, RAG, LangChain, CrewAI, LangGraph, Llama models,
FastAPI, Streamlit, Docker, MongoDB, ChromaDB, AWS, Azure, React, Vite, Tailwind.

────────────────────────────
📌 **PROJECTS (with steps + tech)**

1️⃣ **AI Evaluator — Multi-Agent Code Review**
One-liner: Automatically checks answers or code and gives a score.  
Steps:  
1. Upload the code or answer  
2. AI reads and analyzes it  
3. Different small agents evaluate different parts  
4. Final score and feedback shown on screen  
Tech: LangChain, FastAPI, Docker  

2️⃣ **Edu-App — Voice Interview Platform**  
One-liner: Record voice answers and get instant AI feedback.  
Steps:  
1. Record your voice  
2. Speech → text (Whisper)  
3. AI evaluates your answer  
4. Gives feedback + suggestions  
Tech: Whisper, FastAPI, MongoDB  

3️⃣ **Fake News Detection — ML Classifier**  
One-liner: Predicts whether news is Real or Fake.  
Steps:  
1. User enters article text  
2. Text is cleaned & tokenized  
3. TF-IDF model predicts Real/Fake  
4. Shows confidence score  
Tech: TF-IDF, Logistic Regression  

4️⃣ **E-commerce EDA Dashboard**  
One-liner: Visual dashboard for sales performance analysis.  
Steps:  
1. Load customer and sales data  
2. Clean & transform  
3. Build visual charts  
4. Show insights & patterns  
Tech: Power BI, Tableau  

────────────────────────────
RULES:  
- “your skills” = Ajitha’s skills  
- “your projects” = Ajitha’s projects  
- “your experience” = Ajitha’s experience  
- If question not related to her → say:  
  **"This information is not available in Ajitha’s profile."**
  `;

  // ----------------------------------------------------------
  // TEMPORARY OFFLINE MODE — NO API KEY LEAK
  // ----------------------------------------------------------
  const offlineAnswer = (question: string) => {
    const q = question.toLowerCase();

    if (q.includes("skill")) return "Here are Ajitha’s skills:\n\n" + RESUME_DATA.match(/🧠([\s\S]*?)────────────────────────────/)?.[1];
    if (q.includes("project")) return "Here are Ajitha’s projects:\n\n" + RESUME_DATA.match(/📌([\s\S]*)/)?.[1];
    if (q.includes("experience")) return "Here is Ajitha’s experience:\n\n" + RESUME_DATA.match(/💼([\s\S]*?)────────────────────────────/)?.[1];
    if (q.includes("education")) return "Education:\n\n" + RESUME_DATA.match(/🎓([\s\S]*?)────────────────────────────/)?.[1];
    if (q.includes("about")) return "Here is a summary about Ajitha:\n\n" + RESUME_DATA.split("────────────────────────────")[0];

    return "This information is not available in Ajitha’s profile.";
  };

  // ----------------------------------------------------------
  // SEND MESSAGE (SAFE – NO API CALL)
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
  // UI
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
