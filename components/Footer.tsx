import React from 'react';
import { personalInfo } from '@/data/resume';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Rima Modak</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Senior AI/ML Engineer with 10+ years of experience in designing and deploying enterprise-grade AI solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-blue-600 dark:text-blue-400 hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="/experience" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Experience
                </a>
              </li>
              <li>
                <a href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href={`https://linkedin.com/in/${personalInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Rimcode-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Rima Modak. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
