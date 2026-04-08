import React from 'react';
import Head from 'next/head';
import SkillCard from '@/components/SkillCard';
import { personalInfo, technicalSkills, softSkills } from '@/data/resume';

export default function About() {
  return (
    <>
      <Head>
        <title>About - Rima Modak</title>
        <meta name="description" content="About Rima Modak, Senior AI/ML Engineer" />
      </Head>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* About Section */}
        <section className="mb-16">
          <h1 className="section-title">About Me</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="md:col-span-2">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                I'm a dedicated AI/ML Engineer with over 10 years of experience designing, developing, and deploying
                end-to-end AI and ML solutions. My journey spans from traditional machine learning to cutting-edge
                generative AI and agentic systems.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                With deep expertise in MLOps, data engineering, and enterprise AI architecture, I've helped organizations
                transform complex business challenges into intelligent, scalable solutions. I'm passionate about building
                production-grade AI systems that deliver measurable impact.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Currently working on enterprise Agentic AI platforms and RAG architectures, I'm committed to bridging the
                gap between research and real-world applications, ensuring AI solutions are secure, ethical, and truly
                transformative.
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg h-fit">
              <h3 className="font-bold text-lg mb-4">Quick Info</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <strong>Email:</strong>{' '}
                  <a href={`mailto:${personalInfo.email}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                    {personalInfo.email}
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong> {personalInfo.phone}
                </li>
                <li>
                  <strong>LinkedIn:</strong>{' '}
                  <a
                    href={`https://linkedin.com/in/${personalInfo.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {personalInfo.linkedin}
                  </a>
                </li>
                <li>
                  <strong>GitHub:</strong>{' '}
                  <a
                    href="https://github.com/Rimcode-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Rimcode-ai
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-16">
          <h2 className="section-title">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(technicalSkills).map(([category, skills]) => (
              <SkillCard key={category} category={category} skills={skills} />
            ))}
          </div>
        </section>

        {/* Soft Skills */}
        <section>
          <h2 className="section-title">Soft Skills</h2>
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-900 dark:text-purple-100 rounded-lg font-semibold"
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
