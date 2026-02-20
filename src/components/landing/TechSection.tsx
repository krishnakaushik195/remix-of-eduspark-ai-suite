import { motion } from "framer-motion";
import { Shield, Cloud, Cpu, Lock, Globe, Zap } from "lucide-react";

const techItems = [
  { icon: Cpu, label: "AI-Powered Core", desc: "Advanced LLM APIs" },
  { icon: Shield, label: "Secure Auth", desc: "End-to-end encryption" },
  { icon: Cloud, label: "Cloud-Native", desc: "99.9% uptime SLA" },
  { icon: Lock, label: "GDPR Compliant", desc: "Data privacy first" },
  { icon: Globe, label: "Global CDN", desc: "Ultra-fast worldwide" },
  { icon: Zap, label: "Real-time Sync", desc: "Instant updates" },
];

export default function TechSection() {
  return (
    <section className="py-20 section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-muted text-muted-foreground mb-4 uppercase tracking-wider">
            Tech & Reliability
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Enterprise-grade infrastructure.{" "}
            <span className="gradient-text">Zero compromise.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {techItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="flex flex-col items-center text-center p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-3 group-hover:bg-gradient-primary transition-all duration-300">
                  <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="text-sm font-bold text-foreground leading-tight">{item.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
