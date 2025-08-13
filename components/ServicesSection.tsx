import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Bot, Smartphone, FileText } from "lucide-react"
// Corrigido o nome do componente para corresponder ao artefato
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

  return (
    <section className="relative z-10 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center mb-2">
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
        </div>
      </div>
      <div className="mb-2">
        <InfiniteMovingCarousel />
      </div>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white/1 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-300 hover:border-white/20 shadow-white/20 shadow-[inset_0_0_8px_0_rgba(255,255,255,0.1)] p-8"
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center flex-shrink-0 shadow-white/20 shadow-[inset_0_0_8px_0_rgba(255,255,255,0.1)]">
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
          ))}
        </div>
      </div>
    </section>
  )
}
