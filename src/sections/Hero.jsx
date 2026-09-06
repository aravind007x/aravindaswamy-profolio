import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Instagram, Twitter, Mail } from 'lucide-react'
import { profile } from '../data/profile'

// Keep public assets working when deployed under Vite's configured base path.
const profileImage = `${import.meta.env.BASE_URL}profile.jpg`

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Left side - Text */}
          <motion.div variants={itemVariants} className="space-y-8"
        >
            {/* Main heading */}
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-gradient">{profile.name}</span>
              </motion.h1>
            </motion.div>

            {/* Subtitle with roles */}
            <motion.div variants={itemVariants} className="space-y-3">
              <p className="text-lg md:text-xl text-dark-200 font-medium">
                {profile.title}
              </p>
              <div className="flex flex-wrap gap-3 text-accent-400 font-semibold text-base md:text-lg">
                <span className="px-3 py-1 rounded-full border border-accent-500/30 bg-accent-500/10">
                  {profile.subtitle}
                </span>
                <span className="px-3 py-1 rounded-full border border-accent-500/30 bg-accent-500/10">
                  {profile.role}
                </span>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-dark-300 text-lg leading-relaxed"
            >
              {profile.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.a
                href="#projects"
                className="btn btn-primary"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(14, 165, 233, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#about"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                About Me
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-6 pt-2">
              <motion.a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-300 hover:text-accent-400 transition-colors duration-300"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.95 }}
                title="GitHub"
              >
                <Github size={28} />
              </motion.a>
              <motion.a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-300 hover:text-accent-400 transition-colors duration-300"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.95 }}
                title="LinkedIn"
              >
                <Linkedin size={28} />
              </motion.a>
              <motion.a
                href={profile.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-300 hover:text-accent-400 transition-colors duration-300"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.95 }}
                title="Instagram"
              >
                <Instagram size={28} />
              </motion.a>
              <motion.a
                href={profile.socials.x}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-300 hover:text-accent-400 transition-colors duration-300"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.95 }}
                title="X (Twitter)"
              >
                <Twitter size={28} />
              </motion.a>
              <motion.a
                href={`mailto:${profile.socials.email}`}
                className="text-dark-300 hover:text-accent-400 transition-colors duration-300"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.95 }}
                title="Email"
              >
                <Mail size={28} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:flex justify-center items-center"
          >
            <div className="relative w-80 h-96">
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/20 to-accent-600/20 rounded-3xl blur-2xl"></div>
              
              {/* Image container */}
              <motion.div
                className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-accent-500/30 hover:border-accent-500/60 transition-colors duration-300"
                whileHover={{ boxShadow: '0 0 40px rgba(14, 165, 233, 0.4)' }}
              >
                <img
                  src={profileImage}
                  alt="ARAVINDASWAMY"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextElementSibling.style.display = 'flex'
                  }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/40 via-transparent to-transparent"></div>
                
                {/* Fallback Avatar */}
                <div
                  style={{ display: 'none' }}
                  className="absolute inset-0 bg-gradient-to-br from-accent-500/30 to-accent-600/30 flex items-center justify-center"
                >
                  <div className="text-center">
                    <div className="text-7xl font-bold text-accent-300 mb-2">A</div>
                    <p className="text-dark-300 text-sm">Profile Photo</p>
                    <p className="text-dark-400 text-xs mt-2">Add profile.jpg to /public</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={32} className="text-accent-400/50" />
        </motion.div>
      </div>
    </section>
  )
}
