import React from 'react';
import Head from 'next/head';
import { education, certifications } from '@/data/resume';

export default function Education() {
  return (
    <>
      <Head>
        <title>Education — Rima Modak</title>
        <meta name="description" content="Rima Modak's academic credentials and professional certifications." />
      </Head>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Degrees */}
        <section style={{ marginBottom:'4rem' }}>
          <h1 className="section-title">Education</h1>
          <div style={{ display:'flex', flexDirection:'column', gap:'1.25rem' }}>
            {education.map((edu, idx) => (
              <div key={idx} className="experience-card">
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:'0.5rem', marginBottom:'0.5rem' }}>
                  <div>
                    <h3 style={{ fontSize:'1.1rem', fontWeight:700, color:'#E8E8E8', marginBottom:'0.3rem' }}>
                      {edu.degree}
                    </h3>
                    <p style={{
                      fontWeight:600,
                      fontSize:'0.95rem',
                      background:'linear-gradient(135deg, #B8860B, #D4AF37)',
                      WebkitBackgroundClip:'text',
                      WebkitTextFillColor:'transparent',
                      backgroundClip:'text',
                    }}>
                      {edu.institution}
                    </p>
                  </div>
                  <div style={{
                    padding:'0.3rem 0.8rem',
                    borderRadius:'9999px',
                    background:'rgba(212,175,55,0.1)',
                    border:'1px solid rgba(212,175,55,0.3)',
                    fontSize:'0.8rem',
                    fontWeight:600,
                    color:'#D4AF37',
                    whiteSpace:'nowrap',
                  }}>
                    GPA {edu.gpa}
                  </div>
                </div>
                <p style={{ color:'#8B8B8B', fontSize:'0.82rem' }}>{edu.location}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section style={{ marginBottom:'4rem' }}>
          <h2 className="section-title">Professional Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <div key={idx} style={{
                padding:'1.25rem 1.5rem',
                borderRadius:'0.75rem',
                background:'rgba(184,134,11,0.07)',
                border:'1px solid rgba(212,175,55,0.2)',
                display:'flex',
                alignItems:'flex-start',
                gap:'0.875rem',
                transition:'all 0.25s ease',
              }}>
                <span style={{
                  width:'28px', height:'28px', flexShrink:0,
                  borderRadius:'50%',
                  background:'rgba(212,175,55,0.15)',
                  border:'1px solid rgba(212,175,55,0.4)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  color:'#D4AF37', fontSize:'0.85rem', fontWeight:700,
                }}>
                  ✓
                </span>
                <p style={{ color:'#C0C0C0', fontWeight:500, fontSize:'0.875rem', lineHeight:'1.5' }}>
                  {cert}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Continuous Learning */}
        <section>
          <div style={{
            background:'rgba(13,26,53,0.85)',
            border:'1px solid rgba(37,99,235,0.25)',
            borderRadius:'1rem',
            padding:'2rem',
          }}>
            <h3 style={{
              fontSize:'1.2rem',
              fontWeight:700,
              marginBottom:'1rem',
              background:'linear-gradient(135deg, #1E40AF, #3B82F6)',
              WebkitBackgroundClip:'text',
              WebkitTextFillColor:'transparent',
              backgroundClip:'text',
            }}>
              Continuous Learning
            </h3>
            <p style={{ color:'#A0A0A0', fontSize:'0.9rem', marginBottom:'1rem', lineHeight:'1.7' }}>
              Staying at the frontier of AI and ML through:
            </p>
            <div style={{ display:'flex', flexDirection:'column', gap:'0.5rem' }}>
              {[
                'Latest research papers — NeurIPS, ICML, arXiv preprints',
                'Industry conferences and technical workshops',
                'Hands-on courses and new certifications',
                'Open-source contributions and AI community engagement',
                'Technical writing and thought leadership',
              ].map((item) => (
                <div key={item} style={{ display:'flex', alignItems:'flex-start', gap:'0.6rem', fontSize:'0.875rem', color:'#C0C0C0' }}>
                  <span style={{ color:'#2563EB', flexShrink:0, marginTop:'0.05rem' }}>▸</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
