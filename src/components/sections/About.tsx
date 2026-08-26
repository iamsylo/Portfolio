import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Award, User } from 'lucide-react';
import { personalInfo, skills } from '../../data/portfolio';
import type { Skill } from '../../types';

const aboutAvatarSrcSet = [
  '/optimized/about-avatar-480.webp 480w',
  '/optimized/about-avatar-720.webp 720w',
  '/optimized/about-avatar-960.webp 960w'
].join(', ');

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
      className="inline-block px-4 py-2 bg-[#e9e2d6] dark:bg-white/10 text-[#315b4d] dark:text-[#d6e2d9] rounded-md text-sm font-semibold border border-black/10 dark:border-white/10 hover:border-[#b94b32] hover:scale-105 hover:-translate-y-1 transition-all duration-200"
    >
      {skill.name}
    </motion.div>
  );
};

export default function About() {
  const techStackGroups = [
    { key: 'frontend', label: 'Frontend', description: 'Interfaces that feel clear, quick, and easy to use.' },
    { key: 'backend', label: 'Backend', description: 'Reliable data flows and practical system foundations.' },
    { key: 'ai', label: 'AI / Machine Learning', description: 'Experiments that turn data into useful decisions.' }
  ] as const;

  const skillCategories = {
    tech: skills.filter(s => s.category === 'tech'),
    design: skills.filter(s => s.category === 'design'),
    tools: skills.filter(s => s.category === 'tools'),
    soft: skills.filter(s => s.category === 'soft')
  };

  const skillCategoryDetails = {
    design: { label: 'Design', description: 'Visual systems and content that make ideas easier to understand.' },
    tools: { label: 'Tools', description: 'A dependable working setup for organized, collaborative delivery.' },
    soft: { label: 'Soft Skills', description: 'Careful communication and problem solving from brief to handoff.' }
  } as const;

  return (
    <section id="about" className="py-20 bg-[#e9e2d6] dark:bg-[#1c2922] relative overflow-hidden">
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
            className="text-5xl sm:text-6xl font-semibold text-[#1d2924] dark:text-[#f4f0e8] mb-4"
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
                <circle cx="200" cy="200" r="180" stroke="#b94b32" strokeWidth="2" strokeDasharray="10 5"/>
                <defs>
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
                  src="/optimized/about-avatar.webp"
                  srcSet={aboutAvatarSrcSet}
                  sizes="(max-width: 1024px) 70vw, 320px"
                  alt="About me"
                  width={960}
                  height={960}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute hidden sm:flex -bottom-6 -right-6 bg-[#b94b32] p-6 rounded-md shadow-lg border border-[#963b27]"
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
              className="inline-flex items-center gap-2 bg-[#f4f0e8] dark:bg-white/10 border border-black/10 dark:border-white/10 px-4 py-2 rounded-md w-fit"
            >
              <span className="w-2 h-2 bg-[#b94b32] rounded-full"></span>
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
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-black/10 dark:border-white/10 pb-5">
                <div className="p-3 bg-[#315b4d] rounded-md">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <div className="sm:mr-auto sm:ml-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#b94b32] font-semibold">Capabilities / 01</p>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Tech Stack</h3>
                </div>
                <p className="max-w-sm text-sm text-gray-600 dark:text-gray-400">A practical toolkit for taking an idea from first sketch to working product.</p>
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
                      className="space-y-4 p-6 rounded-md bg-[#f4f0e8] dark:bg-[#202c26] border border-black/10 dark:border-white/10 hover:shadow-lg transition-all"
                    >
                      <div>
                        <p className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#b94b32] rounded-full"></span>
                        {group.label}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{group.description}</p>
                      </div>
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {['design', 'tools', 'soft'].map((category, categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                className="space-y-4"
              >
                <div>
                  <p className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <span className="p-2 bg-[#315b4d] rounded-md">
                    {React.createElement(skillIcons[category as keyof typeof skillIcons], {
                      className: "h-5 w-5 text-white"
                    })}
                  </span>
                  {skillCategoryDetails[category as keyof typeof skillCategoryDetails].label}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{skillCategoryDetails[category as keyof typeof skillCategoryDetails].description}</p>
                </div>
                <div className="p-6 rounded-md bg-[#f4f0e8] dark:bg-[#202c26] border border-black/10 dark:border-white/10 hover:shadow-lg transition-all">
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