import { Reveal } from "./Reveal";
import { skills } from "../data/portfolio";
import "./Skills.css";

const icons: Record<string, string> = {
  Frontend: "◈",
  "State Management": "⬢",
  "UI / Styling": "⬣",
  "Data Visualization": "▦",
  "Backend / Data": "⬔",
  Tools: "⬡",
};

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 bg-[#0F1115] border-y border-white/[0.06]">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-cyan-400 rounded-full" />
            <span className="text-xs tracking-[0.2em] font-semibold text-cyan-300 uppercase">Skills</span>
          </div>
          <h2 className="text-[32px] sm:text-[40px] font-bold tracking-tight text-white leading-none">Tech stack.</h2>
          <p className="mt-3 text-white/50">Focused on modern frontend — no inflated percentages, just real production experience.</p>
        </Reveal>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(skills).map(([group, items], idx) => (
            <Reveal key={group} delay={idx * 0.06}>
              <div className="rounded-[20px] bg-[#14161F] border border-white/10 p-6 hover:border-violet-500/20 transition h-full">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">{icons[group] ?? "•"}</div>
                  <h3 className="font-semibold text-white text-[14px] tracking-wide">{group}</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map(s => (
                    <span key={s} className="px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs font-medium text-white/80 hover:bg-white/10 hover:text-white transition cursor-default">{s}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
