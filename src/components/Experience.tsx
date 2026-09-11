import { motion } from "framer-motion";
import { experiences, professionalProjects } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { Calendar, MapPin } from "lucide-react";

const highlights = [
  "4+ years of frontend development experience",
  "React.js, Next.js, JavaScript, TypeScript",
  "Redux Toolkit, MUI, REST APIs",
  "Scalable dashboards and web applications",
  "Reusable components, responsive UI & performance optimization",
  "Collaboration with backend, QA, design & product teams",
];

export function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 bg-[#0F1115] border-y border-white/[0.06]">
      <div className="mx-auto max-w-[1220px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-cyan-400 rounded-full" />
            <span className="text-xs tracking-[0.2em] font-semibold text-cyan-300 uppercase">Experience</span>
          </div>
          <h2 className="text-[32px] sm:text-[40px] font-bold tracking-tight text-white leading-none">
            Professional <span className="text-white/40">journey.</span>
          </h2>
          <p className="mt-3 text-[14px] text-white/50 max-w-xl">4+ years building scalable frontend products.</p>
        </Reveal>

        {/* Compact highlights — the 6 essentials only */}
        <Reveal delay={0.08}>
          <div className="mt-8 rounded-[20px] bg-[#14161F] border border-white/10 p-5 sm:p-6">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-white/40">Core expertise</p>
            <ul className="mt-4 grid sm:grid-cols-2 gap-2.5 sm:gap-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-white/70">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Compact timeline */}
        <div className="mt-6 relative">
          {/* vertical line */}
          <div className="absolute left-[15px] sm:left-[19px] top-2 bottom-2 w-px bg-white/10" aria-hidden />

          <div className="space-y-3 sm:space-y-4">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="relative flex gap-4 sm:gap-5"
              >
                {/* dot */}
                <div className="relative z-10 shrink-0 mt-5">
                  <div className="w-[9px] h-[9px] sm:w-[11px] sm:h-[11px] rounded-full bg-violet-500 ring-4 ring-violet-500/20 ml-[11px] sm:ml-[14px]" />
                </div>

                {/* card */}
                <div className="flex-1 min-w-0 rounded-2xl bg-[#14161F] border border-white/10 px-4 py-4 sm:px-5 sm:py-5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                    <div className="min-w-0">
                      <h3 className="text-[14.5px] sm:text-[15px] font-semibold text-white leading-tight">
                        {exp.company} <span className="font-normal text-white/30">—</span> <span className="font-medium text-violet-300">{exp.role}</span>
                      </h3>
                      <div className="mt-1 flex flex-wrap items-center gap-1.5 text-xs text-white/45">
                        <span className="inline-flex items-center gap-1"><MapPin size={11} className="text-white/30" />{exp.location}</span>
                        <span className="text-white/20">•</span>
                        <span className="inline-flex items-center gap-1"><Calendar size={11} className="text-white/30" />{exp.period}</span>
                      </div>
                    </div>

                    <span className="shrink-0 inline-flex self-start sm:self-center px-3 py-1 rounded-full bg-white text-black text-[11px] font-bold tracking-wide whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  {/* Work-related project details — only for Appinventiv */}
                  {idx === 0 && (
                    <div className="mt-4 pt-4 border-t border-white/5">
                      <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white/35">Key products built</p>
                      <div className="mt-3 grid sm:grid-cols-2 gap-3">
                        {professionalProjects.map((pp) => (
                          <div key={pp.title} className="rounded-xl bg-[#0F0F14] border border-white/5 px-3.5 py-3">
                            <div className="flex justify-end">
                              <span className={`inline-flex px-2.5 py-1 rounded-full bg-gradient-to-r ${pp.accent} text-white text-[10px] font-bold tracking-wide uppercase leading-none`}>{pp.category}</span>
                            </div>
                            <h4 className="mt-2 text-[13px] font-semibold text-white leading-tight">{pp.title}</h4>
                            <p className="mt-1 text-[12px] leading-relaxed text-white/55 line-clamp-2">{pp.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
