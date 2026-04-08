import React, { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Always apply dark mode — this site uses a dark luxury theme
    document.documentElement.classList.add('dark');
  }, []);

  if (!mounted) return null;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
