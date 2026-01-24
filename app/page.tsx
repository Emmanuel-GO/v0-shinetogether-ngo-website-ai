import { Navigation } from '@/components/navigation'
import { RollingBanner } from '@/components/rolling-banner'
import { Hero } from '@/components/hero'
import { StorySection } from '@/components/story-section'
import { ActiveProgram } from '@/components/active-program'
import { ImpactStats } from '@/components/impact-stats'
import { FeaturedPrograms } from '@/components/featured-programs'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <RollingBanner />
      <Hero />
      <StorySection />
      <ActiveProgram />
      <ImpactStats />
      <FeaturedPrograms />
      <Footer />
    </>
  )
}
