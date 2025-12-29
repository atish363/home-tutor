// Mock API endpoints for authentication
// In production, replace with actual backend/database calls

const API_BASE_URL = "http://localhost:5000/api"

export const authAPI = {
  signup: async (userData) => {
    try {
      // In production: POST to backend
      // const response = await fetch(`${API_BASE_URL}/auth/signup`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(userData)
      // })

      // Mock response
      const user = {
        id: Math.random().toString(36).substr(2, 9),
        ...userData,
        createdAt: new Date().toISOString(),
      }

      // Store in localStorage (mock database)
      const existingUsers = JSON.parse(localStorage.getItem("cognipath_users") || "[]")
      existingUsers.push(user)
      localStorage.setItem("cognipath_users", JSON.stringify(existingUsers))

      return { success: true, user, token: "mock_token_" + user.id }
    } catch (error) {
      return { success: false, error: error.message }
    }
  },

  login: async (email, password) => {
    try {
      // Mock login
      const users = JSON.parse(localStorage.getItem("cognipath_users") || "[]")
      const user = users.find((u) => u.email === email && u.password === password)

      if (!user) {
        return { success: false, error: "Invalid credentials" }
      }

      return { success: true, user, token: "mock_token_" + user.id }
    } catch (error) {
      return { success: false, error: error.message }
    }
  },

  getProfile: async (userId, token) => {
    try {
      const users = JSON.parse(localStorage.getItem("cognipath_users") || "[]")
      const user = users.find((u) => u.id === userId)
      return { success: true, user }
    } catch (error) {
      return { success: false, error: error.message }
    }
  },

  updateProfile: async (userId, updates, token) => {
    try {
      const users = JSON.parse(localStorage.getItem("cognipath_users") || "[]")
      const userIndex = users.findIndex((u) => u.id === userId)
      if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...updates }
        localStorage.setItem("cognipath_users", JSON.stringify(users))
        return { success: true, user: users[userIndex] }
      }
      return { success: false, error: "User not found" }
    } catch (error) {
      return { success: false, error: error.message }
    }
  },
}
