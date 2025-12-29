"use client"

import { useState } from "react"
import { Users, TrendingUp, DollarSign, AlertCircle, MoreVertical } from "lucide-react"

export default function AdminDashboard({ user }) {
  const [activeTab, setActiveTab] = useState("overview")

  const stats = [
    { label: "Total Users", value: "12,458", icon: Users, trend: "+12%" },
    { label: "Active Sessions", value: "328", icon: TrendingUp, trend: "+5%" },
    { label: "Revenue", value: "₹2,45,600", icon: DollarSign, trend: "+23%" },
    { label: "Flagged Issues", value: "8", icon: AlertCircle, trend: "-2%" },
  ]

  const recentUsers = [
    { id: 1, name: "Arjun Verma", role: "Teacher", joinDate: "2025-11-28", status: "Active" },
    { id: 2, name: "Sneha Patel", role: "Guardian", joinDate: "2025-11-27", status: "Active" },
    { id: 3, name: "Rishab Kumar", role: "Teacher", joinDate: "2025-11-26", status: "Pending" },
  ]

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Admin Dashboard</h1>
          <p className="text-foreground-muted">Manage Cognipath platform</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="bg-surface/50 rounded-xl border border-surface-light p-6 hover:border-primary/50 transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <span className="text-success text-sm font-semibold">{stat.trend}</span>
                </div>
                <p className="text-foreground-muted text-sm mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              </div>
            )
          })}
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-surface-light">
          {[
            { id: "overview", label: "Overview" },
            { id: "users", label: "User Management" },
            { id: "approvals", label: "Approvals" },
            { id: "reports", label: "Reports" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? "text-primary border-primary"
                  : "text-foreground-muted border-transparent hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === "overview" && (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-surface/50 rounded-xl border border-surface-light p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Recent Users</h3>
              <div className="space-y-4">
                {recentUsers.map((user) => (
                  <div
                    key={user.id}
                    className="flex items-center justify-between py-3 border-b border-surface-light last:border-b-0"
                  >
                    <div>
                      <p className="text-foreground font-medium">{user.name}</p>
                      <p className="text-foreground-muted text-sm">{user.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-foreground-muted text-sm">{user.joinDate}</p>
                      <p
                        className={`text-sm font-semibold ${user.status === "Active" ? "text-success" : "text-warning"}`}
                      >
                        {user.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-surface/50 rounded-xl border border-surface-light p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Platform Health</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-foreground">System Status</span>
                    <span className="text-success">Healthy</span>
                  </div>
                  <div className="w-full bg-surface rounded-full h-2">
                    <div className="bg-success h-2 rounded-full w-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-foreground">Database Usage</span>
                    <span className="text-foreground-muted">65%</span>
                  </div>
                  <div className="w-full bg-surface rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-3/5"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-foreground">API Performance</span>
                    <span className="text-success">Optimal</span>
                  </div>
                  <div className="w-full bg-surface rounded-full h-2">
                    <div className="bg-success h-2 rounded-full w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "users" && (
          <div className="bg-surface/50 rounded-xl border border-surface-light p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-surface-light">
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Name</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Role</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Join Date</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Status</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {recentUsers.map((user) => (
                    <tr key={user.id} className="border-b border-surface-light hover:bg-surface/50 transition-colors">
                      <td className="px-4 py-3 text-foreground">{user.name}</td>
                      <td className="px-4 py-3 text-foreground-muted text-sm">{user.role}</td>
                      <td className="px-4 py-3 text-foreground-muted text-sm">{user.joinDate}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            user.status === "Active" ? "bg-success/20 text-success" : "bg-warning/20 text-warning"
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <button className="text-foreground-muted hover:text-primary transition-colors">
                          <MoreVertical size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "approvals" && (
          <div className="bg-surface/50 rounded-xl border border-surface-light p-8 text-center">
            <AlertCircle size={48} className="text-foreground-muted mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Pending Approvals</h3>
            <p className="text-foreground-muted">No pending approvals at this time</p>
          </div>
        )}

        {activeTab === "reports" && (
          <div className="bg-surface/50 rounded-xl border border-surface-light p-8 text-center">
            <TrendingUp size={48} className="text-foreground-muted mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Platform Reports</h3>
            <p className="text-foreground-muted">Detailed analytics and reports coming soon</p>
          </div>
        )}
      </div>
    </div>
  )
}
