import { motion } from 'framer-motion'
import type { ProjectCardProps } from './project.types'
import ProjectImage from './ProjectImage'
import ProjectTags from './ProjectTags'
import ProjectActions from './ProjectActions'

const ProjectCard = ({ project, variants }: ProjectCardProps) => {
  const { title, description, image, tags, github, demo } = project

  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -10 }}
      className="group bg-card hover:border-primary/50 hover:shadow-primary/10 flex h-125 flex-col overflow-hidden rounded-[2rem] border transition-all duration-500 hover:shadow-2xl"
    >
      <ProjectImage image={image} title={title} github={github} demo={demo} />

      <div className="flex flex-1 flex-col p-8">
        <div className="flex items-center justify-between gap-4">
          <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase">
            {tags?.[0] ?? 'Web Development'}
          </span>

          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <ProjectActions github={github} demo={demo} />
          </div>
        </div>

        <h3 className="mt-3 text-xl font-bold tracking-tight md:text-2xl">
          {title}
        </h3>

        <p className="text-muted-foreground mt-4 line-clamp-3 text-sm leading-relaxed">
          {description}
        </p>

        <div className="mt-auto pt-6">
          <ProjectTags tags={tags} />
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
