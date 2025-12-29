import AdminDashboard from "../components/dashboards/AdminDashboard"
import TeacherDashboard from "../components/dashboards/TeacherDashboard"
import GuardianDashboard from "../components/dashboards/GuardianDashboard"

export default function Dashboard({ user, userRole }) {
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Access Denied</h1>
          <p className="text-foreground-muted">Please log in to access the dashboard</p>
        </div>
      </div>
    )
  }

  return (
    <>
      {userRole === "admin" && <AdminDashboard user={user} />}
      {userRole === "teacher" && <TeacherDashboard user={user} />}
      {userRole === "guardian" && <GuardianDashboard user={user} />}
    </>
  )
}
