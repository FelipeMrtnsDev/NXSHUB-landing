import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10 backdrop-blur-xl">
      <div className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold">
          <span className="text-white">nxs</span>
          <span className="text-blue-400">hub</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="hover:text-blue-400 transition-colors">
            Início
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors">
            Sobre
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors">
            Serviços
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors">
            Projetos
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors">
            Contato
          </a>
        </nav>

        <Button className="bg-blue-600/80 hover:bg-blue-700/80 backdrop-blur-sm">Fale conosco</Button>
      </div>
    </header>
  )
}
