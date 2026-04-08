import React from 'react';
import Head from 'next/head';
import ExperienceCard from '@/components/ExperienceCard';
import { workExperience } from '@/data/resume';

export default function Experience() {
  return (
    <>
      <Head>
        <title>Experience — Rima Modak</title>
        <meta name="description" content="Rima Modak's work experience and AI/ML project highlights." />
      </Head>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="section-title">Work Experience</h1>

        <div style={{ display:'flex', flexDirection:'column', gap:'1.25rem' }}>
          {workExperience.map((job, idx) => (
            <ExperienceCard
              key={idx}
              title={job.title}
              company={job.company}
              location={job.location}
              startDate={job.startDate}
              endDate={job.endDate}
              highlights={job.highlights}
              achievements={job.achievements}
            />
          ))}
        </div>

        {/* Career arc */}
        <section style={{ marginTop:'4rem' }}>
          <div style={{
            background:'rgba(13,26,53,0.85)',
            border:'1px solid rgba(30,64,175,0.3)',
            borderRadius:'1rem',
            padding:'2rem',
          }}>
            <h2 style={{
              fontSize:'1.4rem',
              fontWeight:700,
              marginBottom:'1.25rem',
              background:'linear-gradient(135deg, #1E40AF, #2563EB)',
              WebkitBackgroundClip:'text',
              WebkitTextFillColor:'transparent',
              backgroundClip:'text',
            }}>
              Career Arc
            </h2>
            <div style={{ display:'flex', flexDirection:'column', gap:'0.75rem' }}>
              {[
                'Started as a Data Scientist & ML Engineer at Navsoft, building retail analytics and predictive pricing models.',
                'Progressed through Ericsson and contracting roles, deepening expertise in cloud platforms (AWS, Azure, GCP) and large-scale data engineering.',
                'Advanced to senior AI/ML roles focusing on enterprise architecture, MLOps automation, LLM-driven systems, and Multi-Agent orchestration.',
                'Currently at Firstup: building production-grade Agentic AI platforms with Node.js 22, OpenAI Agents SDK, and Model Context Protocol (MCP).',
              ].map((text, i) => (
                <div key={i} style={{ display:'flex', gap:'0.875rem', alignItems:'flex-start' }}>
                  <div style={{
                    flexShrink:0,
                    width:'24px', height:'24px',
                    borderRadius:'50%',
                    background:'rgba(37,99,235,0.2)',
                    border:'1px solid rgba(37,99,235,0.5)',
                    display:'flex', alignItems:'center', justifyContent:'center',
                    fontSize:'0.7rem', fontWeight:700, color:'#2563EB',
                    marginTop:'0.1rem',
                  }}>
                    {i + 1}
                  </div>
                  <p style={{ color:'#C0C0C0', fontSize:'0.9rem', lineHeight:'1.65' }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
