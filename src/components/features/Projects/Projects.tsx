import { motion, type Variants } from 'framer-motion'
import { useSanity } from '@/hooks/useSanity'
import { projectQuery } from '@/lib/sanity'
import type { ProjectData } from './project.types'
import ProjectCard from './ProjectCard'
import { SectionHeader } from '@/components/layout'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

const Projects = () => {
  const { data, loading } = useSanity<ProjectData[]>(projectQuery)

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="bg-muted aspect-video animate-pulse rounded-3xl"
          />
        ))}
      </div>
    )
  }

  return (
    <>
      <SectionHeader
        title="Featured Projects"
        subtitle="Seleksi karya terbaik dalam pengembangan web dan sistem."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 gap-8 md:grid-cols-2"
      >
        {data?.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            variants={cardVariants}
          />
        ))}
      </motion.div>
    </>
  )
}

export default Projects
