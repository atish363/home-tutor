"use client"

import { useState } from "react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { MapPin, Clock, DollarSign, User, Search } from "lucide-react"

const mockJobs = [
  {
    id: 1,
    title: "Mathematics Tutor for JEE",
    subject: "Mathematics",
    level: "Advanced",
    location: "Delhi",
    budget: "₹600-800/hr",
    description: "Looking for experienced JEE tutor with 5+ years experience.",
    postedBy: "Rajesh Sharma",
    postedDate: "2025-11-28",
    applicants: 5,
  },
  {
    id: 2,
    title: "Physics & Chemistry Tutor",
    subject: "Science",
    level: "Intermediate",
    location: "Mumbai",
    budget: "₹400-500/hr",
    description: "CBSE Class 12 tutor needed in Bandra area.",
    postedBy: "Priya Patel",
    postedDate: "2025-11-27",
    applicants: 3,
  },
  {
    id: 3,
    title: "English Tutor",
    subject: "English",
    level: "Beginner",
    location: "Bangalore",
    budget: "₹300-400/hr",
    description: "IELTS preparation and competitive exam coaching.",
    postedBy: "Arjun Kumar",
    postedDate: "2025-11-26",
    applicants: 8,
  },
]

export default function Hiring() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterLevel, setFilterLevel] = useState("all")

  const filteredJobs = mockJobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesLevel = filterLevel === "all" || job.level === filterLevel
    return matchesSearch && matchesLevel
  })

  return (
    <>
      <Navbar />
      <div className="flex-1 min-h-screen bg-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Tutoring Jobs</h1>
            <p className="text-xl text-muted-foreground">Find tutoring opportunities and connect with students.</p>
          </div>

          <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-4 text-muted-foreground" size={20} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search jobs..."
                  className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                />
              </div>
              <select
                value={filterLevel}
                onChange={(e) => setFilterLevel(e.target.value)}
                className="px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
              >
                <option value="all">All Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          </div>

          <div className="grid gap-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-card/50 rounded-xl border border-border hover:border-primary/50 p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{job.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">Posted by {job.postedBy}</p>
                    <p className="text-muted-foreground mb-4">{job.description}</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <User size={16} className="text-primary" />
                        <span className="text-sm">{job.subject}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin size={16} className="text-accent" />
                        <span className="text-sm">{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock size={16} className="text-primary" />
                        <span className="text-sm">{job.level}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <DollarSign size={16} className="text-emerald-500" />
                        <span className="text-sm font-semibold">{job.budget}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 md:w-48">
                    <button className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-lg hover:shadow-lg transition-all">
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
        </div>
      </div>
      <Footer />
    </>
  )
}
