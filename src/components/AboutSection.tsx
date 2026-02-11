import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { Code2, Layers, Lightbulb, Rocket, GraduationCap } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Clean Code", desc: "Writing maintainable, scalable code" },
  { icon: Layers, title: "Full Stack", desc: "Front-end to back-end expertise" },
  { icon: Lightbulb, title: "Problem Solver", desc: "150+ LeetCode problems solved" },
  { icon: Rocket, title: "Fast Learner", desc: "Always exploring new technologies" },
];

const education = [
  {
    institution: "Sri Eshwar College of Engineering",
    degree: "B.E (CSE)",
    score: "CGPA: 7.82 (Up to 5th Sem)",
    year: "2023 – 2027",
  },
  {
    institution: "Chavara Vidya Bhavan",
    degree: "HSC",
    score: "89.67%",
    year: "2021 – 2023",
  },
  {
    institution: "Chavara Vidya Bhavan",
    degree: "SSLC",
    score: "Pass",
    year: "2020 – 2021",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="section-divider mb-32" />
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <p className="font-mono text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
            — About Me
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-12">
            Turning ideas into
            <br />
            <span className="text-gradient">digital reality</span>
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection delay={0.2}>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Hi, I'm <span className="text-foreground font-semibold">Sridhar</span>, a dedicated Full Stack Developer and eager tech enthusiast. My skill set spans both front-end and back-end technologies, allowing me to create seamless and dynamic web applications.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm passionate about continuous learning and exploring new technologies. I enjoy building practical applications that solve real problems and improve user experience.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.05, borderColor: "hsl(0 0% 30%)" }}
                  className="border border-border rounded-lg p-6 text-center transition-colors duration-300"
                >
                  <item.icon className="w-8 h-8 mx-auto mb-3 text-foreground" />
                  <div className="text-sm font-semibold text-foreground mb-1">
                    {item.title}
                  </div>
                  <div className="text-xs text-muted-foreground font-mono">
                    {item.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Education */}
        <AnimatedSection delay={0.3}>
          <div className="mt-20">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-6 h-6 text-foreground" />
              <h3 className="text-xl font-bold text-foreground">Education</h3>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {education.map((edu) => (
                <motion.div
                  key={edu.degree + edu.year}
                  whileHover={{ y: -4, borderColor: "hsl(0 0% 30%)" }}
                  className="border border-border rounded-lg p-6 transition-all duration-300"
                >
                  <div className="text-foreground font-semibold mb-1">{edu.institution}</div>
                  <div className="text-sm text-foreground font-medium mb-1">{edu.degree}</div>
                  <div className="text-xs text-muted-foreground font-mono mb-2">{edu.score}</div>
                  <div className="text-xs text-muted-foreground font-mono tracking-wider">{edu.year}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
