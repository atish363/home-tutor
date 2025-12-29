"use client"

import { useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { Mail, Lock, User, Phone, BookOpen } from "lucide-react"
import { useAuth } from "../hooks/useAuth"

export default function Auth({ setUser, setUserRole }) {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { signup, login, isLoading, error: authError } = useAuth()
  const [isLoginMode, setIsLoginMode] = useState(true)
  const [role, setRole] = useState(searchParams.get("role") || "guardian")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    subject: "",
    experience: "",
    bio: "",
    hourlyRate: "",
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.email) newErrors.email = "Email is required"
    if (!formData.password) newErrors.password = "Password is required"
    if (!isLoginMode && !formData.name) newErrors.name = "Name is required"
    if (!isLoginMode && role === "teacher") {
      if (!formData.subject) newErrors.subject = "Subject is required"
      if (!formData.hourlyRate) newErrors.hourlyRate = "Hourly rate is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    if (isLoginMode) {
      const result = await login(formData.email, formData.password)
      if (result.success) {
        setUser(result.user)
        setUserRole(result.user.role)
        navigate("/dashboard")
      }
    } else {
      const userData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        role: role,
        ...(role === "teacher" && {
          subject: formData.subject,
          experience: formData.experience,
          hourlyRate: formData.hourlyRate,
          bio: formData.bio,
          rating: 0,
          reviews: 0,
        }),
      }

      const result = await signup(userData)
      if (result.success) {
        setUser(result.user)
        setUserRole(role)
        navigate("/dashboard")
      }
    }
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        {/* Role Selection */}
        {!searchParams.get("role") && (
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Choose Your Role</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "guardian", label: "Parent/Guardian", icon: User },
                { value: "teacher", label: "Tutor", icon: BookOpen },
              ].map((option) => {
                const Icon = option.icon
                return (
                  <button
                    key={option.value}
                    onClick={() => setRole(option.value)}
                    className={`p-6 rounded-lg border-2 transition-all flex flex-col items-center gap-2 ${
                      role === option.value
                        ? "border-primary bg-primary/10"
                        : "border-surface-light hover:border-primary/50"
                    }`}
                  >
                    <Icon size={32} className={role === option.value ? "text-primary" : "text-foreground-muted"} />
                    <span className={role === option.value ? "text-primary font-semibold" : "text-foreground-muted"}>
                      {option.label}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* Auth Form */}
        <div className="bg-surface/50 rounded-2xl border border-surface-light p-8 backdrop-blur-sm">
          <h1 className="text-2xl font-bold text-foreground mb-2 text-center">
            {isLoginMode ? "Welcome Back" : "Join Cognipath"}
          </h1>
          <p className="text-center text-foreground-muted mb-8">
            {isLoginMode ? "Sign in to your account" : `Create a new ${role} account`}
          </p>

          {authError && (
            <div className="mb-4 p-3 bg-error/20 border border-error rounded-lg text-error text-sm">{authError}</div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLoginMode && (
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 text-foreground-muted" size={20} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full pl-10 pr-4 py-2 bg-background border border-surface-light rounded-lg text-foreground placeholder-foreground-muted focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                {errors.name && <p className="text-error text-sm mt-1">{errors.name}</p>}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-foreground-muted" size={20} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-2 bg-background border border-surface-light rounded-lg text-foreground placeholder-foreground-muted focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              {errors.email && <p className="text-error text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-foreground-muted" size={20} />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2 bg-background border border-surface-light rounded-lg text-foreground placeholder-foreground-muted focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              {errors.password && <p className="text-error text-sm mt-1">{errors.password}</p>}
            </div>

            {!isLoginMode && (
              <>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 text-foreground-muted" size={20} />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXXXXXXX"
                      className="w-full pl-10 pr-4 py-2 bg-background border border-surface-light rounded-lg text-foreground placeholder-foreground-muted focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                {role === "teacher" && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Subject/Specialization</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g., Mathematics, Science"
                        className="w-full px-4 py-2 bg-background border border-surface-light rounded-lg text-foreground placeholder-foreground-muted focus:outline-none focus:border-primary transition-colors"
                      />
                      {errors.subject && <p className="text-error text-sm mt-1">{errors.subject}</p>}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Experience (years)</label>
                        <input
                          type="number"
                          name="experience"
                          value={formData.experience}
                          onChange={handleChange}
                          placeholder="e.g., 5"
                          className="w-full px-4 py-2 bg-background border border-surface-light rounded-lg text-foreground placeholder-foreground-muted focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Hourly Rate (₹)</label>
                        <input
                          type="number"
                          name="hourlyRate"
                          value={formData.hourlyRate}
                          onChange={handleChange}
                          placeholder="500"
                          className="w-full px-4 py-2 bg-background border border-surface-light rounded-lg text-foreground placeholder-foreground-muted focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                    </div>
                    {errors.hourlyRate && <p className="text-error text-sm mt-1">{errors.hourlyRate}</p>}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Bio</label>
                      <textarea
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                        placeholder="Tell about yourself and your teaching style..."
                        rows="3"
                        className="w-full px-4 py-2 bg-background border border-surface-light rounded-lg text-foreground placeholder-foreground-muted focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </>
                )}
              </>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Loading..." : isLoginMode ? "Sign In" : "Create Account"}
            </button>
          </form>

          <p className="text-center text-foreground-muted mt-6">
            {isLoginMode ? "Don't have an account?" : "Already have an account?"}{" "}
            <button onClick={() => setIsLoginMode(!isLoginMode)} className="text-primary hover:underline font-semibold">
              {isLoginMode ? "Sign up" : "Sign in"}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
