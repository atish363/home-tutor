// Reviews API

export const reviewsAPI = {
  getTutorReviews: async (tutorId) => {
    try {
      const reviews = JSON.parse(localStorage.getItem("cognipath_reviews") || "[]")
      const tutorReviews = reviews.filter((r) => r.tutorId === tutorId)
      return { success: true, reviews: tutorReviews.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) }
    } catch (error) {
      return { success: false, error: error.message }
    }
  },

  submitReview: async (tutorId, studentId, rating, comment) => {
    try {
      const review = {
        id: Math.random().toString(36).substr(2, 9),
        tutorId,
        studentId,
        rating,
        comment,
        createdAt: new Date().toISOString(),
      }

      const reviews = JSON.parse(localStorage.getItem("cognipath_reviews") || "[]")
      reviews.push(review)
      localStorage.setItem("cognipath_reviews", JSON.stringify(reviews))

      // Update tutor rating
      const tutors = JSON.parse(localStorage.getItem("cognipath_tutors") || "[]")
      const tutor = tutors.find((t) => t.id === tutorId)
      if (tutor) {
        const allTutorReviews = reviews.filter((r) => r.tutorId === tutorId)
        tutor.rating = (allTutorReviews.reduce((sum, r) => sum + r.rating, 0) / allTutorReviews.length).toFixed(1)
        tutor.reviews = allTutorReviews.length
        localStorage.setItem("cognipath_tutors", JSON.stringify(tutors))
      }

      return { success: true, review }
    } catch (error) {
      return { success: false, error: error.message }
    }
  },
}
