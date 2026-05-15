import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useSanity } from '@/hooks'
import { experienceQuery } from '@/lib/sanity'
import type { ExperienceData } from './experience.types'
import { SectionHeader } from '@/components/layout'
import { ExperienceItem } from './ExperienceItem'

const Experience = () => {
  const { data, loading } = useSanity<ExperienceData[]>(experienceQuery)

  const [activeId, setActiveId] = useState<string | null>(null)
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({})

  const hasInitialized = useRef(false)

  useEffect(() => {
    if (!data?.length) return
    if (hasInitialized.current) return

    setActiveId(data[0]._id)
    hasInitialized.current = true
  }, [data])

  const handleToggle = (id: string) => {
    setActiveId((prev) => {
      const next = prev === id ? null : id

      if (next && itemRefs.current[next]) {
        itemRefs.current[next]?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }

      return next
    })
  }

  if (loading) {
    return (
      <div className="space-y-6">
        {[1, 2].map((i) => (
          <div key={i} className="bg-muted h-32 animate-pulse rounded-3xl" />
        ))}
      </div>
    )
  }

  return (
    <>
      <SectionHeader
        title="Work Experience"
        subtitle="Perjalanan saya sebagai developer"
      />
      <div className="relative space-y-4">
        <div className="bg-border/40 absolute top-0 left-6 hidden h-full w-px md:block" />

        {data?.map((exp, index) => (
          <motion.div
            key={exp._id}
            ref={(el) => {
              itemRefs.current[exp._id] = el
            }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
          >
            <ExperienceItem
              data={exp}
              isActive={activeId === exp._id}
              onToggle={() => handleToggle(exp._id)}
            />
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default Experience
