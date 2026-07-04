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

  // Refs for drag-to-scroll functionality
  const isDown = useRef(false)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeftVal = useRef(0)
  const dragStartPos = useRef({ x: 0, y: 0 })

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


  // Mouse drag scroll event handlers
  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current
    if (!container) return
    isDown.current = true
    isDragging.current = false
    dragStartPos.current = { x: e.clientX, y: e.clientY }
    startX.current = e.clientX
    scrollLeftVal.current = container.scrollLeft

    // Temporarily override smooth behavior & scroll snap for direct responsive drag
    container.style.scrollSnapType = 'none'
    container.style.scrollBehavior = 'auto'
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDown.current) return
    const container = containerRef.current
    if (!container) return

    const walk = (e.clientX - startX.current) * 1.5 // Drag sensitivity multiplier based on clientX

    const moveX = Math.abs(e.clientX - dragStartPos.current.x)
    const moveY = Math.abs(e.clientY - dragStartPos.current.y)

    // Only start drag scroll if moved past a threshold of 5 pixels
    if (moveX > 5 || moveY > 5) {
      isDragging.current = true
      container.scrollLeft = scrollLeftVal.current - walk
    }
  }, [])

  const handleMouseUp = useCallback(() => {
    isDown.current = false
    const container = containerRef.current
    if (container) {
      container.style.scrollSnapType = ''
      container.style.scrollBehavior = ''
    }
  }, [])

  const handleMouseLeave = useCallback(() => {
    isDown.current = false
    const container = containerRef.current
    if (container) {
      container.style.scrollSnapType = ''
      container.style.scrollBehavior = ''
    }
  }, [])

  // Block clicks on anchors/buttons inside cards during drag
  const handleClickCapture = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging.current) {
      e.preventDefault()
      e.stopPropagation()
    }
  }, [])

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

    const preventDefaultDrag = (e: DragEvent) => {
      e.preventDefault()
    }

    container.addEventListener('wheel', preventNavigation, { passive: false })
    container.addEventListener('dragstart', preventDefaultDrag)

    return () => {
      container.removeEventListener('wheel', preventNavigation)
      container.removeEventListener('dragstart', preventDefaultDrag)
    }
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
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onClickCapture={handleClickCapture}
        className="scrollbar-hide relative flex w-full touch-pan-x touch-pan-y snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain scroll-smooth py-10 select-none cursor-grab active:cursor-grabbing"
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
