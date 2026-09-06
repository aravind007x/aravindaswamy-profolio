import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'
import { certifications } from '../data/profile'

const CertCard = ({ cert, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -8, scale: 1.05 }}
    viewport={{ once: true }}
    className="card bg-gradient-to-br from-dark-700 to-dark-800 border border-dark-600 hover:border-accent-500 group"
  >
    <div className="flex flex-col items-center text-center h-full">
      {/* Icon/Badge */}
      <motion.div
        className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
      >
        {cert.icon}
      </motion.div>

      {/* Name */}
      <h3 className="text-lg font-bold text-accent-300 mb-2 group-hover:text-accent-200 transition-colors">
        {cert.name}
      </h3>

      {/* Issuer */}
      <p className="text-dark-400 text-sm mb-3">{cert.issuer}</p>

      {/* Description */}
      {cert.description && (
        <p className="text-dark-200 text-sm mb-4 line-clamp-2">
          {cert.description}
        </p>
      )}

      {/* Date */}
      <p className="text-dark-400 text-xs mb-4">{cert.date}</p>

      {/* Spacer */}
      <div className="flex-grow"></div>

      {/* Button */}
      {cert.certificateUrl ? (
        <motion.a
          href={cert.certificateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full btn btn-secondary text-sm flex items-center justify-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ExternalLink size={16} />
          View Certificate
        </motion.a>
      ) : (
        <motion.div
          className="w-full px-3 py-2 rounded-lg text-sm font-semibold bg-dark-700 border border-dark-600 text-dark-400 cursor-default"
        >
          Certificate Link
        </motion.div>
      )}
    </div>
  </motion.div>
)

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-dark-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Certifications & Badges
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-500 to-accent-600 rounded mb-12"></div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-dark-300 mb-12 text-lg"
        >
          Professional certifications demonstrating expertise in AI, cloud technologies, and modern databases
        </motion.p>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <CertCard key={cert.id} cert={cert} index={idx} />
          ))}
        </div>

        {/* Info Box */}
        <motion.div
          className="mt-12 card bg-gradient-to-r from-accent-500/10 to-accent-600/10 border border-accent-500/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-3">
            <Award className="text-accent-400 flex-shrink-0" size={24} />
            <div>
              <h3 className="font-semibold text-accent-300 mb-2">
                Continuous Learning
              </h3>
              <p className="text-dark-200 text-sm">
                I am committed to continuous learning and staying updated with emerging technologies. Additional certificates and badges can be added as they are earned. Links can be easily updated in the configuration.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
