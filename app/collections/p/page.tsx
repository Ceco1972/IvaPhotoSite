import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CollectionDetailPage } from "@/components/collection-detail-page"

export default function OutskirtsCollectionPage() {
  const images = [
    { src: "/images/collections/train-wagon-vines.jpg", alt: "Червен влаков вагон, обрасъл с лози" },
    { src: "/images/collections/graffiti-building.jpg", alt: "Сграда с графити и метална конструкция" },
    { src: "/images/collections/horse-cart-village.jpg", alt: "Кон с каруца и хора пред село" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Разрушена сграда" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Изоставена фабрика" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Графити стена" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Празна улица по здрач" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Стари железопътни релси" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Разрушена детска площадка" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <CollectionDetailPage
          title="ПОКРАЙНИНИТЕ"
          collectionName="Колекция Покрайнините"
          avatarSrc="/placeholder.svg?height=120&width=120"
          quote="В покрайнините на града се крие истинската история, разказана от забравени улици и мълчаливи сгради."
          images={images}
        />
      </main>
      <Footer />
    </div>
  )
}
