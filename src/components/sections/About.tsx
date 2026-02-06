import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Award, User } from 'lucide-react';
import { personalInfo, skills } from '../../data/portfolio';
import type { Skill } from '../../types';

const skillIcons = {
  design: Palette,
  tools: Award,
  soft: User
};

const SkillTag = ({ skill }: { skill: Skill }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="inline-block px-4 py-2 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 dark:from-cyan-500/30 dark:to-purple-500/30 text-cyan-700 dark:text-cyan-300 rounded-full text-sm font-semibold border border-cyan-300/50 dark:border-cyan-500/30 hover:border-cyan-500 dark:hover:border-cyan-400 hover:scale-105 hover:-translate-y-1 transition-all duration-200 backdrop-blur-sm"
    >
      {skill.name}
    </motion.div>
  );
};

export default function About() {
  const techStackGroups = [
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'ai', label: 'AI / Machine Learning' }
  ] as const;

  const skillCategories = {
    tech: skills.filter(s => s.category === 'tech'),
    design: skills.filter(s => s.category === 'design'),
    tools: skills.filter(s => s.category === 'tools'),
    soft: skills.filter(s => s.category === 'soft')
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-gray-50 to-white dark:from-[#0f1419] dark:via-[#1a1f2e] dark:to-[#0f1419] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -top-40 right-0 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 left-0 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About My Journey
          </motion.h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Computer Science graduate passionate about creating exceptional digital experiences
          </p>
        </motion.div>

        {/* Bio Section with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image with decorative elements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex justify-center relative"
          >
            {/* Floating background shapes */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 opacity-30 pointer-events-none"
            >
              <svg className="w-96 h-96" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="200" cy="200" r="180" stroke="url(#grad)" strokeWidth="2" strokeDasharray="10 5"/>
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4"/>
                    <stop offset="100%" stopColor="#a855f7"/>
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative w-80 h-80 rounded-3xl overflow-hidden shadow-2xl group"
              >
                <img
                  src="/Pagatpatan_11.jpg"
                  alt="About me"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/30 via-transparent to-purple-600/30"></div>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-cyan-500/80 to-purple-600/80 dark:from-cyan-500 dark:to-purple-600 p-6 rounded-2xl shadow-2xl glass-effect border border-cyan-300/50 dark:border-cyan-500/30"
              >
                <div className="text-2xl font-black text-gray-900 dark:text-white">Sylo</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass-effect px-4 py-2 rounded-full w-fit"
            >
              <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Who I am</span>
            </motion.div>

            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-semibold">
              {personalInfo.bio}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I specialize in creating responsive and user-friendly web interfaces while maintaining 
              basic backend capabilities for database management. My approach combines technical 
              expertise with a passion for solving real-world problems.
            </p>

          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Tech Stack */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Tech Stack</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {techStackGroups.map((group) => {
                  const groupSkills = skillCategories.tech.filter(skill => skill.group === group.key);

                  if (groupSkills.length === 0) {
                    return null;
                  }

                  return (
                    <motion.div
                      key={group.key}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.4 }}
                      className="space-y-4 p-6 rounded-2xl glass-effect hover:shadow-lg transition-all"
                    >
                      <p className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></span>
                        {group.label}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {groupSkills.map((skill) => (
                          <SkillTag key={skill.name} skill={skill} />
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Other Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['design', 'tools', 'soft'].map((category, categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                className="space-y-4"
              >
                <p className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <span className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg">
                    {React.createElement(skillIcons[category as keyof typeof skillIcons], {
                      className: "h-5 w-5 text-white"
                    })}
                  </span>
                  {category === 'design' ? 'Design' :
                   category === 'tools' ? 'Tools' : 'Soft Skills'}
                </p>
                <div className="p-6 rounded-2xl glass-effect hover:shadow-lg transition-all h-full">
                  <div className="flex flex-wrap gap-2">
                    {skillCategories[category as keyof typeof skillCategories].map((skill) => (
                      <SkillTag key={skill.name} skill={skill} />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}