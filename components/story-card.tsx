import Image from "next/image"
import Link from "next/link"

interface StoryCardProps {
  image: string
  category: string
  title: string
  author: string
}

export function StoryCard({ image, category, title, author }: StoryCardProps) {
  return (
    <div className="group flex flex-col items-center text-center">
      <Link href="#" className="block mb-4 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={`${title} (${category})`}
          width={400}
          height={300}
          className="w-full h-auto object-cover aspect-[4/3] transition-opacity group-hover:opacity-80"
        />
      </Link>
      <p className="text-xs uppercase tracking-widest text-gray-500 font-sans mb-1">{category}</p>
      <Link href="#" className="block">
        <h3 className="text-lg font-semibold font-serif leading-snug group-hover:underline">{title}</h3>
      </Link>
      <p className="text-sm text-gray-600 font-sans mt-1">{author}</p>
    </div>
  )
}
