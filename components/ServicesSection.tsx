import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Bot, Smartphone, FileText } from "lucide-react"

export default function ServicesSection() {
  return (
    <section className="relative z-10 py-16 px-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-bold">Que fazemos</h2>
        <Button
          variant="outline"
          className="border-blue-400/50 text-blue-400 hover:bg-blue-400/20 glass-card bg-transparent"
        >
          VER MAIS
        </Button>
      </div>

      {/* Service Icons Row */}
      <div className="flex justify-center space-x-8 mb-12">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
          <div
            key={i}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/30 to-cyan-500/30 glass-card flex items-center justify-center"
          >
            <div className="w-6 h-6 bg-white/80 rounded-full"></div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="glass-card border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-105">
          <CardContent className="p-6">
            <Globe className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Sites</h3>
            <p className="text-gray-400 text-sm">
              Desenvolvemos sites modernos e responsivos que convertem visitantes em clientes.
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-105">
          <CardContent className="p-6">
            <Bot className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Agenda de IA</h3>
            <p className="text-gray-400 text-sm">Sistemas inteligentes de agendamento com inteligência artificial.</p>
          </CardContent>
        </Card>

        <Card className="glass-card border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-105">
          <CardContent className="p-6">
            <Smartphone className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Aplicativos</h3>
            <p className="text-gray-400 text-sm">Apps móveis nativos e híbridos para iOS e Android.</p>
          </CardContent>
        </Card>

        <Card className="glass-card border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-105">
          <CardContent className="p-6">
            <FileText className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Landing pages</h3>
            <p className="text-gray-400 text-sm">Páginas de conversão otimizadas para campanhas de marketing.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
