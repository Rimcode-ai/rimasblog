import React, { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Default: light mode. Apply saved preference if set.
    try {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch {
      document.documentElement.classList.remove('dark');
    }
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
