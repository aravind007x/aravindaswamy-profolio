import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, Instagram, Twitter } from 'lucide-react'
import { profile } from '../data/profile'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('idle') // idle, success, error

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Frontend form structure - ready for backend integration
    // Supports: Formspree, EmailJS, Resend, etc.
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error')
      return
    }

    setStatus('idle')
    
    // Example: Using Formspree (uncomment and replace with your form ID)
    // fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //   method: 'POST',
    //   body: JSON.stringify(formData),
    //   headers: { 'Accept': 'application/json' }
    // })
    // .then(response => {
    //   if (response.ok) {
    //     setStatus('success')
    //     setFormData({ name: '', email: '', message: '' })
    //     setTimeout(() => setStatus('idle'), 3000)
    //   } else {
    //     setStatus('error')
    //   }
    // })
    // .catch(error => {
    //   console.error('Error:', error)
    //   setStatus('error')
    // })

    // For now, show success state
    setStatus('success')
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setStatus('idle'), 3000)
  }

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: profile.socials.email,
      href: `mailto:${profile.socials.email}`,
      external: false
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/aravind007x',
      href: profile.socials.github,
      external: true
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/aravind...',
      href: profile.socials.linkedin,
      external: true
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@aravind.ontext',
      href: profile.socials.instagram,
      external: true
    },
    {
      icon: Twitter,
      label: 'X (Twitter)',
      value: '@aravind_009',
      href: profile.socials.x,
      external: true
    }
  ]

  return (
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-dark-800/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Get In Touch</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-500 to-accent-600 rounded mb-12"></div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-dark-300 mb-12 text-lg"
        >
          Have an interesting project or opportunity? I'd love to hear from you. Feel free to reach out through any of these channels.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-4"
          >
            {contactMethods.map((method, idx) => {
              const Icon = method.icon
              return (
                <motion.a
                  key={idx}
                  href={method.href}
                  target={method.external ? '_blank' : '_self'}
                  rel={method.external ? 'noopener noreferrer' : ''}
                  className="card bg-dark-700/50 hover:bg-dark-700 flex items-center gap-4 group"
                  whileHover={{ x: 8 }}
                >
                  <div className="bg-accent-500/20 rounded-lg p-3">
                    <Icon className="text-accent-400 group-hover:text-accent-300 transition-colors" size={24} />
                  </div>
                  <div>
                    <p className="text-dark-400 text-xs uppercase tracking-wide font-semibold">
                      {method.label}
                    </p>
                    <p className="text-accent-300 font-semibold group-hover:text-accent-200 transition-colors">
                      {method.value}
                    </p>
                  </div>
                </motion.a>
              )
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-dark-200 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark-700/50 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all duration-300"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-dark-200 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark-700/50 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all duration-300"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-dark-200 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 bg-dark-700/50 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all duration-300 resize-none"
                placeholder="Tell me about your project or opportunity..."
                required
              />
            </div>

            {/* Status Messages */}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-lg bg-green-500/20 border border-green-500/30 text-green-300 text-sm"
              >
                ✓ Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-lg bg-red-500/20 border border-red-500/30 text-red-300 text-sm"
              >
                ✗ Please fill in all fields correctly.
              </motion.div>
            )}

            <motion.button
              type="submit"
              className="w-full btn btn-primary flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(14, 165, 233, 0.5)' }}
              whileTap={{ scale: 0.98 }}
            >
              <Send size={18} />
              Send Message
            </motion.button>

            {/* Form Info */}
            <p className="text-dark-400 text-xs text-center">
              Note: To enable email functionality, connect this form to Formspree, EmailJS, Resend, or another email service.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
