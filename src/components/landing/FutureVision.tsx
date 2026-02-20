import { motion } from "framer-motion";
import { Bot, Map, LineChart, Sparkles } from "lucide-react";

const visions = [
  {
    icon: Bot,
    title: "Advanced AI Chatbot",
    description: "A syllabus-aware tutor that answers student questions, explains concepts, and guides learning 24/7.",
  },
  {
    icon: Map,
    title: "Personalized Learning Paths",
    description: "AI curates a custom study journey for each student based on their performance patterns and goals.",
  },
  {
    icon: LineChart,
    title: "Deeper Performance Analytics",
    description: "Predictive insights, exam readiness scores, and parent-friendly progress reports.",
  },
];

export default function FutureVision() {
  return (
    <section className="py-24 section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-primary/8 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Future Vision</span>
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Built for today.{" "}
            <span className="gradient-text">Evolving for tomorrow.</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-xl mx-auto">
            We're just getting started. The future of EduSpark is even smarter.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {visions.map((vision, i) => {
            const Icon = vision.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative p-8 rounded-3xl glass border border-primary/15 group hover:border-primary/40 transition-all duration-300"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-glow-primary">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {vision.title}
                    </h3>
                    <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                      Soon
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {vision.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
