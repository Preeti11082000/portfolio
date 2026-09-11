import { Reveal } from "./Reveal";
import { education } from "../data/portfolio";
import { GraduationCap, Award } from "lucide-react";

export function Education() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-[1220px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-[28px] sm:text-[36px] font-bold tracking-tight text-white">Education.</h2>
        </Reveal>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.07}>
              <div className="rounded-[20px] bg-[#12131A] border border-white/10 p-6 relative overflow-hidden group hover:border-white/15 transition h-full">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-violet-600 to-cyan-500 opacity-60 group-hover:opacity-100 transition" />
                <div className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center">
                  {i === 0 ? <GraduationCap size={18} /> : <Award size={18} />}
                </div>
                <h3 className="mt-4 font-bold text-white leading-tight">{e.degree}</h3>
                <p className="text-sm text-violet-300 mt-1">{e.institute}</p>
                <p className="text-xs text-white/40 mt-1">{e.location} • {e.period}</p>
                <div className="mt-4 inline-flex px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold">{e.detail}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
