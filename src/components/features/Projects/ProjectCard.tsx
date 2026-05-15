import { motion } from 'framer-motion'
import type { ProjectCardProps } from './project.types'
import ProjectImage from './ProjectImage'
import ProjectTags from './ProjectTags'

const ProjectCard = ({ project, variants }: ProjectCardProps) => {
  const { title, description, image, tags, github, demo } = project

  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -10 }}
      className="group bg-card hover:shadow-primary/5 relative flex flex-col overflow-hidden rounded-3xl border transition-all hover:shadow-2xl"
    >
      <ProjectImage image={image} title={title} github={github} demo={demo} />

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between">
          <span className="text-primary text-xs font-bold tracking-widest uppercase">
            {tags?.[0] ?? 'Web Dev'}
          </span>
        </div>

        <h3 className="mt-3 text-2xl font-bold">{title}</h3>

        <p className="text-muted-foreground mt-2 line-clamp-2 text-sm leading-relaxed">
          {description}
        </p>

        <ProjectTags tags={tags} />
      </div>
    </motion.div>
  )
}

export default ProjectCard
