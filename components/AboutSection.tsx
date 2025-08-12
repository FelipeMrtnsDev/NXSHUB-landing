import { Button } from "@/components/ui/button"

export default function AboutSection() {
  return (
    <section className="relative z-10 py-16 px-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">O que é o nxs hub?</h2>
        <Button
          variant="outline"
          className="border-blue-400/50 text-blue-400 hover:bg-blue-400/20 glass-card bg-transparent"
        >
          VER MAIS
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-4xl font-bold mb-6">
            <span className="text-blue-400">Progresso</span>
            <br />
            <span className="text-blue-400">Tecnologia</span>
            <br />
            <span className="text-blue-400">Inovação</span>
          </h3>
        </div>
        <div className="space-y-6">
          <p className="text-gray-300 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
      </div>
    </section>
  )
}
