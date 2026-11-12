import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Send, Mail, MapPin, Phone, CheckCircle2, Loader2, ArrowRight } from "lucide-react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const recipientEmail = "sridharnaagarajan@gmail.com";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Message from ${formData.name}`,
          _template: "table",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 8000);
      } else {
        throw new Error("Submit failed");
      }
    } catch {
      const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(
        `Portfolio Message from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.open(mailtoUrl, "_blank");
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 8000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: recipientEmail,
      href: `mailto:${recipientEmail}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9003236836",
      href: "tel:+919003236836",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tamil Nadu, India",
      href: "#",
    },
  ];

  const inputClass = (field: string) =>
    `w-full bg-white/5 border rounded-xl px-5 py-4 text-sm text-white placeholder:text-slate-500 outline-none transition-all duration-300 ${
      focused === field
        ? "border-cyan-400 bg-white/8 shadow-[0_0_0_3px_rgba(34,211,238,0.12)]"
        : "border-white/10 hover:border-white/20"
    }`;

  return (
    <section id="contact" className="py-28 relative scroll-mt-24 overflow-hidden z-10">
      {/* Giant Low Contrast Background Typography */}
      <div className="bg-giant-text">CONTACT</div>

      <div className="section-divider-dimensional mb-20" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-20">
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.3em] text-cyan-400 uppercase mb-5 border border-cyan-400/30 bg-cyan-400/5 px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Available for opportunities
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-5">
              Let's Build Something <span className="text-gradient">Together</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
              Whether it's a collaboration, internship, freelance project, or just a friendly chat — my inbox is always open.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          {/* Left — Contact Info */}
          <AnimatedSection delay={0.1} className="lg:col-span-2">
            <div className="space-y-5">

              {/* Avatar / Identity card */}
              <div className="solid-card border border-white/10 p-7 relative overflow-hidden">
                {/* Subtle gradient orb */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center text-xl font-black text-white shadow-lg">
                      SN
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg leading-tight">Sridhar N</div>
                      <div className="text-cyan-400 text-xs tracking-wide mt-0.5">Full Stack Developer</div>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Currently open to full-time roles, internships, and collaborative projects. I respond within 24 hours.
                  </p>
                </div>
              </div>

              {/* Contact details */}
              <div className="space-y-3">
                {contactInfo.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i + 0.2 }}
                    className="flex items-center gap-4 p-4 solid-card border border-white/10 rounded-xl hover:border-cyan-400/40 hover:bg-white/5 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 shrink-0 group-hover:bg-cyan-400/20 transition-colors">
                      <item.icon size={16} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-slate-500 uppercase tracking-widest mb-0.5">{item.label}</div>
                      <div className="text-white text-sm font-medium truncate">{item.value}</div>
                    </div>
                    <ArrowRight size={14} className="text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all ml-auto shrink-0" />
                  </motion.a>
                ))}
              </div>

              {/* Quick note */}
              <div className="text-xs text-slate-500 text-center pt-2">
                All messages go directly to my inbox at<br />
                <span className="text-cyan-400">{recipientEmail}</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — Contact Form */}
          <AnimatedSection delay={0.25} className="lg:col-span-3">
            <div className="solid-card border border-white/10 p-8 relative overflow-hidden">
              {/* Subtle glow */}
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-indigo-500/8 rounded-full blur-3xl pointer-events-none" />

              <div className="relative">
                <h3 className="text-xl font-bold text-white mb-1">Send a message</h3>
                <p className="text-slate-400 text-sm mb-8">
                  Fill out the form and I'll get back to you as soon as possible.
                </p>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="flex flex-col items-center justify-center text-center py-16 gap-5"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center">
                        <CheckCircle2 size={30} className="text-emerald-400" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg mb-1">Message Sent!</div>
                        <p className="text-slate-400 text-sm max-w-xs">
                          Thanks for reaching out. I'll review your message and reply to <span className="text-cyan-400">{formData.email || "your inbox"}</span> shortly.
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="text-xs text-slate-400 tracking-wide uppercase">Your Name</label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            onFocus={() => setFocused("name")}
                            onBlur={() => setFocused(null)}
                            placeholder="Sridhar N"
                            className={inputClass("name")}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs text-slate-400 tracking-wide uppercase">Your Email</label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            onFocus={() => setFocused("email")}
                            onBlur={() => setFocused(null)}
                            placeholder="you@example.com"
                            className={inputClass("email")}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs text-slate-400 tracking-wide uppercase">Message</label>
                        <textarea
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          onFocus={() => setFocused("message")}
                          onBlur={() => setFocused(null)}
                          placeholder="Hi Sridhar, I'd love to discuss..."
                          className={`${inputClass("message")} resize-none`}
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                        <p className="text-xs text-slate-500">
                          By sending, you agree your message is delivered to my inbox directly.
                        </p>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn-3d-primary px-7 py-3.5 text-sm font-semibold flex items-center gap-2.5 shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 size={16} className="animate-spin" />
                              <span>Sending...</span>
                            </>
                          ) : (
                            <>
                              <Send size={16} />
                              <span>Send Message</span>
                            </>
                          )}
                        </button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
