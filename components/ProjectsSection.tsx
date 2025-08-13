import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function ProjectsSection() {
  return (
    <section className="relative z-10 py-16 px-6 max-w-6xl mx-auto">
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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card
            key={i}
            className="glass-card border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-105"
          >
            <CardContent className="p-0">
              <div className="h-48 bg-gradient-to-br from-blue-600/50 to-purple-600/50 glass-card rounded-t-lg flex items-center justify-center">
                <span className="text-2xl font-bold">Projeto {i}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Nome do projeto</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Descrição breve do projeto e suas principais funcionalidades.
                </p>
                <div className="flex space-x-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="flex space-x-2 mb-4">
                  {["React", "Node.js", "MongoDB"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 glass-card text-blue-400 text-xs rounded border border-blue-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button size="sm" className="w-full bg-blue-600/80 hover:bg-blue-700/80 backdrop-blur-sm">
                  Ver projeto
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button className="bg-blue-600/80 hover:bg-blue-700/80 backdrop-blur-sm">Ver mais projetos</Button>
      </div>
    </section>
  )
}
