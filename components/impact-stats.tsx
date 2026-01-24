'use client'

interface Stat {
  value: number
  label: string
  suffix?: string
}

const stats: Stat[] = [
  { value: 1000, label: 'Lives Touched', suffix: '+' },
  { value: 100, label: 'Students Sponsored', suffix: '+' },
  { value: 5, label: 'Events Held', suffix: '+' },
  { value: 400, label: 'Gifts Distributed', suffix: '+' },
]

function StatCounter({ target, label, suffix }: Stat) {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
        {target.toLocaleString()}{suffix}
      </div>
      <p className="text-foreground/70 font-medium">{label}</p>
    </div>
  )
}

export function ImpactStats() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
          Our <span className="text-primary">Impact</span>
        </h2>
        <p className="text-center text-foreground/60 mb-16 max-w-2xl mx-auto text-lg">
          Measurable change in communities we serve
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-8 border border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all duration-300 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-4 mb-4 inline-block">
                <div className="text-4xl md:text-5xl font-bold text-primary">
                  {stat.value.toLocaleString()}{stat.suffix}
                </div>
              </div>
              <p className="text-foreground/70 font-semibold text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
