import { Reveal } from "./Reveal";
import { stats } from "../data/portfolio";
import { Code2, LayoutDashboard, Plug, Gauge, Sparkles } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 border-t border-white/[0.06]">
      <div className="mx-auto max-w-[1220px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-violet-500 rounded-full" />
            <span className="text-xs tracking-[0.2em] font-semibold text-violet-300 uppercase">About Me</span>
          </div>
          <h2 className="text-[32px] sm:text-[40px] font-bold tracking-tight text-white leading-none">
            Engineering delightful <br className="hidden sm:block" />
            <span className="hero-name">frontend experiences.</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid lg:grid-cols-[1.15fr_0.85fr] gap-6 lg:gap-6 items-stretch">
          {/* LEFT — equal height card */}
          <Reveal delay={0.1} className="flex">
            <div className="flex-1 rounded-[24px] bg-[#12131A] border border-white/10 p-6 sm:p-8 flex flex-col">
              <div>
                <p className="text-[15.5px] leading-relaxed text-white/70">
                  I am an experienced <span className="text-white font-medium">React Developer with 4+ years</span> of hands-on experience in frontend
                  development, specializing in building <span className="text-white">scalable, high-performance</span> web applications.
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-white/60">
                  I specialize in <span className="text-white/90">React.js, Next.js, JavaScript, TypeScript, Redux, React Query</span>,
                  responsive UI, API integration, performance optimization and scalable frontend architecture. I&apos;ve worked across diverse
                  domains including FinTech products, social media platforms, rental platforms, SaaS supply-chain platforms and
                  data-heavy dashboards — turning complex product requirements into clean, accessible interfaces.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  {[
                    { icon: Code2, title: "Clean Architecture" },
                    { icon: LayoutDashboard, title: "Dashboards" },
                    { icon: Plug, title: "API Integration" },
                    { icon: Gauge, title: "Performance" },
                  ].map((k) => (
                    <div
                      key={k.title}
                      className="flex items-center gap-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] px-3.5 py-3.5 text-sm font-medium text-white/85"
                    >
                      <k.icon size={16} className="text-violet-400" /> {k.title}
                    </div>
                  ))}
                </div>
              </div>

              {/* fills remaining height so left = right, no empty gap */}
              <div className="mt-auto pt-6 border-t border-white/[0.06] flex items-center justify-between gap-4">
                <span className="text-xs font-mono tracking-wide text-white/35">4+ yrs • 10+ stacks • Frontend Engineering</span>
                <span className="hidden sm:block h-px flex-1 max-w-[80px] bg-gradient-to-r from-violet-500/50 to-transparent" />
                <span className="text-[11px] font-semibold tracking-widest uppercase text-violet-300/80">Available</span>
              </div>
            </div>
          </Reveal>

          {/* RIGHT — equal height column */}
          <div className="flex flex-col gap-4 h-full">
            <Reveal delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 p-5 backdrop-blur"
                  >
                    <div className="text-2xl font-bold text-white tracking-tight">{s.value}</div>
                    <div className="text-xs font-medium tracking-wide uppercase text-white/50 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2} className="flex-1 flex">
              <div className="flex-1 rounded-[22px] bg-gradient-to-br from-violet-600 via-indigo-600 to-violet-600 p-[1.5px] shadow-[0_10px_40px_rgba(124,58,237,0.22)] flex">
                <div className="flex-1 rounded-[20px] bg-[#0F0F14] p-6 flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-violet-600 flex items-center justify-center">
                      <Sparkles size={12} className="text-white" />
                    </span>
                    <span className="font-mono text-xs tracking-widest font-semibold text-violet-300 uppercase">$ skills </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {[
                      "React.js",
                      "Next.js",
                      "JavaScript",
                      "TypeScript",
                      "Redux Toolkit",
                      "React Query",
                      "Tailwind CSS",
                      "MUI",
                      "SASS",
                      "Chart.js",
                      "Node.js",
                      "Git",
                    ].map((s) => (
                      <span
                        key={s}
                        className="px-4 py-2 rounded-full bg-white text-black text-[14px] font-extrabold tracking-tight leading-none shadow-[0_2px_12px_rgba(255,255,255,0.18)] ring-1 ring-white/10"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-[13.5px] leading-relaxed text-white/60">
                    Focused on modern frontend — reusable components, responsive UI and scalable architecture.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="rounded-2xl bg-[#12131A] border border-white/10 p-5 font-mono text-sm">
                <div className="text-white/30 text-xs mb-2">$ highlights</div>
                <div className="space-y-1.5 text-white/70 text-xs">
                  <div>✓ Scalable frontend architecture</div>
                  <div>✓ Dashboard development</div>
                  <div>✓ Accessible & responsive UI</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
