import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CollectionDetailPage } from "@/components/collection-detail-page"

export default function CatsAndDogsCollectionPage() {
  const images = [
    { src: "/images/collections/black-cat-yawning.jpg", alt: "Черна котка, прозяваща се" },
    {
      src: "/images/collections/orange-cat-sniffing.jpg",
      alt: "Оранжева котка, която души земята (близък план, котката е в долната част на кадъра)",
      objectFitClass: "object-bottom", // Ensure cropping from the top
    },
    { src: "/images/collections/tabby-cat-grass.jpg", alt: "Шарена котка в суха трева" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Сладко коте" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Игриво куче" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Котка и куче играят" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Спяща котка" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Бягащо куче" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Котка гледа през прозореца" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <CollectionDetailPage
          title="КОТКИ И КУЧЕТА"
          collectionName="Колекция Котки и кучета"
          avatarSrc="/placeholder.svg?height=120&width=120"
          quote="Животните са най-искрените модели, техните емоции са чисти и неподправени."
          images={images}
        />
      </main>
      <Footer />
    </div>
  )
}
