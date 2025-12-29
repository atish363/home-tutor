// Job Postings API endpoints

export const jobsAPI = {
  getAllJobs: async (filters = {}) => {
    try {
      const jobs = JSON.parse(localStorage.getItem("cognipath_jobs") || "[]")

      let filtered = jobs
      if (filters.subject) {
        filtered = filtered.filter((j) => j.subject.toLowerCase().includes(filters.subject.toLowerCase()))
      }
      if (filters.status) {
        filtered = filtered.filter((j) => j.status === filters.status)
      }

      return { success: true, jobs: filtered }
    } catch (error) {
      return { success: false, error: error.message }
    }
  },

  getJobById: async (jobId) => {
    try {
      const jobs = JSON.parse(localStorage.getItem("cognipath_jobs") || "[]")
      const job = jobs.find((j) => j.id === jobId)
      return { success: true, job }
    } catch (error) {
      return { success: false, error: error.message }
    }
  },

  createJob: async (jobData) => {
    try {
      const job = {
        id: Math.random().toString(36).substr(2, 9),
        ...jobData,
        status: "Open",
        applications: [],
        createdAt: new Date().toISOString(),
      }

      const jobs = JSON.parse(localStorage.getItem("cognipath_jobs") || "[]")
      jobs.push(job)
      localStorage.setItem("cognipath_jobs", JSON.stringify(jobs))

      return { success: true, job }
    } catch (error) {
      return { success: false, error: error.message }
    }
  },

  updateJob: async (jobId, updates) => {
    try {
      const jobs = JSON.parse(localStorage.getItem("cognipath_jobs") || "[]")
      const jobIndex = jobs.findIndex((j) => j.id === jobId)
      if (jobIndex !== -1) {
        jobs[jobIndex] = { ...jobs[jobIndex], ...updates }
        localStorage.setItem("cognipath_jobs", JSON.stringify(jobs))
        return { success: true, job: jobs[jobIndex] }
      }
      return { success: false, error: "Job not found" }
    } catch (error) {
      return { success: false, error: error.message }
    }
  },

  applyForJob: async (jobId, applicantData) => {
    try {
      const jobs = JSON.parse(localStorage.getItem("cognipath_jobs") || "[]")
      const job = jobs.find((j) => j.id === jobId)
      if (job) {
        job.applications.push({
          id: Math.random().toString(36).substr(2, 9),
          ...applicantData,
          appliedAt: new Date().toISOString(),
          status: "Pending",
        })
        localStorage.setItem("cognipath_jobs", JSON.stringify(jobs))
        return { success: true, job }
      }
      return { success: false, error: "Job not found" }
    } catch (error) {
      return { success: false, error: error.message }
    }
  },
}
