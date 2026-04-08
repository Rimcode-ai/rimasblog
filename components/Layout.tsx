import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import AIChatWidget from './AIChatWidget';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div style={{ minHeight:'100vh', display:'flex', flexDirection:'column', background:'#0A0F1E' }}>
      <Navigation />
      <main style={{ flexGrow: 1 }}>
        {children}
      </main>
      <Footer />
      <AIChatWidget />
    </div>
  );
}
