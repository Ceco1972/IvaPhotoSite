import Image from "next/image"
import Link from "next/link"

interface PhotographerCardProps {
  image: string
  name: string
}

export function PhotographerCard({ image, name }: PhotographerCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <Link href="#" className="block mb-2 overflow-hidden rounded-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={120}
          height={120}
          className="w-32 h-32 object-cover rounded-full transition-opacity hover:opacity-80"
        />
      </Link>
      <Link href="#" className="block">
        <h3 className="text-sm font-sans font-medium leading-snug hover:underline">{name}</h3>
      </Link>
    </div>
  )
}
