'use client';

import { useEffect } from 'react';
import FooterText from '../../footer-text/footer-text';
import PageContainer from '../../page-container/page-container';
import { Header } from './Header/header';
import Socials from './Socials/Socials';
import { TabsFields } from './Tabs/TabsFields';

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

    let velocity = 0;
    let isAnimating = false;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      velocity += e.deltaY * 0.5;
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
        const currentScrollY = window.scrollY;
        const newScrollY = Math.max(0, currentScrollY + velocity);
        window.scrollTo(0, newScrollY);
        velocity *= 0.92;
        requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    };

    document.addEventListener('wheel', handleWheel, { passive: false });

    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };
    window.addEventListener('mousemove', moveCursor);
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
    <PageContainer>
      <Header />
      <Socials />
      <TabsFields />

      <FooterText />
    </PageContainer>
  );
}
