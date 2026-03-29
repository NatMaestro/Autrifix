import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { AISection } from "@/components/ai-section"
import { GlobalSection } from "@/components/global-section"
import { WaitlistSection } from "@/components/waitlist-section"
import { TrustSection } from "@/components/trust-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="relative min-w-0 overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <AISection />
      <GlobalSection />
      <WaitlistSection />
      <TrustSection />
      <Footer />
    </main>
  )
}
