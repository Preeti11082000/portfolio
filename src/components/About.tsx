import { Reveal } from "./Reveal";
import { stats } from "../data/portfolio";
import { Code2, LayoutDashboard, Plug, Gauge, Sparkles } from "lucide-react";
import "./About.css";

export function About() {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <Reveal>
          <div className="about__eyebrow">
            <span className="about__eyebrow-line" />
            <span className="about__eyebrow-text">About Me</span>
          </div>
          <h2 className="about__title">
            Engineering delightful <br className="hidden sm:block" />
            <span className="hero-name">frontend experiences.</span>
          </h2>
        </Reveal>

        <div className="about__grid">
          <Reveal delay={0.1} className="flex">
            <div className="about__card">
              <div>
                <p className="about__text">
                  I am an experienced <span className="text-white font-medium">React Developer with 4+ years</span> of hands-on experience in
                  frontend development, specializing in building <span className="text-white">scalable, high-performance</span> web applications.
                </p>
                <p className="about__text--secondary">
                  I specialize in <span className="text-white/90">React.js, Next.js, JavaScript, TypeScript, Redux, React Query</span>, responsive
                  UI, API integration, performance optimization and scalable frontend architecture. I&apos;ve worked across diverse domains including
                  FinTech products, social media platforms, rental platforms, SaaS supply-chain platforms and data-heavy dashboards — turning complex
                  product requirements into clean, accessible interfaces.
                </p>

                <div className="about__features">
                  {[
                    { icon: Code2, title: "Clean Architecture" },
                    { icon: LayoutDashboard, title: "Dashboards" },
                    { icon: Plug, title: "API Integration" },
                    { icon: Gauge, title: "Performance" },
                  ].map((k) => (
                    <div key={k.title} className="about__feature">
                      <k.icon size={16} className="text-violet-400" /> {k.title}
                    </div>
                  ))}
                </div>
              </div>

              <div className="about__footer">
                <span className="about__footer-text">4+ yrs • 10+ stacks • Frontend Engineering</span>
                <span className="hidden sm:block h-px flex-1 max-w-[80px] bg-gradient-to-r from-violet-500/50 to-transparent" />
                <span className="text-[11px] font-semibold tracking-widest uppercase text-violet-300/80">Available</span>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-4 h-full">
            <Reveal delay={0.15}>
              <div className="about__stats">
                {stats.map((s) => (
                  <div key={s.label} className="about__stat">
                    <div className="about__stat-value">{s.value}</div>
                    <div className="about__stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2} className="flex-1 flex">
              <div className="about__skills">
                <div className="about__skills-inner">
                  <div className="about__skills-header">
                    <span className="about__skills-icon">
                      <Sparkles size={12} className="text-white" />
                    </span>
                    <span className="about__skills-title">$ skills</span>
                  </div>
                  <div className="about__skills-list">
                    {["React.js", "Next.js", "JavaScript", "TypeScript", "Redux Toolkit", "React Query", "Tailwind CSS", "MUI", "SASS", "Chart.js", "Node.js", "Git"].map(
                      (s) => (
                        <span key={s} className="about__skill">
                          {s}
                        </span>
                      )
                    )}
                  </div>
                  <p className="about__skills-desc">Focused on modern frontend — reusable components, responsive UI and scalable architecture.</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="about__highlights">
                <div className="about__highlights-title">$ highlights</div>
                <div className="about__highlights-list">
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
