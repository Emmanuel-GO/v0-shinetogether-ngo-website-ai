import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Calendar, User, ArrowRight } from 'lucide-react'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  readTime: number
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Power of Education: How Sponsorships Transform Lives',
    excerpt: 'Discover the inspiring stories of students whose lives have been changed through our education sponsorship program.',
    content: 'Education is the cornerstone of opportunity...',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    category: 'Education',
    readTime: 5
  },
  {
    id: 2,
    title: 'Behind the Scenes: Our Latest Humanitarian Relief Effort',
    excerpt: 'Get an inside look at how our team coordinated relief efforts during the recent community crisis.',
    content: 'When disaster strikes, our organization mobilizes...',
    author: 'Michael Chen',
    date: '2024-01-08',
    category: 'Humanitarian',
    readTime: 7
  },
  {
    id: 3,
    title: 'Volunteer Spotlight: Meet the Heroes Making a Difference',
    excerpt: 'Learn about the incredible volunteers who dedicate their time and energy to our mission.',
    content: 'Every organization is powered by passionate individuals...',
    author: 'Amara Osei',
    date: '2023-12-28',
    category: 'Community',
    readTime: 4
  },
  {
    id: 4,
    title: 'Empowerment Through Skills: Our New Vocational Training Program',
    excerpt: 'We launch an exciting new initiative to equip youth with marketable skills for sustainable employment.',
    content: 'Unemployment among youth is a pressing challenge...',
    author: 'David Rodriguez',
    date: '2023-12-20',
    category: 'Empowerment',
    readTime: 6
  },
  {
    id: 5,
    title: 'Community Voices: How Your Donations Make Real Impact',
    excerpt: 'Transparent reporting on how donor contributions directly support our programs and beneficiaries.',
    content: 'We believe in transparency and accountability...',
    author: 'Sarah Johnson',
    date: '2023-12-10',
    category: 'Impact',
    readTime: 5
  },
  {
    id: 6,
    title: 'Looking Ahead: Our 2024 Strategic Initiatives',
    excerpt: 'Discover our ambitious plans to expand our reach and deepen our impact in 2024.',
    content: 'As we reflect on our achievements...',
    author: 'Michael Chen',
    date: '2023-11-30',
    category: 'News',
    readTime: 8
  },
]

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
}

export default function Blog() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Blog</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70">
              Stories, insights, and updates from SHINETOGETHER's journey of impact and transformation.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Featured Image */}
              <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 h-96 border-2 border-primary/20 flex items-center justify-center overflow-hidden">
                <div className="text-7xl font-bold text-primary/30">
                  {blogPosts[0].title.charAt(0)}
                </div>
              </div>

              {/* Featured Content */}
              <div>
                <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                  {blogPosts[0].category}
                </div>
                <h2 className="text-4xl font-bold text-foreground mb-4">{blogPosts[0].title}</h2>
                <p className="text-lg text-foreground/70 mb-6">{blogPosts[0].excerpt}</p>

                <div className="flex flex-wrap gap-4 mb-8 pb-8 border-b border-border">
                  <div className="flex items-center gap-2 text-foreground/60">
                    <User className="w-4 h-4" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/60">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(blogPosts[0].date)}</span>
                  </div>
                  <div className="text-foreground/60">{blogPosts[0].readTime} min read</div>
                </div>

                <button className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all hover:shadow-lg">
                  Read Full Article
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* All Posts Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12">Latest Articles</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.slice(1).map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 hover:border-primary/30 group cursor-pointer"
                >
                  {/* Image */}
                  <div className="h-56 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
                    <div className="text-6xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                      {post.title.charAt(0)}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-4">
                      {post.category}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-foreground/70 mb-6 leading-relaxed">{post.excerpt}</p>

                    <div className="flex flex-wrap gap-4 text-sm text-foreground/60 pb-6 border-b border-border">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <span>{post.readTime} min</span>
                    </div>

                    <button className="mt-6 inline-flex items-center gap-2 text-primary font-semibold group-hover:translate-x-1 transition-transform">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Stay Updated</h2>
            <p className="text-lg text-foreground/70 mb-8">
              Subscribe to our blog to receive stories, insights, and updates directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
