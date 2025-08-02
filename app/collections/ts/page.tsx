import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CollectionDetailPage } from "@/components/collection-detail-page"

export default function ColorsCollectionPage() {
  const images = [
    { src: "/images/collections/ferris-wheel-night.jpg", alt: "Цветно виенско колело през нощта" },
    { src: "/images/collections/lion-statues-green-net.jpg", alt: "Зелени лъвски статуи пред сграда с мрежа" },
    {
      src: "/images/collections/plastic-bottle-blurred.jpg",
      alt: "Близка снимка на пластмасова бутилка с размазан фон",
    },
    { src: "/placeholder.svg?height=400&width=600", alt: "Ярки цветя" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Цветна абстракция" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Дъгов пейзаж" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Цветен пазар" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Цветни градски светлини" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Цветна храна" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <CollectionDetailPage
          title="ЦВЕТОВЕ"
          collectionName="Колекция Цветове"
          avatarSrc="/placeholder.svg?height=120&width=120"
          quote="Цветът е език, който говори без думи, разказвайки истории за светлина и живот."
          images={images}
        />
      </main>
      <Footer />
    </div>
  )
}
