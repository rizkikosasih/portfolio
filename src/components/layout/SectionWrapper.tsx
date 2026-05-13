import { motion } from 'framer-motion'
import { type ReactNode } from 'react'

interface SectionWrapperProps {
  children: ReactNode
  id: string
  className?: string
}

const SectionWrapper = ({ id, children, className }: SectionWrapperProps) => {
  return (
    <section id={id} className={`relative py-24 ${className || ''}`}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto max-w-7xl px-6"
      >
        {children}
      </motion.div>
    </section>
  )
}

export default SectionWrapper
