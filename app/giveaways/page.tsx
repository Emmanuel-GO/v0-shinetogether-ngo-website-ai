'use client'

import React from "react"

import { useState, useEffect } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Calendar, Gift } from 'lucide-react'

interface AdminGiveaway {
  id: string
  title: string
  description: string
  items: number
  deadline: string
  status: 'active' | 'completed' | 'upcoming'
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
}

export default function Giveaways() {
  const [giveaways, setGiveaways] = useState<AdminGiveaway[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Load giveaways from admin dashboard's localStorage
    const savedGiveaways = localStorage.getItem('shinetogether_giveaways')
    if (savedGiveaways) {
      try {
        setGiveaways(JSON.parse(savedGiveaways))
      } catch (error) {
        console.error('[v0] Error loading giveaways:', error)
        setGiveaways([])
      }
    }
    setLoading(false)
  }, [])

  const activeGiveaways = giveaways.filter(g => g.status === 'active')
  const upcomingGiveaways = giveaways.filter(g => g.status === 'upcoming')
  const completedGiveaways = giveaways.filter(g => g.status === 'completed')

  if (loading) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen bg-white flex items-center justify-center px-4">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4" />
            <p className="text-foreground/60">Loading giveaways...</p>
          </div>
        </main>
      </>
    )
  }

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
              Community <span className="text-white drop-shadow-lg">Giveaways</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Join our initiatives to distribute gifts and support to our community members
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {giveaways.length === 0 ? (
            <div className="text-center py-20">
              <Gift className="w-16 h-16 text-primary/30 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-2">No Giveaways Yet</h2>
              <p className="text-foreground/60">Check back soon for upcoming giveaway opportunities!</p>
            </div>
          ) : (
            <>
              {/* Active Giveaways */}
              {activeGiveaways.length > 0 && (
                <section className="mb-16">
                  <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                    <span className="w-2 h-8 bg-primary rounded-full"></span>
                    Active Giveaways
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {activeGiveaways.map((giveaway) => (
                      <div
                        key={giveaway.id}
                        className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border-2 border-primary/30 p-8 hover:border-primary/60 hover:shadow-xl transition-all duration-300"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                            Active
                          </span>
                          <Gift className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3">{giveaway.title}</h3>
                        <p className="text-foreground/70 mb-6">{giveaway.description}</p>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm text-foreground/60">
                            <Gift className="w-4 h-4" />
                            <span>{giveaway.items} items to distribute</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-foreground/60">
                            <Calendar className="w-4 h-4" />
                            <span>Deadline: {formatDate(giveaway.deadline)}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Upcoming Giveaways */}
              {upcomingGiveaways.length > 0 && (
                <section className="mb-16">
                  <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                    <span className="w-2 h-8 bg-blue-400 rounded-full"></span>
                    Upcoming Giveaways
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {upcomingGiveaways.map((giveaway) => (
                      <div
                        key={giveaway.id}
                        className="bg-gradient-to-br from-blue-50 to-blue-5 rounded-2xl border-2 border-blue-200 p-8 hover:border-blue-400 hover:shadow-xl transition-all duration-300"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                            Upcoming
                          </span>
                          <Calendar className="w-6 h-6 text-blue-500" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3">{giveaway.title}</h3>
                        <p className="text-foreground/70 mb-6">{giveaway.description}</p>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm text-foreground/60">
                            <Gift className="w-4 h-4" />
                            <span>{giveaway.items} items to distribute</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-foreground/60">
                            <Calendar className="w-4 h-4" />
                            <span>Scheduled: {formatDate(giveaway.deadline)}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Completed Giveaways */}
              {completedGiveaways.length > 0 && (
                <section>
                  <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                    <span className="w-2 h-8 bg-gray-400 rounded-full"></span>
                    Completed Giveaways
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {completedGiveaways.map((giveaway) => (
                      <div
                        key={giveaway.id}
                        className="bg-gradient-to-br from-gray-50 to-gray-5 rounded-2xl border-2 border-gray-200 p-8 hover:border-gray-400 hover:shadow-xl transition-all duration-300 opacity-80"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                            Completed
                          </span>
                          <Gift className="w-6 h-6 text-gray-500" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3">{giveaway.title}</h3>
                        <p className="text-foreground/70 mb-6">{giveaway.description}</p>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm text-foreground/60">
                            <Gift className="w-4 h-4" />
                            <span>{giveaway.items} items distributed</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-foreground/60">
                            <Calendar className="w-4 h-4" />
                            <span>Completed: {formatDate(giveaway.deadline)}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </>
          )}
        </div>

        <Footer />
      </main>
    </>
  )
}
