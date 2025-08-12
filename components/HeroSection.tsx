"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  // Estado para controlar o texto que está sendo animado
  const [text, setText] = useState("")
  // Estado para controlar se a animação está apagando o texto
  const [isDeleting, setIsDeleting] = useState(false)
  // Estado para controlar qual palavra do array está sendo exibida
  const [loopNum, setLoopNum] = useState(0)
  // Velocidade da digitação
  const [typingSpeed, setTypingSpeed] = useState(150)

  // Array com as palavras que serão alternadas
  const wordsToRotate = ["tecnologia", "inovação", "criatividade"]
  // Período de pausa entre a digitação de cada palavra
  const period = 2000

  useEffect(() => {
    // Função que lida com a lógica da animação de digitação
    const handleType = () => {
      const i = loopNum % wordsToRotate.length
      const fullText = wordsToRotate[i]

      // Lógica para adicionar ou remover caracteres
      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      )

      // Altera a velocidade da digitação (mais rápido ao apagar)
      setTypingSpeed(isDeleting ? 80 : 150)

      // Se a palavra foi totalmente digitada, inicia uma pausa e depois começa a apagar
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), period)
      }
      // Se a palavra foi totalmente apagada, passa para a próxima palavra
      else if (isDeleting && text === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    // Define um timeout para chamar a função de digitação, criando o efeito
    const ticker = setTimeout(() => {
      handleType()
    }, typingSpeed)

    // Limpa o timeout quando o componente é desmontado para evitar vazamentos de memória
    return () => {
      clearTimeout(ticker)
    }
  }, [text, isDeleting, loopNum, typingSpeed, wordsToRotate, period])

  return (
    <section className="relative z-10 text-center py-32 px-6 max-w-6xl mx-auto mt-20">
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
              bg-white/5 backdrop-blur-sm shadow-inner shadow-white/10 hover:bg-black/4 hover:text-[#07a2ad] px-8 py-3 transition-all cursor-pointer"
            >
            NXS SKILL
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-blue-800/30 text-ehite          
              bg-white/5 backdrop-blur-sm shadow-inner shadow-white/10 hover:bg-black/4 hover:text-blue-700 px-8 py-3 transition-all cursor-pointer"
            >
            NXS HUB
          </Button>
        </div>
      </div>
    </section>
  )
}
