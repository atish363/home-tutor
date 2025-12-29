"use client"

import { useState } from "react"
import { MessageCircle, Send, X } from "lucide-react"
import { messagingAPI } from "../api/messaging"

export default function WhatsAppWidget({ user, tutorName, tutorPhone }) {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [isSending, setIsSending] = useState(false)

  const handleSendMessage = async () => {
    if (!message.trim()) return

    setIsSending(true)
    try {
      const result = await messagingAPI.sendWhatsAppMessage(
        "919304217862", // Your contact number
        message,
        user?.name || "A student",
      )

      if (result.success) {
        // Open WhatsApp
        window.open(result.url, "_blank")
        setMessage("")
        setIsOpen(false)
      }
    } catch (error) {
      console.error("Error sending message:", error)
    } finally {
      setIsSending(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Fixed WhatsApp Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all z-40 group"
      >
        <MessageCircle size={28} className="text-white" />
        <span className="absolute -top-2 -right-2 w-5 h-5 bg-warning rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse">
          1
        </span>
      </button>

      {/* WhatsApp Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-h-96 bg-surface rounded-2xl border border-surface-light shadow-2xl z-40 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-accent text-white p-4 rounded-t-2xl flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Cognipath Support</h3>
              <p className="text-sm opacity-90">+91 93042 17862</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-2 rounded-lg transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            <div className="flex justify-start">
              <div className="bg-surface-light rounded-xl rounded-tl-none px-4 py-3 max-w-xs">
                <p className="text-foreground text-sm">Hi! 👋 Welcome to Cognipath. How can we help you today?</p>
                <p className="text-foreground-muted text-xs mt-1">10:30 AM</p>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-surface-light">
            <div className="flex gap-2">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                rows="2"
                className="flex-1 px-4 py-2 bg-background border border-surface-light rounded-lg text-foreground placeholder-foreground-muted resize-none focus:outline-none focus:border-primary"
              />
              <button
                onClick={handleSendMessage}
                disabled={isSending || !message.trim()}
                className="px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-xs text-foreground-muted mt-2">💬 Messages are sent to our WhatsApp</p>
          </div>
        </div>
      )}
    </>
  )
}
