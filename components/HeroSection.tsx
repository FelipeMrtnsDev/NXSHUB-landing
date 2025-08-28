"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { LiquidArrow } from "./LiquidArrow"
import { Mail } from "lucide-react"

export default function HeroSection() {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)
  const [isArrowVisible, setIsArrowVisible] = useState(true); 

  const WhatsAppIcon = (props: any) => (
  <svg 
    fill="currentColor" // Use currentColor to inherit color from CSS
    version="1.1" 
    id="Layer_1" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 308 308"
    {...props} // Apply passed props like className, height, width, etc.
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <g id="XMLID_468_">
        <path id="XMLID_469_" d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z"></path>
        <path id="XMLID_470_" d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z"></path>
      </g>
    </g>
  </svg>
);

// Ícone do Instagram
const InstagramIcon = (props: any) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.703.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 8 0zm0 1.442c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.282.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.231 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.843-.038 1.096-.047 3.232-.047z" />
    <path d="M8 4.202c-2.101 0-3.797 1.696-3.797 3.798s1.696 3.798 3.797 3.798 3.798-1.696 3.798-3.798S10.101 4.202 8 4.202zm0 6.153c-1.305 0-2.356-1.05-2.356-2.355S6.695 5.646 8 5.646s2.355 1.05 2.355 2.355-1.05 2.356-2.355 2.356zm4.908-6.427c-.414 0-.75.336-.75.75s.336.75.75.75.75-.336.75-.75-.336-.75-.75-.75z" />
  </svg>
);

  const wordsToRotate = ["tecnologia", "inovação", "criatividade"]
  const period = 2000

  useEffect(() => {
    const handleScroll = () => {
      setIsArrowVisible(window.scrollY < 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useEffect(() => {
    const handleType = () => {
      const i = loopNum % wordsToRotate.length
      const fullText = wordsToRotate[i]

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      )

      setTypingSpeed(isDeleting ? 80 : 150)

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), period)
      } else if (isDeleting && text === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const ticker = setTimeout(() => {
      handleType()
    }, typingSpeed)

    return () => {
      clearTimeout(ticker)
    }
  }, [text, isDeleting, loopNum, typingSpeed, wordsToRotate, period])

  return (
    <section id="inicio" className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Revolucione seu negócio
          <br />
          com{" "}
          <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
            {text}
          </span>
          <span className="text-blue-700 animate-pulse font-light">|</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Nós criamos soluções tecnológicas que transformam sua empresa e
          aceleram seu crescimento. Desde websites até aplicativos móveis, nossa
          equipe está pronta para levar seu negócio ao próximo nível.
        </p>
        <div className="block sm:flex-row gap-8 justify-center">
          <Button
            size="lg"
            variant="outline"
            className="border-blue-800/30 text-white 
              bg-white/5 backdrop-blur-sm shadow-inner shadow-white/10 hover:bg-black/40 hover:text-[#07a2ad] mb-2 px-8 py-3 transition-all cursor-pointer"
          >
            Acesse o NXS SKILL
          </Button>
          <div className="flex items-center justify-center gap-4">
            {/* Botão WhatsApp */}
            <a 
              href="https://wa.me/5511988215249" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="group border-blue-800/30 bg-white/5 backdrop-blur-sm shadow-inner shadow-white/10 hover:bg-black/40 p-3 transition-all cursor-pointer"
              >
                <WhatsAppIcon className="h-6 w-6 text-white group-hover:text-[#25D366] transition-colors" />
              </Button>
            </a>

            {/* Botão Instagram */}
            <a 
              href="https://www.instagram.com/nxs.hub" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="group border-blue-800/30 bg-white/5 backdrop-blur-sm shadow-inner shadow-white/10 hover:bg-black/40 p-3 transition-all cursor-pointer"
              >
                <InstagramIcon className="h-6 w-6 text-white group-hover:text-[#ff007f] transition-colors" />
              </Button>
            </a>

            {/* Botão Email */}
            <a href="mailto:contato@nxshub.com.br">
              <Button
                size="lg"
                variant="outline"
                className="group border-blue-800/30 bg-white/5 backdrop-blur-sm shadow-inner shadow-white/10 hover:bg-black/40 p-3 transition-all cursor-pointer"
              >
                <Mail className="h-6 w-6 text-white group-hover:text-[#4285F4] transition-colors" />
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      {/* Componente da seta animada com a nova lógica de visibilidade */}
      <LiquidArrow isVisible={isArrowVisible} />
    </section>
  )
}
