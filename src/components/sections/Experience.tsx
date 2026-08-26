
import { motion } from 'framer-motion';
import { MapPin, Calendar, Trophy, ExternalLink, Briefcase, CheckCircle2 } from 'lucide-react';
import { experiences } from '../../data/portfolio';
import type { Experience } from '../../types';

const ExperienceCard = ({ experience, index }: { experience: Experience, index: number }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      {/* Timeline */}
      <div className="hidden md:flex absolute left-0 top-0 bottom-0 w-12 items-start justify-center">
        {/* Animated line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
          className="absolute top-16 bottom-0 w-px bg-[#b94b32]/40 origin-top"
        />
        
        {/* Dot */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 300 }}
          className="relative z-10 w-12 h-12 bg-[#315b4d] rounded-full flex items-center justify-center shadow-md shadow-[#315b4d]/20 group-hover:bg-[#b94b32] transition-colors duration-300"
        >
          <Briefcase className="h-6 w-6 text-white" />
        </motion.div>
      </div>

      {/* Content card */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="md:ml-24 cursor-pointer hover:translate-y-[-2px] transition-transform duration-200"
      >
        <div className={`rounded-md transition-all duration-200 overflow-hidden bg-[#f8f5ef] dark:bg-[#202c26] border border-black/10 dark:border-white/10
          ${isExpanded ? 'ring-2 ring-[#b94b32] shadow-xl shadow-[#b94b32]/10' : 'hover:shadow-lg'}`}
        >
          {/* Header */}
          <div className="p-6 sm:p-8 bg-[#f4f0e8] dark:bg-[#202c26] border-b border-black/10 dark:border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {experience.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="flex items-center gap-1 font-semibold text-[#b94b32] dark:text-[#e37d62]">
                    <Briefcase className="h-4 w-4 text-[#b94b32]" />
                    {experience.company}
                  </span>
                  <span className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                    <MapPin className="h-4 w-4" />
                    {experience.location}
                  </span>
                </div>
              </div>
              <div
                className={`text-gray-400 mt-4 sm:mt-0 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>

            {/* Date badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 dark:bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300">
              <Calendar className="h-4 w-4" />
              {experience.duration}
            </div>
          </div>

          {/* Expandable content */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'opacity-100 max-h-[2000px]' : 'opacity-0 max-h-0'}`}
          >
            <div className="px-6 sm:px-8 pb-6 sm:pb-8 border-t border-black/10 dark:border-white/10 space-y-6">
              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {experience.description}
              </p>

              {/* Skills */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800 dark:text-white flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#b94b32] rounded-full"></span>
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill: string) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-[#e9e2d6] dark:bg-white/10 text-[#315b4d] dark:text-[#d6e2d9] text-sm rounded-md border border-black/10 dark:border-white/10 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800 dark:text-white flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-yellow-500" />
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement: string, achievementIndex: number) => (
                    <li
                      key={achievementIndex}
                      className="text-gray-700 dark:text-gray-300 flex items-start gap-3"
                    >
                      <CheckCircle2 className="h-5 w-5 text-[#b94b32] flex-shrink-0 mt-0.5" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#f4f0e8] dark:bg-[#17211d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl sm:text-6xl font-semibold text-[#1d2924] dark:text-[#f4f0e8] mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Work Experience
          </motion.h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey in software development and creative industries
          </p>
        </motion.div>

        {/* Experience timeline */}
        <div className="relative space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
            Want to know more about my professional background?
          </p>
          <motion.a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="inline-flex items-center gap-2 btn-primary btn-hover-effect text-lg"
          >
            <ExternalLink className="h-5 w-5" />
            View Full Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}