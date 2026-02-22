import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Software Engineering",
    issuer: "JPMorgan Chase & Co.",
  },
  {
    title: "AWS Academy Graduate – Cloud Foundations",
    issuer: "Credly",
  },
  {
    title: "Learn Java Programming: Beginner to Master",
    issuer: "Udemy",
  },
  {
    title: "Mastering Data Structures and Algorithms Using C and C++",
    issuer: "Udemy",
  },
  {
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA",
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Google",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-16 relative">
      <div className="section-divider mb-12" />
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <p className="font-mono text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
            — Achievements
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-10">
            My <span className="text-gradient">certifications</span>
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <AnimatedSection key={cert.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4, borderColor: "hsl(0 0% 30%)" }}
                className="border border-border rounded-lg p-6 h-full transition-all duration-300 group ai-circuit-corners ai-glow-pulse"
              >
                <Award className="w-6 h-6 text-foreground mb-4 group-hover:rotate-12 transition-transform duration-300 tech-glitch-hover" />
                <h3 className="text-sm font-bold text-foreground mb-2 leading-snug tech-glitch-hover inline-block">{cert.title}</h3>
                <span className="text-xs font-mono text-muted-foreground tracking-wider">{cert.issuer}</span>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
