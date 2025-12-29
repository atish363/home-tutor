// Notifications API

export const notificationsAPI = {
  getNotifications: async (userId) => {
    try {
      const notifications = JSON.parse(localStorage.getItem("cognipath_notifications") || "[]")
      const userNotifications = notifications.filter((n) => n.userId === userId)
      return {
        success: true,
        notifications: userNotifications.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
      }
    } catch (error) {
      return { success: false, error: error.message }
    }
  },

  createNotification: async (userId, type, title, message, data = {}) => {
    try {
      const notification = {
        id: Math.random().toString(36).substr(2, 9),
        userId,
        type,
        title,
        message,
        data,
        read: false,
        createdAt: new Date().toISOString(),
      }

      const notifications = JSON.parse(localStorage.getItem("cognipath_notifications") || "[]")
      notifications.push(notification)
      localStorage.setItem("cognipath_notifications", JSON.stringify(notifications))

      return { success: true, notification }
    } catch (error) {
      return { success: false, error: error.message }
    }
  },

  markAsRead: async (notificationId) => {
    try {
      const notifications = JSON.parse(localStorage.getItem("cognipath_notifications") || "[]")
      const notification = notifications.find((n) => n.id === notificationId)
      if (notification) {
        notification.read = true
        localStorage.setItem("cognipath_notifications", JSON.stringify(notifications))
        return { success: true }
      }
      return { success: false, error: "Notification not found" }
    } catch (error) {
      return { success: false, error: error.message }
    }
  },
}
