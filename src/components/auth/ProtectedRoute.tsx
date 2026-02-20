import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: "teacher" | "student";
}

export function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  const { user, role, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) return <Navigate to="/auth/login" replace />;

  if (requiredRole && role !== requiredRole) {
    // Redirect to correct dashboard
    if (role === "teacher") return <Navigate to="/dashboard/teacher" replace />;
    if (role === "student") return <Navigate to="/dashboard/student" replace />;
    return <Navigate to="/auth/login" replace />;
  }

  return <>{children}</>;
}
