// Tutors API endpoints

export const tutorsAPI = {
  getAllTutors: async (filters = {}) => {
    try {
      const tutors = JSON.parse(localStorage.getItem("cognipath_tutors") || "[]")

      // Apply filters
      let filtered = tutors
      if (filters.subject) {
        filtered = filtered.filter((t) => t.subject.toLowerCase().includes(filters.subject.toLowerCase()))
      }
      if (filters.minRating) {
        filtered = filtered.filter((t) => t.rating >= filters.minRating)
      }
      if (filters.maxRate) {
        filtered = filtered.filter((t) => Number.parseInt(t.hourlyRate) <= filters.maxRate)
      }

      return { success: true, tutors: filtered }
    } catch (error) {
      return { success: false, error: error.message }
    }
  },

  getTutorById: async (tutorId) => {
    try {
      const tutors = JSON.parse(localStorage.getItem("cognipath_tutors") || "[]")
      const tutor = tutors.find((t) => t.id === tutorId)
      return { success: true, tutor }
    } catch (error) {
      return { success: false, error: error.message }
    }
  },

  createTutor: async (tutorData) => {
    try {
      const tutor = {
        id: Math.random().toString(36).substr(2, 9),
        ...tutorData,
        rating: 0,
        reviews: 0,
        createdAt: new Date().toISOString(),
      }

      const tutors = JSON.parse(localStorage.getItem("cognipath_tutors") || "[]")
      tutors.push(tutor)
      localStorage.setItem("cognipath_tutors", JSON.stringify(tutors))

      return { success: true, tutor }
    } catch (error) {
      return { success: false, error: error.message }
    }
  },

  updateTutor: async (tutorId, updates) => {
    try {
      const tutors = JSON.parse(localStorage.getItem("cognipath_tutors") || "[]")
      const tutorIndex = tutors.findIndex((t) => t.id === tutorId)
      if (tutorIndex !== -1) {
        tutors[tutorIndex] = { ...tutors[tutorIndex], ...updates }
        localStorage.setItem("cognipath_tutors", JSON.stringify(tutors))
        return { success: true, tutor: tutors[tutorIndex] }
      }
      return { success: false, error: "Tutor not found" }
    } catch (error) {
      return { success: false, error: error.message }
    }
  },

  rateTutor: async (tutorId, rating, review) => {
    try {
      const tutors = JSON.parse(localStorage.getItem("cognipath_tutors") || "[]")
      const tutor = tutors.find((t) => t.id === tutorId)
      if (tutor) {
        // Calculate new average rating
        const newAvg = (tutor.rating * tutor.reviews + rating) / (tutor.reviews + 1)
        tutor.rating = Math.round(newAvg * 10) / 10
        tutor.reviews += 1
        localStorage.setItem("cognipath_tutors", JSON.stringify(tutors))
        return { success: true, tutor }
      }
      return { success: false, error: "Tutor not found" }
    } catch (error) {
      return { success: false, error: error.message }
    }
  },
}
