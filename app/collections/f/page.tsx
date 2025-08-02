import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CollectionDetailPage } from "@/components/collection-detail-page"

export default function PhotographicCollectionPage() {
  const images = [
    { src: "/placeholder.svg?height=400&width=600", alt: "Винтидж фотоапарат" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Фотограф в действие" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Проявяване в тъмна стая" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Обектив в близък план" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Филмови ролки" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Фотоизложба" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <CollectionDetailPage
          title="ФОТОГРАФСКОТО"
          collectionName="Колекция Фотографското"
          avatarSrc="/placeholder.svg?height=120&width=120"
          quote="Фотографията е начин да усетиш, да докоснеш, да обичаш. Това, което си заснел, е запечатано завинаги."
          images={images}
        />
      </main>
      <Footer />
    </div>
  )
}
