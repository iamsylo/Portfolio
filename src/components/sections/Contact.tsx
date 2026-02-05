import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Instagram, 
  Twitter,
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { contactInfo } from '../../data/portfolio';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: 'success' | 'error' | null;
  message: string;
}

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  twitter: Twitter
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>({
    type: null,
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: null, message: '' });

    try {
      // Build mailto link with encoded subject and body
      const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      );
      const mailto = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;

      // Open default mail client
      window.location.href = mailto;

      setFormStatus({
        type: 'success',
        message: `Your email client should open so you can send the message. If it doesn't, please email me at ${contactInfo.email}.`
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setFormStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-[#0f1419]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Ready to bring your ideas to life? Let's collaborate on your next project or creative endeavor.
          </p>
          <motion.div 
            className="w-20 h-1 bg-primary-600 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Whether you need a developer, photographer, or creative partner, 
                I'm here to help turn your vision into reality.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg"
              >
                <div className="bg-primary-600 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </motion.div>

              {contactInfo.phone && (
                <motion.div
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex items-center space-x-4 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg"
                >
                  <div className="bg-primary-600 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Phone</p>
                    <a 
                      href={`tel:${contactInfo.phone}`}
                      className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </motion.div>
              )}

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg"
              >
                <div className="bg-primary-600 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Location</p>
                  <p className="text-gray-600 dark:text-gray-400">{contactInfo.location}</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {contactInfo.socialLinks.map((link, index) => {
                  const Icon = socialIcons[link.icon as keyof typeof socialIcons];
                  return (
                    <motion.a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 dark:bg-gray-800 hover:bg-primary-600 text-gray-600 dark:text-gray-400 hover:text-white p-3 rounded-full transition-colors"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, type: "spring", stiffness: 300 }}
                    >
                      <Icon className="h-6 w-6" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Form Status */}
              {formStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center space-x-2 p-4 rounded-lg ${
                    formStatus.type === 'success' 
                      ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-700'
                      : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-700'
                  }`}
                >
                  {formStatus.type === 'success' ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <AlertCircle className="h-5 w-5" />
                  )}
                  <p>{formStatus.message}</p>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary inline-flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>


      </div>
    </section>
  );
}