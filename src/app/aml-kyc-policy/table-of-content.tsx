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
    { id: "customer-verification", title: "1. Customer Verification" },
    { id: "sanctions-pep-screening", title: "2. Sanctions and PEP Screening" },
    { id: "compliance-officer", title: "3. Compliance Officer Role" },
    { id: "transaction-monitoring", title: "4. Transaction Monitoring" },
    { id: "risk-management", title: "5. Risk Management" },
    { id: "account-management", title: "6. Account Management" },
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
