import './globals.css'
import React, { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Gerador de Mensagens de Aniversário',
  description: 'Gere mensagens de feliz aniversário com GIFs e compartilhe!',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <link rel='icon' href='./icon.png' />
      <body>{children}</body>
    </html>
  );
}
