"use client"

import Link from "next/link"
import { ArrowRight, Zap, Users, BookOpen, Award, MessageSquare, TrendingUp } from "lucide-react"

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        {/* Gradient Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/30 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Learn from the
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {" "}
                  Best Tutors
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Connect with expert tutors, get personalized guidance, and excel in your studies. Cognipath brings
                education to your doorstep.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/auth"
                  className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all flex items-center justify-center gap-2 group"
                >
                  Find a Tutor <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link
                  href="/auth"
                  className="px-8 py-4 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all"
                >
                  Become a Tutor
                </Link>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 border border-primary/30 backdrop-blur-sm">
                <div className="space-y-4">
                  {[
                    { count: "5000+", label: "Expert Tutors", icon: Users },
                    { count: "98%", label: "Success Rate", icon: TrendingUp },
                    { count: "50K+", label: "Students Helped", icon: Award },
                  ].map((stat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 p-4 bg-card/50 rounded-lg border border-border hover:border-primary/50 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <stat.icon size={24} className="text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{stat.count}</p>
                        <p className="text-foreground font-semibold">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why Choose Cognipath?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need for successful online tutoring
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Instant Connection",
                description: "Find and connect with tutors in minutes, not days.",
              },
              {
                icon: Users,
                title: "Expert Tutors",
                description: "Verified and experienced tutors across all subjects.",
              },
              {
                icon: BookOpen,
                title: "Personalized Learning",
                description: "Custom lesson plans tailored to your pace.",
              },
              {
                icon: MessageSquare,
                title: "Real-time Communication",
                description: "Direct WhatsApp messaging for instant help.",
              },
              {
                icon: Award,
                title: "Quality Assurance",
                description: "Ratings and reviews ensure the best experience.",
              },
              {
                icon: TrendingUp,
                title: "Track Progress",
                description: "Monitor academic growth with detailed analytics.",
              },
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="p-6 bg-card/50 rounded-xl border border-border hover:border-primary/50 hover:bg-card/80 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl p-12 border border-primary/30 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-4">Ready to Start Learning?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of students and parents who trust Cognipath.
            </p>
            <Link
              href="/auth"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
