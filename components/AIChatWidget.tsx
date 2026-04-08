import React, { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

const KB: Array<{ keywords: string[]; answer: string }> = [
  {
    keywords: ['hi','hello','hey','greetings','good morning','good afternoon'],
    answer: "Hello! I'm Rima's AI assistant. I can tell you about her experience, skills, projects, or how to get in touch. What would you like to know?",
  },
  {
    keywords: ['experience','years','how long','career','background','worked'],
    answer: "Rima has 10+ years of AI/ML engineering experience spanning Firstup (current, Agentic AI), Sycomp (ETL & Multi-Agent systems), Corcentric (ML for fintech), Ericsson (Azure cloud & NLP), and more. Her journey goes from Data Scientist to Senior AI/ML Engineer, always at the frontier of production AI.",
  },
  {
    keywords: ['skill','skills','technology','tech stack','languages','tools','expertise'],
    answer: "Rima's stack is deep: Python, LangGraph, CrewAI, AutoGen, OpenAI SDK, LangChain, LlamaIndex, PyTorch, TensorFlow, PySpark, Snowflake, Databricks, AWS, Azure, GCP, Docker, Kubernetes, MLflow, Pinecone, Weaviate, ChromaDB, Power BI, Tableau — and much more. She specialises in Agentic AI, RAG, MLOps, and LLM Fine-Tuning.",
  },
  {
    keywords: ['agent','agentic','multi-agent','llm','openai','langchain','rag','retrieval'],
    answer: "Currently Rima is building Agentic AI services using Node.js 22, Express 5, and the OpenAI Agents SDK at Firstup. She has hands-on experience with Model Context Protocol (MCP), RAG pipelines (Pinecone, Weaviate, ChromaDB), and multi-turn reasoning agents across LangGraph, CrewAI, and AutoGen.",
  },
  {
    keywords: ['education','degree','university','gpa','school','masters','phd','bachelor'],
    answer: "Rima holds an M.S. in Computer Science & Engineering from Santa Clara University (GPA 3.96) and a B.S. in Computer Science from the University of Petroleum & Energy Studies (GPA 3.90). She also holds 8 professional certifications including Azure AI Engineer, Databricks ML Engineer, and UC Berkeley AI Strategy.",
  },
  {
    keywords: ['certification','certified','certificate','azure','databricks','deeplearning','mckinsey'],
    answer: "Rima has 8 certifications: UC Berkeley Executive AI, Azure AZ-900, Azure AI Engineer (AI-102), Azure Data Scientist (DP-100), DeepLearning.ai ML Specialization, Databricks Certified ML Engineer, McKinsey Forward Program, and a Certificate in Business Analytics & Data Mining.",
  },
  {
    keywords: ['available','hire','open','job','position','contract','consulting','opportunity','work'],
    answer: "Rima is open to discussing senior AI/ML roles, agentic AI consulting, and enterprise AI architecture projects. The best way to reach her is via email at rimamodakglobal06@gmail.com or on LinkedIn at linkedin.com/in/rimamodak.",
  },
  {
    keywords: ['contact','email','phone','linkedin','reach','message','connect'],
    answer: "You can reach Rima at: ✉️ rimamodakglobal06@gmail.com · 📞 (669) 215-3876 · 💼 linkedin.com/in/rimamodak · 🐙 github.com/Rimcode-ai",
  },
  {
    keywords: ['location','where','city','remote','bay area','california','san francisco'],
    answer: "Rima is based in the San Francisco Bay Area (San Mateo, CA). She's open to remote, hybrid, and in-person opportunities.",
  },
  {
    keywords: ['mlops','pipeline','devops','kubernetes','docker','ci/cd','airflow','mlflow'],
    answer: "Rima has deep MLOps experience: Docker, Kubernetes (AKS/ECS/GKE), Apache Airflow, GitHub Actions, Jenkins, MLflow, Kubeflow, automated retraining pipelines, and CI/CD for ML. She has built production ML systems on both AWS and Azure.",
  },
  {
    keywords: ['cloud','aws','azure','gcp','google','amazon','bedrock'],
    answer: "Rima is multi-cloud proficient — AWS (SageMaker, Bedrock, Glue, Lambda, ECR/ECS), Azure (Databricks, AKS, Azure ML, Synapse, Azure OpenAI), and GCP (Vertex AI, Distributed Cloud). She designs and deploys cloud-native AI systems at enterprise scale.",
  },
  {
    keywords: ['achievement','impact','result','outcome','success','accomplishment'],
    answer: "Key achievements: reduced customer support latency 40% via Agentic AI at Firstup · cut manual reporting by 75% at Sycomp · achieved 90%+ accuracy in high-risk invoice detection at Corcentric · improved pipeline throughput 40% at Ericsson · boosted sales forecast accuracy 15-20% at Navsoft.",
  },
  {
    keywords: ['project','projects','portfolio','work','built','created','developed'],
    answer: "Notable projects: enterprise Agentic AI platform with MCP at Firstup · multi-agent financial document processing at Sycomp · NLP invoice pipeline with 90%+ accuracy at Corcentric · healthcare Power BI analytics suite · Azure ETL + NLP for network logs at Ericsson. Visit the Experience page for full details.",
  },
];

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const entry of KB) {
    if (entry.keywords.some((kw) => lower.includes(kw))) {
      return entry.answer;
    }
  }
  return "That's a great question! I don't have a ready answer for that, but Rima would love to tell you directly. You can email her at rimamodakglobal06@gmail.com or connect on LinkedIn at linkedin.com/in/rimamodak.";
}

const SUGGESTIONS = [
  "What's Rima's experience?",
  "What skills does she have?",
  "Is she available to hire?",
  "How do I contact her?",
];

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: "Hi! I'm Rima's AI assistant. Ask me anything about her experience, skills, or availability." },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      inputRef.current?.focus();
    }
  }, [messages, isOpen]);

  const sendMessage = (text?: string) => {
    const userText = (text || input).trim();
    if (!userText) return;

    setMessages((prev) => [...prev, { role: 'user', text: userText }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const reply = getResponse(userText);
      setMessages((prev) => [...prev, { role: 'assistant', text: reply }]);
      setIsTyping(false);
    }, 700 + Math.random() * 500);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open AI assistant"
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          right: '1.5rem',
          zIndex: 1000,
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #B8860B, #D4AF37)',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 0 30px rgba(212,175,55,0.5), 0 4px 15px rgba(0,0,0,0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.4rem',
          transition: 'all 0.3s ease',
          animation: !isOpen ? 'pulseGold 2.5s ease-in-out infinite' : 'none',
        }}
      >
        {isOpen ? '✕' : '🤖'}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '5rem',
            right: '1.5rem',
            zIndex: 999,
            width: '360px',
            maxWidth: 'calc(100vw - 2rem)',
            height: '480px',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '1rem',
            overflow: 'hidden',
            border: '1px solid rgba(212,175,55,0.3)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(212,175,55,0.1)',
            animation: 'slideUp 0.3s ease-out',
          }}
        >
          {/* Header */}
          <div style={{
            padding: '1rem 1.25rem',
            background: 'linear-gradient(135deg, #B8860B, #D4AF37)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
          }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(10,15,30,0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.1rem',
            }}>🤖</div>
            <div>
              <div style={{ color:'#0A0F1E', fontWeight:700, fontSize:'0.9rem' }}>Rima's AI Assistant</div>
              <div style={{ color:'rgba(10,15,30,0.65)', fontSize:'0.75rem' }}>Ask me anything</div>
            </div>
            <div style={{ marginLeft:'auto', width:'8px', height:'8px', borderRadius:'50%', background:'#15803d' }} />
          </div>

          {/* Messages */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '1rem',
            background: '#080D1A',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
          }}>
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                <div style={{
                  maxWidth: '80%',
                  padding: '0.6rem 0.9rem',
                  borderRadius: msg.role === 'user' ? '1rem 1rem 0.2rem 1rem' : '1rem 1rem 1rem 0.2rem',
                  fontSize: '0.83rem',
                  lineHeight: '1.55',
                  background: msg.role === 'user'
                    ? 'linear-gradient(135deg, #B8860B, #D4AF37)'
                    : 'rgba(13,26,53,0.9)',
                  color: msg.role === 'user' ? '#0A0F1E' : '#E8E8E8',
                  border: msg.role === 'assistant' ? '1px solid rgba(212,175,55,0.15)' : 'none',
                }}>
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div style={{ display:'flex', justifyContent:'flex-start' }}>
                <div style={{
                  padding: '0.6rem 1rem',
                  borderRadius: '1rem 1rem 1rem 0.2rem',
                  background: 'rgba(13,26,53,0.9)',
                  border: '1px solid rgba(212,175,55,0.15)',
                  display: 'flex',
                  gap: '4px',
                  alignItems: 'center',
                }}>
                  {[0,1,2].map((d) => (
                    <div key={d} style={{
                      width:'6px', height:'6px', borderRadius:'50%',
                      background: '#D4AF37', opacity:0.6,
                      animation: `bounce 1.2s ease-in-out ${d*0.2}s infinite`,
                    }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick suggestions */}
          {messages.length <= 2 && (
            <div style={{
              padding: '0.5rem 0.75rem',
              background: '#0A0F1A',
              borderTop: '1px solid rgba(212,175,55,0.1)',
              display: 'flex',
              gap: '0.4rem',
              flexWrap: 'wrap',
            }}>
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => sendMessage(s)}
                  style={{
                    padding: '0.25rem 0.6rem',
                    borderRadius: '9999px',
                    fontSize: '0.72rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    background: 'rgba(212,175,55,0.1)',
                    color: '#D4AF37',
                    border: '1px solid rgba(212,175,55,0.25)',
                    transition: 'all 0.15s ease',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div style={{
            padding: '0.75rem',
            background: '#080D1A',
            borderTop: '1px solid rgba(212,175,55,0.15)',
            display: 'flex',
            gap: '0.5rem',
          }}>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Ask about Rima's experience..."
              style={{
                flex: 1,
                padding: '0.55rem 0.9rem',
                borderRadius: '0.5rem',
                background: 'rgba(13,26,53,0.9)',
                border: '1px solid rgba(212,175,55,0.2)',
                color: '#E8E8E8',
                fontSize: '0.82rem',
                outline: 'none',
              }}
            />
            <button
              onClick={() => sendMessage()}
              style={{
                padding: '0.55rem 0.9rem',
                borderRadius: '0.5rem',
                background: 'linear-gradient(135deg, #B8860B, #D4AF37)',
                color: '#0A0F1E',
                border: 'none',
                fontWeight: 700,
                cursor: 'pointer',
                fontSize: '0.82rem',
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </>
  );
}
