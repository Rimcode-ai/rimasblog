import React from 'react';
import Head from 'next/head';
import { education, certifications } from '@/data/resume';

export default function Education() {
  return (
    <>
      <Head>
        <title>Education - Rima Modak</title>
        <meta name="description" content="Education and certifications" />
      </Head>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Education Section */}
        <section className="mb-16">
          <h1 className="section-title">Education</h1>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div key={idx} className="experience-card">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">{edu.institution}</p>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">GPA: {edu.gpa}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{edu.location}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section>
          <h2 className="section-title">Professional Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-700">
                <div className="flex items-start">
                  <span className="text-2xl mr-4">✓</span>
                  <p className="text-gray-800 dark:text-gray-100 font-semibold">{cert}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Learning Note */}
          <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Continuous Learning</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I'm passionate about staying at the forefront of AI and machine learning. I regularly engage with:
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Latest research papers and academic publications</li>
              <li>• Industry conferences and technical workshops</li>
              <li>• Online courses and certifications</li>
              <li>• Open-source projects and community contributions</li>
              <li>• Technical blogs and thought leadership articles</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
