"use client"

import { Button } from "@/components/ui/button"
import { useRef, useState } from "react" // MODIFICAÇÃO: Importado o useState
import { motion, useInView, Variants } from "framer-motion"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  // MODIFICAÇÃO: Estados para o efeito de luz do mouse
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  // MODIFICAÇÃO: Função para capturar a posição do mouse
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setMousePosition({ x, y })
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }
  
  const dividerVariants: Variants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <motion.section 
      id="sobre" 
      ref={ref} 
      className="relative z-10 py-24 px-6 max-w-6xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div variants={itemVariants} className="flex justify-between items-center mb-8 px-2">
        <div className="flex items-center">
          <div className="w-1 h-14 bg-gradient-to-r from-blue-800/80 to-blue-700/80 rounded-full" />
            <div className="space-y-1 ml-4">
              <h2 className="text-4xl font-bold text-white">
                O que é o NXS HUB
              </h2>
              <p className="text-gray-400">
                Conectando pessoas, projetos e oportunidades.
              </p>
            </div>
        </div>
        <Button
          variant="outline"
          className="border-white/20 shadow-white/20 shadow-[inset_0_0_8px_0_rgba(255,255,255,0.1)] text-white/80 hover:bg-slate-950/10 hover:text-blue-700/70 bg-black/30 rounded-xl text-lg px-8 py-[6px] h-auto cursor-pointer"
        >
          Nxs hub
        </Button>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="relative bg-white/1 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 md:py-28 shadow-white/20 shadow-[inset_0_0_8px_0_rgba(255,255,255,0.1)] mb-8 overflow-hidden"
        // MODIFICAÇÃO: Eventos do mouse re-adicionados
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* MODIFICAÇÃO: Elemento do Spotlight re-adicionado */}
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            opacity: isHovering ? 1 : 0,
            background: `radial-gradient(400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.089), transparent 80%)`,
          }}
        />

        <div className="grid md:grid-cols-[1fr_auto_2fr] gap-8 md:gap-12 items-center">
          <motion.div variants={itemVariants}>
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
          </motion.div>

          <motion.div
            className="w-1 rounded-full h-full bg-white/20 hidden md:block origin-center"
            variants={dividerVariants}
          />

          <motion.div variants={itemVariants}>
            <p className="text-gray-300 leading-relaxed">
              Somos uma software house apaixonada por inovação. Nossa missão é simples: alavancar o crescimento do seu negócio por meio de tecnologia estratégica e soluções digitais sob medida.
              Combinamos design moderno, inteligência artificial e desenvolvimento ágil para criar ferramentas que não apenas funcionam, mas geram resultados reais.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  )
}
