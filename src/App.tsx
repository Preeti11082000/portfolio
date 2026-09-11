import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { WhyWorkWithMe } from "./components/WhyWorkWithMe";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";

function Loading() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-[#0A0A0A] flex items-center justify-center"
    >
      <div className="text-center">
        <div className="w-10 h-10 mx-auto rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 animate-pulse" />
        <p className="mt-3 text-sm font-mono text-white/50">Loading portfolio...</p>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loading />}</AnimatePresence>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <WhyWorkWithMe />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
