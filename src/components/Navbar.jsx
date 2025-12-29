"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Menu, X } from "lucide-react"

export default function Navbar({ user, userRole, setUser, setUserRole }) {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    setUser(null)
    setUserRole(null)
    navigate("/")
  }

  return (
    <nav className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/50 transition-all">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="font-bold text-xl text-foreground hidden sm:inline">Cognipath</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground-muted hover:text-primary transition-colors">
              Home
            </Link>
            <a href="#features" className="text-foreground-muted hover:text-primary transition-colors">
              Features
            </a>
            <Link to="/hiring" className="text-foreground-muted hover:text-primary transition-colors">
              Hire Tutors
            </Link>
            {user ? (
              <div className="flex items-center gap-4">
                <Link to="/dashboard" className="text-foreground-muted hover:text-primary">
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-all hover:shadow-lg hover:shadow-primary/50"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex gap-2">
                <Link to="/auth/login" className="px-4 py-2 text-primary hover:bg-primary/10 rounded-lg transition-all">
                  Login
                </Link>
                <Link
                  to="/auth/signup"
                  className="px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-surface-light">
            <Link to="/" className="block px-4 py-2 text-foreground-muted hover:text-primary">
              Home
            </Link>
            <a href="#features" className="block px-4 py-2 text-foreground-muted hover:text-primary">
              Features
            </a>
            <Link to="/hiring" className="block px-4 py-2 text-foreground-muted hover:text-primary">
              Hire Tutors
            </Link>
            {user ? (
              <>
                <Link to="/dashboard" className="block px-4 py-2 text-foreground-muted hover:text-primary">
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-primary hover:bg-primary/10"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="px-4 py-2 space-y-2">
                <Link
                  to="/auth/login"
                  className="block px-4 py-2 text-center text-primary border border-primary rounded-lg"
                >
                  Login
                </Link>
                <Link to="/auth/signup" className="block px-4 py-2 text-center bg-primary text-white rounded-lg">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}
