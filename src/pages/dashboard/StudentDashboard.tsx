import { motion } from "framer-motion";
import { GraduationCap, Star, Flame, Trophy, BookOpen, BarChart3, LogOut, Sparkles, Zap } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const stats = [
  { label: "Quizzes Taken", value: "0", icon: BookOpen, color: "text-primary", bg: "bg-primary/10" },
  { label: "Day Streak", value: "0🔥", icon: Flame, color: "text-orange-500", bg: "bg-orange-500/10" },
  { label: "Total XP", value: "0", icon: Star, color: "text-accent", bg: "bg-accent/10" },
  { label: "Rank", value: "—", icon: Trophy, color: "text-amber-500", bg: "bg-amber-500/10" },
];

export default function StudentDashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">EduSpark</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-primary" />
            </div>
            <span className="text-sm font-medium text-foreground hidden sm:block">{user?.email}</span>
            <button onClick={handleSignOut} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:block">Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10 space-y-8">
        {/* Welcome */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">🎓</span>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Student Dashboard</h1>
              <p className="text-muted-foreground text-sm">Keep learning, keep growing! You've got this.</p>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="glass rounded-2xl p-5 border border-white/10 hover:shadow-lg transition-all"
            >
              <div className={`w-10 h-10 ${stat.bg} rounded-xl flex items-center justify-center mb-3`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Actions */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h2 className="text-lg font-semibold text-foreground mb-4">Start Learning</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Take a Quiz", icon: Zap, color: "from-primary to-secondary", desc: "Test your knowledge" },
              { label: "My Progress", icon: BarChart3, color: "from-blue-500 to-cyan-500", desc: "See your growth" },
              { label: "Leaderboard", icon: Trophy, color: "from-accent to-amber-500", desc: "Compete with peers" },
            ].map((action) => (
              <motion.button
                key={action.label}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="glass rounded-2xl p-5 border border-white/10 text-left hover:shadow-xl transition-all group"
              >
                <div className={`w-10 h-10 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center mb-3 shadow-md group-hover:scale-110 transition-transform`}>
                  <action.icon className="w-5 h-5 text-white" />
                </div>
                <div className="font-semibold text-foreground">{action.label}</div>
                <div className="text-xs text-muted-foreground mt-1">{action.desc}</div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Progress placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="glass rounded-2xl p-8 border border-white/10"
        >
          <h2 className="text-lg font-semibold text-foreground mb-4">Your Progress</h2>
          <div className="space-y-3">
            {["Mathematics", "Science", "English"].map((subject) => (
              <div key={subject} className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground w-24">{subject}</span>
                <div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary/40 to-primary/20 rounded-full w-0" />
                </div>
                <span className="text-xs text-muted-foreground w-8">0%</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4 text-center">Complete your first quiz to see progress!</p>
        </motion.div>
      </main>
    </div>
  );
}
