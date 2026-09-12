import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { personal } from "../data/portfolio";
import { GithubIcon } from "./GithubIcon";
import "./Hero.css";

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg">
        <div className="hero__bg-base" />
        <div className="hero__bg-radial-top" />
        <div className="hero__bg-radial-right" />
        <div className="hero__bg-grid" />
      </div>

      <div className="hero__container">
        <div className="hero__grid">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hero__badge"
            >
              <span className="hero__dot" />
              Available for frontend opportunities
              <Sparkles size={12} className="text-violet-300" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="hero__title"
            >
              Hi, I&apos;m <br />
              <span className="hero-name">Preeti Satsangi</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="hero__subtitle"
            >
              Front End Developer | React.js | Next.js
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="hero__desc"
            >
              Experienced React Developer with 4+ years of experience building scalable, high-performance web applications, dashboards, and modern
              digital products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="hero__ctas"
            >
              <a href="#projects" className="hero__cta hero__cta--primary">
                View My Work <ArrowRight size={16} />
              </a>
              <a href={personal.resumePath} download className="hero__cta hero__cta--ghost">
                <Download size={16} /> Download Resume
              </a>
              <a href="#contact" className="hero__cta hero__cta--accent">
                <Mail size={16} /> Contact Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="hero__meta"
            >
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="hero__github">
                <GithubIcon size={16} /> github.com/Preeti11082000
              </a>
              <span className="hidden sm:inline text-white/20">•</span>
              <span className="hidden sm:inline">{personal.location}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="hero__stack"
            >
              {["React.js", "Next.js", "TypeScript", "Redux"].map((b) => (
                <span key={b} className="hero__stack-pill">
                  {b}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="hero__visual"
          >
            <div className="hidden sm:flex absolute -top-4 -right-2 z-10 items-center gap-2">
              {/* <span className="px-3 py-1.5 rounded-full bg-emerald-500 text-white text-xs font-semibold shadow-lg">● Available</span> */}
            </div>

            <div className="hero__card">
              <div className="hero__card-bar">
                <div className="hero__card-dots">
                  <span className="hero__card-dot bg-[#FF5F57]" />
                  <span className="hero__card-dot bg-[#FFBD2E]" />
                  <span className="hero__card-dot bg-[#28CA42]" />
                </div>
                <span className="hero__card-file">developer.ts</span>
                <span className="w-6" />
              </div>

              <div className="hero__card-code">
                <div className="text-white/25 text-xs mb-3">// Frontend Engineer • 4+ years</div>
                <div>
                  <span className="text-[#C084FC]">const</span> <span className="text-[#60A5FA]">developer</span>{" "}
                  <span className="text-white/60">= {"{"}</span>
                </div>
                <div className="pl-4 space-y-1 mt-1">
                  <div>
                    <span className="text-[#F472B6]">name</span>
                    <span className="text-white/60">:</span> <span className="text-[#A5FF90]">&quot;Preeti Satsangi&quot;</span>
                    <span className="text-white/60">,</span>
                  </div>
                  <div>
                    <span className="text-[#F472B6]">role</span>
                    <span className="text-white/60">:</span> <span className="text-[#A5FF90]">&quot;Frontend Engineer&quot;</span>
                    <span className="text-white/60">,</span>
                  </div>
                  <div>
                    <span className="text-[#F472B6]">experience</span>
                    <span className="text-white/60">:</span> <span className="text-[#A5FF90]">&quot;4+ years&quot;</span>
                    <span className="text-white/60">,</span>
                  </div>
                  <div>
                    <span className="text-[#F472B6]">location</span>
                    <span className="text-white/60">:</span> <span className="text-[#A5FF90]">&quot;Gurgaon, India&quot;</span>
                    <span className="text-white/60">,</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-[#F472B6]">stack</span>
                    <span className="text-white/60">:</span> <span className="text-white/60">[</span>
                    {["React", "Next.js", "TypeScript"].map((s, i) => (
                      <span key={s} className="text-[#A5FF90]">
                        &quot;{s}&quot;{i < 2 && <span className="text-white/60">, </span>}
                      </span>
                    ))}
                    <span className="text-white/60">]</span>
                  </div>
                  <div className="text-white/40 text-xs pt-1">// scalable • performant • accessible</div>
                </div>
                <div className="text-white/60">{"}"};</div>
                <div className="mt-6 pt-6 border-t border-white/5 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-white/50">
                    <span className="ml-auto text-white/80">Preeti Satsangi</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/50">
                    <span className="ml-auto text-white/80 hidden sm:inline">React • Next.js • TypeScript • Redux</span>
                    <span className="ml-auto sm:hidden text-white/80">React • Next • TS</span>
                  </div>
                </div>
              </div>

              <div className="hero__card-bottom" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
