import streamlit as st
from streamlit_option_menu import option_menu
import requests
import os

# --- Config --- #
st.set_page_config(page_title="Ajitha Pamula | AI Portfolio", page_icon="🤖", layout="wide")

# --- Sidebar --- #
with st.sidebar:
    st.image("https://avatars.githubusercontent.com/u/151291194?v=4", width=120)
    st.title("Ajitha Pamula")
    st.markdown("**AI Engineer | RAG Specialist**")
    st.markdown("📍 India  \n📧 pamulaajitha04@gmail.com")
    st.markdown("[🌐 LinkedIn](https://www.linkedin.com/in/ajithapamula)")
    st.markdown("[💻 GitHub](https://github.com/ajithapamula)")

    selected = option_menu(
        menu_title=None,
        options=["About", "Projects", "Timeline", "Certifications", "AI Chat"],
        icons=["person", "diagram-3", "calendar", "award", "robot"],
        menu_icon="cast",
        default_index=0,
    )

# --- About Me --- #
if selected == "About":
    st.title("👋 Hi, I'm Ajitha")
    st.markdown("""
I'm an AI Engineer building real-world intelligent applications and agent systems.

🔍 **Key Areas:**
- **RAG Architectures** with ChromaDB, hybrid search
- **Multi-Agent LLM Systems** using LangChain
- **Voice AI** using Whisper & OpenAI
- **MLOps Pipelines** with FastAPI, Docker, Azure

🛠️ **Tech Stack**  
Python | LangChain | FastAPI | MongoDB | React | Azure | Power BI | Groq LLMs
""")

# --- Projects --- #
elif selected == "Projects":
    st.title("🚀 Projects Showcase")

    projects = [
        {
            "title": "AI Interview Coach",
            "desc": "Multi-agent RAG app with scoring, ASR, MongoDB & dashboard.",
            "link": "https://github.com/ajithapamula/AI-Interview-Coach"
        },
        {
            "title": "AI Video Interview Assistant",
            "desc": "Voice-to-voice assistant with Whisper, Google Drive & FastAPI.",
            "link": "https://github.com/ajithapamula/AI-Video-Interview-Assistant"
        },
        {
            "title": "Fake News Detection",
            "desc": "NLP-based classifier using TF-IDF + Logistic Regression.",
            "link": "https://github.com/ajithapamula/fake-news-detection"
        }
    ]
    
    for proj in projects:
        st.subheader(proj["title"])
        st.write(proj["desc"])
        st.markdown(f"[🔗 View Project]({proj['link']})")
        st.markdown("---")

# --- Timeline --- #
elif selected == "Timeline":
    st.title("📌 My Journey")
    st.markdown("""
- 🎓 B.Sc in Maths, Cloud Computing & CS  
- 📜 Full Stack Data Science & AI – Naresh IT  
- 💼 AI Intern → AI Engineer at Lanciere Technologies  
- 🧠 Built AI Coach, Agent Pipelines, Voice AI  
- 🔭 Exploring Prompt Engineering + Cloud ML
""")

# --- Certifications --- #
elif selected == "Certifications":
    st.title("📜 Certifications & Achievements")
    certs = [
        "✅ Full Stack Data Science & AI – Naresh IT",
        "✅ Power BI & Tableau – Cisco Networking Academy",
        "✅ Groq LLM Integration in RAG Systems",
        "✅ Azure MLOps + MongoDB Pipelines",
        "✅ NLP, DL Projects using Scikit-learn"
    ]
    for cert in certs:
        st.markdown(f"- {cert}")

# --- AI Chat --- #
elif selected == "AI Chat":
    st.title("🤖 Ask My AI Assistant")

    query = st.text_input("Ask about AI, Projects, Skills, RAG, etc...")
    if st.button("Ask"):
        try:
            api_key = os.getenv("GROQ_API_KEY")
            if not api_key:
                st.error("⚠️ GROQ_API_KEY not found in environment variables.")
            else:
                headers = {
                    "Authorization": f"Bearer {api_key}",
                    "Content-Type": "application/json"
                }
                payload = {
                    "model": "llama3-8b-8192",
                    "messages": [
                        {"role": "system", "content": "You're Ajitha Pamula’s smart assistant. Help the user like a recruiter-focused AI agent."},
                        {"role": "user", "content": query}
                    ]
                }
                res = requests.post("https://api.groq.com/openai/v1/chat/completions", headers=headers, json=payload)
                result = res.json()["choices"][0]["message"]["content"]
                st.success(result)
        except Exception as e:
            st.error("⚠️ Failed to get a response. Check your API or internet connection.")

# --- Footer --- #
st.markdown("""---  
<div style='text-align:center'>
<small>Made with ❤️ by Ajitha Pamula | Powered by Streamlit</small>
</div>
""", unsafe_allow_html=True)
