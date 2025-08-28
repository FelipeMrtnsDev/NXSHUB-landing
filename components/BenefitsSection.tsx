"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, MessageCircle, ShieldHalf, Target, Award } from "lucide-react"
import React from "react"

export default function BenefitsSection() {
  const persuasiveData = [
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-700" />,
      title: "+70% Clientes",
      description:
        "Empresas com sites otimizados têm mais chances de conquistar novos clientes. (HubSpot)",
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-blue-700" />,
      title: "+30% Engajamento",
      description:
        "Negócios que possuem aplicativos próprios registram mais engajamento com seus clientes. (BuildFire)",
    },
    {
      icon: <ShieldHalf className="w-8 h-8 text-blue-700" />,
      title: "-40% Custos",
      description:
        "Automação com IA pode reduzir custos operacionais em até 40%. (McKinsey)",
    },
    {
      icon: <Target className="w-8 h-8 text-blue-700" />,
      title: "+55% Conversão",
      description:
        "Landing pages bem estruturadas aumentam em média 55% a taxa de conversão. (Unbounce)",
    },
    {
      icon: <Award className="w-8 h-8 text-blue-700" />,
      title: "3x Mais Vendas",
      description:
        "Marcas ativas em redes sociais têm 80% mais reconhecimento e vendem mais. (Hootsuite)",
    },
  ]

  return (
    <section id="beneficios" className="relative z-10 py-20 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Por que escolher a <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">NXS </span> Hub?
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-6">
            Não entregamos apenas tecnologia, entregamos crescimento real para o seu negócio.
          </p>
          <h3 className="text-2xl font-semibold text-white">
            Dados que comprovam o impacto:
          </h3>
        </motion.div>

        {/* Container Flexbox para os cards */}
        <div className="flex flex-wrap justify-center -mx-4">
          {persuasiveData.map((item, index) => (
            <motion.div
              key={index}
              className={`w-full sm:w-1/2 px-4 mb-8 ${
                index < 3 ? 'lg:w-1/3' : 'lg:w-1/2'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              <Card className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl h-full text-center p-6 transition-all duration-300 hover:border-blue-700/50 hover:-translate-y-2 shadow-lg shadow-black/20">
                <CardContent className="p-0 flex flex-col items-center">
                  <div className="mb-5 w-16 h-16 bg-blue-900/10 rounded-full flex items-center justify-center border border-blue-700">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Frase de Conclusão */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-12" // Diminuído o mt para 12
        >
          <p className="text-xl md:text-2xl text-white font-semibold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Isso significa: mais visibilidade, mais clientes, mais vendas.
          </p>
        </motion.div>
      </div>
    </section>
  )
}