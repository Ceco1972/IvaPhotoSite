"use client"

import Link from "next/link"
import { Menu, Search, LogIn } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const navLinks = [
    { name: "Stories", href: "#stories" },
    { name: "Photographers", href: "#photographers" },
    { name: "Learn", href: "#learn" },
    { name: "Store", href: "#store" },
    { name: "Fine Prints", href: "#fine-prints" },
    { name: "A World in Color", href: "#a-world-in-color" },
    { name: "Work With Us", href: "#work-with-us" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 px-4 md:px-6 py-4 flex items-center justify-between h-16">
      <div className="flex items-center">
        <Link href="/" className="text-black text-xl font-bold tracking-tight mr-8">
          MAGNUM
        </Link>
        <nav className="hidden lg:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-light text-gray-700 hover:text-black transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="hidden lg:flex">
          <Search className="h-5 w-5 text-gray-700" />
          <span className="sr-only">Search</span>
        </Button>
        <Button variant="ghost" className="hidden lg:flex text-sm font-light text-gray-700 hover:text-black">
          Login
        </Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6 text-gray-700" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[250px] sm:w-[300px]">
            <Link href="/" className="text-black text-xl font-bold tracking-tight mb-6 block">
              MAGNUM
            </Link>
            <nav className="grid gap-4 py-4">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-lg font-medium text-gray-800 hover:text-black">
                  {link.name}
                </Link>
              ))}
              <Link href="#search" className="text-lg font-medium text-gray-800 hover:text-black flex items-center">
                <Search className="h-5 w-5 mr-2" /> Search
              </Link>
              <Link href="#login" className="text-lg font-medium text-gray-800 hover:text-black flex items-center">
                <LogIn className="h-5 w-5 mr-2" /> Login
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
