import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Send, Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 relative">
      <div className="section-divider mb-12" />
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <p className="font-mono text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
            — Get In Touch
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-10">
            Let's <span className="text-gradient">talk</span>
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Info Cards */}
          <AnimatedSection delay={0.2} className="flex flex-col justify-between">
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10 font-sans">
                Have a project in mind or just want to chat? I'm always open to
                discussing new opportunities, collaborations, and creative ideas.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Mail, text: "sridharnaagarajan@gmail.com", label: "Email Me" },
                  { icon: Phone, text: "+91 9003236836", label: "Call Me" },
                  { icon: MapPin, text: "Tamil Nadu, India", label: "Location" },
                ].map((item) => (
                  <div 
                    key={item.text} 
                    className="flex items-center gap-5 border border-border/40 rounded-xl p-4 glass-card glass-card-hover group cursor-default transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl border border-border/50 bg-muted/30 flex items-center justify-center group-hover:border-border group-hover:bg-muted/50 transition-colors duration-300 shrink-0 shadow-inner">
                      <item.icon size={18} className="text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider mb-0.5">{item.label}</div>
                      <span className="text-foreground font-medium text-sm md:text-base group-hover:text-foreground transition-colors">{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Form Console Card */}
          <AnimatedSection delay={0.4}>
            <div className="p-8 md:p-10 border border-border/40 rounded-2xl glass-card relative overflow-hidden group shadow-2xl">
              {/* Subtle grid background decoration */}
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none neural-grid" />

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div>
                  <label className="block text-xs font-mono tracking-widest text-muted-foreground mb-2 uppercase">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-border/60 py-3 text-foreground placeholder:text-muted-foreground/30 focus:border-foreground focus:outline-none transition-colors duration-300 font-mono text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono tracking-widest text-muted-foreground mb-2 uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-border/60 py-3 text-foreground placeholder:text-muted-foreground/30 focus:border-foreground focus:outline-none transition-colors duration-300 font-mono text-sm"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono tracking-widest text-muted-foreground mb-2 uppercase">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b border-border/60 py-3 text-foreground placeholder:text-muted-foreground/30 focus:border-foreground focus:outline-none transition-colors duration-300 resize-none font-mono text-sm"
                    placeholder="Tell me about your project or enquiry..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background font-semibold tracking-wider text-sm uppercase rounded-lg hover:bg-foreground/90 transition-all duration-300"
                >
                  {submitted ? "Message Sent!" : (
                    <>
                      <Send size={14} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
