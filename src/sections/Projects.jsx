import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { projects } from '../data/profile'

const ProjectCard = ({ project, isFeatured, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ y: -8 }}
    viewport={{ once: true }}
    className={`group relative overflow-hidden rounded-xl border transition-all duration-300 ${
      isFeatured
        ? 'md:col-span-2 border-accent-500/50 bg-gradient-to-br from-dark-700 to-dark-800'
        : 'border-dark-700 bg-dark-800'
    } hover:border-accent-500`}
  >
    {/* Gradient background on hover */}
    <div className="absolute inset-0 bg-gradient-to-r from-accent-500/0 to-accent-600/0 group-hover:from-accent-500/5 group-hover:to-accent-600/5 transition-all duration-300"></div>

    {/* Content */}
    <div className="relative z-10 p-6 md:p-8 h-full flex flex-col">
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className={`font-bold text-accent-300 ${isFeatured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
              {project.name}
            </h3>
            <p className="text-dark-300 text-sm mt-1">{project.category}</p>
          </div>
          {project.featured && (
            <motion.span
              className="px-2 py-1 rounded text-xs font-semibold bg-accent-500/20 border border-accent-500/50 text-accent-300"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Featured
            </motion.span>
          )}
        </div>
      </div>

      {/* Description */}
      <p className={`text-dark-200 mb-4 leading-relaxed ${isFeatured ? '' : 'line-clamp-3'}`}>
        {project.description}
      </p>

      {/* Role and Status */}
      <div className="space-y-3 mb-6 text-sm">
        <div>
          <p className="text-dark-400 text-xs uppercase tracking-wide">Role</p>
          <p className="text-accent-200 font-semibold">{project.role}</p>
        </div>
        <div>
          <p className="text-dark-400 text-xs uppercase tracking-wide">Status</p>
          <p className="text-accent-200 font-semibold">{project.status}</p>
        </div>
      </div>

      {/* Technologies */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <motion.span
              key={tech}
              className="px-3 py-1 rounded-full text-xs font-semibold bg-dark-700 border border-dark-600 text-accent-300 hover:border-accent-500 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-grow"></div>

      {/* Links */}
      <div className="flex gap-3 pt-4 border-t border-dark-700">
        {project.github && (
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded text-sm font-semibold bg-dark-700 border border-dark-600 text-dark-200 hover:border-accent-500 hover:text-accent-400 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={16} />
            GitHub
          </motion.a>
        )}
        {project.demo && (
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded text-sm font-semibold bg-accent-500/20 border border-accent-500/50 text-accent-300 hover:bg-accent-500/30 hover:border-accent-500 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={16} />
            Demo
          </motion.a>
        )}
        {!project.github && !project.demo && (
          <p className="text-dark-400 text-sm italic">Learn more on demand</p>
        )}
      </div>
    </div>
  </motion.div>
)

export default function Projects() {
  const featuredProject = projects.find(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Featured Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-500 to-accent-600 rounded mb-12"></div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-dark-300 mb-12 text-lg"
        >
          Showcasing selected projects across startup development, AI/sustainability, and web technologies
        </motion.p>

        {/* Featured Project */}
        {featuredProject && (
          <div className="mb-12">
            <ProjectCard project={featuredProject} isFeatured={true} index={0} />
          </div>
        )}

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} isFeatured={false} index={idx + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
