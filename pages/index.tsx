import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { personalInfo } from '@/data/resume';

export default function Home() {
  return (
    <>
      <Head>
        <title>{personalInfo.name} - Portfolio</title>
        <meta name="description" content={personalInfo.summary} />
      </Head>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
                Rima Modak
              </h1>
              <p className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-semibold mb-6">
                Senior AI/ML Engineer
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                10+ years of experience designing and deploying enterprise-grade AI/ML solutions. Specializing in MLOps,
                Agentic AI, LLM Fine-Tuning, and RAG Architecture.
              </p>

              {/* Contact Links */}
              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="btn-primary"
                >
                  Email Me
                </a>
                <a
                  href={`https://linkedin.com/in/${personalInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Rimcode-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  GitHub
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">10+</p>
                  <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">20+</p>
                  <p className="text-gray-600 dark:text-gray-400">Projects Delivered</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">5</p>
                  <p className="text-gray-600 dark:text-gray-400">Certifications</p>
                </div>
              </div>
            </div>

            {/* Right Side - Image/Visual */}
            <div className="hidden md:flex justify-center">
              <div className="relative w-96 h-96 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-900 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-300 to-blue-500 dark:from-blue-500 dark:to-blue-800 opacity-75"></div>
                <div className="relative text-white text-center z-10">
                  <p className="text-6xl mb-4">🚀</p>
                  <p className="text-2xl font-bold">AI/ML Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Featured Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🤖',
                title: 'Agentic AI & LLMs',
                description: 'Building production-grade AI agents with OpenAI SDK, LangGraph, and CrewAI for enterprise automation.',
              },
              {
                icon: '🏗️',
                title: 'MLOps & Scalability',
                description: 'Designing cloud-native ML pipelines with Docker, Kubernetes, and automated retraining on AWS and Azure.',
              },
              {
                icon: '📊',
                title: 'Data & Analytics',
                description: 'Engineering robust data pipelines with PySpark, Snowflake, and Databricks for enterprise insights.',
              },
            ].map((item, idx) => (
              <div key={idx} className="experience-card text-center">
                <p className="text-5xl mb-4">{item.icon}</p>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 dark:bg-blue-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Collaborate?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's build something amazing together. Explore my work or get in touch.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/experience" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              View My Work
            </Link>
            <a
              href={`mailto:${personalInfo.email}`}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
