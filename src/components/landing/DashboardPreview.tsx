import { motion } from "framer-motion";
import { BarChart2, Users, FileText, TrendingUp, CheckCircle, Clock, BookOpen, Zap } from "lucide-react";

const teacherStats = [
  { icon: Users, label: "Active Students", value: "128", change: "+8 this week", color: "text-primary" },
  { icon: FileText, label: "Quizzes Created", value: "47", change: "+5 today", color: "text-secondary" },
  { icon: TrendingUp, label: "Avg. Score", value: "84%", change: "+6% vs last week", color: "text-accent" },
  { icon: CheckCircle, label: "Completion Rate", value: "92%", change: "Excellent!", color: "text-accent-amber" },
];

const studentTopics = [
  { topic: "Photosynthesis", score: 91, bar: "w-11/12" },
  { topic: "Cell Division", score: 76, bar: "w-9/12" },
  { topic: "Genetics", score: 58, bar: "w-7/12" },
  { topic: "Evolution", score: 45, bar: "w-5/12" },
  { topic: "Ecology", score: 83, bar: "w-10/12" },
];

export default function DashboardPreview() {
  return (
    <section className="py-24 section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4 uppercase tracking-wider">
            Dashboard Preview
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            A cockpit for{" "}
            <span className="gradient-text">every educator</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-xl mx-auto">
            Real-time insights at a glance. No spreadsheets. No guessing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Teacher Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-card border border-border shadow-lg overflow-hidden float-animation"
          >
            {/* Header bar */}
            <div className="px-6 py-4 border-b border-border bg-gradient-to-r from-primary/5 to-background flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive/70" />
                <div className="w-3 h-3 rounded-full bg-accent-amber/70" />
                <div className="w-3 h-3 rounded-full bg-accent/70" />
                <span className="ml-3 text-xs font-semibold text-muted-foreground">Teacher Dashboard</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-primary font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Live
              </div>
            </div>

            <div className="p-6">
              <p className="font-display font-bold text-foreground mb-4">
                Good morning, Ms. Johnson! 👋
              </p>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {teacherStats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="p-4 rounded-2xl bg-muted/50 border border-border"
                    >
                      <Icon className={`w-4 h-4 ${stat.color} mb-2`} />
                      <p className="text-xl font-bold font-mono text-foreground">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                      <p className={`text-xs font-medium mt-1 ${stat.color}`}>{stat.change}</p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Recent quizzes */}
              <div className="rounded-2xl bg-muted/30 p-4">
                <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                  Recent Quizzes
                </p>
                <div className="flex flex-col gap-2.5">
                  {[
                    { name: "Chapter 5 - Genetics", students: 24, avg: "82%" },
                    { name: "Cell Biology MCQ", students: 28, avg: "79%" },
                    { name: "Ecology Final", students: 30, avg: "88%" },
                  ].map((quiz, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                      <div>
                        <p className="text-sm font-medium text-foreground">{quiz.name}</p>
                        <p className="text-xs text-muted-foreground">{quiz.students} students</p>
                      </div>
                      <span className="text-sm font-bold text-primary font-mono">{quiz.avg}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Student Analytics */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-3xl bg-card border border-border shadow-lg overflow-hidden float-animation-delayed"
          >
            {/* Header bar */}
            <div className="px-6 py-4 border-b border-border bg-gradient-to-r from-secondary/5 to-background flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive/70" />
                <div className="w-3 h-3 rounded-full bg-accent-amber/70" />
                <div className="w-3 h-3 rounded-full bg-accent/70" />
                <span className="ml-3 text-xs font-semibold text-muted-foreground">Student Analytics</span>
              </div>
              <span className="text-xs text-muted-foreground">Alex M. — Grade 10</span>
            </div>

            <div className="p-6">
              {/* Score cards */}
              <div className="flex gap-3 mb-6">
                  {[
                    { icon: Zap, label: "Overall Score", value: "87%", iconClass: "text-primary", bgClass: "bg-primary/10" },
                    { icon: Clock, label: "Study Time", value: "4.2h", iconClass: "text-secondary", bgClass: "bg-secondary/10" },
                    { icon: BookOpen, label: "Topics Done", value: "18/24", iconClass: "text-accent", bgClass: "bg-accent/10" },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="flex-1 p-3 rounded-2xl bg-muted/50 border border-border text-center">
                        <div className={`w-8 h-8 rounded-xl ${item.bgClass} flex items-center justify-center mx-auto mb-2`}>
                          <Icon className={`w-4 h-4 ${item.iconClass}`} />
                        </div>
                      <p className="text-base font-bold font-mono text-foreground">{item.value}</p>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                    </div>
                  );
                })}
              </div>

              {/* Topic performance */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Topic Performance
                  </p>
                  <div className="flex items-center gap-1">
                    <BarChart2 className="w-3.5 h-3.5 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">AI Insights Active</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  {studentTopics.map((topic, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-foreground">{topic.topic}</span>
                        <span className={`text-xs font-bold font-mono ${
                          topic.score >= 80 ? "text-accent" :
                          topic.score >= 60 ? "text-accent-amber" :
                          "text-destructive"
                        }`}>
                          {topic.score}%
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${topic.score}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: i * 0.1 }}
                          className={`h-full rounded-full ${
                            topic.score >= 80 ? "bg-gradient-to-r from-accent to-accent/70" :
                            topic.score >= 60 ? "bg-gradient-to-r from-accent-amber to-accent-amber/70" :
                            "bg-gradient-to-r from-destructive to-destructive/70"
                          }`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
