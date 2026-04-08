import React, { useState } from 'react';
import Head from 'next/head';
import { personalInfo } from '@/data/resume';

const contactLinks = [
  { icon:'✉️', label:'Email', value:personalInfo.email, href:`mailto:${personalInfo.email}`, color:'#D4AF37' },
  { icon:'📞', label:'Phone', value:personalInfo.phone, href:`tel:${personalInfo.phone}`, color:'#C0C0C0' },
  { icon:'💼', label:'LinkedIn', value:`linkedin.com/in/${personalInfo.linkedin}`, href:`https://linkedin.com/in/${personalInfo.linkedin}`, color:'#2563EB', external:true },
  { icon:'🐙', label:'GitHub', value:'github.com/Rimcode-ai', href:'https://github.com/Rimcode-ai', color:'#C0C0C0', external:true },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name:'', email:'', subject:'', message:'' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name:'', email:'', subject:'', message:'' });
      setSubmitted(false);
    }, 2500);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.7rem 1rem',
    borderRadius: '0.5rem',
    background: 'rgba(13,26,53,0.9)',
    border: '1px solid rgba(212,175,55,0.2)',
    color: '#E8E8E8',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  };

  return (
    <>
      <Head>
        <title>Contact — Rima Modak</title>
        <meta name="description" content="Get in touch with Rima Modak, Senior AI/ML Engineer." />
      </Head>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="section-title">Let's Connect</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact info */}
          <div>
            <h2 style={{ fontSize:'1.3rem', fontWeight:700, color:'#E8E8E8', marginBottom:'1.5rem' }}>
              Get In Touch
            </h2>
            <div style={{ display:'flex', flexDirection:'column', gap:'1rem', marginBottom:'2.5rem' }}>
              {contactLinks.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.external ? '_blank' : undefined}
                  rel={c.external ? 'noopener noreferrer' : undefined}
                  className="experience-card"
                  style={{
                    display:'flex', alignItems:'center', gap:'1rem',
                    textDecoration:'none',
                  }}
                >
                  <div style={{
                    width:'44px', height:'44px', flexShrink:0,
                    borderRadius:'0.6rem',
                    background:`rgba(${c.color === '#D4AF37' ? '212,175,55' : c.color === '#2563EB' ? '37,99,235' : '192,192,192'},0.1)`,
                    border:`1px solid rgba(${c.color === '#D4AF37' ? '212,175,55' : c.color === '#2563EB' ? '37,99,235' : '192,192,192'},0.25)`,
                    display:'flex', alignItems:'center', justifyContent:'center',
                    fontSize:'1.3rem',
                  }}>
                    {c.icon}
                  </div>
                  <div>
                    <p style={{ fontSize:'0.75rem', color:'#8B8B8B', marginBottom:'0.1rem', textTransform:'uppercase', letterSpacing:'0.06em' }}>
                      {c.label}
                    </p>
                    <p style={{ color:c.color, fontWeight:500, fontSize:'0.875rem' }}>
                      {c.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability */}
            <div style={{
              padding:'1.5rem',
              borderRadius:'1rem',
              background:'rgba(21,128,61,0.08)',
              border:'1px solid rgba(21,128,61,0.3)',
            }}>
              <div style={{ display:'flex', alignItems:'center', gap:'0.5rem', marginBottom:'0.75rem' }}>
                <div style={{ width:'10px', height:'10px', borderRadius:'50%', background:'#22c55e', boxShadow:'0 0 8px #22c55e' }} />
                <span style={{ color:'#22c55e', fontWeight:700, fontSize:'0.85rem', textTransform:'uppercase', letterSpacing:'0.06em' }}>
                  Available
                </span>
              </div>
              <p style={{ color:'#A0A0A0', fontSize:'0.875rem', lineHeight:'1.7' }}>
                Open to senior AI/ML engineering roles, agentic AI consulting, and enterprise AI architecture projects.
                I respond within 24-48 hours.
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 style={{ fontSize:'1.3rem', fontWeight:700, color:'#E8E8E8', marginBottom:'1.5rem' }}>
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:'1rem' }}>
              {[
                { id:'name', label:'Name', type:'text', placeholder:'Your name' },
                { id:'email', label:'Email', type:'email', placeholder:'your.email@example.com' },
                { id:'subject', label:'Subject', type:'text', placeholder:"What's this about?" },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} style={{ display:'block', fontSize:'0.8rem', fontWeight:600, color:'#A0A0A0', marginBottom:'0.4rem', textTransform:'uppercase', letterSpacing:'0.06em' }}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={formData[field.id as keyof typeof formData]}
                    onChange={handleChange}
                    required
                    placeholder={field.placeholder}
                    style={inputStyle}
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" style={{ display:'block', fontSize:'0.8rem', fontWeight:600, color:'#A0A0A0', marginBottom:'0.4rem', textTransform:'uppercase', letterSpacing:'0.06em' }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project or opportunity..."
                  style={{ ...inputStyle, resize:'vertical' }}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width:'100%', marginTop:'0.25rem', textAlign:'center', fontSize:'0.95rem' }}
              >
                {submitted ? '✓ Opening email client...' : 'Send Message'}
              </button>
            </form>

            <p style={{ fontSize:'0.8rem', color:'#5A5A5A', marginTop:'0.875rem', textAlign:'center' }}>
              Typically responds within 24–48 hours
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
