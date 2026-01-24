import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Target, Eye, Heart, Users } from 'lucide-react'

const coreValues = [
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Purpose-Driven',
    description: 'Everything we do is guided by our commitment to meaningful impact and sustainable change.'
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Compassion',
    description: 'We approach our work with deep empathy and genuine care for those we serve.'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Community',
    description: 'We believe in the power of unity and collective action for greater good.'
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: 'Transparency',
    description: 'We maintain accountability and openness in all our operations and initiatives.'
  },
]

export default function About() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              About <span className="text-primary">SHINETOGETHER</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 mb-8">
              A movement dedicated to touching lives and transforming communities through education, compassion, and meaningful action.
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  We envision a world where every individual, regardless of their background or circumstances, has access to quality education, economic opportunities, and the support needed to realize their full potential.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 border border-primary/20">
                <p className="text-lg text-foreground italic">
                  "Creating pathways of hope, building bridges of unity, and shining light on possibilities untapped."
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 border border-primary/20 order-2 md:order-1">
                <p className="text-lg text-foreground italic">
                  "To transform lives and communities through strategic interventions in education, humanitarian support, and sustainable empowerment programs."
                </p>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-4xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  We are committed to identifying and supporting talented individuals and communities in need, providing them with educational sponsorships, gifts, and empowerment programs that enable sustainable development and self-sufficiency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
              Our <span className="text-primary">Core Values</span>
            </h2>
            <p className="text-center text-foreground/60 mb-16 max-w-2xl mx-auto">
              These principles guide every decision we make and every initiative we undertake.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300 hover:border-primary/50"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-8">About the Founders – Shine Together Foundation</h2>
            <div className="space-y-6 text-lg text-foreground/70 leading-relaxed">
              <p>
                Shine Together Foundation was co-founded by Michael Ayodele Oluwajuwonlo and Boluwatife Ogunmuyiwa, two purpose-driven leaders with a deep passion for impacting lives and empowering people to achieve their full potential. Their shared vision is rooted in compassion, service, and a strong desire to create sustainable opportunities for growth and transformation.
              </p>
              <p>
                The foundation was birthed through divine leading, as Mr. Michael Ayodele Oluwajuwonlo, guided by the Holy Spirit, yielded to the call to initiate a platform that would bring hope, skills, and direction to individuals seeking a better future. This vision was embraced and strengthened through partnership, giving rise to Shine Together Foundation as a vehicle for positive change.
              </p>
              <p>
                Beyond their philanthropic work, both founders are seasoned entrepreneurs with interests across multiple industries. Their business ventures include Mikayo Laundry, Mikayo Transportation, SpeakLife Luxury Wears, and Mikayo Cryptocurrency Exchange—enterprises built on excellence, innovation, and value creation.
              </p>
              <p>
                Michael Ayodele Oluwajuwonlo and Boluwatife Ogunmuyiwa are proud graduates of Interlink Polytechnic, Nigeria, where foundational experiences helped shape their leadership mindset and entrepreneurial journey.
              </p>
              <p>
                Through Shine Together Foundation, they remain committed to uplifting lives, equipping individuals with practical skills, and inspiring people to pursue purpose, independence, and lasting impact.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
