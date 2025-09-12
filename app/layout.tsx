// src/app/layout.tsx
import { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'Seu Nome - Links',
  description: 'Meus links e tecnologias',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" suppressHydrationWarning={true}>
      <body className="antialiased dark" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
