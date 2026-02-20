import { motion } from "framer-motion";
import { Brain, BarChart3, Users, Trophy, BookOpen, Bot } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Quiz Generator",
    description: "Generate MCQs, short answers, and true/false from PDFs or text instantly with one click.",
    gradient: "from-primary/20 to-primary/5",
    iconGradient: "bg-gradient-primary",
    badge: null,
  },
  {
    icon: BarChart3,
    title: "Smart Learning Dashboard",
    description: "Track scores, identify weak topics, and monitor improvement over time with beautiful analytics.",
    gradient: "from-secondary/20 to-secondary/5",
    iconGradient: "from-secondary to-secondary/70",
    badge: null,
  },
  {
    icon: Users,
    title: "Teacher Panel",
    description: "Create classes, assign quizzes, and track student performance with a clean, intuitive interface.",
    gradient: "from-accent/20 to-accent/5",
    iconGradient: "from-accent to-accent/70",
    badge: null,
  },
  {
    icon: Trophy,
    title: "Leaderboard & Rewards",
    description: "Gamified learning with XP points, achievement badges, and live class rankings.",
    gradient: "from-accent-amber/20 to-accent-amber/5",
    iconGradient: "from-accent-amber to-accent-amber/70",
    badge: null,
  },
  {
    icon: BookOpen,
    title: "Study Notes & Flashcards",
    description: "Convert chapters into concise notes and smart revision flashcards in seconds.",
    gradient: "from-primary/15 to-secondary/10",
    iconGradient: "from-primary/80 to-secondary",
    badge: null,
  },
  {
    icon: Bot,
    title: "AI Chatbot Assistant",
    description: "Get instant, syllabus-based answers from your personal AI tutor available 24/7.",
    gradient: "from-muted to-muted/50",
    iconGradient: "from-muted-foreground/50 to-muted-foreground/30",
    badge: "Coming Soon",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features() {
  return (
    <section id="features" className="py-24 section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-accent/15 text-accent mb-4 uppercase tracking-wider">
            Core Features
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Everything you need to{" "}
            <span className="gradient-text">teach smarter</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            One platform. Infinite possibilities. Built for the modern classroom.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            const isComingSoon = feature.badge === "Coming Soon";
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={!isComingSoon ? { y: -6, transition: { duration: 0.2 } } : {}}
                className={`feature-card rounded-3xl p-7 border border-border relative overflow-hidden group cursor-default ${
                  isComingSoon ? "opacity-75" : ""
                }`}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Badge */}
                {feature.badge && (
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-muted text-xs font-semibold text-muted-foreground border border-border">
                    {feature.badge}
                  </div>
                )}

                <div className="relative">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.iconGradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Text */}
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover glow edge */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
