import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Instagram, 
  Facebook
} from 'lucide-react';
import { contactInfo } from '../../data/portfolio';

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  facebook: Facebook
};

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white via-gray-50 to-white dark:from-[#0f1419] dark:via-[#1a1f2e] dark:to-[#0f1419] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute -top-40 right-20 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 left-20 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl pointer-events-none"></div>

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
            Let's Connect
          </motion.h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ready to collaborate? Whether it's a project, a question, or just a friendly hello, I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-4">
                Get in Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Whether you need a developer, photographer, or creative partner, 
                I'm here to help turn your vision into reality.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <motion.a
                href={`mailto:${contactInfo.email}`}
                whileHover={{ x: 8, y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center gap-4 p-5 glass-effect rounded-2xl hover:shadow-lg transition-all group"
              >
                <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">Email Me</p>
                  <p className="text-cyan-600 dark:text-cyan-400 font-medium">{contactInfo.email}</p>
                </div>
                <span className="text-gray-400 group-hover:text-cyan-500 transition-colors">→</span>
              </motion.a>

              {contactInfo.phone && (
                <motion.a
                  href={`tel:${contactInfo.phone}`}
                  whileHover={{ x: 8, y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex items-center gap-4 p-5 glass-effect rounded-2xl hover:shadow-lg transition-all group"
                >
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">Call Me</p>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">{contactInfo.phone}</p>
                  </div>
                  <span className="text-gray-400 group-hover:text-purple-500 transition-colors">→</span>
                </motion.a>
              )}

              <motion.div
                whileHover={{ x: 8, y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center gap-4 p-5 glass-effect rounded-2xl group"
              >
                <div className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">Location</p>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">{contactInfo.location}</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></span>
                Connect With Me
              </h4>
              <div className="flex gap-3 flex-wrap">
                {contactInfo.socialLinks.map((link, index) => {
                  const Icon = socialIcons[link.icon as keyof typeof socialIcons];
                  return (
                    <motion.a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 glass-effect rounded-xl hover:shadow-lg hover:shadow-cyan-500/20 transition-all group"
                      whileHover={{ scale: 1.15, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08, type: "spring", stiffness: 300 }}
                      title={link.platform}
                    >
                      <Icon className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}