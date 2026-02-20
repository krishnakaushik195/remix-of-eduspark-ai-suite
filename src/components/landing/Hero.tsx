import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Brain, TrendingUp, Trophy } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";

const floatingCards = [
  {
    icon: Brain,
    label: "AI Quiz Generated",
    value: "42 Questions",
    sub: "from your PDF",
    color: "from-primary/20 to-primary/10",
    iconColor: "text-primary",
    delay: 0.8,
    position: "top-4 -left-8 md:-left-16",
    animation: "float-animation",
  },
  {
    icon: TrendingUp,
    label: "Class Average",
    value: "87%",
    sub: "+12% this week",
    color: "from-secondary/20 to-secondary/10",
    iconColor: "text-secondary",
    delay: 1.0,
    position: "top-1/2 -right-6 md:-right-12",
    animation: "float-animation-delayed",
  },
  {
    icon: Trophy,
    label: "Top Scorer",
    value: "Alex M.",
    sub: "1,240 XP",
    color: "from-accent/20 to-accent/10",
    iconColor: "text-accent",
    delay: 1.2,
    position: "bottom-8 -left-4 md:-left-10",
    animation: "float-animation-slow",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen hero-bg noise-bg flex flex-col justify-center overflow-hidden pt-16">
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/10 blur-3xl animate-float-delayed pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Copy */}
        <div className="flex flex-col gap-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-fit"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 text-sm font-medium">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-muted-foreground">Powered by Advanced AI</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.08] tracking-tight"
          >
            Smarter Quizzes.{" "}
            <br />
            Better Learning.{" "}
            <br />
            <span className="gradient-text">Powered by AI.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
          >
            Turn notes or PDFs into intelligent quizzes in seconds. Track
            performance, identify weak areas, and make learning engaging with
            rewards.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mt-2"
          >
            <a
              href="#signup"
              className="group flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-primary text-white font-semibold text-base hover:opacity-90 transition-all duration-200 shadow-glow-primary pulse-glow"
            >
              Create AI Quiz Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#how-it-works"
              className="group flex items-center gap-2 px-7 py-3.5 rounded-2xl border-2 border-primary/30 text-foreground font-semibold text-base hover:border-primary hover:bg-primary/5 transition-all duration-200"
            >
              <Play className="w-4 h-4 text-primary" />
              See How It Works
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-4 mt-2"
          >
            <div className="flex -space-x-2">
              {["🧑‍🏫", "👩‍🎓", "👨‍🎓", "👩‍🏫"].map((emoji, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full bg-gradient-primary flex items-center justify-center text-sm border-2 border-background"
                >
                  {emoji}
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">
                Loved by{" "}
                <span className="gradient-text">12,000+ educators</span>
              </p>
              <p className="text-xs text-muted-foreground">
                ⭐⭐⭐⭐⭐ 4.9/5 rating
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right: Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: 32 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="relative"
        >
          {/* Main image */}
          <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-lg)] border border-white/20">
            <img
              src={heroDashboard}
              alt="EduSpark AI Dashboard"
              className="w-full object-cover"
            />
            {/* Overlay shimmer */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
          </div>

          {/* Floating cards */}
          {floatingCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: card.delay }}
                className={`absolute ${card.position} card-glass rounded-2xl p-3 min-w-[140px] ${card.animation}`}
              >
                <div className={`flex items-center gap-2 mb-1`}>
                  <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center`}>
                    <Icon className={`w-3.5 h-3.5 ${card.iconColor}`} />
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">
                    {card.label}
                  </span>
                </div>
                <p className="text-base font-bold text-foreground">{card.value}</p>
                <p className="text-xs text-muted-foreground">{card.sub}</p>
              </motion.div>
            );
          })}

          {/* Decorative ring */}
          <div className="absolute -inset-4 rounded-[2.5rem] border border-primary/10 pointer-events-none animate-spin-slow" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground">Scroll to explore</span>
        <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce-slow" />
        </div>
      </motion.div>
    </section>
  );
}
