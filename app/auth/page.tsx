"use client"

import { Suspense } from "react"
import Auth from "@/components/pages/Auth"

export default function AuthPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Auth />
    </Suspense>
  )
}
