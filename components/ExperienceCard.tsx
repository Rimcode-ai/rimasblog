import React, { useState } from 'react';

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  highlights: string[];
  achievements: string;
}

export default function ExperienceCard({
  title,
  company,
  location,
  startDate,
  endDate,
  highlights,
  achievements,
}: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="experience-card">
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'0.35rem', flexWrap:'wrap', gap:'0.5rem' }}>
        <div>
          <h3 style={{ fontSize:'1.1rem', fontWeight:700, color:'var(--text-primary)', marginBottom:'0.2rem' }}>
            {title}
          </h3>
          <p style={{
            fontWeight:600,
            fontSize:'0.95rem',
            background:'linear-gradient(135deg, #B8860B, #D4AF37)',
            WebkitBackgroundClip:'text',
            WebkitTextFillColor:'transparent',
            backgroundClip:'text',
          }}>
            {company}
          </p>
        </div>
        <span style={{
          fontSize:'0.78rem',
          color:'#A0A0A0',
          whiteSpace:'nowrap',
          padding:'0.2rem 0.65rem',
          borderRadius:'9999px',
          background:'rgba(212,175,55,0.08)',
          border:'1px solid rgba(212,175,55,0.2)',
        }}>
          {startDate} – {endDate}
        </span>
      </div>

      <p style={{ color:'var(--text-muted)', fontSize:'0.8rem', marginBottom: isExpanded ? '1rem' : '0.75rem' }}>
        {location}
      </p>

      {isExpanded && (
        <>
          <div style={{ marginBottom:'1rem', display:'flex', flexDirection:'column', gap:'0.6rem' }}>
            {highlights.map((highlight, idx) => (
              <div key={idx} style={{ display:'flex', fontSize:'0.85rem', color:'var(--text-secondary)', lineHeight:'1.5' }}>
                <span style={{ color:'#D4AF37', marginRight:'0.6rem', flexShrink:0, marginTop:'0.1rem' }}>▸</span>
                <span>{highlight}</span>
              </div>
            ))}
          </div>
          <div style={{
            padding:'0.875rem 1rem',
            borderRadius:'0.6rem',
            marginBottom:'0.875rem',
            background:'rgba(212,175,55,0.07)',
            border:'1px solid rgba(212,175,55,0.2)',
          }}>
            <p style={{ fontSize:'0.85rem', color:'var(--text-primary)', lineHeight:'1.6' }}>
              <strong style={{ color:'#D4AF37' }}>Impact: </strong>{achievements}
            </p>
          </div>
        </>
      )}

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          background:'none',
          border:'none',
          cursor:'pointer',
          fontSize:'0.82rem',
          fontWeight:600,
          color:'#D4AF37',
          padding:0,
          transition:'opacity 0.2s',
        }}
      >
        {isExpanded ? '− Show Less' : '+ Show More'}
      </button>
    </div>
  );
}
