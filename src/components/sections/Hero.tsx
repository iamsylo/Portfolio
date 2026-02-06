
import { motion } from 'framer-motion';
import { ChevronDown, Download, Github, Linkedin, Mail, Facebook, Instagram } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-[#020617]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orb 1 */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-20"
        />
        {/* Gradient orb 2 */}
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-purple-400 to-pink-500 rounded-full blur-3xl opacity-20"
        />
        {/* Gradient orb 3 */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-bl from-teal-400 to-cyan-500 rounded-full blur-3xl opacity-15"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Content - Left with diagonal background */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative py-8 sm:py-12 lg:py-0"
          >
            {/* Decorative background shape */}
            <div className="absolute -inset-8 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-3xl -z-1 hidden lg:block" 
              style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}
            />
            
            <div className="space-y-2 lg:space-y-3 relative">
              {/* Label */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
              </motion.div>

              {/* Main heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-2 sm:space-y-3"
              >
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">
                  Hi there! I'm
                </p>
                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight sm:leading-relaxed overflow-visible"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.3, type: "spring", stiffness: 100 }}
                >
                  <span className="block text-gray-900 dark:text-white">{personalInfo.name.split(' ').slice(0, 2).join(' ')}</span>
                  <span className="block bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent pb-1 sm:pb-3">
                    {personalInfo.name.split(' ').slice(2).join(' ')}
                  </span>
                </motion.h1>
              </motion.div>

              {/* Title and subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-2 sm:space-y-3 -mt-1 sm:-mt-2"
              >
                <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800 dark:text-gray-200">
                  {personalInfo.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
                  {personalInfo.subtitle}
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-3 pt-2 sm:pt-3"
              >
                <a
                  href="/Resume.pdf"
                  download
                  className="group btn-primary btn-hover-effect flex items-center justify-center gap-2 text-base hover:scale-[1.02] hover:-translate-y-1 active:scale-[0.98] transition-all duration-200"
                >
                  <Download className="h-5 w-5 group-hover:animate-bounce" />
                  Resume
                </a>
                <button
                  onClick={scrollToAbout}
                  className="btn-secondary flex items-center justify-center gap-2 text-base hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  Learn More
                  <ChevronDown className="h-5 w-5 group-hover:animate-bounce" />
                </button>
              </motion.div>

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex gap-3 sm:gap-4 pt-2 sm:pt-3"
              >
                {[
                  { Icon: Github, url: 'https://github.com/iamsylo', label: 'GitHub' },
                  { Icon: Linkedin, url: 'https://www.linkedin.com/in/christian-joseph-pagatpatan-971308381/', label: 'LinkedIn' },
                  { Icon: Facebook, url: 'https://www.facebook.com/iamsidyey', label: 'Facebook' },
                  { Icon: Instagram, url: 'https://www.instagram.com/sylo.jpg', label: 'Instagram' },
                  { Icon: Mail, url: 'mailto:' + personalInfo.email, label: 'Email' },
                ].map(({ Icon, url, label }) => (
                  <a
                    key={label}
                    href={url}
                    className="p-2 sm:p-3 glass-effect rounded-full hover:bg-gradient-to-br hover:from-cyan-400/20 hover:to-purple-400/20 hover:scale-110 hover:-translate-y-1 active:scale-90 transition-all duration-200"
                  >
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700 dark:text-gray-300" />
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Image - Right side with floating effect */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center items-center"
          >
            {/* Floating background shapes */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 opacity-20"
            >
              <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="200" cy="200" r="150" stroke="url(#grad1)" strokeWidth="2"/>
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4"/>
                    <stop offset="100%" stopColor="#a855f7"/>
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Image container */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <div
                className="relative w-64 sm:w-72 md:w-80 h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl hover:scale-105 hover:rotate-2 transition-all duration-300"
              >
                <img
                  src={personalInfo.avatar}
                  alt="Hero"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/20 via-transparent to-transparent"></div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 bg-gradient-to-br from-cyan-500/80 to-purple-600/80 dark:from-cyan-500 dark:to-purple-600 p-4 rounded-2xl shadow-2xl glass-effect border border-cyan-300/50 dark:border-cyan-500/30"
              >
                <div className="text-sm font-bold text-gray-900 dark:text-white">Developer</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-2 text-gray-700 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
          >
            <span className="text-sm font-semibold hidden sm:block">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="h-6 w-6" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}