import React from 'react';

interface SkillCardProps {
  category: string;
  skills: string[];
}

export default function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <div className="experience-card">
      <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">{category}</h3>
      <div className="flex flex-wrap">
        {skills.map((skill) => (
          <span key={skill} className="skill-badge">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
