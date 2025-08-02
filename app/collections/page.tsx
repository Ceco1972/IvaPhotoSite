import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PhotographersList } from "@/components/photographers-list"

export default function CollectionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <PhotographersList />
      </main>
      <Footer />
    </div>
  )
}
