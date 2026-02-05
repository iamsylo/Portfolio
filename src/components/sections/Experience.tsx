
import { motion } from 'framer-motion';
import { MapPin, Calendar, Trophy, ExternalLink } from 'lucide-react';
import { experiences } from '../../data/portfolio';

const ExperienceCard = ({ experience, index }: { experience: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="relative"
    >
      {/* Timeline line */}
      <div className="hidden md:block absolute left-6 top-16 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-600"></div>
      
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05 + 0.2, type: "spring", stiffness: 300 }}
        className="hidden md:block absolute left-4 top-8 w-5 h-5 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"
      />

      <div className="md:ml-16">
        <motion.div
          whileHover={{ y: -3 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="card"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {experience.title}
              </h3>
              <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium mb-2">
                <span>{experience.company}</span>
                <span className="mx-2">•</span>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {experience.location}
                </div>
              </div>
            </div>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <Calendar className="h-4 w-4 mr-1" />
              {experience.duration}
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {experience.description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {experience.skills.map((skill: string, skillIndex: number) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: skillIndex * 0.03, type: "spring", stiffness: 300 }}
                whileHover={{ scale: 1.08, y: -2 }}
                style={{ willChange: 'transform' }}
                className="px-3 py-1 bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-200 text-sm rounded-full"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          {/* Achievements */}
          <div className="space-y-2">
            <h4 className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300">
              <Trophy className="h-4 w-4 mr-2 text-primary-600 dark:text-primary-400" />
              Key Achievements
            </h4>
            <ul className="space-y-1">
              {experience.achievements.map((achievement: string, achievementIndex: number) => (
                <motion.li
                  key={achievementIndex}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: achievementIndex * 0.05, duration: 0.3 }}
                  className="text-sm text-gray-600 dark:text-gray-300 flex items-start"
                >
                  <span className="text-primary-600 dark:text-primary-400 mr-2 mt-1">•</span>
                  {achievement}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 gradient-bg dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Work Experience</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            My professional journey in software development and creative industries
          </p>
          <motion.div 
            className="w-20 h-1 bg-primary-600 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          ></motion.div>
        </motion.div>

        <div className="relative space-y-12">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Want to know more about my professional background?
          </p>
          <motion.a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="btn-primary inline-flex items-center"
          >
            <ExternalLink className="h-5 w-5 mr-2" />
            View Full Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}