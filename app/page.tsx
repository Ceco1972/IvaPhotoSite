import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { LatestStories } from "@/components/latest-stories"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <LatestStories />
      </main>
      <Footer />
    </div>
  )
}
