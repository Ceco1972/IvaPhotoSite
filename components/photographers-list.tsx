import { PhotographerCard } from "@/components/photographer-card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export function PhotographersList() {
  // Добавете тази константа в началото на компонента PhotographersList
  const collectionPageMap: { [key: string]: { path: string; title: string } } = {
    Ч: { path: "ch", title: "Черно - бяло" },
    К: { path: "k", title: "Котки и кучета" },
    Ц: { path: "ts", title: "Цветове" },
    Ф: { path: "f", title: "Фотографското" },
    П: { path: "p", title: "Покрайнините" },
  }

  const photographers = [
    { name: "Abbas", image: "/images/photographers/abbas.jpg" },
    { name: "Antoine d'Agata", image: "/images/photographers/antoine-d-agata.jpg" },
    { name: "Peter van Agtmael", image: "/images/photographers/peter-van-agtmael.jpg" },
    { name: "Micha Bar Am", image: "/images/photographers/micha-bar-am.jpg" },
    { name: "Eve Arnold", image: "/images/photographers/eve-arnold.jpg" },
    { name: "Olivia Arthur", image: "/images/photographers/olivia-arthur.jpg" },
    { name: "Bruno Barbey", image: "/images/photographers/bruno-barbey.jpg" },
    { name: "Salih Basheer", image: "/images/photographers/salih-basheer.jpg" },
    { name: "Jonas Bendiksen", image: "/images/photographers/jonas-bendiksen.jpg" },
    { name: "Ian Berry", image: "/images/photographers/ian-berry.jpg" },
    { name: "Werner Bischof", image: "/images/photographers/werner-bischof.jpg" },
    { name: "Matt Black", image: "/images/photographers/matt-black.jpg" },
    { name: "Myriam Boulos", image: "/images/photographers/myriam-boulos.jpg" },
    { name: "René Burri", image: "/images/photographers/rene-burri.jpg" },
    { name: "Enri Canaj", image: "/images/photographers/enri-canaj.jpg" },
    { name: "Cornell Capa", image: "/images/photographers/cornell-capa.jpg" },
    { name: "Robert Capa", image: "/images/photographers/robert-capa.jpg" },
    { name: "Henri Cartier-Bresson", image: "/images/photographers/henri-cartier-bresson.jpg" },
    { name: "Chien-Chi Chang", image: "/images/photographers/chien-chi-chang.jpg" },
    { name: "Sabina Çimen", image: "/images/photographers/sabina-cimen.jpg" },
    { name: "Ernest Cole", image: "/images/photographers/ernest-cole.jpg" },
    { name: "Bruce Davidson", image: "/images/photographers/bruce-davidson.jpg" },
    { name: "Raymond Depardon", image: "/images/photographers/raymond-depardon.jpg" },
    { name: "Bieke Depoorter", image: "/images/photographers/bleke-depoorter.jpg" },
    { name: "Carolyn Drake", image: "/images/photographers/carolyn-drake.jpg" },
    { name: "Thomas Dworzak", image: "/images/photographers/thomas-dworzak.jpg" },
    { name: "Nikos Economopoulos", image: "/images/photographers/nikos-economopoulos.jpg" },
    { name: "Elliott Erwitt", image: "/images/photographers/elliott-erwitt.jpg" },
    { name: "Martine Franck", image: "/images/photographers/martine-franck.jpg" },
    { name: "Stuart Franklin", image: "/images/photographers/stuart-franklin.jpg" },
    { name: "Leonard Freed", image: "/images/photographers/leonard-freed.jpg" },
    { name: "Paul Fusco", image: "/images/photographers/paul-fusco.jpg" },
    { name: "Jean Gaumy", image: "/images/photographers/jean-gaumy.jpg" },
    { name: "Bruce Gilden", image: "/images/photographers/bruce-gilden.jpg" },
    { name: "Burt Glinn", image: "/images/photographers/burt-glinn.jpg" },
    { name: "Jim Goldberg", image: "/images/photographers/jim-goldberg.jpg" },
    { name: "Philip Jones Griffiths", image: "/images/photographers/philip-jones-griffiths.jpg" },
    { name: "Harry Gruyaert", image: "/images/photographers/harry-gruyaert.jpg" },
    { name: "Cristina García Rodero", image: "/images/photographers/cristina-garcia-rodero.jpg" },
    { name: "David Hurn", image: "/images/photographers/david-hurn.jpg" },
    { name: "Nanna Heitmann", image: "/images/photographers/nanna-heitmann.jpg" },
    { name: "Thomas Hoepker", image: "/images/photographers/thomas-hoepker.jpg" },
    { name: "Sohrab Hura", image: "/images/photographers/sohrab-hura.jpg" },
    { name: "Richard Kalvar", image: "/images/photographers/richard-kalvar.jpg" },
    { name: "Carl De Keyzer", image: "/images/photographers/carl-de-keyzer.jpg" },
    { name: "Sakir Khader", image: "/images/photographers/sakir-khader.jpg" },
    { name: "Josef Koudelka", image: "/images/photographers/josef-koudelka.jpg" },
    { name: "Hiroji Kubota", image: "/images/photographers/hiroji-kubota.jpg" },
    { name: "Sergio Larrain", image: "/images/photographers/sergio-larrain.jpg" },
    { name: "Herbert List", image: "/images/photographers/herbert-list.jpg" },
    { name: "Lorenzo Meloni", image: "/images/photographers/lorenzo-meloni.jpg" },
    { name: "Cristina de Middel", image: "/images/photographers/cristina-de-middel.jpg" },
    { name: "Rafał Milach", image: "/images/photographers/rafal-milach.jpg" },
    { name: "Wayne Miller", image: "/images/photographers/wayne-miller.jpg" },
    { name: "Inge Morath", image: "/images/photographers/inge-morath.jpg" },
    { name: "Alex Majoli", image: "/images/photographers/alex-majoli.jpg" },
    { name: "Constantine Manos", image: "/images/photographers/constantine-manos.jpg" },
    { name: "Peter Marlow", image: "/images/photographers/peter-marlow.jpg" },
    { name: "Yael Martínez", image: "/images/photographers/yael-martinez.jpg" },
    { name: "Steve McCurry", image: "/images/photographers/steve-mccurry.jpg" },
    { name: "Susan Meiselas", image: "/images/photographers/susan-meiselas.jpg" },
    { name: "Lu Nan", image: "/images/photographers/lu-nan.jpg" },
    { name: "Emin Özmen", image: "/images/photographers/emin-ozmen.jpg" },
    { name: "Gilles Peress", image: "/images/photographers/gilles-peress.jpg" },
    { name: "Gueorgui Pinkhassov", image: "/images/photographers/gueorgui-pinkhassov.jpg" },
    { name: "Mark Power", image: "/images/photographers/mark-power.jpg" },
    { name: "Raghu Rai", image: "/images/photographers/raghu-rai.jpg" },
    { name: "George Rodger", image: "/images/photographers/george-rodger.jpg" },
    { name: "Guy Le Querrec", image: "/images/photographers/guy-le-querrec.jpg" },
    { name: "Alessandra Sanguinetti", image: "/images/photographers/alessandra-sanguinetti.jpg" },
    { name: "Ferdinando Scianna", image: "/images/photographers/ferdinando-scianna.jpg" },
    { name: "Jérôme Sessini", image: "/images/photographers/jerome-sessini.jpg" },
    { name: "Moises Saman", image: "/images/photographers/moises-saman.jpg" },
    { name: "Dennis Stock", image: "/images/photographers/dennis-stock.jpg" },
    { name: "Mikhael Subotzky", image: "/images/photographers/mikhael-subotzky.jpg" },
    { name: "Eli Reed", image: "/images/photographers/eli-reed.jpg" },
    { name: "Lua Ribeira", image: "/images/photographers/lua-ribeira.jpg" },
    { name: "Marc Riboud", image: "/images/photographers/marc-riboud.jpg" },
    { name: "Zlied Ben Romdhane", image: "/images/photographers/zlied-ben-romdhane.jpg" },
    { name: "Jacob Aue Sobol", image: "/images/photographers/jacob-aue-sobol.jpg" },
    { name: "Alec Soth", image: "/images/photographers/alec-soth.jpg" },
    { name: "Chris Steele-Perkins", image: "/images/photographers/chris-steele-perkins.jpg" },
    { name: "Newsha Tavakolian", image: "/images/photographers/newsha-tavakolian.jpg" },
    { name: "Nicolas Tikhomiroff", image: "/images/photographers/nicolas-tikhomiroff.jpg" },
    { name: "Larry Towell", image: "/images/photographers/larry-towell.jpg" },
    { name: "Alex Webb", image: "/images/photographers/alex-webb.jpg" },
    { name: "Patrick Zachmann", image: "/images/photographers/patrick-zachmann.jpg" },
  ].sort((a, b) => a.name.localeCompare(b.name)) // Sort alphabetically

  const bulgarianAlphabet = "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЬЮЯ".split("")

  const groupedPhotographers = bulgarianAlphabet
    .map((letter) => ({
      letter,
      photographers: photographers.filter((p) => p.name.startsWith(letter)),
    }))
    .filter((group) => group.photographers.length > 0)

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-sans uppercase tracking-wide relative pb-4">
            КОЛЕКЦИИ
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 border-b border-gray-300"></span>
          </h1>
          {/* Премахнат е текстът под заглавието */}
        </div>

        <div className="flex justify-center mb-8">
          <nav className="hidden md:flex space-x-2 text-sm font-sans font-medium text-gray-600">
            {bulgarianAlphabet.map((letter) => (
              <Link
                key={letter}
                href={collectionPageMap[letter] ? `/collections/${collectionPageMap[letter].path}` : `#${letter}`}
                className="hover:text-black"
              >
                {letter}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex justify-center mb-12">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                Всички колекции <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem>Всички колекции</DropdownMenuItem>
              {bulgarianAlphabet.map((letter) => (
                <DropdownMenuItem key={letter}>
                  <Link
                    href={collectionPageMap[letter] ? `/collections/${collectionPageMap[letter].path}` : `#${letter}`}
                    className="block w-full"
                  >
                    {letter}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="grid gap-12">
          {groupedPhotographers.map((group) => (
            <div key={group.letter} id={group.letter} className="scroll-mt-20">
              <h2 className="text-5xl font-serif font-normal text-gray-800 mb-8 text-center md:text-left">
                {group.letter}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-x-4 gap-y-8">
                {group.photographers.map((photographer, index) => (
                  <PhotographerCard key={index} {...photographer} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button variant="outline" className="px-8 py-3 text-base font-medium bg-transparent">
            ПОВЕЧЕ ИНФОРМАЦИЯ
          </Button>
        </div>
      </div>
    </section>
  )
}
