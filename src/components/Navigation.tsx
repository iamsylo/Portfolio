import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Award, Camera, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Projects', href: '#projects', icon: Award },
  { name: 'Gallery', href: '#gallery', icon: Camera },
  { name: 'Contact', href: '#contact', icon: Mail }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.slice(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 dark:bg-[#0f1419]/90 backdrop-blur-xl shadow-lg shadow-cyan-500/10'
            : 'bg-white/50 dark:bg-[#0f1419]/50 backdrop-blur-lg'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0 flex items-center gap-3 group cursor-pointer"
            >
              <div
                role="img"
                aria-label="Logo"
                className="h-20 w-20 sm:h-24 sm:w-24 bg-gradient-to-r from-cyan-500 to-blue-600"
                style={{
                  WebkitMaskImage: "url('/sylo.svg')",
                  maskImage: "url('/sylo.svg')",
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskPosition: 'center',
                  WebkitMaskSize: 'contain',
                  maskSize: 'contain'
                }}
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex items-baseline gap-2">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.href.slice(1);
                  
                  return (
                    <motion.button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="relative group"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <div className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                        isActive
                          ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20'
                          : 'hover:bg-white/50 dark:hover:bg-white/10'
                      }`}>
                        <Icon className={`h-4 w-4 transition-colors ${
                          isActive 
                            ? 'text-cyan-600' 
                            : 'text-gray-700 dark:text-gray-300 group-hover:text-cyan-600'
                        }`} />
                        <span className={`text-sm font-semibold transition-colors ${
                          isActive
                            ? 'text-cyan-600 dark:text-cyan-400'
                            : 'text-gray-700 dark:text-gray-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400'
                        }`}>
                          {item.name}
                        </span>
                      </div>
                      
                      {/* Animated underline */}
                      {isActive && (
                        <motion.div
                          layoutId="navUnderline"
                          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>
              
              {/* Theme Toggle Button */}
              <motion.button
                onClick={toggleTheme}
                className="p-2.5 rounded-lg bg-white/50 dark:bg-white/10 hover:bg-white/70 dark:hover:bg-white/20 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all"
                whileHover={{ scale: 1.1, rotate: 20 }}
                whileTap={{ scale: 0.95 }}
                title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </motion.button>
            </div>

            {/* Mobile Navigation Controls */}
            <div className="md:hidden flex items-center gap-2">
              {/* Mobile Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-white/10 transition-all"
                whileTap={{ scale: 0.95 }}
                title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </motion.button>
              
              {/* Mobile menu button */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-white/10 transition-all"
                whileTap={{ scale: 0.95 }}
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 dark:bg-[#0f1419]/95 backdrop-blur-xl border-t border-gray-200 dark:border-gray-700/50 shadow-lg"
            >
              <div className="px-4 pt-3 pb-4 space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.href.slice(1);
                  
                  return (
                    <motion.button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={`w-full flex items-center px-4 py-3 rounded-lg font-semibold transition-all ${
                        isActive
                          ? 'bg-gradient-to-r from-cyan-500/30 to-purple-500/30 text-cyan-600 dark:text-cyan-400'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-white/10 hover:text-cyan-600 dark:hover:text-cyan-400'
                      }`}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Icon className="h-5 w-5 mr-3" />
                      {item.name}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Animated scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 z-50"
        style={{
          scaleX: scrolled ? 1 : 0,
          transformOrigin: '0%'
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrolled ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
    </>
  );
}