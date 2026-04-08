import React from 'react';
import Head from 'next/head';
import ExperienceCard from '@/components/ExperienceCard';
import { workExperience } from '@/data/resume';

export default function Experience() {
  return (
    <>
      <Head>
        <title>Experience - Rima Modak</title>
        <meta name="description" content="Work experience and projects" />
      </Head>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="section-title">Work Experience</h1>

        <div className="space-y-6">
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

        {/* Timeline Summary */}
        <section className="mt-16 bg-blue-50 dark:bg-blue-900/20 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Career Summary</h2>
          <div className="space-y-2 text-gray-700 dark:text-gray-300">
            <p>
              Started as a Data Scientist and ML Engineer (Associate) at Navsoft, specializing in retail analytics and
              predictive modeling.
            </p>
            <p>
              Progressed through roles at Ericsson and various contractors, building expertise in cloud platforms (AWS,
              Azure, GCP) and large-scale data engineering.
            </p>
            <p>
              Advanced to senior-level positions focusing on enterprise AI architecture, MLOps automation, and most
              recently, Agentic AI systems and LLM orchestration.
            </p>
            <p>
              Current focus: Building production-grade Agentic AI platforms with Node.js, OpenAI SDK, and Model Context
              Protocol (MCP) for enterprise-scale applications.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
