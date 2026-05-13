import { motion, type Variants } from 'framer-motion'
import { useSanity } from '@/hooks/useSanity'
import { educationQuery } from '@/lib/sanity'
import type { EducationData } from './education.types'
import { SectionHeader } from '@/components/layout'

const Education = () => {
  const { data: education, loading } =
    useSanity<EducationData[]>(educationQuery)

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
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

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {[1, 2].map((i) => (
          <div key={i} className="bg-muted h-40 animate-pulse rounded-3xl" />
        ))}
      </div>
    )
  }

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
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        {education?.map((edu, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group bg-card hover:border-primary/50 hover:shadow-primary/5 relative flex flex-col justify-between rounded-3xl border p-8 transition-all hover:shadow-2xl"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-primary text-xs font-bold tracking-widest uppercase">
                  {edu.period}
                </span>
              </div>
              <div>
                <h3 className="text-2xl leading-tight font-bold">
                  {edu.school}
                </h3>
                {edu.major && (
                  <p className="text-muted-foreground text-lg font-medium">
                    {edu.major}
                  </p>
                )}
              </div>
            </div>

            {edu.description && (
              <p className="text-muted-foreground mt-6 text-sm leading-relaxed">
                {edu.description}
              </p>
            )}
          </motion.div>
        ))}
      </motion.div>
    </>
  )
}

export default Education
