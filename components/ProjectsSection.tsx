"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const projectsMockup = [
  {
    id: 1,
    name: "The Drinker",
    description: "Landing page de um marketplace que conecta marcas, bares, clientes e motoboys.",
    technologies: ["React", "Tailwind"],
    imageUrl: "/the-drinker.png",
    link: "https://the-drinker.vercel.app" 
  },
  {
    id: 2,
    name: "Sistema de Gerenciamento",
    description: "Dashboard administrativo para visualização de métricas e gerenciamento de conteúdo.",
    technologies: ["Vue.js", "Firebase", "Chart.js"],
    imageUrl: "/the-drinker.png",
    link: "https://the-drinker.vercel.app"
  },
  {
    id: 3,
    name: "Aplicativo de Delivery",
    description: "App móvel completo para pedidos e entregas, com rastreamento em tempo real.",
    technologies: ["React Native", "GraphQL", "PostgreSQL"],
    imageUrl: "/the-drinker.png",
    link: "https://the-drinker.vercel.app"
  },
  // {
  //   id: 4,
  //   name: "Rede Social para Músicos",
  //   description: "Um espaço para artistas compartilharem suas criações, colaborarem e encontrarem oportunidades.",
  //   technologies: ["Next.js", "TypeScript", "Supabase"],
  //   imageUrl: "/the-drinker.png",
  //   link: "https://the-drinker.vercel.app"
  // },
  // {
  //   id: 5,
  //   name: "Ferramenta de IA",
  //   description: "Uma aplicação que utiliza inteligência artificial para otimizar processos de negócios.",
  //   technologies: ["Python", "Flask", "Scikit-learn"],
  //   imageUrl: "/the-drinker.png",
  //   link: "https://the-drinker.vercel.app"
  // },
  // {
  //   id: 6,
  //   name: "Blog Pessoal Moderno",
  //   description: "Um blog com design minimalista, focado na experiência de leitura e performance.",
  //   technologies: ["Astro", "Tailwind CSS", "Markdown"],
  //   imageUrl: "/the-drinker.png",
  //   link: "https://the-drinker.vercel.app"
  // },
];


export default function ProjectsSection() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  } as const;

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  } as const;

  return (
    <section id="projetos" className="relative z-10 py-16 px-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-12">
        <div className="flex items-center">
          <div className="w-1 h-14 bg-gradient-to-r from-blue-800/80 to-blue-700/80 rounded-full" />
          <div className="space-y-1 ml-4">
            <h2 className="text-4xl font-bold text-white">
              Projetos destacados
            </h2>
            <p className="text-gray-400">
              O que estamos criando
            </p>
          </div>
        </div>
        <Button
          variant="outline"
          className="border-blue-400/50 text-blue-400 hover:bg-blue-400/20 glass-card bg-transparent"
        >
          VER MAIS
        </Button>
      </div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projectsMockup.map((project) => (
          <motion.div key={project.id} variants={cardVariants}>
            <Card
              className="bg-white/1 shadow-white/20 shadow-[inset_0_0_8px_0_rgba(255,255,255,0.1)] border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-101 overflow-hidden h-full flex flex-col"
            >
              <CardContent className="p-0 flex flex-col flex-grow ">
                <div className="h-48 w-full flex-shrink-0">
                  <img
                    src={project.imageUrl}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-white">{project.name}</h3>
                  <p className="text-gray-400 text-sm mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/1 shadow-white/20 shadow-[inset_0_0_8px_0_rgba(255,255,255,0.1)] text-white text-xs rounded-sm border hover:border-blue-700 border-gray-600/20 transition-all duration-300 cursor-pointer hover:scale-102"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a className="cursor-pointer mt-auto" href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="w-full bg-white/1 hover:bg-white/5 hover:scale-102 hover:border-blue-700/50 border-2 border-gray-700/10 shadow-white/20 shadow-[inset_0_0_8px_0_rgba(255,255,255,0.1)] backdrop-blur-sm cursor-pointer py-5 ">
                      Ver projeto
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <div className="text-center">
        <Button className="bg-gradient-to-r from-blue-800/80 to-blue-700/80 cursor-pointer hover:bg-blue-700/80 transition duration-300 backdrop-blur-sm">Ver mais projetos</Button>
      </div>
    </section>
  )
}