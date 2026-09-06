import { motion } from 'framer-motion'
import { Github, Linkedin, Heart, Instagram, Twitter } from 'lucide-react'
import { footer, profile } from '../data/profile'

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <footer className="border-t border-dark-700/50 bg-dark-900/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gradient mb-2">{footer.name}</h3>
            <p className="text-dark-400 text-sm leading-relaxed">
              {footer.title}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-accent-300 mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Projects', 'Skills', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-dark-300 hover:text-accent-400 transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Socials */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-accent-300 mb-4">Connect</h4>
            <div className="flex gap-4">
              <motion.a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-300 hover:text-accent-400 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-300 hover:text-accent-400 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href={profile.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-300 hover:text-accent-400 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href={profile.socials.x}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-300 hover:text-accent-400 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter size={20} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-dark-700/50 my-8"></div>

        {/* Bottom */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <motion.p variants={itemVariants} className="text-dark-400 text-xs md:text-sm">
            {footer.copyright}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 text-dark-400 text-xs md:text-sm"
          >
            <span>Crafted with</span>
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <Heart size={14} className="text-accent-500" fill="currentColor" />
            </motion.div>
            <span>using React & Framer Motion</span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
