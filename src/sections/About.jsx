import { motion } from 'framer-motion'
import { BookOpen, Target, Code2 } from 'lucide-react'
import { profile } from '../data/profile'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-dark-800/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-500 to-accent-600 rounded mb-12"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Bio Text */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-dark-200 leading-relaxed">
              {profile.bio}
            </p>

            {/* Education Card */}
            <motion.div
              className="card card-hover bg-dark-700/50"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <BookOpen className="text-accent-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-accent-300">Education</h3>
                  <p className="text-dark-300 mt-1">{profile.education.degree}</p>
                  <p className="text-dark-400 text-sm mt-1">{profile.education.institution}</p>
                  <p className="text-accent-500 text-sm font-medium mt-2">
                    Expected: {profile.education.graduation}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Interests Grid */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Code2, title: 'Full-Stack Development', desc: 'Building end-to-end solutions' },
                { icon: Target, title: 'Startup Thinking', desc: 'Turning ideas into products' },
                { icon: '🤖', title: 'AI/ML Exploration', desc: 'Understanding intelligent systems' },
                { icon: '🚀', title: 'Emerging Tech', desc: 'Exploring the future' }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="card bg-dark-700/50 p-4"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-2xl mb-2">
                    {typeof item.icon === 'string' ? item.icon : <item.icon className="text-accent-400" size={24} />}
                  </div>
                  <h4 className="font-semibold text-sm text-accent-300">{item.title}</h4>
                  <p className="text-xs text-dark-400 mt-1">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
