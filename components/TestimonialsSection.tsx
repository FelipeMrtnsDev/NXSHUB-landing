"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useEffect, useState } from "react"

const testimonials = [
  {
    "name": "Gabriel Figueredo",
    "comment": "A NXS Hub transformou nossa presença digital. O site que eles desenvolveram não só é visualmente incrível, mas também otimizou nossas conversões em mais de 50%. A equipe é profissional, atenta aos detalhes e superou todas as nossas expectativas. Foi o melhor investimento que fizemos!",
    "date": "12 de abril, 2024",
    "rating": 5
  },
  {
    name: "Ana Silva",
    comment: "A equipe superou todas as expectativas. O projeto foi entregue no prazo e com uma qualidade impecável. Recomendo fortemente!",
    date: "23 março, 2024",
    rating: 5,
  },
  {
    name: "Carlos Souza",
    comment: "Profissionalismo e criatividade definem o trabalho. Estamos muito satisfeitos com o resultado final e o impacto que gerou em nosso negócio.",
    date: "15 fevereiro, 2024",
    rating: 5,
  },
  {
    name: "Juliana Pereira",
    comment: "Uma parceria de sucesso. A comunicação foi excelente do início ao fim, e o suporte técnico é de primeira linha.",
    date: "05 janeiro, 2024",
    rating: 5,
  },
  // Adicione mais depoimentos aqui para preencher o carrossel
];

export default function TestimonialsSection() {
  // Duplica os depoimentos para criar o efeito de loop infinito
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="depoimentos" className="relative z-10 py-24 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Lado Esquerdo: Título e Texto */}
        <div>
          <div className="inline-block border border-white/20 rounded-full px-4 py-2 mb-6 shadow-white/20 shadow-[inset_0_0_8px_0_rgba(255,255,255,0.1)]">
            <p className="text-sm text-white/80 ">O que nossos clientes dizem</p>
          </div>
          <h2 className="text-4xl lg:text-4xl font-bold mb-6 leading-tight">
            Vamos além para entender e entregar resultados.
          </h2>
          <p className="text-gray-400 text-lg">
            No NXS Hub, usamos tecnologia para economizar seu tempo, atrair clientes e acelerar o crescimento da sua empresa.
          </p>
        </div>

        {/* Lado Direito: Carrossel de Depoimentos */}
        <div className="relative h-[600px] overflow-hidden">
          {/* Gradiente para suavizar as bordas */}
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black to-transparent z-10" />
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent z-10" />
          
          <motion.div
            className="absolute top-0 left-0 w-full flex flex-col gap-6"
            animate={{
              y: ['0%', `-${100 / 2}%`], // Move metade da altura total
            }}
            transition={{
              ease: 'linear',
              duration: 20, // Ajuste a duração para controlar a velocidade
              repeat: Infinity,
            }}
          >
            {duplicatedTestimonials.map((testimonial, i) => (
              <Card key={i} className="bg-white/5 border-white/10 shadow-white/20 shadow-[inset_0_0_8px_0_rgba(255,255,255,0.1)]">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                      {/* Placeholder para imagem do usuário */}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <h4 className="font-bold text-white">{testimonial.name}</h4>
                          <div className="flex">
                            {[...Array(testimonial.rating)].map((_, starIndex) => (
                              <Star key={starIndex} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm mb-4">
                        {testimonial.comment}
                      </p>
                      <p className="text-xs text-gray-500 text-right">{testimonial.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
