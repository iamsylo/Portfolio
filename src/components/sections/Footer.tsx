
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { personalInfo, contactInfo } from '../../data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#0f1419] text-white border-t border-purple-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white">{personalInfo.name}</h3>
            <p className="text-gray-400 text-sm">
              Computer Science Graduate & Creative Professional specializing in 
              web development, photography, and visual design.
            </p>
            <div className="text-gray-400 text-sm">
              <p>{contactInfo.location}</p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Experience', href: '#experience' },
                { name: 'Projects', href: '#projects' },
                { name: 'Gallery', href: '#gallery' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-2">
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-gray-400 hover:text-primary-400 transition-colors text-sm block"
              >
                {contactInfo.email}
              </a>
              {contactInfo.phone && (
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm block"
                >
                  {contactInfo.phone}
                </a>
              )}
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              {contactInfo.socialLinks.map((social) => (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                  whileHover={{ scale: 1.2, y: -2 }}
                >
                  <span className="sr-only">{social.platform}</span>
                  <div className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              © {currentYear} {personalInfo.name}. All rights reserved.
            </motion.p>
            
            <motion.button
              onClick={scrollToTop}
              className="mt-4 sm:mt-0 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white p-2 rounded-full transition-colors shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}