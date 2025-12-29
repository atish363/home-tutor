"use client"

import { useState } from "react"
import { Plus, Users, Clock, TrendingUp, MessageCircle, Briefcase } from "lucide-react"

export default function TeacherDashboard({ user }) {
  const [activeTab, setActiveTab] = useState("overview")
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Akshay Singh",
      subject: "Mathematics",
      level: "Class 12",
      rating: 4.8,
      status: "Active",
    },
    {
      id: 2,
      name: "Priya Sharma",
      subject: "Mathematics",
      level: "Class 10",
      rating: 4.9,
      status: "Active",
    },
  ])

  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Mathematics Tutor for JEE Prep",
      subject: "Mathematics",
      level: "Advanced",
      budget: "₹500-700/hr",
      status: "Accepted",
    },
  ])

  const [showPostJob, setShowPostJob] = useState(false)
  const [newJob, setNewJob] = useState({
    title: "",
    subject: "",
    level: "",
    description: "",
    budget: "",
  })

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Welcome, {user.name}!</h1>
          <p className="text-foreground-muted">Manage your tutoring profile and students</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Active Students", value: "12", icon: Users, color: "from-primary to-accent" },
            { label: "Hours Taught", value: "148", icon: Clock, color: "from-accent to-primary" },
            { label: "Avg Rating", value: "4.8★", icon: TrendingUp, color: "from-primary to-accent" },
            { label: "Total Earnings", value: "₹45,600", icon: Briefcase, color: "from-accent to-primary" },
          ].map((stat, index) => {
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

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-surface-light overflow-x-auto">
          {[
            { id: "overview", label: "Overview" },
            { id: "students", label: "My Students" },
            { id: "jobs", label: "Job Postings" },
            { id: "messages", label: "Messages" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 font-medium border-b-2 transition-colors whitespace-nowrap ${
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
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-surface/50 rounded-xl border border-surface-light p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Profile Completion</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-foreground-muted">Profile Info</span>
                    <span className="text-primary">100%</span>
                  </div>
                  <div className="w-full bg-surface rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full w-full"></div>
                  </div>
                </div>
              </div>

              <div className="bg-surface/50 rounded-xl border border-surface-light p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Availability This Week</h3>
                <div className="text-3xl font-bold text-primary">18 hours</div>
                <p className="text-sm text-foreground-muted">Available for tutoring</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "students" && (
          <div>
            <div className="grid gap-4">
              {students.map((student) => (
                <div
                  key={student.id}
                  className="bg-surface/50 rounded-xl border border-surface-light p-6 hover:border-primary/50 transition-all"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{student.name}</h3>
                      <p className="text-foreground-muted text-sm">
                        {student.level} - {student.subject}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 bg-primary/20 px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-foreground">{student.rating}★</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-primary/20 text-primary rounded-lg hover:bg-primary/30 transition-all text-sm font-medium">
                      View Profile
                    </button>
                    <button className="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all text-sm font-medium flex items-center gap-2">
                      <MessageCircle size={16} />
                      Message
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "jobs" && (
          <div>
            <div className="mb-6">
              <button
                onClick={() => setShowPostJob(!showPostJob)}
                className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all flex items-center gap-2"
              >
                <Plus size={20} />
                Post a Job
              </button>
            </div>

            {showPostJob && (
              <div className="bg-surface/50 rounded-xl border border-surface-light p-6 mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Post a Tutoring Job</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Job Title</label>
                    <input
                      type="text"
                      value={newJob.title}
                      onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                      placeholder="e.g., IELTS Preparation Tutor"
                      className="w-full px-4 py-2 bg-background border border-surface-light rounded-lg text-foreground placeholder-foreground-muted focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                      <input
                        type="text"
                        value={newJob.subject}
                        onChange={(e) => setNewJob({ ...newJob, subject: e.target.value })}
                        placeholder="Subject name"
                        className="w-full px-4 py-2 bg-background border border-surface-light rounded-lg text-foreground placeholder-foreground-muted focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Budget/Hour</label>
                      <input
                        type="text"
                        value={newJob.budget}
                        onChange={(e) => setNewJob({ ...newJob, budget: e.target.value })}
                        placeholder="₹500-700"
                        className="w-full px-4 py-2 bg-background border border-surface-light rounded-lg text-foreground placeholder-foreground-muted focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Description</label>
                    <textarea
                      value={newJob.description}
                      onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
                      placeholder="Describe the tutoring requirements..."
                      rows="4"
                      className="w-full px-4 py-2 bg-background border border-surface-light rounded-lg text-foreground placeholder-foreground-muted focus:outline-none focus:border-primary"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all"
                  >
                    Post Job
                  </button>
                </form>
              </div>
            )}

            <div className="space-y-4">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-surface/50 rounded-xl border border-surface-light p-6 hover:border-primary/50 transition-all"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                      <p className="text-foreground-muted text-sm">
                        {job.subject} • {job.level}
                      </p>
                    </div>
                    <div className="bg-success/20 px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-success">{job.status}</span>
                    </div>
                  </div>
                  <p className="text-primary font-semibold mb-4">{job.budget}</p>
                  <button className="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all text-sm">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "messages" && (
          <div className="bg-surface/50 rounded-xl border border-surface-light p-8 text-center">
            <MessageCircle size={48} className="text-foreground-muted mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No messages</h3>
            <p className="text-foreground-muted">Messages from students will appear here</p>
          </div>
        )}
      </div>
    </div>
  )
}
