import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { personalInfo } from '@/data/resume';

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

const expertiseItems = [
  {
    icon: '🤖',
    color: '#D4AF37',
    title: 'Agentic AI & LLMs',
    description: 'Production AI agents with OpenAI SDK, LangGraph, CrewAI, and Model Context Protocol (MCP) for enterprise automation at scale.',
  },
  {
    icon: '🏗️',
    color: '#2563EB',
    title: 'MLOps & Scalability',
    description: 'Cloud-native ML pipelines with Docker, Kubernetes, MLflow, and automated retraining on AWS, Azure, and GCP.',
  },
  {
    icon: '🔍',
    color: '#C0C0C0',
    title: 'RAG & Vector Search',
    description: 'Semantic retrieval systems with Pinecone, Weaviate, ChromaDB, and multi-turn reasoning for enterprise knowledge bases.',
  },
  {
    icon: '📊',
    color: '#D4AF37',
    title: 'Data Engineering',
    description: 'Robust data pipelines with PySpark, Snowflake, Databricks, and dbt delivering enterprise-grade business intelligence.',
  },
  {
    icon: '🧠',
    color: '#2563EB',
    title: 'LLM Fine-Tuning',
    description: 'LoRA, QLoRA fine-tuning on HuggingFace models with vLLM and TensorRT for efficient inference deployment.',
  },
  {
    icon: '🛡️',
    color: '#C0C0C0',
    title: 'AI Security & Ethics',
    description: 'Governance frameworks, hallucination reduction, IAM security, and ethical AI principles in production deployments.',
  },
];

const impactStats = [
  { value: 10, suffix: '+', label: 'Years Experience', color: '#D4AF37' },
  { value: 20, suffix: '+', label: 'Projects Delivered', color: '#2563EB' },
  { value: 8, suffix: '', label: 'Certifications', color: '#C0C0C0' },
  { value: 40, suffix: '%', label: 'Avg Efficiency Gain', color: '#D4AF37' },
];

export default function Home(): JSX.Element {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const counts = impactStats.map((s) => useCountUp(s.value, 1800, statsVisible));

  return (
    <>
      <Head>
        <title>{personalInfo.name} — Senior AI/ML Engineer</title>
        <meta name="description" content="Senior AI/ML Engineer with 10+ years building Agentic AI, RAG pipelines, and enterprise ML systems." />
        <meta property="og:title" content="Rima Modak — Senior AI/ML Engineer" />
        <meta property="og:description" content="10+ years designing production AI/ML systems across AWS, Azure, and GCP." />
      </Head>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="hero-backdrop"
        style={{ minHeight:'100vh', display:'flex', alignItems:'center', position:'relative', overflow:'hidden' }}
      >
        {/* Decorative blurs */}
        <div style={{
          position:'absolute', top:'10%', left:'5%',
          width:'400px', height:'400px', borderRadius:'50%',
          background:'radial-gradient(circle, rgba(30,64,175,0.15) 0%, transparent 70%)',
          pointerEvents:'none',
        }} />
        <div style={{
          position:'absolute', bottom:'10%', right:'5%',
          width:'350px', height:'350px', borderRadius:'50%',
          background:'radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%)',
          pointerEvents:'none',
        }} />
        <div style={{
          position:'absolute', top:'40%', right:'35%',
          width:'200px', height:'200px', borderRadius:'50%',
          background:'radial-gradient(circle, rgba(220,38,38,0.06) 0%, transparent 70%)',
          pointerEvents:'none',
        }} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full" style={{ paddingTop:'5rem', paddingBottom:'5rem' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <div style={{ animation:'fadeIn 0.8s ease-out' }}>
              <div style={{
                display:'inline-flex', alignItems:'center', gap:'0.5rem',
                padding:'0.35rem 1rem', borderRadius:'9999px', marginBottom:'1.5rem',
                background:'rgba(212,175,55,0.1)', border:'1px solid rgba(212,175,55,0.3)',
              }}>
                <span style={{ width:'8px', height:'8px', borderRadius:'50%', background:'#22c55e', boxShadow:'0 0 8px #22c55e' }} />
                <span style={{ color:'#D4AF37', fontSize:'0.8rem', fontWeight:600, letterSpacing:'0.05em' }}>
                  AVAILABLE FOR OPPORTUNITIES
                </span>
              </div>

              <h1 style={{
                fontSize:'clamp(2.8rem, 6vw, 4.5rem)',
                fontWeight:900,
                lineHeight:1.08,
                letterSpacing:'-0.03em',
                marginBottom:'0.75rem',
                background:'linear-gradient(135deg, #F5D060 0%, #D4AF37 30%, #B8860B 55%, #D4AF37 75%, #F5D060 100%)',
                backgroundSize:'200% auto',
                WebkitBackgroundClip:'text',
                WebkitTextFillColor:'transparent',
                backgroundClip:'text',
                animation:'shimmer 4s linear infinite',
              }}>
                Rima Modak
              </h1>

              <p style={{
                fontSize:'clamp(1.1rem, 2.5vw, 1.5rem)',
                fontWeight:600,
                color:'#C0C0C0',
                marginBottom:'1.25rem',
                letterSpacing:'0.04em',
              }}>
                Senior AI/ML Engineer
              </p>

              <p style={{ fontSize:'1rem', color:'#8B8B8B', lineHeight:'1.75', marginBottom:'2rem', maxWidth:'520px' }}>
                10+ years designing production-grade Agentic AI systems, RAG architectures, and cloud-native MLOps solutions.
                Currently building enterprise AI at <span style={{ color:'#D4AF37', fontWeight:600 }}>Firstup</span> in San Mateo, CA.
              </p>

              <div style={{ display:'flex', flexWrap:'wrap', gap:'0.875rem', marginBottom:'2.5rem' }}>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="btn-primary"
                  style={{ fontSize:'0.9rem' }}
                >
                  Get In Touch
                </a>
                <a
                  href={`https://linkedin.com/in/${personalInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ fontSize:'0.9rem' }}
                >
                  LinkedIn
                </a>
                <Link
                  href="/experience"
                  className="btn-blue"
                  style={{ fontSize:'0.9rem' }}
                >
                  View Work
                </Link>
              </div>

              {/* Tech tags */}
              <div style={{ display:'flex', flexWrap:'wrap', gap:'0.5rem' }}>
                {['Agentic AI','LangGraph','OpenAI SDK','RAG','MLOps','LLM Fine-Tuning','AWS','Azure'].map((tag) => (
                  <span key={tag} style={{
                    padding:'0.2rem 0.65rem',
                    borderRadius:'9999px',
                    fontSize:'0.75rem',
                    color:'#8B8B8B',
                    border:'1px solid rgba(192,192,192,0.15)',
                    background:'rgba(192,192,192,0.05)',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — Orb */}
            <div className="hidden md:flex justify-center" style={{ animation:'float 6s ease-in-out infinite' }}>
              <div style={{ position:'relative', width:'360px', height:'360px' }}>
                {/* Outer ring */}
                <div style={{
                  position:'absolute', inset:0, borderRadius:'50%',
                  border:'1px solid rgba(212,175,55,0.25)',
                  animation:'spin-slow 18s linear infinite',
                }} />
                <div style={{
                  position:'absolute', inset:'12px', borderRadius:'50%',
                  border:'1px dashed rgba(212,175,55,0.15)',
                  animation:'spin-slow 12s linear infinite reverse',
                }} />
                {/* Glow */}
                <div style={{
                  position:'absolute', inset:'30px', borderRadius:'50%',
                  background:'radial-gradient(circle, rgba(212,175,55,0.18) 0%, rgba(30,64,175,0.12) 50%, transparent 75%)',
                  animation:'pulseGold 3s ease-in-out infinite',
                }} />
                {/* Core */}
                <div style={{
                  position:'absolute', inset:'60px', borderRadius:'50%',
                  background:'linear-gradient(135deg, rgba(184,134,11,0.4) 0%, rgba(212,175,55,0.2) 50%, rgba(30,64,175,0.3) 100%)',
                  border:'1px solid rgba(212,175,55,0.4)',
                  display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
                  boxShadow:'0 0 40px rgba(212,175,55,0.2)',
                }}>
                  <span style={{ fontSize:'2.8rem', marginBottom:'0.5rem' }}>🧠</span>
                  <span style={{ color:'#D4AF37', fontWeight:700, fontSize:'0.95rem', letterSpacing:'0.05em' }}>AI/ML</span>
                  <span style={{ color:'#8B8B8B', fontSize:'0.75rem' }}>ENGINEER</span>
                </div>

                {/* Orbiting dots */}
                {['🤖','⚡','🔍','🛡️'].map((icon, i) => {
                  const angle = (i / 4) * 360;
                  const rad = (angle * Math.PI) / 180;
                  const r = 165;
                  const x = 180 + r * Math.cos(rad) - 18;
                  const y = 180 + r * Math.sin(rad) - 18;
                  return (
                    <div key={icon} style={{
                      position:'absolute',
                      left: x,
                      top: y,
                      width:'36px',
                      height:'36px',
                      borderRadius:'50%',
                      background:'rgba(13,26,53,0.95)',
                      border:'1px solid rgba(212,175,55,0.3)',
                      display:'flex',
                      alignItems:'center',
                      justifyContent:'center',
                      fontSize:'1rem',
                    }}>
                      {icon}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Impact Stats ─────────────────────────────────────── */}
      <section
        ref={statsRef}
        style={{
          padding:'4rem 0',
          background:'rgba(7,11,23,0.8)',
          borderTop:'1px solid rgba(212,175,55,0.1)',
          borderBottom:'1px solid rgba(212,175,55,0.1)',
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, i) => (
              <div key={stat.label} style={{ textAlign:'center' }}>
                <p style={{
                  fontSize:'clamp(2rem, 4vw, 3rem)',
                  fontWeight:900,
                  color: stat.color,
                  lineHeight:1,
                  marginBottom:'0.4rem',
                  fontVariantNumeric:'tabular-nums',
                }}>
                  {counts[i]}{stat.suffix}
                </p>
                <p style={{ color:'#8B8B8B', fontSize:'0.875rem' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Expertise Grid ───────────────────────────────────── */}
      <section style={{ padding:'5rem 0' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ textAlign:'center', marginBottom:'3rem' }}>
            <h2 className="section-title" style={{ display:'inline-block' }}>Core Expertise</h2>
            <p style={{ color:'#8B8B8B', fontSize:'1rem', maxWidth:'520px', margin:'0 auto' }}>
              A decade building production AI/ML systems across the full stack — from data pipelines to agentic reasoning engines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {expertiseItems.map((item) => (
              <div key={item.title} className="card" style={{ textAlign:'center' }}>
                <div style={{
                  width:'56px', height:'56px', borderRadius:'50%', margin:'0 auto 1rem',
                  background:`rgba(${item.color === '#D4AF37' ? '212,175,55' : item.color === '#2563EB' ? '37,99,235' : '192,192,192'},0.12)`,
                  border:`1px solid rgba(${item.color === '#D4AF37' ? '212,175,55' : item.color === '#2563EB' ? '37,99,235' : '192,192,192'},0.25)`,
                  display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.6rem',
                }}>
                  {item.icon}
                </div>
                <h3 style={{ color:'#E8E8E8', fontWeight:700, fontSize:'1rem', marginBottom:'0.6rem' }}>
                  {item.title}
                </h3>
                <p style={{ color:'#8B8B8B', fontSize:'0.85rem', lineHeight:'1.65' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section style={{
        padding:'5rem 0',
        background:'linear-gradient(135deg, rgba(184,134,11,0.12) 0%, rgba(13,26,53,0.8) 40%, rgba(30,64,175,0.12) 100%)',
        borderTop:'1px solid rgba(212,175,55,0.15)',
        borderBottom:'1px solid rgba(212,175,55,0.15)',
      }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div style={{
            fontSize:'2.5rem',
            marginBottom:'1rem',
            background:'linear-gradient(135deg, #B8860B, #D4AF37, #FFD700)',
            WebkitBackgroundClip:'text',
            WebkitTextFillColor:'transparent',
            backgroundClip:'text',
            fontWeight:900,
            lineHeight:1.2,
          }}>
            Let's Build Something<br />Extraordinary Together
          </div>
          <p style={{ color:'#A0A0A0', fontSize:'1rem', marginBottom:'2.5rem', lineHeight:'1.7' }}>
            Whether you're scaling an enterprise AI platform, launching a new product, or solving a complex data challenge —
            Rima brings the expertise to make it happen.
          </p>
          <div style={{ display:'flex', justifyContent:'center', flexWrap:'wrap', gap:'1rem' }}>
            <Link href="/experience" className="btn-secondary">
              Explore My Work
            </Link>
            <a href={`mailto:${personalInfo.email}`} className="btn-primary">
              Start a Conversation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
