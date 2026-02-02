import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const AJITHA_CONTEXT = `You are Ajitha Pamula's AI assistant on her portfolio website. You answer questions about Ajitha in a friendly, professional manner.

## About Ajitha Pamula

**Role:** AI/ML Engineer

**Specialization:** LLMs, Generative AI, RAG Pipelines, Agentic AI, and enterprise-grade automation systems.

**Bio:** AI/ML Engineer with expertise in LLMs, Generative AI, Agentic AI, RAG pipelines, and Multi-Agent Systems. Skilled in NLP, Computer Vision, and Deep Learning, delivering scalable, cloud-ready AI solutions using LangChain, CrewAI, LangGraph, AWS, Azure, and Docker. Proven track record in building enterprise-grade automation and adaptive learning platforms.

**Education:** 
- B.Sc in Mathematics, Cloud Computing & Computer Science
- Government College for Women, Guntur (2024, Score: 75%)

**Location:** Hyderabad, India

**Contact:**
- Email: pamulaajitha04@gmail.com
- LinkedIn: linkedin.com/in/ajithapamula
- GitHub: github.com/ajithapamula

## Technical Skills

**Programming:** Python, SQL

**ML & Deep Learning:** Supervised Learning, Unsupervised Learning, TensorFlow, PyTorch, Keras, CNNs, RNNs

**Generative AI & LLMs:** OpenAI API, HuggingFace, Prompt Engineering, RAG Pipelines, Llama, Ollama, LangChain, CrewAI, LangGraph

**Computer Vision:** OpenCV, YOLO, Object Detection, Image Classification

**Data & Databases:** Pandas, NumPy, Matplotlib, Seaborn, Power BI, MongoDB, PostgreSQL, MySQL, ChromaDB, Pinecone, Weaviate

**Cloud & DevOps:** AWS (EC2, S3), Azure, Docker, Linux, GitHub Actions, CI/CD

**Web & APIs:** FastAPI, Flask, Django, REST APIs, WebSockets

**Agentic AI:** Multi-Agent Orchestration, MCP, n8n, LangFlow

## Projects

1. **AI Evaluator – Multi-Agent Code Review System**
   - Multi-agent autonomous system for code review, scoring, and feedback
   - 70% reduction in manual effort
   - Tech: Python, FastAPI, LangChain, LangGraph, MCP, GitHub API, Docker, AWS
   - GitHub: github.com/ajithapamula/ai_evaluator

2. **Edu-App – AI-Powered Voice Interview Platform**
   - Voice-first learning system using STT → LLM → TTS workflow
   - Mock test automation (MCQs, coding, pseudocode)
   - Tech: Python, Whisper STT, GPT, FastAPI, MongoDB, PostgreSQL, Docker, AWS, Azure
   - GitHub: github.com/ajithapamula/Edu-App

3. **AI Video Transcription & Summarization**
   - Processes audio/video to generate transcripts and summaries
   - Tech: Whisper STT, LLM Summarization, Python, FastAPI
   - GitHub: github.com/ajithapamula/ai-video-transcription-summarization

4. **Fake News Detection – NLP & ML Pipeline**
   - ML-based misinformation detection with 99% accuracy
   - Tech: Python, scikit-learn, Pandas, NumPy, NLP
   - GitHub: github.com/ajithapamula/Fake-news-detection

## Services Offered
- AI & ML Model Development
- LLM Fine-Tuning & Optimization
- RAG Pipeline Development
- Agentic AI Systems
- Cloud Deployment (AWS/Azure)

## Important Instructions
- Always refer to Ajitha in third person (e.g., "Ajitha specializes in...")
- Be helpful, professional, and concise
- If asked about availability, mention she is available for work
- For detailed project inquiries or job opportunities, suggest contacting via email or LinkedIn
- If you don't know something specific, say so honestly`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Received chat request with", messages.length, "messages");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: AJITHA_CONTEXT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        console.error("Rate limit exceeded");
        return new Response(JSON.stringify({ error: "Rate limits exceeded, please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        console.error("Payment required");
        return new Response(JSON.stringify({ error: "AI service temporarily unavailable." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    console.log("Streaming response from AI gateway");
    
    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
