import { StoryCard } from "@/components/story-card"

export function LatestStories() {
  const stories = [
    {
      image: "/images/collections/modern-architecture-night.jpg",
      category: "Колекции", // Collections
      title: "", // Removed title
      author: "", // Removed author
    },
    {
      image: "/images/collections/seagulls-old-building.jpg",
      category: "Колекции", // Collections
      title: "", // Removed title
      author: "", // Removed author
    },
    {
      image: "/images/collections/spider-web-dew.jpg",
      category: "Колекции", // Collections
      title: "", // Removed title
      author: "", // Removed author
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold font-sans uppercase tracking-wide relative pb-4">
            ПОСЛЕДНИ ИСТОРИИ
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 border-b border-gray-300"></span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto max-w-fit">
          {stories.map((story, index) => (
            <StoryCard key={index} {...story} />
          ))}
        </div>
      </div>
    </section>
  )
}
