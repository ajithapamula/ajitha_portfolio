import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NeuralBackground from "@/components/NeuralBackground";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <NeuralBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <section id="skills">
            <Skills />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
      <Chatbot />
    </div>
  );
};

export default Index;
