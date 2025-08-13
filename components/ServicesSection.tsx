"use client"

import { motion, Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Bot, Smartphone, FileText } from "lucide-react"
import React from "react"
import { InfiniteMovingCarousel } from "./InfiniteMovingCarousel"



export default function ServicesSection() {
  const services = [
    {
      icon: <Globe className="w-6 h-6 text-white/90" />,
      title: "Sites",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      icon: <Bot className="w-6 h-6 text-white/90" />,
      title: "Agente de IA",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      icon: <Smartphone className="w-6 h-6 text-white/90" />,
      title: "Aplicativos",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      icon: <FileText className="w-6 h-6 text-white/90" />,
      title: "Landing pages",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  ]

  // Variantes de animação para o container dos cards
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Atraso entre a animação de cada card
      },
    },
  }

  // Variantes de animação para cada card individual
  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="servicos" className="relative z-10 py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
          className="flex justify-between items-center mb-2"
        >
          <div className="flex items-center">
            <div className="w-1 h-14 bg-gradient-to-r from-blue-800/80 to-blue-700/80 rounded-full" />
            <div className="space-y-1 ml-4">
              <h2 className="text-4xl font-bold text-white">
                O que Fazemos
              </h2>
              <p className="text-gray-400">
                Revolucione o seu negócio com as melhores ferramentas
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            className="border-white/20 shadow-white/20 shadow-[inset_0_0_8px_0_rgba(255,255,255,0.1)] text-white/80 hover:bg-slate-950/10 hover:text-blue-700/70 bg-black/30 rounded-xl text-lg px-8 py-[6px] h-auto cursor-pointer flex-shrink-0"
          >
            VER MAIS
          </Button>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mb-2"
      >
        <InfiniteMovingCarousel />
      </motion.div>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className="bg-white/1 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-300 hover:border-white/20 hover:scale-[1.02] shadow-white/20 shadow-[inset_0_0_8px_0_rgba(255,255,255,0.1)] p-16 h-full"
              >
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center flex-shrink-0 shadow-white/20 shadow-[inset_0_0_8px_0_rgba(255,255,255,0.1)] hover:scale-110 transition-all duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-3xl font-semibold text-white">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-md leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
