"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Rocket, Star, Book, Users, ArrowRight, Menu, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { BorderBeam } from '@/components/ui/border-beam'
import atomizePreview from "@/assets/images/tela.png"
import { MainNav } from '@/app/components/nav/main-nav'
import { StarsBackground } from '@/app/components/stars-background'
import { ArrowDown, Bot } from 'lucide-react'
import image from "@/assets/images/david2.png"
import image2 from "@/assets/images/sobre.png"
import image3 from "@/assets/images/replace.png"
import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import p1 from "@/assets/images/p1.png"
import p2 from "@/assets/images/p2.png"
import p3 from "@/assets/images/p3.png"
import p4 from "@/assets/images/p4.png"
import p5 from "@/assets/images/p5.png"
import p6 from "@/assets/images/p6.png"
import logo from "@/assets/images/degrade-logo.png"
import { StaticImageData } from 'next/image'
import { SponsorCarousel } from '@/components/sponsorCarousel'
import { Facebook, Github, Linkedin, Youtube, PhoneIcon as WhatsApp } from 'lucide-react'
import PartiesSection from '@/components/partiesSection'
import ClubsSection from '@/components/clubsSection'
import PricingSection from '@/components/pricingSection'
import FeaturesSection from '@/components/featuresSection'
import PartiesSectionTeste from '@/components/movingPartiesSection'
import MovingClubsSection from '@/components/movingClubsSection'
import { Instagram } from 'lucide-react'

const plans = [
  {
    name: "Básico",
    price: "R$ 99,00",
    description: "",
    features: [
      "CRM Básico",
      "IA Geradora de Demanda",
      "Marketing em nossas Mídias Sociais"
    ],
    paymentLink: "https://buy.stripe.com/test_28ocN25YF2J04rSeUU",
  },
  {
    name: "Premium",
    price: "R$ 159,00",
    description: "",
    features: [
      "Todas as Features do Básico",
      "CRM Promoters e Listas",
      "Cardápio Digital"
    ],
    recommended: true,
    paymentLink: "https://buy.stripe.com/test_aEUeVa2Mt83k7E4dQR",
  },
  {
    name: "Platinum",
    price: "R$ 159,00",
    description: "",
    features: [
      "Todas as Features do Premium",
      "NPS",
      "IA Atendente"
    ],
    paymentLink: "https://buy.stripe.com/test_28ocN25YF2J04rSeUU",
  },
]

interface BlogPost {
  tag: string
  title: string
  description: string
  author: string
  date: string
  image: StaticImageData
}

const LandingPage = () => {
  const blogs: BlogPost[] = [
    {
      tag: "Festa",
      title: "Baile do Hawaii - A Maior Festa do Ano!",
      description: "Uma noite inesquecível com decoração tropical, drinks exóticos e muita música boa. Vista sua melhor roupa havaiana e venha dançar até o sol raiar!",
      author: "Club XYZ",
      date: "15 Dez 2023",
      image: p1
    },
    {
      tag: "Festa",
      title: "Réveillon na Praia - Virada Mágica",
      description: "Celebre a chegada do ano novo com os pés na areia, show de fogos espetacular, open bar premium e as melhores atrações musicais da cidade.",
      author: "Beach Club",
      date: "31 Dez 2023",
      image: p2
    },
    {
      tag: "Festa",
      title: "Carnaval Antecipado - Bloco da Alegria",
      description: "O esquenta pro carnaval já começou! Trio elétrico, marchinhas tradicionais e muito axé. Traga sua fantasia e caia na folia com a gente!",
      author: "Bloco da Alegria",
      date: "20 Jan 2024",
      image: p3
    }
  ]

  const baladas: BlogPost[] = [
    {
      tag: "Balada",
      title: "Noite Eletrônica - DJ Internacional",
      description: "A melhor festa eletrônica da cidade com DJ internacional, pista principal climatizada, área VIP exclusiva e open bar premium até 2h da manhã.",
      author: "Club Level",
      date: "22 Dez 2023",
      image: p4
    },
    {
      tag: "Balada",
      title: "Hip Hop Night - Batalha de MCs",
      description: "A maior noite do hip hop com batalha de MCs, shows ao vivo, pista de dança especial e drinks exclusivos. Dress code: street style.",
      author: "Underground Club",
      date: "29 Dez 2023",
      image: p5
    },
    {
      tag: "Balada",
      title: "Sunset Party - Rooftop Experience",
      description: "Festa sunset no rooftop mais exclusivo da cidade. Vista panorâmica, música lounge, gastronomia premium e os melhores drinks artesanais.",
      author: "Sky Lounge",
      date: "05 Jan 2024",
      image: p6
    }
  ]

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  // Adicione os estilos dos botões no início do componente
  const buttonStyles = {
    base: `
      transition-all duration-200 
      font-medium 
      hover:scale-105 
      active:scale-95
    `,
    primary: `
      bg-[#160a2e]-600/50
      hover:bg-blue-600/60
      text-white
      border border-purple-400/70
      shadow-[0_0_20px_rgba(22, 10, 46,0.3)]
      hover:shadow-[0_0_25px_rgba(22, 10, 46,0.4)]
      ring-2 ring-blue-400/50
      animate-pulse-subtle
    `
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#2F1661] text-red-100 overflow-hidden relative">
      <StarsBackground />
      <MainNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <header className="mb-12 md:mb-24 pt-20 md:pt-32" id="inicio">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
              <div className="text-center lg:text-left w-full lg:w-1/2">
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-1 md:text-xl lg:text-[20px] text-yellow-500 max-w-2xl mt-4 md:mt-6"
                >
                  Pronto para a melhor vibe?
                </motion.p>
                
                {/* Container do logo com alinhamento responsivo */}
                <div className="flex justify-center lg:justify-start">
                  <Image 
                    src={logo} 
                    alt="Dionísio" 
                    className="w-[200px] sm:w-[250px] lg:w-[400px] h-auto filter contrast-125 mt-[10px] mb-[40px]" 
                    priority
                  />
                </div>

                {/* Glow Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-purple-800/20 blur-[120px] rounded-full" />

                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-300 max-w-2xl mt-4 md:mt-6 px-4 lg:px-0"
                >
                  Explore festas e eventos que combinam com seu estilo e viva cada momento ao máximo!
                </motion.p>

                <motion.div
                  className="mt-8 md:mt-12"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                >
                  <a 
                    href="https://wa.me/5511911357622?text=oi%20oque%20voce%20pode%20fazer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      className={`
                      ${buttonStyles.base}
                      ${buttonStyles.primary}
                      py-2 px-6 rounded-full text-base mt-2
                      flex items-center justify-center mx-auto lg:mx-0
                    `}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Fale com Dionísio!
                      <WhatsApp className="ml-2 w-4 h-4" />
                    </motion.button>
                  </a>
                </motion.div>
              </div>

              {/* Image container with BorderBeam */}
              <div className="relative mt-8 lg:mt-0">
                <div className="relative">
                  <Image
                    src={image}
                    alt="David"
                    className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full relative z-10"
                  />
                  <div className="absolute rounded-full -inset-1 z-0">
                    <BorderBeam
                      size={300}
                      duration={12}
                      delay={9}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Preview Section */}
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg mt-8 md:mt-16">
              {/* Glow effect posicionado na parte superior */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[200px] bg-blue-500/40 blur-[100px] animate-pulse" />

              <div className="relative w-full">
                <Image
                  src={atomizePreview}
                  alt="Atomize Preview"
                  className="object-cover w-full h-full [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_50%,rgba(0,0,0,0)_100%)] opacity-70"
                />
                <BorderBeam
                  size={600}
                  duration={6}
                  delay={9}
                />
              </div>
            </div>
      

            <PartiesSection id="festas" />
            <ClubsSection id="clubes" />
            
            <FeaturesSection id="recursos" />

            <SponsorCarousel />

            <PricingSection />
          </motion.div>
        </header>
      </div>
      <footer id="contato" className="w-full flex flex-col items-center justify-center bg-[#1c0a40] px-4 py-20 text-white z-50 relative">
        <div className="container mx-auto max-w-4xl flex flex-col items-center text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#f0bf5d] via-[#de8c12] to-[#ab5d4b] text-transparent bg-clip-text">
            Fale Conosco
          </h2>
          <p className="text-gray-400 max-w-2xl mb-12 leading-relaxed">
            Quer saber mais sobre como o Dionísio pode transformar sua experiência com eventos e festas? Entre em contato conosco! Estamos prontos para ajudar você a encontrar os melhores rolês e criar momentos inesquecíveis.
          </p>
          <Link
            href="https://wa.me/5511977692831?text=Quero%20conhecer%20o%20CRM%20do%20Dionisio"
            className="px-8 py-3 text-[#f0bf5d] border border-[#f0bf5d] rounded-md transition-colors hover:bg-[#f0bf5d] hover:text-white mb-16"
          >
            Diga Olá
          </Link>
          <div className="flex items-center justify-center gap-6 mb-16">
            <Link 
              href="https://www.linkedin.com/company/dionisi0/" 
              target="_blank"
              className="text-gray-400 hover:text-[#f0bf5d] transition-colors"
            >
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            
            <Link 
              href="https://www.instagram.com/dionisio.ia" 
              target="_blank"
              className="text-gray-400 hover:text-[#f0bf5d] transition-colors"
            >
              <Instagram className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            
            <Link 
              href="https://www.tiktok.com/@ia.dionisio" 
              target="_blank"
              className="text-gray-400 hover:text-[#f0bf5d] transition-colors"
            >
              <svg 
                className="w-6 h-6" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              <span className="sr-only">TikTok</span>
            </Link>
          </div>
          <p className="text-sm text-gray-400">
            Desenvolvido por{" "}
            <Link href="#" className="text-[#f0bf5d] hover:underline">
              Dionísio Tech
            </Link>
            . Construído com React, Next.js e Inteligência Artificial.
          </p>
        </div>
        <div className="container mx-auto px-4">
          {/* Existing footer content if any */}
          
          {/* New legal information */}
          <div className="mt-8 pt-4 border-t border-purple-800/30">
            <div className="text-center text-xs text-gray-500/60 space-y-1">
              <p>CNPJ: 52.775.010/0001-00</p>
              <p>Telefone: +55 (11) 2532-1707</p>
              <p>Razão Social: 52.775.010 LUIS AUGUSTO CORREIA DA SILVA</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage