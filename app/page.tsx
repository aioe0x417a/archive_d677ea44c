"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useState, useEffect } from "react"

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [count, setCount] = useState(0)
  const [mounted, setMounted] = useState(false)

  // Handle hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <main className="min-h-screen p-8">
      {/* Header */}
      <div className="fixed top-4 right-4">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
      </div>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center py-20">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Welcome to Next.js
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            A beautiful and modern application template
          </p>
        </div>

        {/* Interactive Counter Card */}
        <div className="bg-card p-8 rounded-xl shadow-lg hover:-translate-y-1 transition-transform duration-300 ease-in-out max-w-sm mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Interactive Counter</h2>
          <div className="text-4xl font-bold mb-4" role="status" aria-live="polite">
            {count}
          </div>
          <div className="flex gap-2 justify-center">
            <button
              onClick={() => setCount(c => c - 1)}
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              aria-label="Decrease counter"
            >
              Decrease
            </button>
            <button
              onClick={() => setCount(c => c + 1)}
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              aria-label="Increase counter"
            >
              Increase
            </button>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 py-12">
        {[
          {
            title: "Modern Design",
            description: "Clean and minimalistic UI with smooth animations",
          },
          {
            title: "Responsive",
            description: "Perfectly adapted for all screen sizes",
          },
          {
            title: "Dark Mode",
            description: "Toggle between light and dark themes",
          },
          {
            title: "Interactive",
            description: "Engaging user interactions and feedback",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-card p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-transform duration-300 ease-in-out"
          >
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </section>
    </main>
  )
}