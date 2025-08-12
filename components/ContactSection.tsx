import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  return (
    <section className="relative z-10 py-16 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Tem um <span className="text-blue-400">projeto?</span>
        </h2>
        <p className="text-gray-300">Entre em contato conosco e vamos transformar sua ideia em realidade.</p>
      </div>

      <Card className="glass-card border-white/10">
        <CardContent className="p-8">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nome</label>
                <Input className="glass-input border-white/20 focus:border-blue-400/50 bg-white/5" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">E-mail</label>
                <Input type="email" className="glass-input border-white/20 focus:border-blue-400/50 bg-white/5" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Telefone</label>
                <Input className="glass-input border-white/20 focus:border-blue-400/50 bg-white/5" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Empresa</label>
                <Input className="glass-input border-white/20 focus:border-blue-400/50 bg-white/5" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Como podemos ajudar?</label>
              <Textarea
                className="glass-input border-white/20 focus:border-blue-400/50 bg-white/5 min-h-32"
                placeholder="Descreva seu projeto..."
              />
            </div>
            <Button className="w-full bg-blue-600/80 hover:bg-blue-700/80 backdrop-blur-sm py-3">Enviar</Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
