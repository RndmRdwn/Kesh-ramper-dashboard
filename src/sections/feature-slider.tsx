"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

import Coin from '../../public/assets/icons/coin.svg'
import Flip from '../../public/assets/icons/flip.svg'
import Rocket from '../../public/assets/icons/rocket.svg'
import TypingAnimation from "@/components/animations/TypingAnimation"
import Reveal from "@/components/animations/reveal"

import GPlay from '../../public/assets/sample/g-play.svg'
import AStore from '../../public/assets/sample/a-store.svg'

import Feature01 from '../../public/assets/features/buy-crypto.svg'
import Fade from "@/components/animations/fade"


export default function FinancialAppSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const slides = [
    {
      header: "Buy & Sell",
      badge: "Instant Trading",
      icon: Flip,
      title: "Buy & Sell Crypto Effortlessly",
      subtitle: "Manage you crypto trades with ease and speed.",
      features: [
        "Instant Transactions: Buy and sell crypto in seconds.",
        "Best Rates: Enjoy competitive pricing with low fees.",
        "Secure Payments: Seamlessly deposit and withdraw using local currency.",
      ],
      image: "/placeholder.svg?height=600&width=300",
    },
    {
      header: "Payments",
      badge: "Seamless Transactions",
      icon: Coin,
      title: "Pay With Crypto Anywhere",
      subtitle: "Make secure and instant payments using your crypto balance.",
      features: [
        "Fast & Easy: Pay for goods and services with just a few taps.",
        "Global Reach: Transact with businesses and individuals worldwide.",
        "Flexible Options: Choose from multiple cryptocurrencies for payments.",
      ],
      image: "/placeholder.svg?height=600&width=300",
    },
    {
      header: "Send Money",
      badge: "Instant Transfers",
      icon: Rocket,
      title: "Send Crypto with Ease",
      subtitle: "Transfer funds securely to friends, family and business anytime and anywhere.",
      features: [
        "Lightning Fast-Transfers: Send crypto instantly with minimal fees.",
        "Mulitple Currencies: Support for various digital assets and local currencies.",
        "Reliable & Secure: Your transactions are protected with top-tier security.",
      ],
      image: "/placeholder.svg?height=600&width=300",
    },
  ]

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }, [slides.length])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextSlide()
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevSlide()
    }
  }

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentSlide, nextSlide])

  return (
    <div className="relative w-full max-w-md mx-auto overflow-hidden">
      {/* Logo */}
      <div className="absolute top-6 left-6 z-10 flex items-center gap-2">

      <Image src={slides[currentSlide].icon} alt="image" width={20} height={20} />
      <span className="text-white text-2xl font-semibold">{slides[currentSlide].header}</span>
      </div>

      {/* Dots */}
      <div className="absolute top-6 right-6 z-10 flex gap-1">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              currentSlide === index ? "bg-white w-4" : "bg-white/50",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation buttons */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-white/10 backdrop-blur-sm rounded-full p-2 text-white"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-white/10 backdrop-blur-sm rounded-full p-2 text-white"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button> */}

      {/* Slides container */}
      <div
        className="flex transition-transform duration-500 ease-out h-[900px]"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full bg-gradient-to-tr from-primary/10 rounded-xl  text-white p-6 flex flex-col"
          >
            <div className="mb-8 mt-16">
              <div className="inline-block rounded-full mb-4">
                <Reveal>
                    <span className="text-sm flex gap-2  bg-gradient-to-br from-primary/20 to-muted/10 px-5 py-2 rounded-full">
                        {/* <Image src={slide.icon} alt="image" width={20} height={20} /> */}
                        <TypingAnimation color='gray' content={slide.badge} size='medium' delay={0.098} speed={2}/>
                    </span>
                </Reveal>
              </div>
            <TypingAnimation color='white' content={slide.title} size='xlarge' delay={0.028} speed={3}/>
              
            <Fade delay={0.5}>
              <p className="text-gray-300/50">{slide.subtitle}</p>
            </Fade>
            </div>

            <div className="space-y-4 mb-8">
              {slide.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="mt-1 bg-purple-500/20 rounded-full p-1">
                    <Check className="h-4 w-4 text-purple-400" />
                  </div>
                  <Reveal delay={ i * 0.8}>
                    <div className="text-sm">
                        {feature.split(":")[0]}:<span className="text-gray-300/50"> {feature.split(":")[1]}</span>
                    </div>
                  </Reveal>
                </div>
              ))}
            </div>

             <div className="flex pb-4 gap-5">
                <Reveal delay={2}>
                    <Image src={GPlay} alt="image" width={150} height={150} />
                </Reveal>
                <Reveal delay={2.5}>
                    <Image src={AStore} alt="image" width={150} height={150} />
                </Reveal>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <div className="relative  inline-block">
                <Reveal delay={3.5}>
                    <Image
                    src={Feature01 }
                    alt="App screenshot"
                    width={320}
                    height={500}
                    className=""
                    />
                </Reveal>
                
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

