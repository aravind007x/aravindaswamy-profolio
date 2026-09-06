import { motion } from 'framer-motion'
import { Trophy, Users, Clock, Target } from 'lucide-react'
import { hackathon } from '../data/profile'

export default function Achievements() {
  const achievements = [
    { icon: Trophy, label: 'Hackathon', value: hackathon.name },
    { icon: Target, label: 'Type', value: hackathon.type },
    { icon: Clock, label: 'Duration', value: hackathon.duration },
    { icon: Users, label: 'Team Size', value: `${hackathon.teamSize} members` }
  ]

  return (
    <section id="achievements" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-dark-800/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Hackathon Experience</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-500 to-accent-600 rounded mb-12"></div>
        </motion.div>

        {/* Hackathon Info Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={idx}
                className="card bg-dark-700/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-accent-500/20 rounded-lg p-3">
                    <Icon className="text-accent-400" size={24} />
                  </div>
                  <div>
                    <p className="text-dark-400 text-sm uppercase tracking-wide font-semibold">
                      {achievement.label}
                    </p>
                    <p className="text-lg font-bold text-accent-300 mt-1">
                      {achievement.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Team Info */}
        <motion.div
          className="card bg-gradient-to-r from-dark-700 to-dark-800 border border-dark-600/50 mb-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ x: 5 }}
          viewport={{ once: true }}
        >
          <div className="mb-4">
            <p className="text-dark-400 text-xs uppercase tracking-wide font-semibold">Team</p>
            <p className="text-xl font-bold text-accent-300 mt-1">{hackathon.team}</p>
          </div>
          <p className="text-dark-200">
            Team of {hackathon.teamSize} dedicated members working collaboratively on an innovative solution.
          </p>
        </motion.div>

        {/* Progress Badge */}
        <motion.div
          className="card bg-gradient-to-r from-accent-500/20 to-accent-600/20 border border-accent-500/30 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-dark-400 text-xs uppercase tracking-wide font-semibold">Achievement</p>
              <p className="text-xl md:text-2xl font-bold text-accent-300 mt-1">{hackathon.progress}</p>
            </div>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-4xl"
            >
              🏆
            </motion.div>
          </div>
        </motion.div>

        {/* Experience Description */}
        <motion.div
          className="card bg-dark-700/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-accent-300 mb-4">Experience Highlights</h3>
          <p className="text-dark-200 leading-relaxed">
            {hackathon.description}
          </p>
          <div className="mt-6 p-4 bg-dark-800/50 border border-dark-600 rounded-lg">
            <p className="text-accent-300 italic font-semibold">
              "A 36-hour intense journey of innovation, collaboration, and rapid problem-solving."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
