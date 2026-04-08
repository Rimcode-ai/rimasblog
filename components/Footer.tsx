import React from 'react';
import Link from 'next/link';
import { personalInfo } from '@/data/resume';

export default function Footer() {
  return (
    <footer style={{
      background: 'rgba(7,11,23,0.98)',
      borderTop: '1px solid rgba(212,175,55,0.2)',
      marginTop: '4rem',
    }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

          <div className="md:col-span-2">
            <div style={{ marginBottom:'1rem' }}>
              <span style={{
                fontSize:'1.8rem',
                fontWeight:900,
                background:'linear-gradient(135deg, #B8860B, #D4AF37, #FFD700)',
                WebkitBackgroundClip:'text',
                WebkitTextFillColor:'transparent',
                backgroundClip:'text',
              }}>
                Rima Modak
              </span>
            </div>
            <p style={{ color:'#A0A0A0', fontSize:'0.875rem', lineHeight:'1.7', maxWidth:'320px' }}>
              Senior AI/ML Engineer building enterprise-grade agentic AI systems, RAG pipelines, and
              cloud-native MLOps solutions across AWS, Azure, and GCP.
            </p>
            <div style={{ display:'flex', gap:'0.75rem', marginTop:'1.25rem', flexWrap:'wrap' }}>
              {[
                { label:'LinkedIn', href:`https://linkedin.com/in/${personalInfo.linkedin}`, external:true },
                { label:'GitHub', href:'https://github.com/Rimcode-ai', external:true },
                { label:'Email', href:`mailto:${personalInfo.email}`, external:false },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.external ? '_blank' : undefined}
                  rel={s.external ? 'noopener noreferrer' : undefined}
                  style={{
                    padding:'0.4rem 1rem',
                    borderRadius:'0.4rem',
                    fontSize:'0.8rem',
                    fontWeight:600,
                    textDecoration:'none',
                    color:'#D4AF37',
                    border:'1px solid rgba(212,175,55,0.35)',
                    transition:'all 0.2s ease',
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ color:'#D4AF37', fontWeight:700, fontSize:'0.875rem', letterSpacing:'0.1em', marginBottom:'1rem', textTransform:'uppercase' }}>
              Navigation
            </h4>
            <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:'0.5rem' }}>
              {[
                { href:'/', label:'Home' },
                { href:'/about', label:'About' },
                { href:'/experience', label:'Experience' },
                { href:'/education', label:'Education' },
                { href:'/contact', label:'Contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ color:'#A0A0A0', textDecoration:'none', fontSize:'0.875rem', transition:'color 0.2s ease' }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ color:'#D4AF37', fontWeight:700, fontSize:'0.875rem', letterSpacing:'0.1em', marginBottom:'1rem', textTransform:'uppercase' }}>
              Expertise
            </h4>
            <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:'0.5rem' }}>
              {['Agentic AI & LLMs','MLOps & CI/CD','RAG Architecture','Cloud Platforms','Data Engineering','AI Security'].map((e) => (
                <li key={e} style={{ color:'#8B8B8B', fontSize:'0.8rem' }}>
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ borderTop:'1px solid rgba(212,175,55,0.12)', paddingTop:'2rem', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'0.5rem' }}>
          <p style={{ color:'#5A5A5A', fontSize:'0.8rem' }}>
            &copy; {new Date().getFullYear()} Rima Modak. All rights reserved.
          </p>
          <p style={{ color:'#5A5A5A', fontSize:'0.8rem' }}>
            Senior AI/ML Engineer · San Francisco Bay Area
          </p>
        </div>
      </div>
    </footer>
  );
}
