"use client"

import { useState, useEffect } from "react"

// Componente da Seta para baixo
const DownArrowIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 text-white"
  >
    <path
      d="M12 5V19M12 19L19 12M12 19L5 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type props = {
  isVisible: boolean
}

// Componente da Animação Liquid Glass
export const LiquidArrow = ({ isVisible }: props) => {
  const [isText, setIsText] = useState(false);

  // Efeito para alternar entre a seta e o texto
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsText((prev) => !prev);
    }, 4000); // Alterna a cada 4 segundos

    return () => clearInterval(intervalId);
  }, []);

  // NOVA FUNÇÃO: Função de rolagem suave customizada
  const smoothScrollTo = (targetId: string, duration: number = 800) => {
    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const ease = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };

  // Função para rolar a página para a próxima seção
  const handleScrollDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    // Assumindo que a próxima seção tem o id "sobre"
    smoothScrollTo("#sobre"); 
  };

  return (
    <>
      {/* Estilos e animações para o efeito liquid glass */}
      <style jsx>{`
        @keyframes blob-move-1 {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(10px, -15px) scale(1.2); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes blob-move-2 {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-12px, 15px) scale(0.8); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes blob-move-3 {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(15px, 10px) scale(1.1); }
          100% { transform: translate(0, 0) scale(1); }
        }
        .animate-blob-1 { animation: blob-move-1 10s ease-in-out infinite; }
        .animate-blob-2 { animation: blob-move-2 12s ease-in-out infinite; }
        .animate-blob-3 { animation: blob-move-3 8s ease-in-out infinite; }
      `}</style>

      {/* MODIFICAÇÃO: onClick agora chama a nova função de rolagem */}
      <div
        onClick={handleScrollDown}
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer group transition-all duration-500 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <div className={`relative transition-all duration-700 ease-in-out overflow-hidden ${isText ? 'w-24 h-10 rounded-4xl' : 'w-14 h-14 rounded-full'}`}>
          <div className="absolute inset-0 filter blur-md">
            <div className="absolute w-10 h-10 rounded-full bg-blue-800 top-0 left-1/2 -translate-x-1/2 animate-blob-1"></div>
            <div className="absolute w-12 h-12 rounded-full bg-cyan-800 top-1/2 left-0 -translate-y-1/2 animate-blob-2 opacity-70"></div>
            <div className="absolute w-7 h-7 rounded-full bg-blue-900 bottom-0 right-0 animate-blob-3"></div>
          </div>

          <div className={`
            absolute inset-0
            bg-white/10 backdrop-blur-md border border-white/5
            flex items-center justify-center
            transition-all duration-700 ease-in-out
            group-hover:scale-110
            filter contrast-[15]
          `}>
            <div className="relative w-full h-full flex items-center justify-center">
                <div className={`transition-all duration-500 absolute ${isText ? 'opacity-0 -translate-y-3' : 'opacity-100 translate-y-0'}`}>
                    <DownArrowIcon />
                </div>
                <div className={`transition-all duration-500 absolute text-white font-semibold text-xs text-center ${isText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
                    Veja Abaixo
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
