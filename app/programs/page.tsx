import React from "react"
import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { BookOpen, Gift, Heart, Lightbulb, Check } from 'lucide-react'

interface ProgramDetail {
  id: number
  icon: React.ReactNode
  title: string
  description: string
  objectives: string[]
  impact: string
  image: string
}

const programs: ProgramDetail[] = [
  {
    id: 1,
    icon: <BookOpen className="w-8 h-8" />,
    title: 'Education Sponsorships',
    description: 'We identify talented students from underprivileged backgrounds and provide comprehensive educational support to help them achieve their academic dreams.',
    objectives: [
      'Fund tuition and educational materials',
      'Provide mentorship and career guidance',
      'Support exam preparation and skill development',
      'Create scholarship pathways to higher education'
    ],
    impact: 'Help over 1000 students in the next 2 years',
    image: '/education.jpg'
  },
  {
    id: 2,
    icon: <Gift className="w-8 h-8" />,
    title: 'Community Giveaways',
    description: 'Regular giveaway sessions that bring joy and essential support to families and individuals in need, fostering community spirit and inclusivity.',
    objectives: [
      'Distribute essential goods and gifts',
      'Host seasonal community events',
      'Engage volunteers and donors',
      'Build connections within communities'
    ],
    impact: 'Distribute gifts to over 2,500 families, creating memorable moments of hope',
    image: '/giveaway.jpg'
  },
  {
    id: 3,
    icon: <Heart className="w-8 h-8" />,
    title: 'Humanitarian Outreach',
    description: 'Comprehensive humanitarian programs focused on disaster relief, emergency support, and addressing immediate human needs in vulnerable communities.',
    objectives: [
      'Provide emergency relief during disasters',
      'Distribute food and medical supplies',
      'Support healthcare access',
      'Rebuild affected communities'
    ],
    impact: 'Reach 3,000+ individuals during emergencies, saving lives and rebuilding hope',
    image: '/humanitarian.jpg'
  },
  {
    id: 4,
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Empowerment Initiatives',
    description: 'Life-changing programs that empower individuals with skills, knowledge, and opportunities to become self-sufficient and achieve sustainable livelihoods.',
    objectives: [
      'Skills training and vocational education',
      'Business startup support',
      'Financial literacy programs',
      'Leadership development workshops'
    ],
    impact: 'Empower 800+ individuals with skills leading to employment and business creation',
    image: '/empowerment.jpg'
  },
]

export default function Programs() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary via-primary/90 to-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 hover:scale-105 transition-transform duration-300">
              Our <span className="text-white drop-shadow-lg">Programs</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Transforming lives through strategic, impactful initiatives designed for sustainable change.
            </p>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <div key={program.id} className={`mb-20 grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:[direction:rtl]' : ''}`}>
                {/* Image */}
                <div className={index % 2 === 1 ? 'md:[direction:ltr]' : ''}>
                  <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={program.image || "/placeholder.svg"}
                      alt={program.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'md:[direction:ltr]' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      {program.icon}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">{program.title}</h2>
                  </div>
                  <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                    {program.description}
                  </p>
                  <h3 className="text-xl font-bold text-foreground mb-4">Key Objectives</h3>
                  <ul className="space-y-3 mb-8">
                    {program.objectives.map((objective, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/70">{objective}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                    <p className="text-foreground font-semibold">
                      <span className="text-primary">Our Impact: </span>
                      {program.impact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary/90 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Make an Impact?</h2>
            <p className="text-lg text-white/80 mb-8">
              Join us in our mission to transform lives and strengthen communities through meaningful programs and initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/get-involved" className="px-8 py-3 rounded-full bg-white text-primary font-semibold hover:bg-white/90 transition-all hover:shadow-lg inline-block">
                Get Involved
              </a>
              <a href="/contact" className="px-8 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white/10 transition-all inline-block">
                Learn More
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
