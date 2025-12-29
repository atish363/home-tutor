"use client"

import { useState, useEffect } from "react"
import { Bell, X } from "lucide-react"
import { notificationsAPI } from "../api/notifications"

export default function NotificationCenter({ userId }) {
  const [notifications, setNotifications] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [unreadCount, setUnreadCount] = useState(0)

  useEffect(() => {
    loadNotifications()
  }, [userId])

  const loadNotifications = async () => {
    const result = await notificationsAPI.getNotifications(userId)
    if (result.success) {
      setNotifications(result.notifications)
      setUnreadCount(result.notifications.filter((n) => !n.read).length)
    }
  }

  const handleMarkAsRead = async (notificationId) => {
    await notificationsAPI.markAsRead(notificationId)
    loadNotifications()
  }

  return (
    <>
      {/* Notification Bell */}
      <button onClick={() => setIsOpen(!isOpen)} className="relative p-2 hover:bg-surface rounded-lg transition-colors">
        <Bell size={20} className="text-foreground-muted" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-warning rounded-full text-white text-xs flex items-center justify-center font-bold animate-pulse">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Notification Panel */}
      {isOpen && (
        <div className="absolute top-16 right-0 w-96 max-h-96 bg-surface rounded-xl border border-surface-light shadow-2xl overflow-hidden z-40">
          {/* Header */}
          <div className="flex justify-between items-center p-4 bg-primary/20 border-b border-surface-light">
            <h3 className="font-semibold text-foreground">Notifications</h3>
            <button onClick={() => setIsOpen(false)} className="hover:bg-primary/20 p-1 rounded transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Notifications List */}
          <div className="overflow-y-auto max-h-80">
            {notifications.length === 0 ? (
              <div className="p-8 text-center">
                <Bell size={32} className="text-foreground-muted mx-auto mb-2" />
                <p className="text-foreground-muted">No notifications yet</p>
              </div>
            ) : (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 border-b border-surface-light hover:bg-surface-light/50 transition-colors cursor-pointer ${
                    !notification.read ? "bg-primary/10" : ""
                  }`}
                  onClick={() => handleMarkAsRead(notification.id)}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground">{notification.title}</p>
                      <p className="text-sm text-foreground-muted">{notification.message}</p>
                      <p className="text-xs text-foreground-muted mt-1">
                        {new Date(notification.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </>
  )
}
