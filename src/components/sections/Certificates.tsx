
import { motion } from 'framer-motion';
import { ExternalLink, Calendar } from 'lucide-react';
import { certificates } from '../../data/portfolio';
import type { Certificate } from '../../types';

const CertificateCard = ({ certificate, index }: { certificate: Certificate, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="card"
    >
      {certificate.image && (
        <div className="mb-4">
          <img
            src={certificate.image}
            alt={`${certificate.title} certificate`}
            className="w-full h-32 object-cover rounded-lg"
          />
        </div>
      )}
      
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{certificate.title}</h3>
        <p className="text-[#315b4d] dark:text-[#d6e2d9] font-medium">{certificate.issuer}</p>
        
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <Calendar className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
          {new Date(certificate.issueDate).toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric'
          })}
        </div>

        <div className="flex flex-wrap gap-1">
          {certificate.skills.map((skill: string) => (
            <span
              key={skill}
              className="px-2 py-1 bg-[#e9e2d6] dark:bg-white/10 text-[#315b4d] dark:text-[#d6e2d9] text-xs rounded border border-black/10 dark:border-white/10"
            >
              {skill}
            </span>
          ))}
        </div>

        {certificate.credentialUrl && (
          <motion.a
            href={certificate.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#315b4d] dark:text-[#d6e2d9] hover:text-[#b94b32] dark:hover:text-[#e37d62] text-sm font-medium transition-colors"
            whileHover={{ x: 5 }}
          >
            <ExternalLink className="h-4 w-4 mr-1" />
            Verify Certificate
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default function Certificates() {
  return (
    <section className="py-20 bg-[#e9e2d6] dark:bg-[#1c2922]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Certificates & Achievements</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Professional certifications and achievements that showcase my commitment to continuous learning
          </p>
          <div className="w-20 h-px bg-[#b94b32] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}