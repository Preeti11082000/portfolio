import { Reveal } from "./Reveal";
import { whyWork } from "../data/portfolio";
import { Layers, Zap, Boxes, Code2, Users, BookOpen, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = { Layers, Zap, Boxes, Code2, Users, BookOpen };

export function WhyWorkWithMe() {
  return (
    <section className="py-16 sm:py-24 bg-[#0F1115] border-y border-white/[0.06]">
      <div className="mx-auto max-w-[1220px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs tracking-[0.2em] font-semibold text-violet-300 uppercase">How I Work</span>
            <h2 className="mt-3 text-[32px] sm:text-[40px] font-bold tracking-tight text-white leading-none">What I bring to the team.</h2>
            <p className="mt-3 text-white/50">A dedicated Frontend Engineer — focused on long-term product growth, maintainable code and close collaboration with design, backend, QA and product in Agile teams.</p>
          </div>
        </Reveal>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyWork.map((c, i) => {
            const Icon = iconMap[c.icon] ?? Code2;
            return (
              <Reveal key={c.title} delay={i * 0.05}>
                <div className="group rounded-[20px] bg-[#14161F] border border-white/10 p-6 hover:border-violet-500/25 hover:bg-[#171A27] transition h-full">
                  <div className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-violet-300 group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-500 transition">
                    <Icon size={18} />
                  </div>
                  <h3 className="mt-4 font-bold text-white text-[15px]">{c.title}</h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-white/55">{c.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
