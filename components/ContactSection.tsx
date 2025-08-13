"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, CheckCircle } from "lucide-react"

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent'>('idle');
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'loading') return;

    setStatus('loading');

    // Simula um envio para a API com um delay de 2 segundos
    await new Promise(resolve => setTimeout(resolve, 2000));

    setStatus('sent');
    setShowToast(true);
  };

  // Esconde o toast após alguns segundos
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
        // Reseta o status do formulário após o toast desaparecer
        setTimeout(() => setStatus('idle'), 500);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <section id="contato" className="relative z-10 py-16 px-6 max-w-4xl mx-auto">
      {/* Toast de Confirmação */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            // MODIFICAÇÃO: Alterado para 'top-8'
            className="fixed top-8 right-8 z-50"
          >
            <div className="flex items-center gap-4 p-4 rounded-lg border border-blue-800/50 bg-black/50 backdrop-blur-lg shadow-2xl shadow-blue-900/20">
              <CheckCircle className="w-6 h-6 text-blue-400" />
              <p className="text-white font-medium">Mensagem enviada com sucesso!</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-4">
          Tem um <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">projeto?</span>
        </h2>
        <p className="text-gray-300">Entre em contato conosco e vamos transformar sua ideia em realidade.</p>
      </div>

      <Card className="bg-white/1 shadow-white/20 shadow-[inset_0_0_8px_0_rgba(255,255,255,0.1)] border-white/10">
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-white">Nome</label>
                <Input required className="glass-input border-white/20 focus:border-blue-400/50 bg-white/5 text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-white">E-mail</label>
                <Input required type="email" className="glass-input border-white/20 focus:border-blue-400/50 bg-white/5 text-white" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-white">Telefone</label>
                <Input className="glass-input border-white/20 focus:border-blue-400/50 bg-white/5 text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-white">Empresa</label>
                <Input className="glass-input border-white/20 focus:border-blue-400/50 bg-white/5 text-white" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-white">Como podemos ajudar?</label>
              <Textarea
                required
                className="glass-input border-white/20 focus:border-blue-400/50 bg-white/5 min-h-32 text-white"
                placeholder="Descreva seu projeto..."
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-blue-600/80 hover:bg-blue-700/80 backdrop-blur-sm py-3 cursor-pointer flex items-center justify-center transition-all duration-300"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                'Enviar'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
