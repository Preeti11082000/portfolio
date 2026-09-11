import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { navLinks, personal } from "../data/portfolio";
import { useActiveSection } from "../hooks/useActiveSection";
import { GithubIcon } from "./GithubIcon";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(navLinks.map(n => n.href.slice(1)));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body when mobile open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "bg-[#0A0A0A]/75 backdrop-blur-xl border-b border-white/[0.06]" : "bg-transparent border-b border-transparent"}`}>
      <nav className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-6 xl:px-8 h-[64px] sm:h-[68px] flex items-center gap-3 lg:gap-4 xl:gap-6" aria-label="Primary">
        <a href="#home" className="flex items-center gap-2.5 shrink-0 group">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-500 flex items-center justify-center text-white font-bold text-[12px] sm:text-[13px] shadow-sm">PS</div>
          <span className="font-semibold tracking-tight text-white text-[15px] sm:text-[16px] whitespace-nowrap">Preeti Satsangi</span>
          <span className="hidden 2xl:inline-flex items-center text-[10px] font-medium tracking-[0.14em] uppercase text-white/35 group-hover:text-white/55 transition whitespace-nowrap">Frontend Engineer</span>
        </a>

        {/* Desktop - centered, breathable */}
        <div className="hidden lg:flex items-center justify-center flex-1 gap-0.5 xl:gap-1 min-w-0">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`px-2.5 xl:px-3.5 py-1.5 xl:py-2 rounded-full text-[13px] xl:text-[13.5px] font-medium whitespace-nowrap transition ${active === link.href.slice(1) ? "bg-white text-black shadow-sm" : "text-white/55 hover:text-white hover:bg-white/[0.07]"}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-2 xl:gap-2.5 shrink-0">
          <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-8 h-8 xl:w-9 xl:h-9 rounded-full bg-white/[0.08] hover:bg-white/[0.13] border border-white/10 flex items-center justify-center text-white/65 hover:text-white transition">
            <GithubIcon size={15} />
          </a>
          <a href={personal.resumePath} download className="hidden xl:inline-flex items-center gap-1.5 px-4 xl:px-5 py-2 xl:py-[9px] rounded-full bg-white text-black text-[12.5px] xl:text-[13px] font-semibold hover:bg-white/90 transition whitespace-nowrap">
            Download Resume <ArrowUpRight size={13} />
          </a>
          <a href="#contact" className="inline-flex items-center gap-1.5 px-4 xl:px-5 py-2 xl:py-[9px] rounded-full bg-[#6D28D9] hover:bg-[#7C3AED] text-white text-[12.5px] xl:text-[13px] font-semibold transition shadow-md shadow-violet-900/25 whitespace-nowrap">
            Let&apos;s Connect
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
          className="lg:hidden w-10 h-10 rounded-full bg-white text-black flex items-center justify-center"
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
            className="lg:hidden absolute inset-x-0 top-[64px] bg-[#0F0F12] border-b border-white/10"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-[15px] font-medium ${active === link.href.slice(1) ? "bg-white text-black" : "text-white/80 bg-white/[0.04] border border-white/5"}`}
                >
                  {link.label} <ArrowUpRight size={16} className="opacity-40" />
                </a>
              ))}
              <div className="grid grid-cols-2 gap-3 pt-4">
                <a href={personal.resumePath} download onClick={() => setOpen(false)} className="px-4 py-3 rounded-xl bg-white text-black text-center text-sm font-semibold">Download Resume</a>
                <a href="#contact" onClick={() => setOpen(false)} className="px-4 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-center text-sm font-semibold">Let&apos;s Connect</a>
              </div>
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3 text-white/60 text-sm"><GithubIcon size={16}/> GitHub</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
