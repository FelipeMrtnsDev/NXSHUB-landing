"use client"

import { Button } from "@/components/ui/button"
import { useRef, useState } from "react"
import { motion, useInView, Variants } from "framer-motion"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setMousePosition({ x, y })
  }

  const dividerVariants: Variants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section ref={ref} className="relative z-10 py-24 px-6 max-w-6xl mx-auto">
      {/* Cabeçalho da Seção */}
      <div className="flex justify-between items-center mb-8 px-2">
        <div className="flex items-center">
          <div className="w-1 h-14 bg-gradient-to-r from-blue-800/80 to-blue-700/80 rounded-full" />
          <h2 className="bg-gradient-to-r text-4xl from-blue-700/60 via-blue-800/30 to-transparent pl-2 py-2 ml-0 rounded-md">
            O que é o NXS HUB
          </h2>
        </div>
        <Button
          variant="outline"
          className="border-white/20 shadow-white/20 shadow-[inset_0_0_8px_0_rgba(255,255,255,0.1)] text-white/80 hover:bg-slate-950/10 hover:text-blue-700/70 bg-black/30 rounded-xl text-lg px-8 py-[6px] h-auto cursor-pointer"
        >
          Nxs hub
        </Button>
      </div>

      {/* Card Principal Animado com Efeito Spotlight */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="relative bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 md:py-28 shadow-white/20 shadow-[inset_0_0_8px_0_rgba(255,255,255,0.1)] mb-8 overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Elemento do Spotlight */}
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            opacity: isHovering ? 1 : 0,
            background: `radial-gradient(400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.018), transparent 80%)`,
          }}
        />

        <div className="grid md:grid-cols-[1fr_auto_2fr] gap-8 md:gap-12 items-center">
          {/* Coluna da Esquerda: Palavras-chave */}
          <div>
            <h3 className="text-5xl font-bold space-y-4">
              <span className="block bg-gradient-to-r from-blue-800 via-blue-700 to-blue-400 bg-clip-text text-transparent">
                Progresso
              </span>
              <span className="block bg-gradient-to-r from-blue-800 via-blue-700 to-blue-400 bg-clip-text text-transparent">
                Tecnologia
              </span>
              <span className="block bg-gradient-to-r from-blue-800 via-blue-700 to-blue-400 bg-clip-text text-transparent">
                Inovação
              </span>
            </h3>
          </div>

          {/* Divisor Vertical Animado */}
          <motion.div
            className="w-1 rounded-full h-full bg-white/20 hidden md:block origin-center"
            variants={dividerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />

          {/* Coluna da Direita: Texto */}
          <div>
            <p className="text-gray-300 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Card Secundário Animado */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        className="bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-white/20 shadow-[inset_0_0_8px_0_rgba(255,255,255,0.1)]"
      >
        <div className="flex items-center gap-6">
          <div className="w-12 h-12 bg-blue-800 rounded-full flex-shrink-0" />
          <p className="text-gray-300 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
