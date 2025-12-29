"use client"

import { Users, Clock, TrendingUp, Briefcase } from "lucide-react"

export default function TeacherDashboard({ user }: any) {
  const stats = [
    { label: "Active Students", value: "12", icon: Users, color: "from-primary to-accent" },
    { label: "Hours Taught", value: "148", icon: Clock, color: "from-accent to-primary" },
    { label: "Avg Rating", value: "4.8★", icon: TrendingUp, color: "from-primary to-accent" },
    { label: "Total Earnings", value: "₹45,600", icon: Briefcase, color: "from-accent to-primary" },
  ]

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-foreground mb-8">Welcome, {user?.name || "Tutor"}!</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className={`bg-gradient-to-br ${stat.color} rounded-xl p-6 text-white shadow-lg`}>
                <Icon size={24} className="mb-2 opacity-80" />
                <p className="text-sm opacity-90">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-8 bg-card/50 rounded-xl border border-border p-8 text-center">
          <p className="text-muted-foreground">
            Welcome to your teacher dashboard. Manage your students and sessions here.
          </p>
        </div>
      </div>
    </div>
  )
}
