import { motion } from "framer-motion";
import { BookOpen, Users, BarChart3, Plus, LogOut, Sparkles, Trophy, Brain } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const stats = [
  { label: "Total Students", value: "0", icon: Users, color: "text-blue-500", bg: "bg-blue-500/10" },
  { label: "Quizzes Created", value: "0", icon: BookOpen, color: "text-primary", bg: "bg-primary/10" },
  { label: "Avg. Score", value: "—", icon: BarChart3, color: "text-accent", bg: "bg-accent/10" },
  { label: "Leaderboard Rank", value: "—", icon: Trophy, color: "text-amber-500", bg: "bg-amber-500/10" },
];

export default function TeacherDashboard() {
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
              <BookOpen className="w-4 h-4 text-primary" />
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
            <span className="text-3xl">👩‍🏫</span>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Teacher Dashboard</h1>
              <p className="text-muted-foreground text-sm">Welcome back! Ready to create something amazing?</p>
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
          <h2 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Create AI Quiz", icon: Brain, color: "from-primary to-secondary", desc: "Generate from notes or PDF" },
              { label: "Add Students", icon: Users, color: "from-blue-500 to-cyan-500", desc: "Invite to your class" },
              { label: "View Analytics", icon: BarChart3, color: "from-accent to-amber-500", desc: "Track performance" },
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

        {/* Empty state */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="glass rounded-2xl p-12 border border-white/10 text-center"
        >
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Plus className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Create your first quiz</h3>
          <p className="text-muted-foreground text-sm mb-4">Upload notes or paste text and let AI do the work.</p>
          <button className="px-6 py-2.5 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-medium text-sm hover:shadow-lg hover:shadow-primary/30 transition-all">
            Get Started
          </button>
        </motion.div>
      </main>
    </div>
  );
}
