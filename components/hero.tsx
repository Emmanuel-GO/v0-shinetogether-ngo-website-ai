'use client'

import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'

export function Hero() {
  const [displayText, setDisplayText] = useState('')
  const fullText = "Shining Hope. Changing Lives. Together."
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, index + 1))
        setIndex(index + 1)
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [index, fullText])

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-secondary via-white to-white overflow-hidden flex items-center justify-center pt-20">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline - Word by Word Animation */}
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
          <span className="text-primary">{displayText}</span>
          {index < fullText.length && (
            <span className="animate-pulse text-primary">|</span>
          )}
        </h1>

        {/* Mission Statement with fade-in */}
        <div className="opacity-0 animate-fade-in-delayed">
          <p className="text-lg md:text-xl text-foreground/70 mb-12 max-w-2xl mx-auto">
            A non-profit organization dedicated to touching lives through education sponsorships, 
            giveaways, humanitarian outreach, and life-changing community programs.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="opacity-0 animate-fade-in-delayed-2 flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="/programs" className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:shadow-xl transition-all duration-300 hover:scale-105 inline-block">
            Explore Programs
          </a>
          <a href="/get-involved" className="px-8 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-lg inline-block">
            Get Involved
          </a>
          <a href="/giveaways" className="px-8 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-lg inline-block">
            View Giveaways
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="opacity-0 animate-fade-in-delayed-3 flex justify-center">
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-primary" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInDelayed {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-delayed {
          animation: fadeInDelayed 0.8s ease-out 0.4s forwards;
        }

        .animate-fade-in-delayed-2 {
          animation: fadeInDelayed 0.8s ease-out 0.6s forwards;
        }

        .animate-fade-in-delayed-3 {
          animation: fadeInDelayed 0.8s ease-out 0.8s forwards;
        }
      `}</style>
    </section>
  )
}
