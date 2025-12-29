"use client"

import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import Dashboard from "./pages/Dashboard"
import Hiring from "./pages/Hiring"
import "./App.css"

export default function App() {
  const [user, setUser] = useState(null)
  const [userRole, setUserRole] = useState(null)

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-background via-surface to-background flex flex-col">
        <Navbar user={user} userRole={userRole} setUser={setUser} setUserRole={setUserRole} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth/:type" element={<Auth setUser={setUser} setUserRole={setUserRole} />} />
            <Route path="/dashboard" element={<Dashboard user={user} userRole={userRole} />} />
            <Route path="/hiring" element={<Hiring />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
