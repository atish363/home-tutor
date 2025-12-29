import { Star, User } from "lucide-react"

export default function ReviewCard({ review }) {
  return (
    <div className="bg-surface/50 rounded-lg border border-surface-light p-4">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <User size={20} className="text-white" />
          </div>
          <div>
            <p className="text-foreground font-semibold">Anonymous Student</p>
            <p className="text-foreground-muted text-xs">{new Date(review.createdAt).toLocaleDateString()}</p>
          </div>
        </div>
        <div className="flex items-center gap-1 bg-primary/20 px-2 py-1 rounded">
          <Star size={14} className="text-warning fill-warning" />
          <span className="text-sm font-semibold text-foreground">{review.rating}</span>
        </div>
      </div>
      <p className="text-foreground-muted text-sm">{review.comment}</p>
    </div>
  )
}
