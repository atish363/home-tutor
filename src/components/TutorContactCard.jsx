"use client"

import { MessageCircle, Phone, Mail, MapPin } from "lucide-react"

export default function TutorContactCard({ tutor, onWhatsAppClick }) {
  return (
    <div className="bg-surface/50 rounded-2xl border border-surface-light p-6 space-y-4">
      <h3 className="text-lg font-bold text-foreground">Contact Information</h3>

      <div className="space-y-3">
        <div className="flex items-center gap-3 p-3 bg-surface rounded-lg hover:bg-surface-light/50 transition-colors cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <Phone size={20} className="text-primary" />
          </div>
          <div>
            <p className="text-xs text-foreground-muted">Phone</p>
            <p className="text-foreground font-medium">{tutor.phone || "Not provided"}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-surface rounded-lg hover:bg-surface-light/50 transition-colors cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
            <Mail size={20} className="text-accent" />
          </div>
          <div>
            <p className="text-xs text-foreground-muted">Email</p>
            <p className="text-foreground font-medium">{tutor.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-surface rounded-lg hover:bg-surface-light/50 transition-colors cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <MapPin size={20} className="text-primary" />
          </div>
          <div>
            <p className="text-xs text-foreground-muted">Location</p>
            <p className="text-foreground font-medium">{tutor.location}</p>
          </div>
        </div>
      </div>

      <button
        onClick={onWhatsAppClick}
        className="w-full py-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all flex items-center justify-center gap-2 group"
      >
        <MessageCircle size={20} />
        <span>Chat on WhatsApp</span>
      </button>

      <p className="text-xs text-foreground-muted text-center">
        💡 Tip: Use WhatsApp for quick and direct communication
      </p>
    </div>
  )
}
