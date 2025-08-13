// Salve este código como /components/Header.tsx no seu projeto Next.js

"use client";

import { useState, useRef, useEffect } from 'react';

// Definindo os links de navegação em um array para facilitar a manutenção
const navItems = [
  { name: "Início", href: "#inicio" },
  { name: "Sobre", href: "#sobre" },
  { name: "Serviços", href: "#servicos" },
  { name: "Projetos", href: "#projetos" },
  { name: "Contato", href: "#contato" },
];

const Header = () => {
  // --- Estados e Refs ---
  const [bubbleStyle, setBubbleStyle] = useState({});
  const [mobileBubbleStyle, setMobileBubbleStyle] = useState({});
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const mobileItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRendering, setIsRendering] = useState(false);
  // NOVO: Estado para controlar se uma rolagem manual está em andamento
  const [isScrolling, setIsScrolling] = useState(false);


  // --- Efeitos ---

  // Efeito para a bolha do menu DESKTOP
  useEffect(() => {
    const activeItem = itemsRef.current[activeIndex];
    if (activeItem) {
      setBubbleStyle({
        width: activeItem.offsetWidth,
        height: activeItem.offsetHeight,
        transform: `translateX(${activeItem.offsetLeft}px)`,
      });
    }
  }, [activeIndex]);

  // Efeito para a bolha do menu MOBILE
  useEffect(() => {
    if (isMenuOpen) {
      const activeItem = mobileItemsRef.current[activeIndex];
      if (activeItem) {
        setMobileBubbleStyle({
          top: `${activeItem.offsetTop}px`,
          height: `${activeItem.offsetHeight}px`,
        });
      }
    }
  }, [activeIndex, isMenuOpen]);

  // Efeito para recalcular a posição da bolha em caso de redimensionamento da janela
  useEffect(() => {
    const handleResize = () => {
      setTimeout(() => {
        const desktopItem = itemsRef.current[activeIndex];
        if (desktopItem) {
          setBubbleStyle({
            width: desktopItem.offsetWidth,
            height: desktopItem.offsetHeight,
            transform: `translateX(${desktopItem.offsetLeft}px)`,
          });
        }
        if (isMenuOpen) {
          const mobileItem = mobileItemsRef.current[activeIndex];
          if (mobileItem) {
            setMobileBubbleStyle({
              top: `${mobileItem.offsetTop}px`,
              height: `${mobileItem.offsetHeight}px`,
            });
          }
        }
      }, 100);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeIndex, isMenuOpen]);

  // Gerencia a montagem/desmontagem do conteúdo do menu com um delay para a animação.
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isMenuOpen) {
      setIsRendering(true);
    } else {
      timer = setTimeout(() => {
        setIsRendering(false);
      }, 500);
    }
    return () => clearTimeout(timer);
  }, [isMenuOpen]);

  // Efeito para observar as seções e atualizar o link ativo
  useEffect(() => {
    const options = {
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      // MODIFICAÇÃO: Ignora o observador se a rolagem manual estiver ativa
      if (isScrolling) return;

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = navItems.findIndex(item => `#${entry.target.id}` === item.href);
          if (index !== -1) {
            setActiveIndex(index);
          }
        }
      });
    }, options);

    const sections = navItems.map(item => document.querySelector(item.href));
    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, [isScrolling]); // Adicionado isScrolling como dependência


  // --- Funções ---
  
  // Função de rolagem suave customizada com callback de conclusão
  const smoothScrollTo = (targetId: string, duration: number = 800, onComplete?: () => void) => {
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
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        onComplete?.(); // MODIFICAÇÃO: Chama o callback ao final da animação
      }
    };

    const ease = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, index: number, href: string) => {
    e.preventDefault();
    setIsScrolling(true); // MODIFICAÇÃO: Ativa o bloqueio do observador
    setActiveIndex(index);
    
    // MODIFICAÇÃO: Passa um callback para reativar o observador ao final
    smoothScrollTo(href, 800, () => {
      setIsScrolling(false);
    });

    if (isMenuOpen) {
        setTimeout(() => setIsMenuOpen(false), 300);
    }
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-lg z-50 flex justify-center md:max-w-none">
      <nav className="relative w-full md:w-auto rounded-3xl border border-white/10 bg-black/25 p-2 shadow-lg backdrop-blur-lg overflow-hidden">
        {/* Menu Desktop */}
        <div className="hidden md:block">
          <div
            className="absolute top-2 h-10 rounded-full bg-white/10 ring-1 ring-inset ring-white/10"
            style={{
              ...bubbleStyle,
              transition: 'transform 0.7s cubic-bezier(0.68, -0.25, 0.265, 1.25), width 0.7s cubic-bezier(0.68, -0.25, 0.265, 1.25)',
            }}
          />
          <ul className="relative flex items-center">
            {navItems.map((item, index) => (
              <li key={item.name} ref={(el: any) => (itemsRef.current[index] = el)} className="z-10">
                <a href={item.href} onClick={(e) => handleLinkClick(e, index, item.href)} className={`block whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium outline-none transition-colors duration-300 ${activeIndex === index ? "text-white" : "text-gray-400 hover:text-white"}`}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Menu Mobile */}
        <div className="md:hidden flex justify-between items-center px-2">
          <span className="text-white font-medium text-lg">Menu</span>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="z-20 p-2">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />}
            </svg>
          </button>
        </div>
        
        {/* Dropdown do Menu Mobile com Animação */}
        <div 
          className={`md:hidden mt-2 origin-top transition-transform duration-500 ease-in-out ${isMenuOpen ? 'scale-y-100' : 'scale-y-0'}`}
        >
          {isRendering && (
            <ul className="relative flex flex-col items-center gap-y-2">
              <div
                className="absolute left-2 right-2 rounded-lg bg-white/10 ring-1 ring-inset ring-white/10 z-0"
                style={{
                  ...mobileBubbleStyle,
                  transition: 'top 0.4s ease-in-out, height 0.4s ease-in-out',
                }}
              />
              {navItems.map((item, index) => (
                <li key={item.name} ref={(el: any) => (mobileItemsRef.current[index] = el)} className="w-full z-10">
                  <a href={item.href} onClick={(e) => handleLinkClick(e, index, item.href)} className={`block text-center w-full rounded-lg py-3 text-base font-medium transition-colors duration-200 ${activeIndex === index ? "text-white" : "text-gray-300"}`}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
