import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'
import { experience } from '../data/profile'

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-dark-800/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Experience</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-500 to-accent-600 rounded mb-12"></div>
        </motion.div>

        <div className="space-y-8">
          {experience.map((job, idx) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline line */}
              <div className="absolute left-2 md:left-4 top-8 bottom-0 w-0.5 bg-gradient-to-b from-accent-500 to-dark-600"></div>

              {/* Timeline dot */}
              <motion.div
                className="absolute left-0 md:left-0 top-6 w-6 h-6 bg-accent-500 rounded-full border-2 border-dark-900 cursor-pointer"
                whileHover={{ scale: 1.3, boxShadow: '0 0 20px rgba(14, 165, 233, 0.8)' }}
              />

              {/* Experience Card */}
              <motion.div
                className="card bg-dark-700/50 hover:bg-dark-700"
                whileHover={{ x: 8 }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-accent-300">
                      {job.position}
                    </h3>
                    <p className="text-dark-300 font-semibold mt-1">{job.company}</p>
                  </div>
                  {job.isCurrently && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="inline-block px-3 py-1 rounded-full bg-accent-500/20 border border-accent-500/50 text-accent-300 text-xs font-semibold"
                    >
                      Currently
                    </motion.span>
                  )}
                </div>

                <div className="flex flex-wrap gap-4 md:gap-6 text-dark-300 text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-accent-400" />
                    <span>{job.startDate}</span>
                  </div>
                  {job.endDate !== 'Present' && (
                    <div className="flex items-center gap-2">
                      <span>to</span>
                      <span>{job.endDate}</span>
                    </div>
                  )}
                </div>

                <p className="text-dark-200 leading-relaxed">
                  {job.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
