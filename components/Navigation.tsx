import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => router.pathname === path;

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/experience', label: 'Experience' },
    { href: '/education', label: 'Education' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: isScrolled ? 'rgba(10,15,30,0.97)' : 'rgba(10,15,30,0.7)',
        backdropFilter: 'blur(16px)',
        borderBottom: isScrolled ? '1px solid rgba(212,175,55,0.25)' : '1px solid transparent',
        boxShadow: isScrolled ? '0 4px 30px rgba(0,0,0,0.5)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <Link href="/" style={{ display:'flex', alignItems:'center', gap:'0.6rem', textDecoration:'none' }}>
            <span style={{
              fontSize: '1.7rem',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              background: 'linear-gradient(135deg, #B8860B, #D4AF37, #FFD700)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>RM</span>
            <span style={{ fontSize:'0.7rem', color:'#8B8B8B', letterSpacing:'0.12em', fontWeight:600 }}>
              AI/ML ENGINEER
            </span>
          </Link>

          <div className="hidden md:flex items-center" style={{ gap:'0.2rem' }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: '0.45rem 0.9rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: isActive(link.href) ? 600 : 400,
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  color: isActive(link.href) ? '#D4AF37' : '#A0A0A0',
                  background: isActive(link.href) ? 'rgba(212,175,55,0.1)' : 'transparent',
                  border: isActive(link.href) ? '1px solid rgba(212,175,55,0.3)' : '1px solid transparent',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div style={{ display:'flex', alignItems:'center', gap:'0.75rem' }}>
            <Link
              href="/contact"
              className="hidden md:inline-block"
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: 700,
                textDecoration: 'none',
                background: 'linear-gradient(135deg, #B8860B, #D4AF37)',
                color: '#0A0F1E',
                boxShadow: '0 0 20px rgba(212,175,55,0.35)',
                transition: 'all 0.25s ease',
                letterSpacing: '0.02em',
              }}
            >
              Hire Me
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden"
              style={{
                padding: '0.5rem 0.65rem',
                borderRadius: '0.5rem',
                background: 'rgba(212,175,55,0.1)',
                border: '1px solid rgba(212,175,55,0.3)',
                color: '#D4AF37',
                fontSize: '1rem',
                cursor: 'pointer',
              }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div style={{
            paddingBottom: '1rem',
            borderTop: '1px solid rgba(212,175,55,0.15)',
            marginTop: '0.25rem',
            paddingTop: '0.75rem',
          }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: 'block',
                  padding: '0.55rem 0.9rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  marginBottom: '0.2rem',
                  color: isActive(link.href) ? '#D4AF37' : '#C0C0C0',
                  background: isActive(link.href) ? 'rgba(212,175,55,0.1)' : 'transparent',
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              style={{
                display: 'block',
                padding: '0.6rem 0.9rem',
                borderRadius: '0.5rem',
                fontWeight: 700,
                textDecoration: 'none',
                textAlign: 'center',
                marginTop: '0.5rem',
                background: 'linear-gradient(135deg, #B8860B, #D4AF37)',
                color: '#0A0F1E',
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hire Me
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
