import { Linkedin, Instagram, Twitter, Github, Cpu } from "lucide-react";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/sridhar-n-896a7b293", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/sridhar__.n?igsh=MTEwN3hoem05eW84NA==", label: "Instagram" },
  { icon: Twitter, href: "https://x.com/SrIdharN09", label: "Twitter" },
  { icon: Github, href: "https://github.com/Sridharn97", label: "GitHub" },
];

export const Footer = () => (
  <footer className="py-12 border-t border-white/10 bg-[#04060a] relative z-10">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <div className="w-7 h-7 rounded bg-slate-900 border border-cyan-400/40 flex items-center justify-center text-cyan-400">
          <Cpu size={14} />
        </div>
        <p className="font-mono text-xs text-slate-400 tracking-wider">
          © 2026 SRIDHAR N // 3D DIGITAL ENVIRONMENT // ALL RIGHTS RESERVED
        </p>
      </div>

      <div className="flex items-center gap-3">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="w-9 h-9 rounded-lg solid-card-secondary border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 hover:scale-110 transition-all"
          >
            <social.icon size={16} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
