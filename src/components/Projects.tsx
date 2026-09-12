import { Reveal } from "./Reveal";
import { projects } from "../data/portfolio";
import { ExternalLink, Sparkles } from "lucide-react";
import { GithubIcon } from "./GithubIcon";
import "./Projects.css";

export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24">
      <div className="mx-auto max-w-[1220px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-violet-500 rounded-full" />
            <span className="text-xs tracking-[0.2em] font-semibold text-violet-300 uppercase">Projects</span>
          </div>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-[32px] sm:text-[40px] font-bold tracking-tight text-white leading-none">Selected <span className="gradient-text">work.</span></h2>
            {/* <p className="text-sm text-white/50 max-w-md">Crafted with React, modern state management and thoughtful UX.</p> */}
          </div>
        </Reveal>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
              <div className="group h-full rounded-[20px] bg-[#12131A] border border-white/10 overflow-hidden hover:border-violet-500/30 transition-colors flex flex-col">
                <div className="h-1 bg-gradient-to-r from-violet-600 to-cyan-500 opacity-80 group-hover:opacity-100 transition" />
                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-xl">{p.icon}</div>
                  <h3 className="mt-4 text-[17px] font-bold text-white">{p.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-white/60 line-clamp-3">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map(t => (
                      <span key={t} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-white/70">{t}</span>
                    ))}
                  </div>
                  <div className="mt-5 rounded-xl bg-violet-500/10 border border-violet-500/20 px-3.5 py-2.5 flex gap-2">
                    <Sparkles size={14} className="text-violet-400 mt-0.5 shrink-0" />
                    <p className="text-xs leading-relaxed text-violet-200/80">{p.highlight}</p>
                  </div>

                  <div className="mt-6 flex gap-2 pt-4 border-t border-white/5">
                    {p.github ? (
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white text-black text-xs font-semibold hover:bg-white/90 transition"><GithubIcon size={14} /> GitHub</a>
                    ) : (
                      <span className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/30 text-xs font-medium cursor-not-allowed"><GithubIcon size={14} /> Private</span>
                    )}
                    {p.demo ? (
                      <a href={p.demo} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/10 border border-white/10 text-white text-xs font-semibold hover:bg-white/15 transition"><ExternalLink size={14} /> Live Demo</a>
                    ) : (
                      <span className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/5 text-white/30 text-xs font-medium">Demo unavailable</span>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
