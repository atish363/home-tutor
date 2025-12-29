"use client"

import { useState } from "react"
import { Star, Send } from "lucide-react"

export default function ReviewForm({ tutorId, onSubmit, isSubmitting }) {
  const [rating, setRating] = useState(5)
  const [comment, setComment] = useState("")
  const [hoveredRating, setHoveredRating] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (comment.trim() && rating > 0) {
      onSubmit(rating, comment)
      setComment("")
      setRating(5)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-surface/50 rounded-xl border border-surface-light p-6 space-y-4">
      <h3 className="text-lg font-semibold text-foreground">Share Your Experience</h3>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-foreground">Rating</label>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(0)}
              className="transition-transform hover:scale-110"
            >
              <Star
                size={28}
                className={`${
                  star <= (hoveredRating || rating) ? "text-warning fill-warning" : "text-foreground-muted"
                } transition-colors`}
              />
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Your Review</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your experience with this tutor..."
          rows="4"
          className="w-full px-4 py-3 bg-background border border-surface-light rounded-lg text-foreground placeholder-foreground-muted resize-none focus:outline-none focus:border-primary"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting || !comment.trim()}
        className="w-full py-2 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        <Send size={18} />
        {isSubmitting ? "Submitting..." : "Submit Review"}
      </button>
    </form>
  )
}
