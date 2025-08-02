"use client"

import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Mail } from "lucide-react"
import { cn } from "@/lib/utils" // Import cn utility

interface CollectionDetailPageProps {
  title: string
  collectionName: string
  avatarSrc: string
  quote: string
  images: { src: string; alt: string; objectFitClass?: string }[] // Added objectFitClass
}

export function CollectionDetailPage({ title, collectionName, avatarSrc, quote, images }: CollectionDetailPageProps) {
  return (
    <div className="flex flex-col items-center py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        {/* Social Icons */}
        <div className="flex justify-end space-x-4 mb-8">
          <Button variant="ghost" size="icon">
            <Facebook className="h-5 w-5 text-gray-700" />
            <span className="sr-only">Facebook</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Twitter className="h-5 w-5 text-gray-700" />
            <span className="sr-only">Twitter</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Mail className="h-5 w-5 text-gray-700" />
            <span className="sr-only">Email</span>
          </Button>
        </div>

        {/* Collection Profile Section */}
        <div className="flex flex-col items-center text-center mb-12">
          <Avatar className="h-24 w-24 mb-4">
            <AvatarImage src={avatarSrc || "/placeholder.svg"} alt={collectionName} />
            <AvatarFallback>{collectionName.substring(0, 2)}</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl md:text-5xl font-bold font-sans uppercase tracking-wide relative pb-4">
            {title}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 border-b border-gray-300"></span>
          </h1>
          <p className="text-xl font-serif text-gray-700 mt-4">{collectionName}</p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="gallery" className="w-full max-w-4xl mx-auto mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="gallery">Галерия</TabsTrigger>
            <TabsTrigger value="info">Информация</TabsTrigger>
            <TabsTrigger value="related">Свързани</TabsTrigger>
          </TabsList>
          <TabsContent value="gallery" className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {images.map((img, index) => (
                <div key={index} className="relative group overflow-hidden">
                  <Image
                    src={img.src || "/placeholder.svg"}
                    alt={img.alt}
                    width={600}
                    height={400}
                    className={cn(
                      "w-full h-auto object-cover aspect-[3/2] transition-transform group-hover:scale-105",
                      img.objectFitClass, // Apply custom class if provided
                    )}
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-lg font-semibold">{img.alt}</span>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="info" className="mt-8 text-center text-gray-700">
            <p>
              Това е страница с информация за колекцията &quot;{title}&quot;. Тук можете да намерите подробности за
              историята, концепцията и значението на тази колекция.
            </p>
          </TabsContent>
          <TabsContent value="related" className="mt-8 text-center text-gray-700">
            <p>Разгледайте други свързани колекции и теми, които може да ви интересуват.</p>
          </TabsContent>
        </Tabs>

        {/* Quote Section */}
        <div className="max-w-2xl mx-auto text-center mt-12">
          <p className="text-2xl md:text-3xl font-serif italic leading-relaxed text-gray-800">{quote}</p>
        </div>
      </div>
    </div>
  )
}
