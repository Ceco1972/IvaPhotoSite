"use client"

import Link from "next/link"
import { Menu, Search, LogIn } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"

export function Header() {
  const navLinks = [
    { name: "История", href: "#stories" },
    { name: "Фотографи", href: "#photographers" },
    { name: "Практически съвети", href: "#learn" },
    { name: "Теория", href: "#fine-prints" },
    { name: "Колекции", href: "/collections" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 px-4 md:px-6 py-4 flex items-center justify-between h-16">
      <div className="flex items-center">
        <Link href="/" className="text-black text-xl font-bold tracking-tight mr-8">
          УЛИЦАТА
        </Link>
        <nav className="hidden lg:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-light text-gray-700 hover:text-black transition-colors py-2"
            >
              {link.name}
            </Link>
          ))}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-light text-gray-700 hover:text-black transition-colors bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent flex items-center px-4 py-2">
                  и всички визуални неща
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="https://www.openculture.com/2020/09/la-jetee-study-guide.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Understanding Chris Marker's Radical Sci-Fi Film La Jetée
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            A Study Guide Distributed to High Schools in the 1970s | Open Culture
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="hidden lg:flex">
          <Search className="h-5 w-5 text-gray-700" />
          <span className="sr-only">Търсене</span>
        </Button>
        <Button variant="ghost" className="hidden lg:flex text-sm font-light text-gray-700 hover:text-black">
          Вход
        </Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6 text-gray-700" />
              <span className="sr-only">Превключване на менюто за навигация</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[250px] sm:w-[300px]">
            <Link href="/" className="text-black text-xl font-bold tracking-tight mb-6 block">
              УЛИЦАТА
            </Link>
            <nav className="grid gap-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-gray-800 hover:text-black py-2"
                >
                  {link.name}
                </Link>
              ))}
              {/* For mobile, keeping it as a simple link for now */}
              <Link
                href="https://www.openculture.com/2020/09/la-jetee-study-guide.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-gray-800 hover:text-black py-2"
              >
                и всички визуални неща
              </Link>
              <Link
                href="#search"
                className="text-lg font-medium text-gray-800 hover:text-black flex items-center py-2"
              >
                <Search className="h-5 w-5 mr-2" /> Търсене
              </Link>
              <Link href="#login" className="text-lg font-medium text-gray-800 hover:text-black flex items-center py-2">
                <LogIn className="h-5 w-5 mr-2" /> Вход
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
