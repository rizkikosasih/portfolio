import { useState, useRef, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useSanity } from '@/hooks/useSanity'
import { projectQuery } from '@/lib/sanity'
import { SectionHeader } from '@/components/layout'

import type { ProjectData } from './project.types'
import { containerVariants, cardVariants } from './project.variants'

import ProjectCard from './ProjectCard'
import ProjectSkeleton from './ProjectSkeleton'
import ProjectIndicators from './ProjectIndicators'

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { data, loading } = useSanity<ProjectData[]>(projectQuery)

  const totalItems = data?.length || 0

  const handleScroll = useCallback(() => {
    const container = containerRef.current
    if (!container || totalItems === 0) return

    const { scrollLeft, scrollWidth, offsetWidth } = container

    const isAtEnd = scrollLeft + offsetWidth >= scrollWidth - 10
    if (isAtEnd) {
      setActiveIndex(totalItems - 1)
      return
    }

    const itemWidth = container.querySelector('div')?.offsetWidth || 0
    const gap = 24
    const index = Math.round(scrollLeft / (itemWidth + gap))

    if (index >= 0 && index < totalItems) {
      setActiveIndex(index)
    }
  }, [totalItems])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const preventNavigation = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        const { scrollLeft, scrollWidth, offsetWidth } = container
        const isAtStart = scrollLeft <= 0 && e.deltaX < 0
        const isAtEnd = scrollLeft + offsetWidth >= scrollWidth && e.deltaX > 0

        if (isAtStart || isAtEnd) e.preventDefault()
      }
    }

    container.addEventListener('wheel', preventNavigation, { passive: false })
    return () => container.removeEventListener('wheel', preventNavigation)
  }, [totalItems])

  if (loading) return <ProjectSkeleton />

  return (
    <section className="space-y-10">
      <SectionHeader
        title="Featured Projects"
        subtitle="Seleksi karya terbaik dalam pengembangan web dan sistem."
      />

      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        onScroll={handleScroll}
        className="scrollbar-hide relative flex w-full touch-pan-x touch-pan-y snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain scroll-smooth py-10"
      >
        {data?.map((project) => (
          <div
            key={project.title}
            className="w-[75vw] shrink-0 snap-center sm:w-[48vw] md:w-[40vw] lg:w-[31%] xl:w-[30%]"
          >
            <ProjectCard project={project} variants={cardVariants} />
          </div>
        ))}
      </motion.div>

      <ProjectIndicators total={totalItems} activeIndex={activeIndex} />
    </section>
  )
}

export default Projects
