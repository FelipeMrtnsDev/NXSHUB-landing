"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { LiquidArrow } from "./LiquidArrow"

export default function HeroSection() {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)
  const [isArrowVisible, setIsArrowVisible] = useState(true); // Estado para controlar a visibilidade da seta

  const wordsToRotate = ["tecnologia", "inovação", "criatividade"]
  const period = 2000

  // Efeito para mostrar/esconder a seta com base na posição do scroll
  useEffect(() => {
    const handleScroll = () => {
      // Esconde a seta se o usuário rolar a página para baixo
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
    // Para a rolagem funcionar, deve haver outra seção abaixo desta no seu layout.
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="outline"
            className="border-blue-800/30 text-white           
              bg-white/5 backdrop-blur-sm shadow-inner shadow-white/10 hover:bg-black/40 hover:text-[#07a2ad] px-8 py-3 transition-all cursor-pointer"
            >
            NXS SKILL
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-blue-800/30 text-white           
              bg-white/5 backdrop-blur-sm shadow-inner shadow-white/10 hover:bg-black/40 hover:text-blue-700 px-8 py-3 transition-all cursor-pointer"
            >
            NXS HUB
          </Button>
        </div>
      </div>
      
      {/* Componente da seta animada com a nova lógica de visibilidade */}
      <LiquidArrow isVisible={isArrowVisible} />
    </section>
  )
}
