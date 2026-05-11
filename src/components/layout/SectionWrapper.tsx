import { motion } from 'framer-motion'
import { type ReactNode } from 'react'

interface SectionWrapperProps {
  children: ReactNode
  id: string
}

const SectionWrapper = ({ children, id }: SectionWrapperProps) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-20"
    >
      {children}
    </motion.section>
  )
}

export default SectionWrapper
