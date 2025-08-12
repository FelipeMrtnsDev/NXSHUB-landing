export default function Footer() {
  return (
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
  )
}
