"use client"

import { useState } from "react"
import { Search, Star, MapPin, Clock, MessageCircle } from "lucide-react"

const mockTutors = [
  {
    id: 1,
    name: "Priya Sharma",
    subject: "Mathematics",
    rating: 4.9,
    reviews: 127,
    hourlyRate: "₹500",
    location: "Delhi",
    experience: "8 years",
    bio: "Expert in calculus and algebra",
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
    bio: "Specialized in JEE preparation",
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
    bio: "IELTS and competitive exam coaching",
  },
]

export default function GuardianDashboard({ user }: any) {
  const [activeTab, setActiveTab] = useState("find-tutors")
  const [searchQuery, setSearchQuery] = useState("")

  const handleWhatsAppContact = (tutor: any) => {
    const message = `Hi ${tutor.name}, I'm interested in ${tutor.subject} tuition.`
    const whatsappUrl = `https://wa.me/919304217862?text=${encodeURIComponent(`From: ${user.name}\n\n${message}`)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-foreground mb-8">Welcome, {user?.name || "User"}!</h1>

        <div className="flex gap-4 mb-8 border-b border-border">
          {[
            { id: "find-tutors", label: "Find Tutors", icon: Search },
            { id: "sessions", label: "Sessions", icon: Clock },
            { id: "messages", label: "Messages", icon: MessageCircle },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 font-medium flex items-center gap-2 border-b-2 transition-colors ${
                activeTab === tab.id
                  ? "text-primary border-primary"
                  : "text-muted-foreground border-transparent hover:text-foreground"
              }`}
            >
              <tab.icon size={20} />
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "find-tutors" && (
          <div>
            <div className="mb-8 relative">
              <Search className="absolute left-4 top-4 text-muted-foreground" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by subject or tutor name..."
                className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
              />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockTutors.map((tutor) => (
                <div
                  key={tutor.id}
                  className="bg-card/50 rounded-xl border border-border hover:border-primary/50 overflow-hidden p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">{tutor.name[0]}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-primary/20 px-3 py-1 rounded-full">
                      <Star size={16} className="text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-semibold text-foreground">{tutor.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-1">{tutor.name}</h3>
                  <p className="text-primary font-semibold mb-3">{tutor.subject}</p>

                  <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      {tutor.experience}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {tutor.location}
                    </div>
                  </div>

                  <p className="text-2xl font-bold text-primary mb-4">{tutor.hourlyRate}/hr</p>

                  <button
                    onClick={() => handleWhatsAppContact(tutor)}
                    className="w-full py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={18} />
                    WhatsApp
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "sessions" && (
          <div className="bg-card/50 rounded-xl border border-border p-8 text-center">
            <Clock size={48} className="text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No sessions scheduled</h3>
          </div>
        )}

        {activeTab === "messages" && (
          <div className="bg-card/50 rounded-xl border border-border p-8 text-center">
            <MessageCircle size={48} className="text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No messages</h3>
          </div>
        )}
      </div>
    </div>
  )
}
