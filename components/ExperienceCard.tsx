import React, { useState } from 'react';

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  highlights: string[];
  achievements: string;
}

export default function ExperienceCard({
  title,
  company,
  location,
  startDate,
  endDate,
  highlights,
  achievements,
}: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="experience-card">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
          <p className="text-blue-600 dark:text-blue-400 font-semibold">{company}</p>
        </div>
        <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap ml-4">
          {startDate} – {endDate}
        </span>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{location}</p>

      {isExpanded && (
        <>
          <div className="mb-4 space-y-2">
            {highlights.map((highlight, idx) => (
              <div key={idx} className="text-gray-700 dark:text-gray-300 text-sm flex">
                <span className="mr-3">▸</span>
                <span>{highlight}</span>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
            <p className="text-sm text-gray-800 dark:text-gray-200">
              <strong>Impact:</strong> {achievements}
            </p>
          </div>
        </>
      )}

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-semibold"
      >
        {isExpanded ? '- Show Less' : '+ Show More'}
      </button>
    </div>
  );
}
