import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CollectionDetailPage } from "@/components/collection-detail-page"

export default function BlackAndWhiteCollectionPage() {
  const images = [
    { src: "/images/collections/black-and-white-cat.jpg", alt: "Черно-бяла котка на кола" },
    { src: "/images/collections/black-and-white-motion.jpg", alt: "Черно-бяла интериорна сцена с размазано движение" },
    {
      src: "/images/collections/black-and-white-objects.jpg",
      alt: "Черно-бяла близка снимка на стъклени и метални предмети",
    },
    { src: "/placeholder.svg?height=400&width=600", alt: "Улична фотография" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Портрет" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Пейзаж" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Абстрактна фотография" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Архитектура" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Природа" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <CollectionDetailPage
          title="ЧЕРНО - БЯЛО"
          collectionName="Колекция Черно-бяло"
          avatarSrc="/placeholder.svg?height=120&width=120"
          quote="Черно-бялата фотография е за душата, за емоцията, за истината."
          images={images}
        />
      </main>
      <Footer />
    </div>
  )
}
