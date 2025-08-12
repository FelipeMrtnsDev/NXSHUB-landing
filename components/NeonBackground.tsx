// // Salve este código como /components/NeonBackground.tsx
// // Esta versão usa CSS puro para uma performance muito superior.

// "use client";

// // Este componente não precisa de hooks como useEffect ou useRef,
// // tornando-o mais leve e performático.

// const NeonBackground = () => {
//   return (
//     <div
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         zIndex: -1,
//         overflow: 'hidden', // Garante que as bolhas não "escapem" da tela
//         backgroundColor: '#000207', // Fundo azul-escuro
//       }}
//     >
//       {/* Estilos CSS para as animações e as bolhas de luz */}
//       <style jsx global>{`
//         @keyframes move-blob-1 {
//           0% { transform: translate(-10vw, -10vh); }
//           50% { transform: translate(20vw, 30vh); }
//           100% { transform: translate(-10vw, -10vh); }
//         }
//         @keyframes move-blob-2 {
//           0% { transform: translate(80vw, -20vh); }
//           50% { transform: translate(50vw, 40vh); }
//           100% { transform: translate(80vw, -20vh); }
//         }
//         @keyframes move-blob-3 {
//           0% { transform: translate(-20vw, 90vh); }
//           50% { transform: translate(30vw, 40vh); }
//           100% { transform: translate(-20vw, 90vh); }
//         }
//         @keyframes move-blob-4 {
//           0% { transform: translate(90vw, 80vh); }
//           50% { transform: translate(60vw, 30vh); }
//           100% { transform: translate(90vw, 80vh); }
//         }
//       `}</style>

//       {/* As Bolhas de Luz (agora são divs) */}
//       <div
//         style={{
//           position: 'absolute',
//           width: '400px',
//           height: '400px',
//           background: 'rgba(11, 34, 109, 0.15)',
//           borderRadius: '50%',
//           filter: 'blur(100px)',
//           animation: 'move-blob-1 25s infinite alternate',
//         }}
//       />
//       <div
//         style={{
//           position: 'absolute',
//           width: '350px',
//           height: '350px',
//           background: 'rgba(11, 34, 109, 0.15)',
//           borderRadius: '50%',
//           filter: 'blur(100px)',
//           animation: 'move-blob-2 30s infinite alternate',
//         }}
//       />
//       <div
//         style={{
//           position: 'absolute',
//           width: '300px',
//           height: '300px',
//           background: 'rgba(11, 34, 109, 0.15)',
//           borderRadius: '50%',
//           filter: 'blur(100px)',
//           animation: 'move-blob-3 28s infinite alternate',
//         }}
//       />
//       <div
//         style={{
//           position: 'absolute',
//           width: '380px',
//           height: '380px',
//           background: 'rgba(11, 34, 109, 0.15)',
//           borderRadius: '50%',
//           filter: 'blur(100px)',
//           animation: 'move-blob-4 60s infinite alternate',
//         }}
//       />
//     </div>
//   );
// };

// export default NeonBackground;

// Salve este código como /components/NeonBackground.tsx
// Esta é uma versão OTIMIZADA do efeito de Plexo Neon em Canvas.

"use client";

import { useRef, useEffect } from 'react';

const NeonBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas ? canvas.getContext('2d') : null;

    if (canvas && ctx) {
      let animationFrameId: number;
      let particles: Particle[];

      class Particle {
        x: number;
        y: number;
        size: number;
        speedX: number;
        speedY: number;
        color: string;

        constructor(x: number, y: number, size: number, speedX: number, speedY: number, color: string) {
          this.x = x;
          this.y = y;
          this.size = size;
          this.speedX = speedX;
          this.speedY = speedY;
          this.color = color;
        }

        update() {
          if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
          if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
          this.x += this.speedX;
          this.y += this.speedY;
        }

        draw() {
          ctx.fillStyle = this.color;
          ctx.shadowBlur = 15; // Efeito de brilho apenas nas partículas principais
          ctx.shadowColor = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      const init = () => {
        particles = [];
        // OTIMIZAÇÃO: Número de partículas reduzido para um valor fixo e mais baixo.
        const numberOfParticles = 80;
        const color = '#00158b';

        for (let i = 0; i < numberOfParticles; i++) {
          const size = Math.random() * 1.5 + 1;
          const x = Math.random() * (canvas.width - size * 2) + size;
          const y = Math.random() * (canvas.height - size * 2) + size;
          const speedX = (Math.random() - 0.5) * 0.5; // Movimento lento
          const speedY = (Math.random() - 0.5) * 0.5;
          particles.push(new Particle(x, y, size, speedX, speedY, color));
        }
      };

      const connect = () => {
        // OTIMIZAÇÃO: Distância de conexão reduzida para um valor razoável.
        const connectDistance = 120;
        ctx.shadowBlur = 0; // OTIMIZAÇÃO: Desativa o blur para as linhas, que é muito custoso.

        for (let a = 0; a < particles.length; a++) {
          for (let b = a; b < particles.length; b++) {
            const distance = Math.sqrt(
              (particles[a].x - particles[b].x) ** 2 +
              (particles[a].y - particles[b].y) ** 2
            );

            if (distance < connectDistance) {
              const opacity = 1 - (distance / connectDistance);
              ctx.strokeStyle = `rgba(0, 21, 139, ${opacity})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particles[a].x, particles[a].y);
              ctx.lineTo(particles[b].x, particles[b].y);
              ctx.stroke();
            }
          }
        }
      };

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.shadowBlur = 0;
        
        particles.forEach(p => {
          p.update(); // CORREÇÃO: A chamada para atualizar a posição foi adicionada aqui.
          p.draw();
        });
        
        connect();
        
        animationFrameId = requestAnimationFrame(animate);
      };

      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
      };

      window.addEventListener('resize', handleResize);
      handleResize();
      animate();

      return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        backgroundColor: '#000101',
      }}
    />
  );
};

export default NeonBackground;

