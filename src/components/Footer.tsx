import { personal } from "../data/portfolio";
import { Mail, Phone } from "lucide-react";
import { GithubIcon } from "./GithubIcon";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0F0F12]">
      <div className="mx-auto max-w-[1220px] px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-white font-bold text-xs">PS</div>
            <span className="font-semibold text-white">Preeti Satsangi</span>
            <span className="text-xs text-white/40">Front End Developer</span>
          </div>

          <div className="flex gap-3">
            <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition"><GithubIcon size={16} /></a>
            <a href={`mailto:${personal.email}`} aria-label="Email" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition"><Mail size={16} /></a>
            <a href={`tel:${personal.phone}`} aria-label="Phone" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition"><Phone size={16} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
