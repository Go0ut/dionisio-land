"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import Logo from "../../../assets/images/Dionisio.png"
import Image from "next/image"
export function MainNav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-[#1c0a40]/80 backdrop-blur-md shadow-lg" : "bg-transparent"
    )}>
      <div className="container flex h-16 items-center justify-between">
        <Link 
          href="/"
          className="text-2xl font-bold text-white hover:text-purple-300 transition-colors"
        >
          <Image src={Logo} alt="Dionísio" width={180} height={100} />
        </Link>

        <div className="hidden md:flex gap-6">
          <button
            onClick={() => scrollToSection("inicio")}
            className="text-sm font-medium text-white hover:text-purple-300 transition-colors"
          >
            Início
          </button>
          <button
            onClick={() => scrollToSection("festas")}
            className="text-sm font-medium text-white hover:text-purple-300 transition-colors"
          >
            Festas
          </button>
          <button
            onClick={() => scrollToSection("clubes")}
            className="text-sm font-medium text-white hover:text-purple-300 transition-colors"
          >
            Clubes
          </button>
          <button
            onClick={() => scrollToSection("recursos")}
            className="text-sm font-medium text-white hover:text-purple-300 transition-colors"
          >
            Recursos
          </button>
          <button
            onClick={() => scrollToSection("contato")}
            className="text-sm font-medium text-white hover:text-purple-300 transition-colors"
          >
            Contato
          </button>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white hover:text-purple-300 transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={cn(
        "fixed inset-x-0 top-16 bg-[#1c0a40]/95 backdrop-blur-lg transition-all duration-300 ease-in-out md:hidden",
        isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      )}>
        <div className="container py-4 flex flex-col gap-4">
          <button
            onClick={() => scrollToSection("inicio")}
            className="text-sm font-medium text-white hover:text-purple-300 transition-colors py-2"
          >
            Início
          </button>
          <button
            onClick={() => scrollToSection("festas")}
            className="text-sm font-medium text-white hover:text-purple-300 transition-colors py-2"
          >
            Festas
          </button>
          <button
            onClick={() => scrollToSection("clubes")}
            className="text-sm font-medium text-white hover:text-purple-300 transition-colors py-2"
          >
            Clubes
          </button>
          <button
            onClick={() => scrollToSection("recursos")}
            className="text-sm font-medium text-white hover:text-purple-300 transition-colors py-2"
          >
            Recursos
          </button>
          <button
            onClick={() => scrollToSection("contato")}
            className="text-sm font-medium text-white hover:text-purple-300 transition-colors py-2"
          >
            Contato
          </button>
        </div>
      </div>
    </nav>
  )
} 