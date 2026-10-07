import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Send, Mail, MapPin, Phone, Hash, User, Terminal, Cpu } from "lucide-react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [activeChannel, setActiveChannel] = useState("general");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  const channels = [
    { id: "general", icon: Hash, label: "general" },
    { id: "opportunities", icon: Hash, label: "opportunities" },
  ];

  const directMessages = [
    { id: "email", icon: Mail, label: "sridharnaagarajan@gmail.com", href: "mailto:sridharnaagarajan@gmail.com" },
    { id: "phone", icon: Phone, label: "+91 9003236836", href: "tel:+919003236836" },
    { id: "location", icon: MapPin, label: "Tamil Nadu, India", href: "#" },
  ];

  return (
    <section id="contact" className="py-28 relative scroll-mt-24 overflow-hidden z-10">
      {/* Giant Low Contrast Background Typography */}
      <div className="bg-giant-text">CONTACT</div>

      <div className="section-divider-dimensional mb-20" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="font-mono text-xs tracking-[0.3em] text-cyan-400 uppercase mb-3 border border-cyan-400/40 bg-slate-950 px-4 py-1.5 rounded-md shadow-lg inline-flex items-center gap-2">
              <Cpu size={14} /> 07 / TRANSMISSION HUD
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase">
              LET'S <span className="text-gradient">COLLABORATE & CONNECT</span>
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          {/* Solid 3D Terminal / Messenger Workstation (NO GLASS) */}
          <div className="solid-card border-2 border-white/15 overflow-hidden flex flex-col md:flex-row h-[650px] shadow-2xl">
            
            {/* Sidebar Channels */}
            <div className="w-full md:w-72 solid-card-secondary p-5 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-9 h-9 rounded-lg bg-slate-950 border border-cyan-400/40 flex items-center justify-center text-cyan-400">
                    <Terminal size={18} />
                  </div>
                  <div className="font-mono font-bold text-white text-sm">SRIDHAR_TERMINAL</div>
                </div>

                <div className="mb-8">
                  <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest mb-3">CHANNELS</div>
                  <div className="space-y-1">
                    {channels.map((ch) => (
                      <button
                        key={ch.id}
                        onClick={() => setActiveChannel(ch.id)}
                        className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg font-mono text-xs font-bold transition-all ${
                          activeChannel === ch.id
                            ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/40"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        <ch.icon size={14} />
                        <span>{ch.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest mb-3">DIRECT INFO</div>
                  <div className="space-y-2">
                    {directMessages.map((dm) => (
                      <a
                        key={dm.id}
                        href={dm.href}
                        className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-950 border border-white/10 text-xs font-mono text-slate-300 hover:text-cyan-300 hover:border-cyan-400 transition-all truncate"
                      >
                        <dm.icon size={14} className="text-cyan-400 shrink-0" />
                        <span className="truncate">{dm.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-[9px] font-mono text-slate-500 uppercase tracking-widest mt-6">
                SYS.TERMINAL // READY
              </div>
            </div>

            {/* Main Chat / Contact Form Container */}
            <div className="flex-1 bg-[#07090e] flex flex-col justify-between p-6 sm:p-8">
              
              {/* Messages Display */}
              <div className="space-y-6 overflow-y-auto pr-2 mb-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-cyan-400/40 flex items-center justify-center text-cyan-400 font-mono font-bold shrink-0">
                    SN
                  </div>
                  <div className="solid-card-secondary p-4 border border-white/10 max-w-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-white text-sm font-mono">Sridhar N</span>
                      <span className="text-[10px] font-mono text-cyan-400">DEV // BOT</span>
                    </div>
                    <p className="text-slate-300 text-sm font-sans leading-relaxed">
                      Hello! 👋 Welcome to my interactive portfolio workspace. Fill out the form below to transmit your message directly to my inbox.
                    </p>
                  </div>
                </div>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 font-mono font-bold shrink-0">
                      SN
                    </div>
                    <div className="solid-card-secondary p-4 border border-emerald-400/40 text-emerald-300 font-mono text-xs">
                      ✔ TRANSMISSION RECEIVED SUCCESSFULLY! I WILL RESPOND SHORTLY. 🚀
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Solid Transmission Form */}
              <form onSubmit={handleSubmit} className="solid-card-secondary p-4 border border-white/15 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <User size={14} className="absolute left-3.5 top-3.5 text-cyan-400" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Full Name"
                      className="w-full bg-slate-950 border border-white/15 rounded-lg py-2.5 pl-10 pr-4 text-xs font-mono text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div className="relative">
                    <Mail size={14} className="absolute left-3.5 top-3.5 text-cyan-400" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Your Email Address"
                      className="w-full bg-slate-950 border border-white/15 rounded-lg py-2.5 pl-10 pr-4 text-xs font-mono text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={`Transmit message on #${activeChannel}...`}
                    className="w-full bg-slate-950 border border-white/15 rounded-lg p-3 text-xs font-mono text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 resize-none"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={submitted}
                    className="btn-3d-primary px-8 py-3 text-xs font-mono tracking-widest uppercase flex items-center gap-2"
                  >
                    <Send size={15} />
                    <span>TRANSMIT_MESSAGE()</span>
                  </button>
                </div>
              </form>

            </div>

          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
