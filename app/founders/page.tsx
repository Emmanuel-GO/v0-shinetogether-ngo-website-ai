import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

interface Founder {
  id: number
  name: string
  title: string
  bio: string
  message: string
}

const founders: Founder[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'Executive Director & Co-Founder',
    bio: 'With over 15 years of experience in non-profit leadership, Sarah has been instrumental in scaling SHINETOGETHER from a vision to a thriving organization.',
    message: 'Every child deserves the chance to dream big and achieve their potential. That\'s what drives us every single day.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    title: 'Director of Programs & Co-Founder',
    bio: 'Michael brings expertise in program development and community engagement. His innovative approaches have shaped our most impactful initiatives.',
    message: 'Real change happens when we listen to communities, understand their needs, and work together towards sustainable solutions.',
  },
  {
    id: 3,
    name: 'Amara Osei',
    title: 'Community Outreach Lead',
    bio: 'Amara\'s passion for humanitarian work and deep connections within communities make her invaluable to our mission.',
    message: 'The stories of transformation we witness fuel our commitment to expand our reach and deepen our impact.',
  },
  {
    id: 4,
    name: 'David Rodriguez',
    title: 'Operations & Finance Director',
    bio: 'David ensures our organization operates with transparency and efficiency, allowing resources to flow directly to those in need.',
    message: 'Accountability and stewardship are at the heart of everything we do. Trust is earned through consistent action.',
  },
]

export default function Founders() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Meet Our <span className="text-primary">Leadership</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70">
              Passionate individuals united by a shared vision to transform lives and strengthen communities.
            </p>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {founders.map((founder) => (
                <div key={founder.id} className="group">
                  <div className="mb-6 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl h-72 border border-primary/20 flex items-center justify-center overflow-hidden">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-primary/30 mb-4">
                        {founder.name.charAt(0)}
                      </div>
                      <p className="text-foreground/50 font-medium">{founder.name}</p>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{founder.name}</h3>
                  <p className="text-primary font-semibold mb-4">{founder.title}</p>
                  <p className="text-foreground/70 mb-6">{founder.bio}</p>
                  <div className="bg-secondary/50 rounded-xl p-6 border-l-4 border-primary">
                    <p className="text-foreground italic">
                      "{founder.message}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Board & Advisory */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
              Board & Advisory <span className="text-primary">Members</span>
            </h2>
            <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto text-lg">
              Our board members bring diverse expertise, networks, and commitment to guide our organization towards greater impact and sustainability.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['Dr. Elizabeth Adams', 'Prof. James Kwame', 'Lisa Thompson', 'Robert Patel', 'Grace Mwangi', 'Carlos Mendez'].map((member, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-border hover:shadow-lg transition-all">
                  <div className="w-full h-48 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary/30">{member.charAt(0)}</span>
                  </div>
                  <h4 className="text-lg font-bold text-foreground">{member}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
