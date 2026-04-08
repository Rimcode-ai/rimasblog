import React from 'react';
import Head from 'next/head';
import SkillCard from '@/components/SkillCard';
import { personalInfo, technicalSkills, softSkills } from '@/data/resume';

export default function About() {
  return (
    <>
      <Head>
        <title>About — Rima Modak</title>
        <meta name="description" content="About Rima Modak, Senior AI/ML Engineer with 10+ years of experience." />
      </Head>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12" style={{ background:'var(--bg-primary)' }}>

        {/* About Section */}
        <section style={{ marginBottom:'4rem' }}>
          <h1 className="section-title">About Me</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2" style={{ display:'flex', flexDirection:'column', gap:'1rem' }}>
              <p style={{ fontSize:'1rem', color:'var(--text-secondary)', lineHeight:'1.8' }}>
                I'm a dedicated AI/ML Engineer with over 10 years of experience designing, developing, and deploying
                end-to-end AI and ML solutions. My journey spans from traditional machine learning to cutting-edge
                generative AI and agentic systems.
              </p>
              <p style={{ fontSize:'1rem', color:'var(--text-secondary)', lineHeight:'1.8' }}>
                With deep expertise in MLOps, data engineering, and enterprise AI architecture, I've helped organizations
                transform complex business challenges into intelligent, scalable solutions. I'm passionate about building
                production-grade AI systems that deliver measurable impact.
              </p>
              <p style={{ fontSize:'1rem', color:'var(--text-secondary)', lineHeight:'1.8' }}>
                Currently working on enterprise Agentic AI platforms and RAG architectures at Firstup, I'm committed to
                bridging the gap between research and real-world applications — ensuring AI solutions are secure,
                ethical, and truly transformative.
              </p>
            </div>

            <div style={{
              background:'rgba(13,26,53,0.85)',
              border:'1px solid rgba(212,175,55,0.2)',
              borderRadius:'1rem',
              padding:'1.5rem',
              height:'fit-content',
            }}>
              <h3 style={{
                fontWeight:700,
                fontSize:'0.875rem',
                letterSpacing:'0.1em',
                textTransform:'uppercase',
                color:'#D4AF37',
                marginBottom:'1.25rem',
              }}>
                Quick Info
              </h3>
              <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:'0.875rem' }}>
                {[
                  { label:'Email', value:personalInfo.email, href:`mailto:${personalInfo.email}` },
                  { label:'Phone', value:personalInfo.phone, href:`tel:${personalInfo.phone}` },
                  { label:'LinkedIn', value:`/in/${personalInfo.linkedin}`, href:`https://linkedin.com/in/${personalInfo.linkedin}`, external:true },
                  { label:'GitHub', value:'Rimcode-ai', href:'https://github.com/Rimcode-ai', external:true },
                  { label:'Location', value:'San Mateo, CA', href:null },
                ].map((item) => (
                  <li key={item.label} style={{ fontSize:'0.85rem' }}>
                    <span style={{ color:'var(--text-muted)', display:'block', marginBottom:'0.15rem', fontSize:'0.75rem', textTransform:'uppercase', letterSpacing:'0.06em' }}>
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        style={{ color:'#D4AF37', textDecoration:'none', fontWeight:500 }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span style={{ color:'var(--text-secondary)', fontWeight:500 }}>{item.value}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section style={{ marginBottom:'4rem' }}>
          <h2 className="section-title">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {Object.entries(technicalSkills).map(([category, skills]) => (
              <SkillCard key={category} category={category} skills={skills} />
            ))}
          </div>
        </section>

        {/* Soft Skills */}
        <section>
          <h2 className="section-title">Soft Skills</h2>
          <div style={{
            background:'rgba(13,26,53,0.6)',
            border:'1px solid rgba(192,192,192,0.1)',
            borderRadius:'1rem',
            padding:'2rem',
          }}>
            <div style={{ display:'flex', flexWrap:'wrap', gap:'0.75rem' }}>
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    padding:'0.4rem 1rem',
                    borderRadius:'0.5rem',
                    fontSize:'0.85rem',
                    fontWeight:600,
                    background:'rgba(192,192,192,0.08)',
                    color:'var(--text-secondary)',
                    border:'1px solid rgba(192,192,192,0.2)',
                    transition:'all 0.2s ease',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
