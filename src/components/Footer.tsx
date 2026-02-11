import { Linkedin, Instagram, Twitter, Github } from "lucide-react";

const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <p className="font-mono text-sm text-muted-foreground tracking-wider">
        © 2026 Sridhar. All rights reserved.
      </p>
      <div className="flex items-center gap-4">
        {[Linkedin, Instagram, Twitter, Github].map((Icon, i) => (
          <a key={i} href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
