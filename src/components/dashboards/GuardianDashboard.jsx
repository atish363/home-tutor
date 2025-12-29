"use client"

import { useState } from "react"
import { Search, Star, MapPin, Clock, MessageCircle } from "lucide-react"
import TutorContactCard from "../TutorContactCard"
import WhatsAppWidget from "../WhatsAppWidget"

export default function GuardianDashboard({ user }) {
  const [activeTab, setActiveTab] = useState("find-tutors")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTutor, setSelectedTutor] = useState(null)
  const [showMessageForm, setShowMessageForm] = useState(false)
  const [directMessage, setDirectMessage] = useState("")

  // Mock tutor data
  const tutors = [
    {
      id: 1,
      name: "Priya Sharma",
      subject: "Mathematics",
      rating: 4.9,
      reviews: 127,
      hourlyRate: "₹500",
      location: "Delhi",
      experience: "8 years",
      image: "/female-tutor.jpg",
      bio: "Expert in calculus and algebra",
      whatsapp: "+91-9876543210",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      subject: "Physics",
      rating: 4.8,
      reviews: 98,
      hourlyRate: "₹450",
      location: "Mumbai",
      experience: "6 years",
      image: "/male-tutor.jpg",
      bio: "Specialized in JEE preparation",
      whatsapp: "+91-9765432109",
    },
    {
      id: 3,
      name: "Anjali Patel",
      subject: "English",
      rating: 4.7,
      reviews: 156,
      hourlyRate: "₹400",
      location: "Bangalore",
      experience: "5 years",
      image: "/female-english-teacher.png",
      bio: "IELTS and competitive exam coaching",
      whatsapp: "+91-9654321098",
    },
  ]

  const handleWhatsAppContact = (tutor) => {
    const message = `Hi ${tutor.name}, I'm interested in tutoring in ${tutor.subject}. Can we discuss the details?`
    const whatsappUrl = `https://wa.me/919304217862?text=${encodeURIComponent(`From: ${user.name} | Tutor: ${tutor.name}\n\n${message}`)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <>
      <div className="min-h-screen bg-background py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Welcome, {user.name}!</h1>
            <p className="text-foreground-muted">Find the perfect tutor for your child's education</p>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-8 border-b border-surface-light">
            {[
              { id: "find-tutors", label: "Find Tutors", icon: Search },
              { id: "my-tutors", label: "My Tutors", icon: Star },
              { id: "sessions", label: "Sessions", icon: Clock },
              { id: "messages", label: "Messages", icon: MessageCircle },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 font-medium flex items-center gap-2 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "text-primary border-primary"
                    : "text-foreground-muted border-transparent hover:text-foreground"
                }`}
              >
                <tab.icon size={20} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          {activeTab === "find-tutors" && !selectedTutor && (
            <div>
              {/* Search Bar */}
              <div className="mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-4 text-foreground-muted" size={20} />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by subject or tutor name..."
                    className="w-full pl-12 pr-4 py-3 bg-surface border border-surface-light rounded-lg text-foreground placeholder-foreground-muted focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              {/* Tutors Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tutors.map((tutor) => (
                  <div
                    key={tutor.id}
                    className="bg-surface/50 rounded-xl border border-surface-light hover:border-primary/50 overflow-hidden hover:shadow-lg hover:shadow-primary/20 transition-all group"
                  >
                    {/* Card Header */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <img
                          src={tutor.image || "/placeholder.svg"}
                          alt={tutor.name}
                          className="w-16 h-16 rounded-lg border-2 border-primary/30 group-hover:border-primary transition-colors"
                        />
                        <div className="flex items-center gap-1 bg-primary/20 px-3 py-1 rounded-full">
                          <Star size={16} className="text-warning fill-warning" />
                          <span className="text-sm font-semibold text-foreground">{tutor.rating}</span>
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-foreground mb-1">{tutor.name}</h3>
                      <p className="text-primary font-semibold mb-3">{tutor.subject}</p>

                      <div className="space-y-2 mb-4 text-sm text-foreground-muted">
                        <div className="flex items-center gap-2">
                          <Clock size={16} />
                          {tutor.experience}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          {tutor.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Star size={16} />
                          {tutor.reviews} reviews
                        </div>
                      </div>

                      <p className="text-foreground-muted text-sm mb-4">{tutor.bio}</p>

                      {/* Rate */}
                      <p className="text-2xl font-bold text-primary mb-4">{tutor.hourlyRate}/hr</p>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleWhatsAppContact(tutor)}
                          className="flex-1 py-2 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all flex items-center justify-center gap-2"
                        >
                          <MessageCircle size={18} />
                          WhatsApp
                        </button>
                        <button
                          onClick={() => setSelectedTutor(tutor)}
                          className="flex-1 py-2 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all"
                        >
                          View Profile
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tutor Detail View Modal */}
          {selectedTutor && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-surface rounded-2xl border border-surface-light max-w-2xl w-full max-h-96 overflow-y-auto">
                <div className="bg-gradient-to-r from-primary to-accent p-6 flex justify-between items-start">
                  <h2 className="text-2xl font-bold text-white">{selectedTutor.name}</h2>
                  <button
                    onClick={() => setSelectedTutor(null)}
                    className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
                  >
                    ✕
                  </button>
                </div>

                <div className="p-6 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="mb-6">
                        <img
                          src={selectedTutor.image || "/placeholder.svg"}
                          alt={selectedTutor.name}
                          className="w-full rounded-xl mb-4 border-2 border-primary/30"
                        />
                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex items-center gap-1 bg-primary/20 px-4 py-2 rounded-full">
                            <Star size={20} className="text-warning fill-warning" />
                            <span className="font-bold text-foreground">{selectedTutor.rating}</span>
                          </div>
                          <p className="text-foreground-muted">({selectedTutor.reviews} reviews)</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <p className="text-foreground-muted text-sm">Subject</p>
                          <p className="text-lg font-semibold text-primary">{selectedTutor.subject}</p>
                        </div>
                        <div>
                          <p className="text-foreground-muted text-sm">Experience</p>
                          <p className="text-lg font-semibold text-foreground">{selectedTutor.experience}</p>
                        </div>
                        <div>
                          <p className="text-foreground-muted text-sm">Location</p>
                          <p className="text-lg font-semibold text-foreground">{selectedTutor.location}</p>
                        </div>
                        <div>
                          <p className="text-foreground-muted text-sm">Hourly Rate</p>
                          <p className="text-2xl font-bold text-primary">{selectedTutor.hourlyRate}</p>
                        </div>
                      </div>
                    </div>

                    {/* Tutor Contact Card */}
                    <TutorContactCard
                      tutor={selectedTutor}
                      onWhatsAppClick={() => {
                        handleWhatsAppContact(selectedTutor)
                        setSelectedTutor(null)
                      }}
                    />
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">About</h4>
                    <p className="text-foreground-muted leading-relaxed">{selectedTutor.bio}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "my-tutors" && (
            <div className="bg-surface/50 rounded-xl border border-surface-light p-8 text-center">
              <Star size={48} className="text-foreground-muted mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No tutors added yet</h3>
              <p className="text-foreground-muted mb-4">Start by finding and connecting with tutors</p>
              <button
                onClick={() => setActiveTab("find-tutors")}
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all"
              >
                Find Tutors
              </button>
            </div>
          )}

          {activeTab === "sessions" && (
            <div className="bg-surface/50 rounded-xl border border-surface-light p-8 text-center">
              <Clock size={48} className="text-foreground-muted mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No sessions scheduled</h3>
              <p className="text-foreground-muted">Connect with a tutor to start scheduling sessions</p>
            </div>
          )}

          {activeTab === "messages" && (
            <div className="bg-surface/50 rounded-xl border border-surface-light p-8 text-center">
              <MessageCircle size={48} className="text-foreground-muted mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No messages</h3>
              <p className="text-foreground-muted">Messages from tutors will appear here</p>
            </div>
          )}
        </div>
      </div>

      {/* WhatsApp Widget Floating Button */}
      <WhatsAppWidget user={user} />
    </>
  )
}
