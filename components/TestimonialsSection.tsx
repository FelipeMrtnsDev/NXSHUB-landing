import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
  return (
    <section className="relative z-10 py-16 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Vamos além para entender
            <br />e entregar resultados.
          </h2>
          <p className="text-gray-300 mb-8">
            Nossa equipe trabalha de forma colaborativa para garantir que cada projeto supere as expectativas dos nossos
            clientes.
          </p>
        </div>
        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="glass-card border-white/10 hover:border-blue-500/30 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500/50 to-cyan-500/50 glass-card rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">U{i}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-bold">Cliente Satisfeito</h4>
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">
                      "Excelente trabalho! A equipe do nxs hub superou todas as nossas expectativas."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
