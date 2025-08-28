"use client"

import { motion, Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
// Adicionado 'Users' para o novo ícone
import { Globe, Bot, Smartphone, FileText, Users } from "lucide-react"
import React from "react"
import { InfiniteMovingCarousel } from "./InfiniteMovingCarousel"



export default function ServicesSection() {
  const services = [
    {
      icon: <Globe className="w-6 h-6 text-white/90" />,
      title: "Sites",
      description:
        "Construímos websites profissionais, rápidos e otimizados para a sua ideia ou para conversão, prontos para gerar autoridade, atrair clientes e tirar a sua ideia do papel.",
    },
    {
      icon: <Bot className="w-6 h-6 text-white/90" />,
      title: "Agentes de IA sob medida",
      description:
        "Automatize processos, reduza custos e ofereça experiências personalizadas com soluções de inteligência artificial desenvolvidas para a sua empresa.",
    },
    {
      icon: <Smartphone className="w-6 h-6 text-white/90" />,
      title: "Aplicativos inteligentes",
      description:
        "Transformamos ideias em aplicativos móveis funcionais, intuitivos e que conectam sua marca diretamente ao cliente e colocamos a sua ideia em prática.",
    },
    {
      icon: <FileText className="w-6 h-6 text-white/90" />,
      title: "Landing pages",
      description:
        "Estruturadas para conversão, ideais para campanhas de marketing e geração de leads.",
    },
    // Novo serviço adicionado aqui
    {
      icon: <Users className="w-6 h-6 text-white/90" />,
      title: "Gestão de Redes Sociais",
      description:
        "Criamos estratégias que aumentam sua presença digital, engajam seu público e transformam seguidores em clientes fiéis. Da produção de conteúdo ao tráfego orgânico e pago, gerenciamos tudo para você.",
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
            // Lógica para expandir apenas o último card
            <motion.div 
              key={index} 
              variants={itemVariants}
              className={index === services.length - 1 ? "md:col-span-2" : ""}
            >
              <Card
                className="bg-white/1 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-300 hover:border-white/20 hover:scale-[1.02] shadow-white/20 shadow-[inset_0_0_8px_0_rgba(255,255,255,0.1)] lg:p-16 md:p-12 p-8 h-full"
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