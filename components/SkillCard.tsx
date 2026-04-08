import React from 'react';

interface SkillCardProps {
  category: string;
  skills: string[];
}

export default function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <div className="experience-card">
      <h3 style={{
        fontSize:'1rem',
        fontWeight:700,
        marginBottom:'1rem',
        background:'linear-gradient(135deg, #B8860B, #D4AF37, #F5D060)',
        WebkitBackgroundClip:'text',
        WebkitTextFillColor:'transparent',
        backgroundClip:'text',
        letterSpacing:'0.02em',
      }}>
        {category}
      </h3>
      <div style={{ display:'flex', flexWrap:'wrap' }}>
        {skills.map((skill) => (
          <span key={skill} className="skill-badge">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
