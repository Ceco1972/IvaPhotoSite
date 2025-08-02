import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Magnum Photos</h3>
          <ul className="space-y-2 text-sm font-light">
            <li>
              <Link href="#" className="hover:underline">
                Magazine
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Shop
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Events & Exhibitions
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Licensing
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider mb-4">About</h3>
          <ul className="space-y-2 text-sm font-light">
            <li>
              <Link href="#" className="hover:underline">
                History
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Join
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Partner With Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Shop</h3>
          <ul className="space-y-2 text-sm font-light">
            <li>
              <Link href="#" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Shipping
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Returns
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Policies</h3>
          <ul className="space-y-2 text-sm font-light">
            <li>
              <Link href="#" className="hover:underline">
                Code of Conduct
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Cookies
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container px-4 md:px-6 mt-12 pt-8 border-t border-gray-800 flex flex-col items-center text-center">
        <p className="text-sm text-gray-400 mb-4">Stay in touch</p>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:ring-offset-0 focus:ring-transparent"
          />
          <Button type="submit" variant="ghost" size="icon" className="text-white hover:bg-gray-800">
            <ArrowRight className="h-5 w-5" />
            <span className="sr-only">Subscribe</span>
          </Button>
        </div>
      </div>
    </footer>
  )
}
