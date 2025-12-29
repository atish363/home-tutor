"use client"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import Home from "@/components/pages/Home"

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Home />
      </main>
      <Footer />
    </>
  )
}
