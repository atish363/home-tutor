"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import GuardianDashboard from "@/components/dashboards/GuardianDashboard"
import TeacherDashboard from "@/components/dashboards/TeacherDashboard"

export default function Dashboard() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [userRole, setUserRole] = useState(null)

  useEffect(() => {
    const userData = localStorage.getItem("cognipath_user")
    if (userData) {
      const parsed = JSON.parse(userData)
      setUser(parsed.user)
      setUserRole(parsed.role)
    } else {
      router.push("/auth")
    }
  }, [router])

  if (!user) {
    return (
      <>
        <Navbar />
        <div className="flex-1 min-h-screen flex items-center justify-center">
          <p className="text-foreground">Loading...</p>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {userRole === "guardian" && <GuardianDashboard user={user} />}
        {userRole === "teacher" && <TeacherDashboard user={user} />}
      </main>
      <Footer />
    </>
  )
}
