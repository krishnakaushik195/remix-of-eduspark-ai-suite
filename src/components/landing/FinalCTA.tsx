import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Users } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-28 section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dark-section" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-secondary/15 blur-3xl animate-float-delayed pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(hsl(262 83% 65%) 1px, transparent 1px), linear-gradient(90deg, hsl(262 83% 65%) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-4xl mx-auto relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold border border-primary/40 text-primary/80 mb-8 bg-primary/10 uppercase tracking-wider">
            Get Started Today — Free Forever
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-5xl md:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-6"
        >
          Turn Every Lesson Into{" "}
          <span className="gradient-text-accent">an Insight.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Join 12,000+ educators already using EduSpark to create smarter quizzes,
          track real progress, and make every learning moment count.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#signup"
            className="group flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-accent text-foreground font-bold text-base hover:opacity-90 transition-all duration-200 glow-accent shadow-lg"
          >
            Get Started Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#teachers"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-white/20 text-white font-semibold text-base hover:bg-white/10 transition-all duration-200"
          >
            <GraduationCap className="w-5 h-5 text-primary-glow" />
            For Teachers
          </a>
          <a
            href="#students"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-white/20 text-white font-semibold text-base hover:bg-white/10 transition-all duration-200"
          >
            <Users className="w-5 h-5 text-secondary" />
            For Students
          </a>
        </motion.div>

        {/* Trust stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-8 mt-16"
        >
          {[
            { value: "12K+", label: "Educators" },
            { value: "500K+", label: "Quizzes Generated" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "150+", label: "Schools" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-display text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-xs text-white/50 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
