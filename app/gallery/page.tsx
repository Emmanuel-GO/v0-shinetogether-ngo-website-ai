'use client'

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { X } from 'lucide-react'

interface GalleryItem {
  id: number
  title: string
  category: string
  description: string
}

const galleryItems: GalleryItem[] = [
  { id: 1, title: 'Education Sponsorship Program', category: 'education', description: 'Students receiving educational support' },
  { id: 2, title: 'Community Giveaway Event', category: 'giveaway', description: 'Families benefiting from our giveaway sessions' },
  { id: 3, title: 'Youth Empowerment Workshop', category: 'workshops', description: 'Interactive skill development sessions' },
  { id: 4, title: 'Humanitarian Relief Distribution', category: 'humanitarian', description: 'Essential items being distributed to communities' },
  { id: 5, title: 'Annual Scholarship Ceremony', category: 'events', description: 'Celebrating our scholarship recipients' },
  { id: 6, title: 'Community Volunteers', category: 'volunteers', description: 'Our dedicated volunteer team making a difference' },
  { id: 7, title: 'School Supply Distribution', category: 'education', description: 'Students excited to receive school materials' },
  { id: 8, title: 'Leadership Training Session', category: 'workshops', description: 'Young leaders developing essential skills' },
]

const categories = ['all', 'education', 'giveaway', 'humanitarian', 'workshops', 'events', 'volunteers']

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70">
              Visual stories of impact, community, and hope in action.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 capitalize ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-secondary text-foreground hover:bg-secondary/80'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid - Masonry Style */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`group rounded-2xl overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 hover:border-primary/50 ${
                    index % 5 === 2 ? 'md:col-span-2 md:row-span-2' : ''
                  }`}
                  onClick={() => setSelectedItem(item)}
                >
                  {/* Image Placeholder */}
                  <div className={`bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center overflow-hidden relative ${
                    index % 5 === 2 ? 'h-96' : 'h-64'
                  } group-hover:scale-105 transition-transform duration-300`}>
                    <div className="text-7xl font-bold text-primary/30 group-hover:text-primary/50 transition-colors">
                      {item.title.charAt(0)}
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-semibold">View</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-foreground/70 text-sm">{item.description}</p>
                    <span className="inline-block mt-3 text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full capitalize">
                      {item.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto">
              <div className="sticky top-0 flex justify-end p-4 bg-white border-b border-border">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="p-2 hover:bg-secondary rounded-lg transition-all"
                  aria-label="Close"
                >
                  <X className="w-6 h-6 text-foreground" />
                </button>
              </div>

              {/* Image */}
              <div className="h-96 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="text-9xl font-bold text-primary/30">
                  {selectedItem.title.charAt(0)}
                </div>
              </div>

              {/* Details */}
              <div className="p-8">
                <h2 className="text-4xl font-bold text-foreground mb-4">{selectedItem.title}</h2>
                <p className="text-lg text-foreground/70 mb-6">{selectedItem.description}</p>

                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full capitalize">
                    {selectedItem.category}
                  </span>
                </div>

                <div className="mt-8 p-6 bg-secondary/30 rounded-xl border border-border">
                  <p className="text-foreground/70 text-sm">
                    This image is part of our ongoing documentation of SHINETOGETHER's impact in communities. 
                    Each photo represents a real story of change, hope, and transformation through our programs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary/90 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Share Your Stories</h2>
            <p className="text-lg text-white/80 mb-8">
              Have a photo or story to share? We'd love to showcase the impact you've experienced or witnessed.
            </p>
            <button className="px-8 py-3 bg-white text-primary rounded-full font-semibold hover:bg-white/90 transition-all hover:shadow-lg">
              Submit Your Photo
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
