'use client'

import React from "react"

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
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
              Get in <span className="text-white drop-shadow-lg">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Have questions or want to collaborate? We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Contact Information</h2>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Office Address</h3>
                    <p className="text-foreground/70 leading-relaxed">
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Email</h3>
                    <div className="space-y-1">
                      <p className="text-foreground/70">
                        <a href="mailto:letshinetogetherforever@gmail.com" className="hover:text-primary transition-colors">
                          letshinetogetherforever@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Phone</h3>
                    <p className="text-foreground/70">
                      <a href="tel:+2349123741013" className="hover:text-primary transition-colors">
                        +234 9123741013
                      </a>
                    </p>
                    <p className="text-foreground/70 text-sm mt-1">Available Monday-Friday, 9 AM - 5 PM</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <Clock className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Office Hours</h3>
                    <div className="space-y-1 text-foreground/70">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="text-lg font-bold text-foreground mb-6">Follow Us</h3>
                <div className="flex gap-4">
                  {[
                    { 
                      name: 'Instagram', 
                      url: '#',
                      icon: (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                        </svg>
                      )
                    },
                    { 
                      name: 'TikTok', 
                      url: '#',
                      icon: (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.86 2.86 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
                        </svg>
                      )
                    },
                    { 
                      name: 'LinkedIn', 
                      url: '#',
                      icon: (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                        </svg>
                      )
                    },
                    { 
                      name: 'X (Twitter)', 
                      url: '#',
                      icon: (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.6l-5.165-6.76-5.914 6.76h-3.308l7.73-8.835L.424 2.25h6.7l4.676 6.188 5.438-6.188zM17.002 18.807h1.646L6.154 4.01H4.382l12.62 14.797z"/>
                        </svg>
                      )
                    },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-white flex items-center justify-center transition-all duration-300"
                      aria-label={social.name}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Send Us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="donation">Donation Inquiry</option>
                    <option value="volunteer">Volunteer Opportunity</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="giveaway">Giveaway Registration</option>
                    <option value="sponsorship">Sponsorship Program</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all h-40"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="mt-1 rounded"
                    required
                  />
                  <label htmlFor="privacy" className="text-sm text-foreground/70">
                    I agree to the privacy policy and terms of service
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg flex items-center justify-center gap-2 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>
              </form>

              <p className="text-sm text-foreground/60 mt-6">
                We typically respond within 24-48 hours during business hours.
              </p>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-center">Our Reach Across Africa</h2>
            <p className="text-center text-foreground/60 mb-12">Building hope and transforming lives across the continent</p>
            <div className="rounded-2xl overflow-hidden border-2 border-primary/20 bg-white p-8 md:p-12">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                {/* Map */}
                <div className="flex-1 flex justify-center">
                  <svg viewBox="0 0 1200 1400" className="w-full max-w-lg h-auto" preserveAspectRatio="xMidYMid meet">
                    <defs>
                      <style>{`
                        .africa-fill { fill: #BFDBFE; stroke: #1E40AF; stroke-width: 1.5; }
                        .nigeria-fill { fill: #EF4444; stroke: #991B1B; stroke-width: 2; }
                        .ocean { fill: #E0F2FE; }
                        .label-continent { font-size: 24px; font-weight: bold; fill: #1E40AF; text-anchor: middle; opacity: 0.6; }
                        .label-country { font-size: 18px; font-weight: bold; fill: #7F1D1D; text-anchor: middle; }
                        .glow-circle { fill: none; stroke: #DC2626; stroke-width: 2; opacity: 0.4; animation: pulse 2s infinite; }
                      `}</style>
                      <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                        <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3"/>
                      </filter>
                    </defs>
                    
                    {/* Ocean background */}
                    <rect width="1200" height="1400" className="ocean"/>
                    
                    {/* Africa Continent - More accurate shape with recognizable features */}
                    <path className="africa-fill" filter="url(#shadow)" d="M 550 250 L 650 200 L 750 210 L 820 180 L 880 220 L 920 200 L 960 280 L 990 350 L 1020 450 L 1040 550 L 1050 650 L 1045 750 L 1030 850 L 1000 920 L 950 980 L 900 1040 L 820 1120 L 750 1200 L 680 1280 L 600 1320 L 500 1330 L 400 1320 L 320 1280 L 250 1220 L 180 1140 L 130 1050 L 100 950 L 85 850 L 75 750 L 70 650 L 75 550 L 95 450 L 130 350 L 170 280 L 220 240 L 300 210 L 380 200 L 450 210 Z"/>
                    
                    {/* Nigeria - Accurate shape */}
                    <path className="nigeria-fill" d="M 620 480 L 680 460 L 720 480 L 750 520 L 760 580 L 750 640 L 720 680 L 680 700 L 640 690 L 610 650 L 600 600 L 610 540 Z"/>
                    
                    {/* Pulsing glow circles around Nigeria */}
                    <circle cx="685" cy="590" r="80" className="glow-circle"/>
                    <circle cx="685" cy="590" r="120" className="glow-circle" style={{animationDelay: '0.5s'}}/>
                    
                    {/* Central marker for Nigeria */}
                    <circle cx="685" cy="590" r="12" fill="#DC2626" filter="url(#shadow)"/>
                    <circle cx="685" cy="590" r="20" fill="none" stroke="#DC2626" strokeWidth="2" opacity="0.6"/>
                    
                    {/* Labels */}
                    <text x="685" y="750" className="label-country">NIGERIA</text>
                    <text x="600" y="1380" className="label-continent">AFRICA</text>
                    
                    {/* Direction indicators */}
                    <g opacity="0.3">
                      <text x="100" y="100" className="label-country" fontSize="14">North</text>
                      <text x="1050" y="700" className="label-country" fontSize="14">East</text>
                      <text x="100" y="1300" className="label-country" fontSize="14">South</text>
                      <text x="50" y="700" className="label-country" fontSize="14">West</text>
                    </g>
                  </svg>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Current Focus: Nigeria</h3>
                  <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                    While our vision extends across all of Africa, we are currently focused on establishing strong roots and creating sustainable impact in Nigeria. Our programs are designed to be scalable and replicable across the continent.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-foreground/70">Lagos-based headquarters and operations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-foreground/70">Expanding to communities across Nigeria</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-foreground/70">Building partnerships for continental reach</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>

            <div className="space-y-4">
              {[
                {
                  q: 'How can I make a donation?',
                  a: 'You can donate through our website using various payment methods, or contact us directly at donations@shinetogether.org for bulk donations.'
                },
                {
                  q: 'What programs are available for volunteers?',
                  a: 'We offer event volunteering, program mentoring, administrative support, and community outreach. Fill out our volunteer form to get started!'
                },
                {
                  q: 'How can I register for a giveaway session?',
                  a: 'Visit our Giveaways page to see upcoming sessions and register. You\'ll need to meet the eligibility criteria specific to each session.'
                },
                {
                  q: 'Are my donations tax-deductible?',
                  a: 'Yes! SHINETOGETHER is a registered non-profit organization. We can provide you with a tax receipt for your donation.'
                },
              ].map((faq, idx) => (
                <details
                  key={idx}
                  className="group border border-border rounded-lg p-6 hover:border-primary/30 transition-all"
                >
                  <summary className="font-bold text-foreground cursor-pointer flex justify-between items-center">
                    {faq.q}
                    <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-foreground/70 mt-4">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
