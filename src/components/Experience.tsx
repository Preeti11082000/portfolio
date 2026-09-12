import { motion } from "framer-motion";
import { experiences, professionalProjects } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { Calendar, MapPin } from "lucide-react";
import "./Experience.css";

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
    <section id="experience" className="experience">
      <div className="experience__container">
        <Reveal>
          <div className="experience__eyebrow">
            <span className="experience__eyebrow-line" />
            <span className="experience__eyebrow-text">Experience</span>
          </div>
          <h2 className="experience__title">
            Professional <span className="text-white/40">journey.</span>
          </h2>
          <p className="experience__subtitle">4+ years building scalable frontend products.</p>
        </Reveal>

        {/* <Reveal delay={0.08}>
          <div className="experience__core">
            <p className="experience__core-title">Core expertise</p>
            <ul className="experience__core-list">
              {highlights.map((h) => (
                <li key={h} className="experience__core-item">
                  <span className="experience__core-dot" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal> */}

        <div className="experience__timeline">
          <div className="experience__line" aria-hidden />
          <div className="experience__list">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="experience__item"
              >
                <div className="experience__dot-wrap">
                  <div className="experience__dot" />
                </div>

                <div className="experience__card">
                  <div className="experience__card-header">
                    <div className="min-w-0">
                      <h3 className="experience__company">
                        {exp.company} <span className="experience__sep">—</span> <span className="experience__role">{exp.role}</span>
                      </h3>
                      <div className="experience__meta">
                        <span className="inline-flex items-center gap-1">
                          <MapPin size={11} className="text-white/30" />
                          {exp.location}
                        </span>
                        <span className="text-white/20">•</span>
                        <span className="inline-flex items-center gap-1">
                          <Calendar size={11} className="text-white/30" />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    <span className="experience__chip">{exp.period}</span>
                  </div>

                  {idx === 0 && (
                    <div className="experience__projects">
                      <p className="experience__projects-title">Key products built</p>
                      <div className="experience__projects-grid">
                        {professionalProjects.map((pp) => (
                          <div key={pp.title} className="experience__project">
                            <div className="experience__project-head">
                              <span className={`experience__project-badge bg-gradient-to-r ${pp.accent}`}>{pp.category}</span>
                            </div>
                            <h4 className="experience__project-title">{pp.title}</h4>
                            <p className="experience__project-desc">{pp.description}</p>
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
