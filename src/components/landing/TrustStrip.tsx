import { motion } from "framer-motion";
import { GraduationCap, Brain, Gamepad2, ShieldCheck } from "lucide-react";

const items = [
  { icon: GraduationCap, label: "Built for Teachers & Students" },
  { icon: Brain, label: "AI-Powered Insights" },
  { icon: Gamepad2, label: "Gamified Learning Experience" },
  { icon: ShieldCheck, label: "Secure & Cloud-Based" },
];

export default function TrustStrip() {
  return (
    <section className="bg-card border-y border-border py-5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -2 }}
                className="flex items-center gap-3 cursor-default"
              >
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground whitespace-nowrap">
                  {item.label}
                </span>
                {i < items.length - 1 && (
                  <div className="hidden md:block w-px h-5 bg-border ml-3" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
