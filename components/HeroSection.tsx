import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative z-10 text-center py-32 px-6 max-w-6xl mx-auto mt-20">
      <div className="mb-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Revolucione seu negócio
          <br />
          com <span className="text-blue-400">tecnologia</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Nós criamos soluções tecnológicas que transformam sua empresa e aceleram seu crescimento. Desde websites até
          aplicativos móveis, nossa equipe está pronta para levar seu negócio ao próximo nível.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-blue-600/80 hover:bg-blue-700/80 backdrop-blur-sm px-8 py-3">
            SAIBA MAIS
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-blue-400/50 text-blue-400 hover:bg-blue-400/20 px-8 py-3 glass-card bg-transparent"
          >
            VER MAIS
          </Button>
        </div>
      </div>
    </section>
  )
}
