import { StoryCard } from "@/components/story-card"

export function LatestStories() {
  const stories = [
    {
      image: "/placeholder.svg?height=300&width=400",
      category: "Изкуство и култура", // Arts & Culture
      title: "The Way Back",
      author: "Bruce Davidson",
    },
    {
      image: "/placeholder.svg?height=300&width=400",
      category: "Изкуство и култура", // Arts & Culture
      title: "Shadow Collection: Gregory Halpern and the Birthplace of Photography",
      author: "Gregory Halpern",
    },
    {
      image: "/placeholder.svg?height=300&width=400",
      category: "Изкуство и култура", // Arts & Culture
      title: "Summer Selection",
      author: "Various Photographers",
    },
    {
      image: "/placeholder.svg?height=300&width=400",
      category: "Новини", // News
      title: "Ivory Coast's Vaccinated Gen-Z",
      author: "Newsha Tavakolian",
    },
    {
      image: "/placeholder.svg?height=300&width=400",
      category: "Новини", // News
      title: "Introducing the Malaria Vaccine in Nigeria",
      author: "Jérôme Sessini",
    },
    {
      image: "/placeholder.svg?height=300&width=400",
      category: "Новини", // News
      title: "Fighting Cervical Cancer in Nepal",
      author: "Nanna Heitmann",
    },
    {
      image: "/placeholder.svg?height=300&width=400",
      category: "Новини", // News
      title: "Delivering Vaccines in Times of War",
      author: "Salih Basheer",
    },
    {
      image: "/placeholder.svg?height=300&width=400",
      category: "Тема и истории", // Theme & Stories
      title: "Stories From Gavi, The Vaccine Alliance",
      author: "Various Photographers",
    },
    {
      image: "/placeholder.svg?height=300&width=400",
      category: "Новини", // News
      title: "I AM STILL HERE-My Lens",
      author: "Newsha Tavakolian",
    },
    {
      image: "/placeholder.svg?height=300&width=400",
      category: "Новини", // News
      title: "Dispatch From Tehran",
      author: "Newsha Tavakolian",
    },
    {
      image: "/placeholder.svg?height=300&width=400",
      category: "Новини", // News
      title: "Updates from Magnum's 78th Annual General Meeting",
      author: "Magnum Photos",
    },
    {
      image: "/placeholder.svg?height=300&width=400",
      category: "Теория и практика", // Theory & Practice
      title: "Enri Canaj and the Aegean Sea",
      author: "Enri Canaj",
    },
    {
      image: "/placeholder.svg?height=300&width=400",
      category: "Изкуство и култура", // Arts & Culture
      title: "A World in Color: France, Monuments and Memory",
      author: "Various Photographers",
    },
    {
      image: "/placeholder.svg?height=300&width=400",
      category: "Изкуство и култура", // Arts & Culture
      title: "Celebrating Pride 2025",
      author: "Various Photographers",
    },
    {
      image: "/placeholder.svg?height=300&width=400",
      category: "Тема | 10 Истории", // Theme | 10 Stories
      title: "Pride Month 2025",
      author: "Various Photographers",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stories.map((story, index) => (
            <StoryCard key={index} {...story} />
          ))}
        </div>
      </div>
    </section>
  )
}
