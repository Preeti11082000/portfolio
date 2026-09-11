import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { personal } from "../data/portfolio";
import { GithubIcon } from "./GithubIcon";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-[72px]">
      {/* background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0A0A0A]" />
        <div className="absolute -top-[30%] left-1/2 -translate-x-1/2 w-[120%] h-[80%] bg-[radial-gradient(ellipse_at_top,_rgba(139,92,246,0.18),transparent_60%)]" />
        <div className="absolute top-[10%] right-[5%] w-[520px] h-[520px] bg-[radial-gradient(circle,_rgba(6,182,214,0.12),transparent_70%)] blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_80%)]" />
      </div>

      <div className="mx-auto max-w-[1220px] px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-8 items-center">
          {/* Left */}
          <div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs font-medium text-white/70">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for frontend opportunities
              <Sparkles size={12} className="text-violet-300" />
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }} className="mt-6 text-[34px] sm:text-[48px] lg:text-[56px] font-bold tracking-tight leading-[0.95] text-white">
              Hi, I&apos;m <br />
              <span className="hero-name">Preeti Satsangi</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-4 text-[15px] sm:text-[18px] font-medium tracking-wide text-violet-300">
              Front End Developer | React.js | Next.js
            </motion.p>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-4 max-w-[560px] text-[15px] sm:text-[16.5px] leading-relaxed text-white/60">
              Experienced React Developer with 4+ years of experience building scalable, high-performance web applications, dashboards, and modern digital products.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition">
                View My Work <ArrowRight size={16} />
              </a>
              <a href={personal.resumePath} download className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/15 text-white font-medium text-sm hover:bg-white/15 transition backdrop-blur">
                <Download size={16} /> Download Resume
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-violet-600/20 hover:opacity-90 transition">
                <Mail size={16} /> Contact Me
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-6 flex items-center gap-3 text-sm text-white/60">
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white/80 transition">
                <GithubIcon size={16} /> github.com/Preeti11082000
              </a>
              <span className="hidden sm:inline text-white/20">•</span>
              <span className="hidden sm:inline">{personal.location}</span>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-8 flex flex-wrap gap-2">
              {["React.js", "Next.js", "TypeScript", "Redux"].map(b => (
                <span key={b} className="px-3.5 py-2 rounded-full bg-white/[0.06] border border-white/10 text-xs font-medium text-white/70 backdrop-blur">{b}</span>
              ))}
            </motion.div>
          </div>

          {/* Right - Code card */}
          <motion.div initial={{ opacity: 0, y: 20, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.3, duration: 0.7, ease: [0.22,1,0.36,1] }} className="relative lg:pl-4">
            {/* floating badges */}
            <div className="hidden sm:flex absolute -top-4 -right-2 z-10 items-center gap-2">
              <span className="px-3 py-1.5 rounded-full bg-emerald-500 text-white text-xs font-semibold shadow-lg">● Available</span>
            </div>

            <div className="relative rounded-[20px] sm:rounded-[24px] bg-[#12131A] border border-white/10 overflow-hidden shadow-2xl shadow-black/50">
              {/* window bar */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <span className="w-3 h-3 rounded-full bg-[#28CA42]" />
                </div>
                <span className="text-xs font-mono text-white/30">developer.ts</span>
                <span className="w-6" />
              </div>

              <div className="p-5 sm:p-7 font-mono text-[13px] sm:text-[14px] leading-relaxed">
                <div className="text-white/25 text-xs mb-3">// Frontend Engineer • 4+ years</div>
                <div>
                  <span className="text-[#C084FC]">const</span> <span className="text-[#60A5FA]">developer</span> <span className="text-white/60">= {"{"}</span>
                </div>
                <div className="pl-4 space-y-1 mt-1">
                  <div><span className="text-[#F472B6]">name</span><span className="text-white/60">:</span> <span className="text-[#A5FF90]">&quot;Preeti Satsangi&quot;</span><span className="text-white/60">,</span></div>
                  <div><span className="text-[#F472B6]">role</span><span className="text-white/60">:</span> <span className="text-[#A5FF90]">&quot;Frontend Engineer&quot;</span><span className="text-white/60">,</span></div>
                  <div><span className="text-[#F472B6]">experience</span><span className="text-white/60">:</span> <span className="text-[#A5FF90]">&quot;4+ years&quot;</span><span className="text-white/60">,</span></div>
                  <div><span className="text-[#F472B6]">location</span><span className="text-white/60">:</span> <span className="text-[#A5FF90]">&quot;Gurgaon, India&quot;</span><span className="text-white/60">,</span></div>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-[#F472B6]">stack</span><span className="text-white/60">:</span> <span className="text-white/60">[</span>
                    {["React", "Next.js", "TypeScript"].map((s,i)=>(
                      <span key={s} className="text-[#A5FF90]">&quot;{s}&quot;{i<2 && <span className="text-white/60">, </span>}</span>
                    ))}
                    <span className="text-white/60">]</span>
                  </div>
                  <div className="text-white/40 text-xs pt-1">// scalable • performant • accessible</div>
                </div>
                <div className="text-white/60">{"}"};</div>

                <div className="mt-6 pt-6 border-t border-white/5 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-white/50"> <span className="ml-auto text-white/80">Preeti Satsangi</span></div>
                  <div className="flex items-center gap-2 text-white/50"> <span className="ml-auto text-white/80 hidden sm:inline">React • Next.js • TypeScript • Redux</span><span className="ml-auto sm:hidden text-white/80">React • Next • TS</span></div>
                </div>
              </div>

              {/* bottom gradient bar */}
              <div className="h-1 bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-500" />
            </div>

           
          </motion.div>
        </div>
      </div>
    </section>
  );
}
