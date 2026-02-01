import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Palette, Camera, Award } from 'lucide-react';
import { personalInfo, skills } from '../../data/portfolio';

const skillIcons = {
  programming: Code,
  design: Palette,
  tools: Award,
  soft: User
};

const SkillBar = ({ skill }: { skill: any }) => {
  const Icon = skillIcons[skill.category as keyof typeof skillIcons];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-center space-x-4 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm dark:shadow-gray-700 hover:shadow-md dark:hover:shadow-gray-600 transition-shadow"
    >
      <div className="flex-shrink-0">
        <Icon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium text-gray-900 dark:text-white">{skill.name}</span>
          <span className="text-xs text-gray-500 dark:text-gray-400">{skill.level}/5</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <motion.div
            className="bg-primary-600 dark:bg-primary-500 h-2 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${(skill.level / 5) * 100}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default function About() {
  const skillCategories = {
    programming: skills.filter(s => s.category === 'programming'),
    design: skills.filter(s => s.category === 'design'),
    tools: skills.filter(s => s.category === 'tools'),
    soft: skills.filter(s => s.category === 'soft')
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                whileHover={{ rotate: 5, scale: 1.05 }}
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
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-full shadow-lg dark:shadow-gray-700"
              >
                <Camera className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
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
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Skills & Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skillCategories).map(([category, categorySkills]) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white capitalize mb-4 flex items-center">
                  {React.createElement(skillIcons[category as keyof typeof skillIcons], {
                    className: "h-5 w-5 mr-2 text-primary-600 dark:text-primary-400"
                  })}
                  {category === 'programming' ? 'Programming' : 
                   category === 'design' ? 'Design' :
                   category === 'tools' ? 'Tools' : 'Soft Skills'}
                </h4>
                <div className="space-y-3">
                  {categorySkills.map((skill) => (
                    <SkillBar key={skill.name} skill={skill} />
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