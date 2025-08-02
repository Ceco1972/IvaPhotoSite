import Image from "next/image"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="w-full max-w-3xl mx-auto mb-8">
            <Image
              src="/images/street-scene.jpg"
              alt="Черно-бяла улична сцена с голо дърво, стара сграда и улична лампа"
              width={700}
              height={1000}
              className="w-full h-auto object-cover aspect-[7/10] md:aspect-[7/10] lg:aspect-[7/10]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
