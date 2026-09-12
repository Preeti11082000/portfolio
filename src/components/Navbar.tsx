import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { navLinks, personal } from "../data/portfolio";
import { useActiveSection } from "../hooks/useActiveSection";
import { GithubIcon } from "./GithubIcon";
import "./Navbar.css";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(navLinks.map((n) => n.href.slice(1)));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : "navbar--transparent"}`}>
      <nav className="navbar__container" aria-label="Primary">
        <a href="#home" className="navbar__brand group">
          <div className="navbar__logo">PS</div>
          <span className="navbar__name">Preeti Satsangi</span>
          <span className="navbar__role">Frontend Engineer</span>
        </a>

        <div className="navbar__nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`navbar__link ${active === link.href.slice(1) ? "navbar__link--active" : ""}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="navbar__actions">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="navbar__icon-btn"
          >
            <GithubIcon size={15} />
          </a>
          <a href={personal.resumePath} download className="navbar__btn navbar__btn--secondary">
            Download Resume <ArrowUpRight size={13} />
          </a>
          <a href="#contact" className="navbar__btn navbar__btn--primary">
            Let&apos;s Connect
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="navbar__mobile-toggle"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="navbar__mobile-panel"
          >
            <div className="navbar__mobile-links">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`navbar__mobile-link ${active === link.href.slice(1) ? "navbar__mobile-link--active" : ""}`}
                >
                  {link.label} <ArrowUpRight size={16} className="opacity-40" />
                </a>
              ))}
              <div className="navbar__mobile-cta">
                <a href={personal.resumePath} download onClick={() => setOpen(false)} className="navbar__mobile-cta-btn navbar__mobile-cta-btn--secondary">
                  Download Resume
                </a>
                <a href="#contact" onClick={() => setOpen(false)} className="navbar__mobile-cta-btn navbar__mobile-cta-btn--primary">
                  Let&apos;s Connect
                </a>
              </div>
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3 text-white/60 text-sm">
                <GithubIcon size={16} /> GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
