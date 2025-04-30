"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export function TableOfContents() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observerOptions = {
      rootMargin: "-100px 0px -80% 0px",
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      })
    }
  }

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "definitions", title: "Key Definitions" },
    { id: "purpose", title: "Purpose of This Policy" },
    { id: "who-is-keshflip", title: "Who is KESHFLIP?" },
    { id: "information-we-collect", title: "Information We Collect" },
    { id: "why-we-use-your-data", title: "Why We Use Your Data" },
    { id: "cookies-analytics", title: "Cookies & Analytics" },
    { id: "childrens-data", title: "Children's Data" },
    { id: "data-sharing", title: "Data Sharing & Third Parties" },
    { id: "international-transfers", title: "International Transfers" },
    { id: "your-rights", title: "Your Rights" },
    { id: "automated-profiling", title: "Automated Profiling" },
    { id: "data-security", title: "Data Security" },
    { id: "data-retention", title: "Data Retention" },
    { id: "data-disposal", title: "Data Disposal" },
    { id: "marketing", title: "Marketing" },
    { id: "changes", title: "Changes to This Policy" },
    { id: "fraud-disclaimer", title: "Fraud Disclaimer" },
    { id: "contact", title: "Contact" },
  ]

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-4">
      <h2 className="font-medium text-slate-900 mb-4">Table of Contents</h2>
      <nav>
        <ul className="space-y-1 text-sm">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "w-full text-left px-2 py-1 rounded hover:bg-slate-100 transition-colors",
                  activeSection === section.id ? "text-slate-900 font-medium bg-slate-100" : "text-slate-600",
                )}
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
