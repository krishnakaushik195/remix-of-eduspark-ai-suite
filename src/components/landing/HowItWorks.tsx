import { motion } from "framer-motion";
import { Upload, Cpu, Rocket } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Upload,
    title: "Upload Content",
    description:
      "Teachers upload notes, PDFs, or paste any text. Our system reads and understands your material.",
    color: "text-primary",
    bg: "bg-primary/10",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    step: "02",
    icon: Cpu,
    title: "AI Processing",
    description:
      "Our AI analyzes the content and generates quizzes, summaries, flashcards, and analytics-ready datasets.",
    color: "text-secondary",
    bg: "bg-secondary/10",
    gradient: "from-secondary/20 to-secondary/5",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Learn & Improve",
    description:
      "Students take quizzes, receive instant feedback, earn rewards, and get personalized improvement insights.",
    color: "text-accent",
    bg: "bg-accent/10",
    gradient: "from-accent/20 to-accent/5",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-secondary/15 text-secondary mb-4 uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            From upload to insight{" "}
            <span className="gradient-text">in seconds</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-30" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Step bubble */}
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    className={`relative w-24 h-24 rounded-3xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 border border-white/40 shadow-md`}
                  >
                    <Icon className={`w-10 h-10 ${step.color}`} />
                    {/* Step number */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-card border-2 border-border flex items-center justify-center text-xs font-bold text-foreground font-mono">
                      {step.step}
                    </div>
                  </motion.div>

                  {/* Connector arrow */}
                  {i < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-2">
                      <div className="w-0.5 h-8 bg-gradient-to-b from-border to-transparent" />
                    </div>
                  )}

                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
