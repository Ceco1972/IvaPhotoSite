import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
        <div className="space-y-4 flex flex-col items-center text-center">
          <h3 className="text-sm font-bold uppercase tracking-wider mb-4">УЛИЦАТА</h3>
          <ul className="space-y-2 text-sm font-light">
            <li>
              <Link href="#" className="hover:underline">
                Списание
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Събития и изложби
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Лицензиране
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4 flex flex-col items-center text-center">
          <h3 className="text-sm font-bold uppercase tracking-wider mb-4">ЗА НАС</h3>
          <ul className="space-y-2 text-sm font-light">
            <li>
              <Link href="#" className="hover:underline">
                История
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Присъединете се
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Партнирайте си с нас
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4 flex flex-col items-center text-center">
          <h3 className="text-sm font-bold uppercase tracking-wider mb-4">ПОЛИТИКИ</h3>
          <ul className="space-y-2 text-sm font-light">
            <li>
              <Link href="#" className="hover:underline">
                Кодекс за поведение
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Поверителност
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Бисквитки
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container px-4 md:px-6 mt-12 pt-8 border-t border-gray-800 flex flex-col items-center text-center">
        <p className="text-sm text-gray-400 mb-4">Останете във връзка</p>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            type="email"
            placeholder="Въведете своя имейл адрес"
            className="flex-1 bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:ring-offset-0 focus:ring-transparent"
          />
          <Button type="submit" variant="ghost" size="icon" className="text-white hover:bg-gray-800">
            <ArrowRight className="h-5 w-5" />
            <span className="sr-only">Абониране</span>
          </Button>
        </div>
      </div>
    </footer>
  )
}
