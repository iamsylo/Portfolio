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
    <section id="contact" className="py-20 bg-[#e9e2d6] dark:bg-[#1c2922] relative overflow-hidden">
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
              <h3 className="text-3xl font-semibold text-[#315b4d] dark:text-[#d6e2d9] mb-4">
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
                className="flex items-center gap-4 p-5 bg-[#f4f0e8] dark:bg-[#202c26] border border-black/10 dark:border-white/10 rounded-md hover:shadow-lg transition-all group"
              >
                <div className="p-3 bg-[#315b4d] rounded-md group-hover:bg-[#b94b32] transition-colors">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">Email Me</p>
                  <p className="text-[#315b4d] dark:text-[#d6e2d9] font-medium">{contactInfo.email}</p>
                </div>
                <span className="text-gray-400 group-hover:text-[#b94b32] transition-colors">→</span>
              </motion.a>

              {contactInfo.phone && (
                <motion.a
                  href={`tel:${contactInfo.phone}`}
                  whileHover={{ x: 8, y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex items-center gap-4 p-5 bg-[#f4f0e8] dark:bg-[#202c26] border border-black/10 dark:border-white/10 rounded-md hover:shadow-lg transition-all group"
                >
                  <div className="p-3 bg-[#b94b32] rounded-md group-hover:bg-[#963b27] transition-colors">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">Call Me</p>
                    <p className="text-[#b94b32] dark:text-[#e37d62] font-medium">{contactInfo.phone}</p>
                  </div>
                  <span className="text-gray-400 group-hover:text-[#b94b32] transition-colors">→</span>
                </motion.a>
              )}

              <motion.div
                whileHover={{ x: 8, y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center gap-4 p-5 bg-[#f4f0e8] dark:bg-[#202c26] border border-black/10 dark:border-white/10 rounded-md group"
              >
                <div className="p-3 bg-[#8c6a3f] rounded-md">
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
                <span className="w-1.5 h-1.5 bg-[#b94b32] rounded-full"></span>
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
                      className="p-4 bg-[#f4f0e8] dark:bg-[#202c26] border border-black/10 dark:border-white/10 rounded-md hover:shadow-lg transition-all group"
                      whileHover={{ scale: 1.15, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08, type: "spring", stiffness: 300 }}
                      title={link.platform}
                    >
                      <Icon className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-[#b94b32] transition-colors" />
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