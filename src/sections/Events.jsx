import { motion } from 'framer-motion'
import { Award, Users, Lightbulb } from 'lucide-react'
import { events } from '../data/profile'

const EventCard = ({ event, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ y: -8 }}
    viewport={{ once: true }}
    className="card bg-dark-700/50 group"
  >
    {/* Gradient on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-accent-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

    <div className="relative z-10">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-accent-300">{event.name}</h3>
          <p className="text-dark-400 text-sm mt-1">{event.type}</p>
        </div>
        {event.quote && (
          <motion.div
            className="text-3xl"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ✨
          </motion.div>
        )}
      </div>

      {/* Organizer */}
      <div className="mb-3">
        <p className="text-dark-400 text-xs uppercase tracking-wide font-semibold">Organizer</p>
        <p className="text-dark-200 text-sm mt-1">{event.organizer}</p>
      </div>

      {/* Participation */}
      <div className="mb-3">
        <p className="text-dark-400 text-xs uppercase tracking-wide font-semibold">Participation</p>
        <span className="inline-block mt-1 px-3 py-1 rounded-full text-xs font-semibold bg-dark-800 border border-dark-600 text-accent-300">
          {event.participation}
        </span>
      </div>

      {/* Description */}
      <p className="text-dark-200 text-sm leading-relaxed mb-4">
        {event.description}
      </p>

      {/* Recognition */}
      <div className="pt-4 border-t border-dark-600">
        <p className="text-dark-400 text-xs uppercase tracking-wide font-semibold">Recognition</p>
        <p className="text-accent-200 font-semibold text-sm mt-1">{event.recognition}</p>
      </div>

      {/* Quote */}
      {event.quote && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 p-4 bg-accent-500/10 border border-accent-500/30 rounded-lg"
        >
          <p className="text-accent-300 italic font-semibold text-center">
            "{event.quote}"
          </p>
        </motion.div>
      )}
    </div>
  </motion.div>
)

export default function Events() {
  return (
    <section id="events" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Technical Events</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-500 to-accent-600 rounded mb-12"></div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-dark-300 mb-12 text-lg"
        >
          Participation and experience in national-level technical symposiums and events
        </motion.p>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {events.map((event, idx) => (
            <EventCard key={event.id} event={event} index={idx} />
          ))}
        </div>

        {/* Key Learning Section */}
        <motion.div
          className="card bg-gradient-to-r from-accent-500/20 to-accent-600/20 border border-accent-500/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <Lightbulb className="text-accent-400" size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-accent-300 mb-2">Key Takeaway</h3>
              <p className="text-dark-200">
                These events have been instrumental in developing technical skills, networking with peers, and gaining valuable experience in presenting ideas and collaborating with the broader technical community.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
