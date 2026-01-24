'use client';

import React from "react"
import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Star, Heart, TrendingUp } from 'lucide-react'

interface SuccessStory {
  id: number
  title: string
  name: string
  role: string
  story: string
  impact: string
  image: string
  category: 'education' | 'empowerment' | 'community'
}

const successStories: SuccessStory[] = [
  {
    id: 1,
    title: "From Student to Scholar",
    name: "Chioma Okonkwo",
    role: "University Student",
    story: "Chioma was a brilliant student with big dreams but limited resources. Through SHINETOGETHER's education sponsorship program, she received not just financial support but mentorship and encouragement. Today, she is a first-year student at a top Nigerian university studying Computer Science.",
    impact: "Sponsored for 3 years, now pursuing degree in STEM field",
    image: "/families.jpg",
    category: "education"
  },
  {
    id: 2,
    title: "Skilled and Self-Sufficient",
    name: "Uche Nnamdi",
    role: "Entrepreneur",
    story: "Uche completed our vocational skills training program in electrical installation. With just a small startup grant from SHINETOGETHER, he now runs his own electrical business, has hired two apprentices, and gives back to his community.",
    impact: "Created sustainable business and 2 jobs for youth",
    image: "/empowerment.jpg",
    category: "empowerment"
  },
  {
    id: 3,
    title: "A Mother's Second Chance",
    name: "Amara Ikem",
    role: "Caregiver & Community Leader",
    story: "After receiving support during a difficult period, Amara became a beacon of hope. She now leads our community giveaway sessions, helps identify students for scholarships, and has transformed her neighborhood through grassroots organizing.",
    impact: "Helped 50+ families access assistance programs",
    image: "/families.jpg",
    category: "community"
  },
  {
    id: 4,
    title: "Never Give Up: Education Triumphs",
    name: "Tunde Okafor",
    role: "Secondary School Graduate",
    story: "Tunde faced countless obstacles - poverty, loss, and doubt. But with SHINETOGETHER's consistent support and mentoring, he graduated with excellent grades. His journey proves that background doesn't determine destiny.",
    impact: "Achieved top grades in final exams despite challenges",
    image: "/education.jpg",
    category: "education"
  },
  {
    id: 5,
    title: "Thriving Despite Adversity",
    name: "Blessing Okoro",
    role: "Youth Advocate",
    story: "Blessing used skills learned in our empowerment program to start a small agricultural enterprise. What started as a survival strategy has become a thriving business that feeds her family and supplies her village.",
    impact: "Built sustainable income and community food security",
    image: "/empowerment.jpg",
    category: "empowerment"
  },
  {
    id: 6,
    title: "The Power of Community Support",
    name: "Ada & Family",
    role: "Community Participants",
    story: "Ada's entire family has benefited from SHINETOGETHER - her children receive education support, she received emergency assistance, and now she volunteers. This demonstrates how holistic support transforms entire families.",
    impact: "Three children in school, family stable and growing",
    image: "/families.jpg",
    category: "community"
  },
]

const categories = [
  { id: 'all', label: 'All Stories' },
  { id: 'education', label: 'Education Success' },
  { id: 'empowerment', label: 'Empowerment Stories' },
  { id: 'community', label: 'Community Impact' },
]

export default function SuccessStories() {
  const [activeCategory, setActiveCategory] = React.useState('all')

  const filteredStories = activeCategory === 'all' 
    ? successStories 
    : successStories.filter(story => story.category === activeCategory)

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
              Success <span className="text-white drop-shadow-lg">Stories</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Real people, real transformation. These stories inspire us to keep going and prove that change is possible.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/20">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                    activeCategory === cat.id
                      ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                      : 'bg-white text-foreground border-2 border-primary/20 hover:border-primary/50 hover:shadow-md'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Stories Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStories.map((story) => (
                <article
                  key={story.id}
                  className="rounded-2xl overflow-hidden border border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group bg-white"
                >
                  {/* Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-primary/20 to-primary/10">
                    <Image
                      src={story.image || "/placeholder.svg"}
                      alt={story.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white">
                      {story.category === 'education' && 'Education'}
                      {story.category === 'empowerment' && 'Empowerment'}
                      {story.category === 'community' && 'Community'}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-semibold text-primary">{story.role}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-foreground/60 text-sm font-semibold mb-3">{story.name}</p>
                    <p className="text-foreground/70 leading-relaxed mb-4 line-clamp-3">
                      {story.story}
                    </p>
                    <div className="pt-4 border-t border-primary/10 flex items-start gap-2">
                      <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm font-semibold text-foreground">{story.impact}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Inspiration Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-foreground mb-6">Your Story Could Be Next</h2>
            <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
              These individuals faced challenges that seemed impossible to overcome. But with determination, support, and belief in themselves, they thrived. You have the same potential within you.
            </p>
            <div className="bg-white rounded-2xl border-2 border-primary/20 p-8 inline-block">
              <p className="text-2xl font-bold text-primary mb-2">Remember:</p>
              <p className="text-lg text-foreground/70">Your background does not determine your future. Your actions do.</p>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
