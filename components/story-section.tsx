'use client'

import Image from 'next/image'

export function StorySection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story Text */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                The Story of <span className="text-primary">African Families</span>
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Across Africa, millions of families face unimaginable challenges. Parents work dawn to dusk, yet struggle to put food on the table and send their children to school. In rural villages and bustling cities alike, talented children sit outside classrooms because their families cannot afford the fees—a seemingly simple barrier that crushes dreams before they even take flight.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-foreground/70 leading-relaxed">
                A child with immense potential watches siblings go hungry. A young girl capable of changing the world works in the fields instead of attending school. Families make impossible choices—education or food, medicine or rent. These aren't just statistics; they are real people with real dreams, held back not by lack of ability, but by lack of opportunity.
              </p>

              <p className="text-lg text-foreground/70 leading-relaxed">
                This is why SHINETOGETHER exists. We believe that no child should be left behind because of their family's circumstances. Every young person deserves a chance to learn, to grow, and to become the best version of themselves. Through education sponsorships, vocational training, and community support, we're breaking the cycle of poverty and creating pathways to a brighter future.
              </p>
            </div>

            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-lg">
              <p className="text-lg text-foreground font-semibold">
                <span className="text-primary">Our Mission:</span> To bring hope, opportunity, and transformation to families who need it most.
              </p>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl overflow-hidden h-80 border border-primary/20 relative">
              <Image
                src="/families.jpg"
                alt="African Families"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl overflow-hidden h-40 border border-primary/20 relative">
                <div className="text-center">
                  <svg className="w-12 h-12 text-primary/30 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 13.18v4C5 17.4 5.6 18 6.82 18h10.36C18.4 18 19 17.4 19 16.18v-4m-7 1v-4h-4v4m0-5h4V5m6 0v4m0-5h-4v4m0-5v4"/>
                  </svg>
                  <p className="text-foreground/40 text-sm font-medium">Education</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl overflow-hidden h-40 border border-primary/20 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-12 h-12 text-primary/30 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <p className="text-foreground/40 text-sm font-medium">Hope</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
