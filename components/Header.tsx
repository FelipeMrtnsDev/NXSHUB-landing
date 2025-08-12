"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10 backdrop-blur-xl">
      <div className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold">
          <span className="text-white">nxs</span>
          <span className="text-blue-400">hub</span>
        </div>

        {/* Desktop Navigation */}
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

        {/* Desktop Button */}
        <Button className="hidden md:block bg-blue-600/80 hover:bg-blue-700/80 backdrop-blur-sm">Fale conosco</Button>

        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="glass-card border-t border-white/10 backdrop-blur-xl">
          <div className="flex flex-col space-y-4 p-6">
            <a
              href="#"
              className="hover:text-blue-400 transition-colors py-2 border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors py-2 border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors py-2 border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors py-2 border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Projetos
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors py-2 border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
            <Button
              className="bg-blue-600/80 hover:bg-blue-700/80 backdrop-blur-sm mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Fale conosco
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
