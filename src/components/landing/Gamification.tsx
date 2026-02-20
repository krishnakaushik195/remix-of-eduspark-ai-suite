import { motion } from "framer-motion";
import { Trophy, Star, Flame, Zap, Medal, Crown } from "lucide-react";

const leaderboard = [
  { rank: 1, name: "Alex M.", xp: 2840, streak: 14, avatar: "👩‍🎓", badge: Crown },
  { rank: 2, name: "Jordan K.", xp: 2615, streak: 11, avatar: "👨‍🎓", badge: Medal },
  { rank: 3, name: "Sam R.", xp: 2390, streak: 8, avatar: "🧑‍🎓", badge: Star },
  { rank: 4, name: "Taylor P.", xp: 2100, streak: 6, avatar: "👩‍💻", badge: null },
  { rank: 5, name: "Morgan L.", xp: 1950, streak: 5, avatar: "🧑‍💻", badge: null },
];

const badges = [
  { emoji: "🔥", name: "Hot Streak", desc: "14-day streak", color: "from-orange-400/20 to-red-500/10" },
  { emoji: "⚡", name: "Speed Learner", desc: "Quiz in 2 min", color: "from-accent/20 to-accent/5" },
  { emoji: "🎯", name: "Sharpshooter", desc: "100% accuracy", color: "from-secondary/20 to-secondary/5" },
  { emoji: "🏆", name: "Top Scorer", desc: "Class #1 rank", color: "from-accent-amber/20 to-accent-amber/5" },
  { emoji: "📚", name: "Scholar", desc: "10 chapters done", color: "from-primary/20 to-primary/5" },
  { emoji: "🌟", name: "Legend", desc: "5000 XP earned", color: "from-purple-400/20 to-primary/5" },
];

export default function Gamification() {
  return (
    <section className="py-24 section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/5 to-primary/5" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-accent/15 text-accent mb-4 uppercase tracking-wider">
            Gamification
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Learning that actually{" "}
            <span className="gradient-text-accent">feels rewarding.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Compete, earn, and grow. Turn every quiz into a game worth winning.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Leaderboard */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-card border border-border shadow-md overflow-hidden"
          >
            <div className="p-6 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-accent-amber" />
                <span className="font-display font-bold text-foreground">Class Leaderboard</span>
              </div>
              <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
                This Week
              </span>
            </div>
            <div className="divide-y divide-border">
              {leaderboard.map((student, i) => {
                const BadgeIcon = student.badge;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className={`flex items-center gap-4 px-6 py-4 hover:bg-muted/50 transition-colors ${
                      i === 0 ? "bg-accent/5" : ""
                    }`}
                  >
                    {/* Rank */}
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold font-mono ${
                      i === 0 ? "bg-accent-amber/20 text-accent-amber" :
                      i === 1 ? "bg-muted-foreground/20 text-muted-foreground" :
                      i === 2 ? "bg-orange-400/20 text-orange-500" :
                      "bg-muted text-muted-foreground"
                    }`}>
                      {student.rank}
                    </div>

                    {/* Avatar */}
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center text-lg">
                      {student.avatar}
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-foreground">
                          {student.name}
                        </span>
                        {BadgeIcon && (
                          <BadgeIcon className={`w-3.5 h-3.5 ${i === 0 ? "text-accent-amber" : "text-muted-foreground"}`} />
                        )}
                      </div>
                      <div className="flex items-center gap-1 mt-0.5">
                        <Flame className="w-3 h-3 text-orange-400" />
                        <span className="text-xs text-muted-foreground">
                          {student.streak} day streak
                        </span>
                      </div>
                    </div>

                    {/* XP */}
                    <div className="flex items-center gap-1">
                      <Zap className="w-3 h-3 text-accent" />
                      <span className="text-sm font-bold text-foreground font-mono">
                        {student.xp.toLocaleString()}
                      </span>
                      <span className="text-xs text-muted-foreground">XP</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Badges grid */}
          <div className="flex flex-col gap-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-display text-xl font-bold text-foreground"
            >
              Collect achievements as you learn
            </motion.p>
            <div className="grid grid-cols-3 gap-4">
              {badges.map((badge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ scale: 1.06, y: -4 }}
                  className={`rounded-2xl p-4 bg-gradient-to-br ${badge.color} border border-white/30 text-center cursor-default transition-all duration-200`}
                >
                  <div className="text-3xl mb-2">{badge.emoji}</div>
                  <p className="text-xs font-bold text-foreground leading-tight">
                    {badge.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {badge.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Streak counter */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl p-5 bg-gradient-to-r from-orange-400/10 to-red-500/10 border border-orange-400/20 flex items-center gap-4"
            >
              <div className="text-5xl">🔥</div>
              <div>
                <p className="font-display font-bold text-foreground text-lg">
                  14-Day Learning Streak!
                </p>
                <p className="text-sm text-muted-foreground">
                  Keep going — you're on fire! 3 more days to unlock{" "}
                  <span className="text-orange-500 font-semibold">Inferno Badge</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
