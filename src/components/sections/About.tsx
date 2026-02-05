import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Palette, Camera, Award } from 'lucide-react';
import { personalInfo, skills } from '../../data/portfolio';

const skillIcons = {
  tech: Code,
  design: Palette,
  tools: Award,
  soft: User
};

const SkillTag = ({ skill }: { skill: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="inline-block px-3 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium border border-primary-200 dark:border-primary-800 hover:border-primary-400 dark:hover:border-primary-600 transition-all"
    >
      {skill.name}
    </motion.div>
  );
};

const SkillBar = ({ skill }: { skill: any }) => {
  const Icon = skillIcons[skill.category as keyof typeof skillIcons];
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex items-center space-x-4 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm dark:shadow-gray-700 hover:shadow-md dark:hover:shadow-gray-600 transition-shadow"
    >
      <div className="flex-shrink-0">
        <Icon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
      </div>
      <div className="flex-1">
        <div className="flex items-center">
          <span className="text-sm font-medium text-gray-900 dark:text-white">{skill.name}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default function About() {
  const techStackGroups = [
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'ai', label: 'AI / Machine Learning' },
    { key: 'devtools', label: 'Dev Tools' }
  ] as const;

  const skillCategories = {
    tech: skills.filter(s => s.category === 'tech'),
    design: skills.filter(s => s.category === 'design'),
    tools: skills.filter(s => s.category === 'tools'),
    soft: skills.filter(s => s.category === 'soft')
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-[#0f1419]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <motion.div 
            className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                whileHover={{ rotate: 2, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="/Pagatpatan_11.jpg"
                  alt="About me"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent"></div>
              </motion.div>
              <motion.div
                initial={{ scale: 0, rotate: -90 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                whileHover={{ rotate: 12, scale: 1.1 }}
                className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-full shadow-lg dark:shadow-gray-700"
              >
                <Camera className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {personalInfo.bio}
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              I specialize in creating responsive and user-friendly web interfaces while maintaining 
              basic backend capabilities for database management. My skill set extends to document 
              management and data entry, ensuring comprehensive digital solutions. I also have a 
              passion for photography and videography, bringing visual storytelling to complement 
              my technical abilities.
            </p>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-12 text-center">Skills & Expertise</h3>
          
          {/* Tech Stack Section */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                {React.createElement(skillIcons.tech, {
                  className: "h-5 w-5 mr-2 text-primary-600 dark:text-primary-400"
                })}
                Tech Stack
              </h4>
              
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
                      className="space-y-3"
                    >
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['design', 'tools', 'soft'].map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="space-y-4"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                  {React.createElement(skillIcons[category as keyof typeof skillIcons], {
                    className: "h-5 w-5 mr-2 text-primary-600 dark:text-primary-400"
                  })}
                  {category === 'design' ? 'Design' :
                   category === 'tools' ? 'Tools' : 'Soft Skills'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillCategories[category as keyof typeof skillCategories].map((skill) => (
                    <SkillTag key={skill.name} skill={skill} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}