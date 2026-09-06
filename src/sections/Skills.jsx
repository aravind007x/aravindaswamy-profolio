import { motion } from 'framer-motion'
import { skills } from '../data/profile'

const SkillCard = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    whileHover={{ y: -8, scale: 1.05 }}
    viewport={{ once: true }}
    className="group relative"
  >
    <div className="card bg-gradient-to-br from-dark-700 to-dark-800 border border-dark-600 hover:border-accent-500 cursor-pointer overflow-hidden">
      {/* Gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-500/0 to-accent-500/0 group-hover:from-accent-500/10 group-hover:to-accent-600/10 transition-all duration-300"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center py-6 px-4 text-center">
        <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
          {skill.icon}
        </div>
        <h3 className="font-semibold text-lg text-white group-hover:text-accent-300 transition-colors duration-300">
          {skill.name}
        </h3>
      </div>
    </div>
  </motion.div>
)

const SkillCategory = ({ category, skills: skillList, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-2xl font-bold text-accent-300">{category}</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skillList.map((skill, idx) => (
          <SkillCard key={idx} skill={skill} index={idx} />
        ))}
      </div>
    </div>
  </motion.div>
)

export default function Skills() {
  const categories = [
    { name: 'Frontend', skills: skills.frontend, icon: '🎨' },
    { name: 'Backend', skills: skills.backend, icon: '⚙️' },
    { name: 'Databases', skills: skills.databases, icon: '🗄️' },
    { name: 'Programming', skills: skills.programming, icon: '💻' },
    { name: 'APIs & Tools', skills: skills.apis, icon: '🔗' },
    { name: 'Version Control', skills: skills.tools, icon: '🔀' },
    { name: 'Mobile', skills: skills.mobile, icon: '📱' },
    { name: 'Emerging Tech', skills: skills.other, icon: '🌌' }
  ]

  return (
    <section id="skills" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Technical Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-500 to-accent-600 rounded mb-12"></div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-dark-300 mb-12 text-lg"
        >
          A comprehensive toolkit across frontend, backend, databases, and emerging technologies
        </motion.p>

        <div className="space-y-16">
          {categories.map((cat) => (
            <SkillCategory key={cat.name} category={cat.name} skills={cat.skills} icon={cat.icon} />
          ))}
        </div>
      </div>
    </section>
  )
}
