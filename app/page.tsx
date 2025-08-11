import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Star, Globe, Bot, Smartphone, FileText } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Subtle Neon Background Effects */}
      {/* Background completamente preto */}
      <div className="fixed inset-0 bg-black pointer-events-none"></div>

      {/* Fixed Header */}
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

      {/* Hero Section */}
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

      {/* What is nxs hub Section */}
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

      {/* Services Section */}
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

      {/* Featured Projects */}
      <section className="relative z-10 py-16 px-6 max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Projetos destacados</h2>
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

      {/* Testimonials */}
      <section className="relative z-10 py-16 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Vamos além para entender
              <br />e entregar resultados.
            </h2>
            <p className="text-gray-300 mb-8">
              Nossa equipe trabalha de forma colaborativa para garantir que cada projeto supere as expectativas dos
              nossos clientes.
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

      {/* Contact Form */}
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

      {/* Footer */}
      <footer className="relative z-10 glass-card border-t border-white/10 py-12 px-6 mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-white">nxs</span>
                <span className="text-blue-400">hub</span>
              </div>
              <p className="text-gray-400 text-sm">Transformando ideias em soluções tecnológicas inovadoras.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Desenvolvimento Web
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Aplicativos Móveis
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Consultoria
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Equipe
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Carreiras
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>contato@nxshub.com</li>
                <li>+55 (11) 99999-9999</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 nxs hub. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
