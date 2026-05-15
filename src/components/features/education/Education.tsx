import { motion, type Variants } from 'framer-motion'
import { useSanity } from '@/hooks/useSanity'
import { educationQuery } from '@/lib/sanity'
import type { EducationData } from './education.types'
import { SectionHeader } from '@/components/layout'

import EducationCard from './EducationCard'
import EducationSkeleton from './EducationSkeleton'

const Education = () => {
  const { data: education, loading } = useSanity<EducationData[]>(educationQuery)

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  if (loading) return <EducationSkeleton />

  return (
    <>
      <SectionHeader
        title="Education"
        subtitle="Latar belakang akademik dan kualifikasi formal."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} // Performance guard
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        {/* Optional Chaining pada array utama */}
        {education?.map((edu, index) => (
          <EducationCard
            key={edu._id ?? index}
            edu={edu}
            variants={itemVariants}
          />
        ))}
      </motion.div>
    </>
  )
}

export default Education
