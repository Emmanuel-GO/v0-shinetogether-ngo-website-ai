'use client'

import React from "react"
import Image from 'next/image'
import { BookOpen, Gift, Heart, Lightbulb } from 'lucide-react'

interface Program {
  id: number
  icon: React.ReactNode
  title: string
  description: string
  color: string
  image: string
}

const programs: Program[] = [
  {
    id: 1,
    icon: <BookOpen className="w-8 h-8" />,
    title: 'Education Sponsorships',
    description: 'Provide scholarships and educational support to talented students from underprivileged backgrounds.',
    color: 'bg-blue-50',
    image: '/education.jpg',
  },
  {
    id: 2,
    icon: <Gift className="w-8 h-8" />,
    title: 'Community Giveaways',
    description: 'Regular giveaway sessions that distribute essential items and gifts to deserving families and individuals.',
    color: 'bg-emerald-50',
    image: '/giveaway.jpg',
  },
  {
    id: 3,
    icon: <Heart className="w-8 h-8" />,
    title: 'Humanitarian Outreach',
    description: 'Comprehensive humanitarian programs focused on disaster relief and community welfare.',
    color: 'bg-pink-50',
    image: '/humanitarian.jpg',
  },
  {
    id: 4,
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Empowerment Initiatives',
    description: 'Life-changing programs that empower individuals with skills and opportunities for better futures.',
    color: 'bg-amber-50',
    image: '/empowerment.jpg',
  },
]

export function FeaturedPrograms() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
          Our <span className="text-primary">Programs</span>
        </h2>
        <p className="text-center text-foreground/60 mb-16 max-w-2xl mx-auto">
          Transforming lives through strategic initiatives and meaningful community engagement
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className="rounded-2xl border border-primary/10 hover:shadow-xl transition-all duration-300 group cursor-pointer hover:border-primary/30 overflow-hidden bg-white"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-primary/20 to-primary/10">
                <Image
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              {/* Content */}
              <div className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {program.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground">{program.title}</h3>
                  </div>
                </div>
                <p className="text-foreground/70 leading-relaxed mb-6">{program.description}</p>
                <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                  Learn more →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
