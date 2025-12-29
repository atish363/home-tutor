// Session/Booking API

export const sessionsAPI = {
  getAllSessions: async (userId) => {
    try {
      const sessions = JSON.parse(localStorage.getItem("cognipath_sessions") || "[]")
      const userSessions = sessions.filter((s) => s.studentId === userId || s.tutorId === userId)
      return { success: true, sessions: userSessions.sort((a, b) => new Date(b.date) - new Date(a.date)) }
    } catch (error) {
      return { success: false, error: error.message }
    }
  },

  bookSession: async (sessionData) => {
    try {
      const session = {
        id: Math.random().toString(36).substr(2, 9),
        ...sessionData,
        status: "Pending",
        createdAt: new Date().toISOString(),
      }

      const sessions = JSON.parse(localStorage.getItem("cognipath_sessions") || "[]")
      sessions.push(session)
      localStorage.setItem("cognipath_sessions", JSON.stringify(sessions))

      return { success: true, session }
    } catch (error) {
      return { success: false, error: error.message }
    }
  },

  updateSession: async (sessionId, updates) => {
    try {
      const sessions = JSON.parse(localStorage.getItem("cognipath_sessions") || "[]")
      const sessionIndex = sessions.findIndex((s) => s.id === sessionId)
      if (sessionIndex !== -1) {
        sessions[sessionIndex] = { ...sessions[sessionIndex], ...updates }
        localStorage.setItem("cognipath_sessions", JSON.stringify(sessions))
        return { success: true, session: sessions[sessionIndex] }
      }
      return { success: false, error: "Session not found" }
    } catch (error) {
      return { success: false, error: error.message }
    }
  },

  cancelSession: async (sessionId, reason) => {
    try {
      const sessions = JSON.parse(localStorage.getItem("cognipath_sessions") || "[]")
      const session = sessions.find((s) => s.id === sessionId)
      if (session) {
        session.status = "Cancelled"
        session.cancelReason = reason
        localStorage.setItem("cognipath_sessions", JSON.stringify(sessions))
        return { success: true, session }
      }
      return { success: false, error: "Session not found" }
    } catch (error) {
      return { success: false, error: error.message }
    }
  },
}
