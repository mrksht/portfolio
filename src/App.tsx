import { Toaster } from "./components/ui/toaster";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ExperienceSection } from "./components/Experience";
import { StarField } from "./components/StarField";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative">
      <StarField />
      <div className="relative z-9">
        <Hero />
        <About />
        <ExperienceSection />
        <Projects />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </div>
  );
}

export default App;
