import { motion } from "framer-motion";
import { X, Check, Clock, BarChart2, RefreshCw, MessageSquare, Zap, Target, Award, LayoutDashboard } from "lucide-react";

const problems = [
  { icon: Clock, text: "Teachers spend hours creating quizzes manually" },
  { icon: BarChart2, text: "Students don't know their weak areas" },
  { icon: RefreshCw, text: "Learning feels repetitive and boring" },
  { icon: MessageSquare, text: "Feedback is slow or unclear" },
];

const solutions = [
  { icon: Zap, text: "Upload notes → AI generates quizzes instantly" },
  { icon: Target, text: "Instant feedback with topic-level insights" },
  { icon: Award, text: "Rewards, badges, and leaderboards" },
  { icon: LayoutDashboard, text: "All-in-one smart learning platform" },
];

export default function ProblemSolution() {
  return (
    <section className="py-24 section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4 uppercase tracking-wider">
            The Problem & Solution
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            The old way is{" "}
            <span className="line-through text-muted-foreground">broken.</span>
            <br />
            <span className="gradient-text">We fixed it.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 bg-muted/50 border border-border"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                <X className="w-5 h-5 text-destructive" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  The Old Way
                </h3>
                <p className="text-sm text-muted-foreground">Painful & inefficient</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {problems.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-background/60"
                  >
                    <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {p.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10 border border-primary/20 relative overflow-hidden"
          >
            {/* Glow */}
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-8 relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  The EduSpark Way
                </h3>
                <p className="text-sm text-primary font-medium">Smart & delightful</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 relative">
              {solutions.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-card/80 border border-primary/10 shadow-sm"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-sm text-foreground font-medium leading-relaxed">
                      {s.text}
                    </p>
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5 ml-auto" />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
