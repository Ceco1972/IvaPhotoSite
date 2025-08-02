import Image from "next/image"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="w-full max-w-3xl mx-auto mb-8">
            <Image
              src="/placeholder.svg?height=1000&width=700"
              alt="Featured Image"
              width={700}
              height={1000}
              className="w-full h-auto object-cover aspect-[7/10] md:aspect-[7/10] lg:aspect-[7/10]"
            />
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-xs uppercase tracking-widest text-gray-500 font-sans">Arts & Culture</p>
            <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight">The Way Back</h1>
            <p className="text-lg text-gray-600 font-sans">Bruce Davidson</p>
          </div>
        </div>
      </div>
    </section>
  )
}
