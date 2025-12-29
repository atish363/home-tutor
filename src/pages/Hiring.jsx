"use client"

import { useState } from "react"
import { Briefcase, MapPin, Clock, DollarSign, User, Search } from "lucide-react"

export default function Hiring() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Mathematics Tutor for JEE Preparation",
      subject: "Mathematics",
      level: "Advanced",
      location: "Delhi",
      budget: "₹600-800/hr",
      description:
        "Looking for an experienced tutor for JEE Main and Advanced preparation. Should have 5+ years of experience.",
      postedBy: "Rajesh Sharma",
      postedDate: "2025-11-28",
      applicants: 5,
      status: "Open",
    },
    {
      id: 2,
      title: "Physics & Chemistry Tutor - Class 12",
      subject: "Science",
      level: "Intermediate",
      location: "Mumbai",
      budget: "₹400-500/hr",
      description: "Need tutor for CBSE Class 12 Physics and Chemistry. Preferably near Bandra area.",
      postedBy: "Priya Patel",
      postedDate: "2025-11-27",
      applicants: 3,
      status: "Open",
    },
    {
      id: 3,
      title: "English & Literature Tutor",
      subject: "English",
      level: "Beginner",
      location: "Bangalore",
      budget: "₹300-400/hr",
      description: "IELTS preparation and competitive exam coaching required.",
      postedBy: "Arjun Kumar",
      postedDate: "2025-11-26",
      applicants: 8,
      status: "Open",
    },
  ])

  const [searchQuery, setSearchQuery] = useState("")
  const [filterLevel, setFilterLevel] = useState("all")

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.subject.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesLevel = filterLevel === "all" || job.level === filterLevel
    return matchesSearch && matchesLevel
  })

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Tutoring Jobs</h1>
          <p className="text-xl text-foreground-muted max-w-2xl">
            Find tutoring opportunities and connect with students and parents looking for expert guidance.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-4 text-foreground-muted" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by job title or subject..."
                className="w-full pl-12 pr-4 py-3 bg-surface border border-surface-light rounded-lg text-foreground placeholder-foreground-muted focus:outline-none focus:border-primary"
              />
            </div>
            <select
              value={filterLevel}
              onChange={(e) => setFilterLevel(e.target.value)}
              className="px-4 py-3 bg-surface border border-surface-light rounded-lg text-foreground focus:outline-none focus:border-primary"
            >
              <option value="all">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="grid gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-surface/50 rounded-xl border border-surface-light hover:border-primary/50 p-6 hover:shadow-lg hover:shadow-primary/20 transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-sm text-foreground-muted">Posted by {job.postedBy}</p>
                    </div>
                  </div>

                  <p className="text-foreground-muted mb-4 leading-relaxed">{job.description}</p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-foreground-muted">
                      <User size={16} className="text-primary" />
                      <span className="text-sm">{job.subject}</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground-muted">
                      <MapPin size={16} className="text-accent" />
                      <span className="text-sm">{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground-muted">
                      <Clock size={16} className="text-primary" />
                      <span className="text-sm">{job.level}</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground-muted">
                      <DollarSign size={16} className="text-success" />
                      <span className="text-sm font-semibold">{job.budget}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-foreground-muted">Posted {job.postedDate}</span>
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold">
                      {job.applicants} Applicants
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 md:w-48">
                  <button className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all">
                    Apply Now
                  </button>
                  <button className="px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {filteredJobs.length === 0 && (
          <div className="bg-surface/50 rounded-xl border border-surface-light p-12 text-center">
            <Briefcase size={48} className="text-foreground-muted mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No jobs found</h3>
            <p className="text-foreground-muted">Try adjusting your search filters</p>
          </div>
        )}
      </div>
    </div>
  )
}
