'use client';

import { useEffect } from 'react';
import { Header } from './components/Header/header';
import Socials from './components/Socials/Socials';
import { TabsFields } from './components/Tabs/TabsFields';

const cursorStyle = `
  html, body {
    cursor: none !important;
  }
  .custom-cursor {
    pointer-events: none;
    position: fixed;
    z-index: 9999;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: white;
    box-shadow: 0 4px 24px 0 rgba(0,0,0,0.25);
    filter: blur(2px);
    transform: translate(-50%, -50%);
    transition: background 0.2s, transform 0.15s, width 0.15s, height 0.15s;
    opacity: 0.8;
  }
  .custom-cursor.hovered {
    width: 40px;
    height: 40px;
    background: rgba(255,255,255,0.9);
  }
`;

export default function HomePage() {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML =
      cursorStyle +
      `
      html {
        scroll-behavior: smooth;
        
      }
      ::-webkit-scrollbar {
        width: 8px;
        background: transparent;
      }
      ::-webkit-scrollbar-thumb {
        background: rgba(120,120,120,0.15);
        border-radius: 4px;
        transition: background 0.3s;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: rgba(120,120,120,0.25);
      }
    `;
    document.head.appendChild(style);

    // Scroll com inércia/momentum
    let velocity = 0;
    let isAnimating = false;
    let lastScrollTime = 0;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      const currentTime = performance.now();
      const deltaTime = currentTime - lastScrollTime;
      lastScrollTime = currentTime;

      // Adiciona velocidade baseada no delta do scroll
      velocity += e.deltaY * 0.5;

      // Limita a velocidade máxima
      velocity = Math.max(-50, Math.min(50, velocity));

      if (!isAnimating) {
        startMomentumScroll();
      }
    };

    const startMomentumScroll = () => {
      if (isAnimating) return;
      isAnimating = true;

      const animate = () => {
        if (Math.abs(velocity) < 0.1) {
          isAnimating = false;
          velocity = 0;
          return;
        }

        // Aplica o scroll
        const currentScrollY = window.scrollY;
        const newScrollY = Math.max(0, currentScrollY + velocity);
        window.scrollTo(0, newScrollY);

        // Aplica "fricção" para diminuir a velocidade gradualmente
        velocity *= 0.92; // Fator de desaceleração (quanto menor, mais rápido para)

        requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    };

    // Adicionar o event listener
    document.addEventListener('wheel', handleWheel, { passive: false });

    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };
    window.addEventListener('mousemove', moveCursor);

    // Função para aumentar o cursor ao passar sobre elementos interativos
    const interactiveElements = document.querySelectorAll(
      'a, button, input, [data-cursor-hover]'
    );
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
      el.addEventListener('mouseleave', () =>
        cursor.classList.remove('hovered')
      );
    });

    return () => {
      document.removeEventListener('wheel', handleWheel);
      window.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
      document.head.removeChild(style);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', () =>
          cursor.classList.add('hovered')
        );
        el.removeEventListener('mouseleave', () =>
          cursor.classList.remove('hovered')
        );
      });
    };
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300`}>
      <div className="container mx-auto px-4 py-8 max-w-3xl text-left">
        <Header />
        <Socials />
        <TabsFields />

        {/* Footer */}
        <div className="text-left text-sm text-muted-foreground px-4">
          <p>beested.co ©2025. All rights reserved</p>
        </div>
      </div>
    </div>
  );
}
