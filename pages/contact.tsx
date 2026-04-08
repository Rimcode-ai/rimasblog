import React, { useState } from 'react';
import Head from 'next/head';
import { personalInfo } from '@/data/resume';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <>
      <Head>
        <title>Contact - Rima Modak</title>
        <meta name="description" content="Get in touch with Rima Modak" />
      </Head>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="section-title">Let's Connect</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              {/* Email */}
              <div className="experience-card">
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline text-lg"
                >
                  {personalInfo.email}
                </a>
              </div>

              {/* Phone */}
              <div className="experience-card">
                <h3 className="font-bold text-lg mb-2">Phone</h3>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline text-lg"
                >
                  {personalInfo.phone}
                </a>
              </div>

              {/* LinkedIn */}
              <div className="experience-card">
                <h3 className="font-bold text-lg mb-2">LinkedIn</h3>
                <a
                  href={`https://linkedin.com/in/${personalInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline text-lg"
                >
                  linkedin.com/in/{personalInfo.linkedin}
                </a>
              </div>

              {/* GitHub */}
              <div className="experience-card">
                <h3 className="font-bold text-lg mb-2">GitHub</h3>
                <a
                  href="https://github.com/Rimcode-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline text-lg"
                >
                  github.com/Rimcode-ai
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary font-semibold py-3"
              >
                {submitted ? 'Opening email client...' : 'Send Message'}
              </button>
            </form>

            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              I typically respond to inquiries within 24-48 hours.
            </p>
          </div>
        </div>

        {/* Availability */}
        <section className="mt-16 bg-green-50 dark:bg-green-900/20 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Availability</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            I'm currently open to discussing AI/ML consulting opportunities, contract work, and full-time positions.
            Whether you have a specific project in mind or just want to explore possibilities, I'd love to hear from you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div>
              <a href={`mailto:${personalInfo.email}`} className="font-bold hover:underline text-blue-600 dark:text-blue-400">📧 Email</a>
            </div>
            <div>
              <a href={`https://linkedin.com/in/${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="font-bold hover:underline text-blue-600 dark:text-blue-400">💼 LinkedIn</a>
            </div>
            <div>
              <a href={`tel:${personalInfo.phone}`} className="font-bold hover:underline text-blue-600 dark:text-blue-400">📞 Phone</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
