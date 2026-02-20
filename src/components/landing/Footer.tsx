import { Zap, Twitter, Github, Linkedin, Mail } from "lucide-react";

const footerLinks = {
  Product: [
    "Features",
    "For Teachers",
    "For Students",
    "Pricing",
    "Changelog",
  ],
  Company: [
    "About Us",
    "Blog",
    "Careers",
    "Press Kit",
  ],
  Support: [
    "Documentation",
    "Help Center",
    "Community",
    "Contact Us",
  ],
  Legal: [
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy",
    "GDPR",
  ],
};

const socials = [
  { icon: Twitter, label: "Twitter" },
  { icon: Github, label: "GitHub" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Mail, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" fill="white" />
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                Edu<span className="gradient-text">Spark</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-6">
              The AI-powered platform that makes quizzes smarter, learning faster,
              and teaching more rewarding.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href="#"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-xl bg-muted hover:bg-primary hover:text-white transition-all duration-200 flex items-center justify-center text-muted-foreground"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2025 EduSpark Inc. All rights reserved. Made with ⚡ for educators everywhere.
          </p>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-xs text-muted-foreground">
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
