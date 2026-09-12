import { useState } from "react";
import { Reveal } from "./Reveal";
import { personal } from "../data/portfolio";
import { Mail, Phone, MapPin, Send, Check, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./GithubIcon";
import "./Contact.css";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="mx-auto max-w-[1220px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-[24px] sm:rounded-[32px] bg-gradient-to-br from-violet-600 via-indigo-600 to-cyan-600 p-[1px]">
            <div className="rounded-[23px] sm:rounded-[31px] bg-[#0A0A0A] overflow-hidden">
              <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
                {/* Left */}
                <div className="p-7 sm:p-10 lg:p-12">
                  <span className="inline-flex px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-semibold tracking-wide text-white/70 uppercase">Contact</span>
                  <h2 className="mt-4 text-[28px] sm:text-[36px] font-bold tracking-tight text-white leading-tight">Let&apos;s Build Something <span className="gradient-text">Great Together.</span></h2>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-white/60">I&apos;m currently open to frontend development opportunities where I can contribute my React.js and Next.js experience to building impactful products.</p>

                  <div className="mt-8 space-y-3">
                    <a href={`mailto:${personal.email}`} className="flex items-center gap-4 rounded-2xl bg-white/[0.06] border border-white/10 p-4 hover:bg-white/10 transition group">
                      <span className="w-11 h-11 rounded-xl bg-white text-black flex items-center justify-center shrink-0"><Mail size={18} /></span>
                      <span className="min-w-0"><span className="text-xs font-semibold tracking-wide uppercase text-white/40">Email</span><span className="block text-sm font-medium text-white truncate">{personal.email}</span></span>
                      <ArrowUpRight size={16} className="ml-auto text-white/30 group-hover:text-white/60" />
                    </a>
                    <a href={`tel:${personal.phone}`} className="flex items-center gap-4 rounded-2xl bg-white/[0.06] border border-white/10 p-4 hover:bg-white/10 transition group">
                      <span className="w-11 h-11 rounded-xl bg-white/[0.08] border border-white/10 flex items-center justify-center text-white"><Phone size={18} /></span>
                      <span><span className="text-xs font-semibold tracking-wide uppercase text-white/40">Phone</span><span className="block text-sm font-medium text-white">{personal.phone}</span></span>
                    </a>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-2xl bg-white/[0.04] border border-white/5 p-4">
                        <MapPin size={16} className="text-violet-400" />
                        <div className="text-xs font-semibold tracking-wide uppercase text-white/40 mt-2">Location</div>
                        <div className="text-sm font-medium text-white">{personal.location}</div>
                      </div>
                      <a href={personal.github} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-white/[0.04] border border-white/5 p-4 hover:bg-white/10 transition block">
                        <GithubIcon size={16} className="text-white" />
                        <div className="text-xs font-semibold tracking-wide uppercase text-white/40 mt-2">GitHub</div>
                        <div className="text-xs font-medium text-white truncate">Preeti11082000</div>
                      </a>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a href={personal.resumePath} download className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition">Download Resume</a>
                    <a href={personal.github} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full bg-white/10 border border-white/10 text-white text-sm font-medium hover:bg-white/15 transition">View GitHub</a>
                  </div>
                </div>

                {/* Right form */}
                <div className="bg-[#12131A] border-t lg:border-t-0 lg:border-l border-white/10 p-7 sm:p-10 lg:p-12">
                  <h3 className="text-lg font-bold text-white">Send a message</h3>
                  <p className="text-sm text-white/50 mt-1"></p>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
                    <div>
                      <label htmlFor="name" className="text-xs font-semibold tracking-wide uppercase text-white/60">Name</label>
                      <input id="name" value={form.name} onChange={e=>setForm({...form, name: e.target.value})} placeholder="Your name" required className="mt-1.5 w-full rounded-xl bg-white/[0.06] border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.08] transition" />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-xs font-semibold tracking-wide uppercase text-white/60">Email</label>
                      <input id="email" type="email" value={form.email} onChange={e=>setForm({...form, email: e.target.value})} placeholder="you@company.com" required className="mt-1.5 w-full rounded-xl bg-white/[0.06] border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.08] transition" />
                    </div>
                    <div>
                      <label htmlFor="message" className="text-xs font-semibold tracking-wide uppercase text-white/60">Message</label>
                      <textarea id="message" value={form.message} onChange={e=>setForm({...form, message: e.target.value})} placeholder="Tell me about the opportunity..." required rows={5} className="mt-1.5 w-full rounded-xl bg-white/[0.06] border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.08] transition resize-none" />
                    </div>

                    <button type="submit" className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold text-sm hover:opacity-90 transition shadow-lg shadow-violet-600/20">
                      {sent ? <><Check size={16}/> Message ready — check email app</> : <><Send size={16}/> Send Message</>}
                    </button>
                    {/* <p className="text-center text-xs text-white/30">Form is demo-only (mailto). No data is stored.</p> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
