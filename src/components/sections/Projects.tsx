import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code, Smartphone, Monitor, Brain, Filter, ArrowRight } from 'lucide-react';
import { projects } from '../../data/portfolio';
import type { Project } from '../../types';

const responsiveProjectImages: Record<string, { srcSet: string; sizes: string }> = {
  '/optimized/portfolio.webp': {
    srcSet: [
      '/optimized/portfolio-480.webp 480w',
      '/optimized/portfolio-768.webp 768w',
      '/optimized/portfolio-1200.webp 1200w'
    ].join(', '),
    sizes: '(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw'
  },
  '/optimized/dts.webp': {
    srcSet: [
      '/optimized/dts-480.webp 480w',
      '/optimized/dts-768.webp 768w',
      '/optimized/dts-1200.webp 1200w'
    ].join(', '),
    sizes: '(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw'
  },
  '/optimized/pilipinas.webp': {
    srcSet: [
      '/optimized/pilipinas-360.webp 360w',
      '/optimized/pilipinas-540.webp 540w',
      '/optimized/pilipinas-900.webp 900w'
    ].join(', '),
    sizes: '(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw'
  }
};

const categoryIcons = {
  web: Monitor,
  mobile: Smartphone,
  desktop: Monitor,
  ai: Brain,
  other: Code
};

const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
  const Icon = categoryIcons[project.category as keyof typeof categoryIcons];
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative rounded-2xl overflow-hidden bg-gray-900 dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-200 cursor-pointer h-80"
      style={{ perspective: '1200px', willChange: 'transform' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute inset-0 transition-transform duration-500 ease-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: isHovered ? 'rotateY(180deg)' : 'rotateY(0deg)',
          willChange: 'transform'
        }}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={project.image}
              srcSet={responsiveProjectImages[project.image]?.srcSet}
              sizes={responsiveProjectImages[project.image]?.sizes}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-300"
              style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          </div>

          <div className="absolute inset-0 p-6 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="inline-flex">
                <div className="bg-white/20 backdrop-blur-md p-3 rounded-full group-hover:bg-white/30 transition-all">
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
              {project.featured && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold"
                >
                  Featured
                </motion.div>
              )}
            </div>

            <div className="space-y-3">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-200 text-sm line-clamp-2">{project.description}</p>
              </div>

              <motion.div
                className="self-end"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="h-5 w-5 text-white/80" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="h-full w-full p-6 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-gray-800/95 text-white">
            <div className="flex flex-col h-full gap-4">
              <div>
                <p className="text-xs uppercase tracking-wide text-cyan-300">{project.category}</p>
                <h3 className="text-2xl font-bold">{project.title}</h3>
              </div>

              <div className="flex-1 overflow-y-auto pr-1 space-y-3">
                <p className="text-gray-200 text-sm">{project.longDescription}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/15 backdrop-blur-sm text-white text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-1">
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/15 hover:bg-white/25 text-white rounded-lg transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </motion.a>
                )}
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-lg transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};


export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const categories = [
    { value: 'all', label: 'All Projects', icon: Code },
    { value: 'web', label: 'Web Apps', icon: Monitor },
    { value: 'mobile', label: 'Mobile Apps', icon: Smartphone }
  ];

  const filterProjects = (category: string) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-[#0f1419]">
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
            className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Featured Works
          </motion.h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcasing projects that demonstrate my full-stack capabilities and creative solutions
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.value}
                onClick={() => filterProjects(category.value)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold transition-all ${
                  selectedCategory === category.value
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20'
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, type: "spring", stiffness: 300 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="h-4 w-4" />
                {category.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Projects Grid - Masonry Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* All Projects Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Filter className="h-16 w-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400 text-lg">No projects found in this category.</p>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-20"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="inline-flex items-center gap-3 glass-effect px-6 py-3 rounded-full">
              <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Want to collaborate?
              </span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary btn-hover-effect inline-flex items-center gap-2 text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}