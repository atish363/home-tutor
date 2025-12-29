// Messaging API for WhatsApp integration and direct messaging

export const messagingAPI = {
  sendWhatsAppMessage: async (recipientPhone, message, senderName) => {
    try {
      // This will use the provided contact number: 9304217862
      const adminPhone = "919304217862"

      // Create message with context
      const fullMessage = `From: ${senderName}\n\n${message}`

      // WhatsApp Web API URL
      const whatsappUrl = `https://wa.me/${adminPhone}?text=${encodeURIComponent(fullMessage)}`

      // Store message locally
      const messages = JSON.parse(localStorage.getItem("cognipath_messages") || "[]")
      messages.push({
        id: Math.random().toString(36).substr(2, 9),
        from: senderName,
        to: "Cognipath Admin",
        message,
        recipientPhone,
        createdAt: new Date().toISOString(),
        status: "Pending",
        type: "whatsapp",
      })
      localStorage.setItem("cognipath_messages", JSON.stringify(messages))

      return { success: true, url: whatsappUrl, message: "Open WhatsApp to send message" }
    } catch (error) {
      return { success: false, error: error.message }
    }
  },

  getMessages: async (userId) => {
    try {
      const messages = JSON.parse(localStorage.getItem("cognipath_messages") || "[]")
      const userMessages = messages.filter((m) => m.from === userId || m.to === userId)
      return { success: true, messages: userMessages }
    } catch (error) {
      return { success: false, error: error.message }
    }
  },

  getConversations: async (userId) => {
    try {
      const messages = JSON.parse(localStorage.getItem("cognipath_messages") || "[]")
      const conversations = {}

      messages.forEach((msg) => {
        const otherUser = msg.from === userId ? msg.to : msg.from
        if (!conversations[otherUser]) {
          conversations[otherUser] = {
            name: otherUser,
            lastMessage: msg.message,
            lastMessageTime: msg.createdAt,
            unreadCount: msg.status === "unread" ? 1 : 0,
          }
        }
      })

      return { success: true, conversations }
    } catch (error) {
      return { success: false, error: error.message }
    }
  },
}
