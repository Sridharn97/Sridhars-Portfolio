import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Send, Mail, MapPin, Phone, MessageSquare, Hash, User, ChevronRight, Terminal } from "lucide-react";

const ContactSection = () => {
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
    <section id="contact" className="py-24 relative scroll-mt-24">
      <div className="section-divider mb-16" />
      <div className="container mx-auto px-6 max-w-6xl">
        
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-16">
            <p className="font-mono text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4 border border-border/50 bg-muted/30 px-4 py-1.5 rounded-full shadow-sm">
              — Connect
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Let's <span className="text-gradient">collaborate</span>
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          {/* Messenger Window */}
          <div className="flex h-[700px] md:h-[600px] border border-border/40 rounded-2xl overflow-hidden glass-card shadow-2xl relative bg-background/40">
            
            {/* Sidebar (Desktop) */}
            <div className="hidden md:flex flex-col w-72 bg-card/40 border-r border-border/40 p-4">
              {/* Workspace Header */}
              <div className="flex items-center gap-3 px-2 mb-8 mt-2">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30">
                  <Terminal size={16} className="text-primary" />
                </div>
                <div className="font-bold font-mono tracking-tight text-foreground">Sridhar_Workspace</div>
              </div>

              {/* Channels */}
              <div className="mb-8">
                <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest px-2 mb-3">Channels</div>
                <div className="space-y-1">
                  {channels.map((ch) => (
                    <button
                      key={ch.id}
                      onClick={() => setActiveChannel(ch.id)}
                      className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeChannel === ch.id 
                          ? "bg-primary/20 text-primary" 
                          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                      }`}
                    >
                      <ch.icon size={14} />
                      {ch.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Direct Info */}
              <div>
                <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest px-2 mb-3">Direct Info</div>
                <div className="space-y-1">
                  {directMessages.map((dm) => (
                    <a
                      key={dm.id}
                      href={dm.href}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors group"
                    >
                      <div className="relative">
                        <dm.icon size={14} className="group-hover:text-primary transition-colors" />
                      </div>
                      <span className="truncate">{dm.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col relative bg-background/20 backdrop-blur-sm">
              
              {/* Top Bar */}
              <div className="h-16 border-b border-border/40 flex items-center px-6 gap-3 bg-card/30 backdrop-blur-md sticky top-0 z-10">
                <Hash className="text-muted-foreground" size={20} />
                <span className="font-bold text-foreground tracking-wide">{activeChannel}</span>
              </div>

              {/* Chat History */}
              <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-8">
                
                {/* Intro Message */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold text-primary">SN</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-foreground">Sridhar</span>
                      <span className="text-xs text-muted-foreground bg-muted/50 px-1.5 py-0.5 rounded">APP</span>
                      <span className="text-xs text-muted-foreground font-mono">Today at 9:00 AM</span>
                    </div>
                    <div className="text-muted-foreground font-sans leading-relaxed space-y-4">
                      <p>Hey there! 👋 Thanks for visiting my portfolio.</p>
                      <p>If you have a project in mind, want to discuss an opportunity, or just want to say hi, you can drop a message below. I'll get back to you as soon as possible.</p>
                      <div className="bg-muted/30 border border-border/40 rounded-lg p-4 mt-2 inline-block">
                        <p className="text-sm font-mono text-primary/80">System: Ready to receive transmissions.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Success Message Animation */}
                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="flex gap-4"
                    >
                      <div className="w-10 h-10 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="font-bold text-green-500">SN</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-foreground">Sridhar</span>
                          <span className="text-xs text-muted-foreground bg-muted/50 px-1.5 py-0.5 rounded">APP</span>
                          <span className="text-xs text-muted-foreground font-mono">Just now</span>
                        </div>
                        <div className="text-foreground font-sans bg-green-500/10 border border-green-500/20 px-4 py-3 rounded-r-xl rounded-bl-xl shadow-lg">
                          Message received successfully! I'll be in touch soon. 🚀
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>

              {/* Chat Input Area */}
              <div className="p-6 bg-card/20 backdrop-blur-md border-t border-border/40">
                <form onSubmit={handleSubmit} className="bg-background/80 border border-border/50 rounded-xl overflow-hidden focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/50 transition-all shadow-inner">
                  
                  {/* Inline Form Fields */}
                  <div className="flex flex-col md:flex-row border-b border-border/40 bg-muted/10">
                    <div className="flex-1 border-b md:border-b-0 md:border-r border-border/40 relative">
                      <User className="absolute left-3 top-3 text-muted-foreground" size={14} />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full bg-transparent py-2.5 pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none font-mono"
                      />
                    </div>
                    <div className="flex-1 relative">
                      <Mail className="absolute left-3 top-3 text-muted-foreground" size={14} />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Your Email"
                        className="w-full bg-transparent py-2.5 pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none font-mono"
                      />
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div className="relative p-2">
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={`Message #${activeChannel}...`}
                      rows={3}
                      className="w-full bg-transparent p-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none resize-none font-sans"
                    />
                    
                    {/* Submit Button */}
                    <div className="flex justify-end p-2">
                      <motion.button
                        type="submit"
                        disabled={submitted}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-2.5 rounded-lg flex items-center justify-center transition-colors ${
                          formData.message && formData.name && formData.email
                            ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(var(--primary),0.4)]"
                            : "bg-muted text-muted-foreground cursor-not-allowed"
                        }`}
                      >
                        <Send size={16} className={formData.message ? "ml-0.5" : ""} />
                      </motion.button>
                    </div>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
