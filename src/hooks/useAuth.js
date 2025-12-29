"use client"

import { useState, useCallback } from "react"
import { authAPI } from "../api/auth"

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const signup = useCallback(async (userData) => {
    setIsLoading(true)
    setError(null)
    try {
      const result = await authAPI.signup(userData)
      if (!result.success) {
        setError(result.error)
      }
      return result
    } catch (err) {
      setError(err.message)
      return { success: false, error: err.message }
    } finally {
      setIsLoading(false)
    }
  }, [])

  const login = useCallback(async (email, password) => {
    setIsLoading(true)
    setError(null)
    try {
      const result = await authAPI.login(email, password)
      if (!result.success) {
        setError(result.error)
      }
      return result
    } catch (err) {
      setError(err.message)
      return { success: false, error: err.message }
    } finally {
      setIsLoading(false)
    }
  }, [])

  return { signup, login, isLoading, error }
}
