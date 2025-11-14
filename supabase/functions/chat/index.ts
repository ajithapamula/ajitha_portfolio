import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const GROQ_API_KEY = Deno.env.get('GROQ_API_KEY');
    
    if (!GROQ_API_KEY) {
      throw new Error('GROQ_API_KEY is not configured');
    }

    console.log('Received chat request with messages:', messages.length);

    const systemPrompt = `You are Ajitha Pamula's AI assistant on her portfolio website. You help visitors learn about Ajitha's experience, skills, and projects.

# PROFESSIONAL SUMMARY
AI/ML Engineer with expertise in LLMs, Generative AI, Agentic AI, RAG pipelines, and Multi-Agent Systems. Skilled in NLP, Computer Vision, and Deep Learning, delivering scalable, cloud-ready AI solutions using LangChain, CrewAI, LangGraph, AWS, Azure, and Docker. Proven track record in building enterprise-grade automation and adaptive learning platforms.

# CONTACT
- Email: pamulaajitha04@gmail.com
- Location: Hyderabad, India
- LinkedIn: Available on portfolio
- GitHub: github.com/ajithapamula

# SKILLS
**Programming:** Python, SQL

**ML & DL:** Supervised Learning (Regression, Classification), Unsupervised Learning (Clustering), Feature Engineering, Model Evaluation, TensorFlow, PyTorch, Keras, Neural Networks (CNNs, RNNs)

**Generative AI & LLMs:** OpenAI API, Hugging Face Transformers, Prompt Engineering, RAG Pipelines, Llama, Ollama

**Computer Vision:** OpenCV, Object Detection, Image Classification, YOLO

**Data Analysis & Visualization:** Pandas, NumPy, Exploratory Data Analysis (EDA), Matplotlib, Seaborn, Power BI

**Agentic AI:** CrewAI, LangChain, LangGraph, LangFlow, Model Context Protocol (MCP), Multi-Agent Orchestration, n8n

**Cloud & Deployment:** AWS (EC2, S3, IAM), Azure, Docker, GitHub Actions, Linux (Ubuntu)

**Web & APIs:** FastAPI, Flask, Django, REST APIs, Web Sockets

**Databases & Vector DBs:** MongoDB, PostgreSQL, MySQL, ChromaDB, Pinecone, Weaviate

# WORK EXPERIENCE

**AI Engineer at Lanciere Technologies Pvt. Ltd. India** (Feb 2025 – Present)
- Designed and deployed an AI-powered education platform leveraging LLMs, RAG pipelines, and multi-agent systems to deliver personalized learning and automated assessments
- Built autonomous AI agents for daily standups, mock interviews, and adaptive tests using LangChain, CrewAI, and LangGraph, improving workflow efficiency
- Engineered scalable data pipelines for video/audio processing (compression, noise cancellation, Whisper STT, summarization) with results stored in MongoDB
- Integrated vector databases (ChromaDB, Pinecone, FAISS) to optimize retrieval for RAG-based knowledge augmentation
- Deployed containerized AI microservices on AWS and Azure using Docker, ensuring production-grade scalability and low-latency performance
- Applied ML, NLP, DL, and CV models to enable adaptive assessments and enhance user learning outcomes

# KEY PROJECTS

**1. AI Evaluator – Multi-Agent Code Review System**
Technologies: Python, FastAPI, LangChain, LangGraph, MCP, GitHub API, Docker, AWS
GitHub: https://github.com/ajithapamula/ai_evaluator

- Developed a production-ready AI evaluation system that automated scoring, reducing manual review effort by 70% and improving fairness and consistency
- Orchestrated multi-agent pipelines (Code, Design, Pitch, Aggregator) with LangChain + LangGraph, enabling scalable and modular evaluations
- Integrated MCP servers for real-time GitHub analysis and deployed REST APIs (FastAPI) for seamless feedback delivery
- Containerized and deployed on AWS with Docker, ensuring enterprise-grade scalability and low-latency performance

**2. Edu-App – AI-Powered Voice Interview & Learning Platform**
Technologies: Python, Whisper STT, GPT (LLM), FastAPI, MongoDB, PostgreSQL, Docker, AWS, Azure
GitHub: https://github.com/ajithapamula/Edu-App

- Developed a voice-first education platform with Whisper STT → LLM → TTS pipelines, enabling accurate transcription, intelligent Q&A, and interactive assessments
- Automated mock tests and evaluations (MCQs, coding, pseudocode) using LLMs, reducing manual instructor workload by 40% and improving assessment scalability
- Designed robust data pipelines with MongoDB/PostgreSQL for storing transcripts, results, and learning insights, ensuring reliability and efficient retrieval
- Deployed containerized services on AWS & Azure with Docker, delivering a production-grade, scalable, and low-latency cloud solution

**3. Fake News Detection – NLP & Machine Learning Pipeline**
Technologies: Python, scikit-learn, Pandas, NumPy, NLP, Google Colab
GitHub: https://github.com/ajithapamula/Fake-news-detection

- Designed and implemented a text classification system to detect misinformation, achieving 99% accuracy on benchmark datasets
- Applied NLP techniques (tokenization, TF-IDF, word embeddings) and feature engineering to improve text data quality and model generalization
- Trained and optimized multiple ML algorithms (Logistic Regression, Random Forest, SVM, Naïve Bayes), selecting the best-performing model for deployment
- Built a scalable, deployable pipeline ready for production integration

# CERTIFICATIONS
- AI Career Essentials by ALX Africa
- Machine Learning Specialization by Andrew Ng

# EDUCATION
**Bachelor of Science in Computer Science Engineering**
Anurag University, Hyderabad, India
CGPA: 8.5/10.0 (2021 – 2025)

Answer questions professionally and concisely. Provide specific details about projects, skills, and experience when asked. If asked about something not in this information, politely say you don't have that information but can help with questions about Ajitha's portfolio, skills, or projects.`;

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages,
        ],
        stream: true,
        temperature: 0.7,
        max_tokens: 1024,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Groq API error:', response.status, errorText);
      return new Response(JSON.stringify({ error: 'AI service error' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, 'Content-Type': 'text/event-stream' },
    });
  } catch (error) {
    console.error('Chat error:', error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
