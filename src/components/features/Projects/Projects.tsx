import { motion, type Variants } from 'framer-motion'
import { useSanity } from '@/hooks/useSanity'
import { projectQuery, urlFor } from '@/lib/sanity'
import type { ProjectData } from './project.types'

const Projects = () => {
  const { data, loading } = useSanity<ProjectData[]>(projectQuery)

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
    <div className="py-20" id="projects">
      <div className="mb-12 space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Featured Projects
        </h2>
        <p className="text-muted-foreground">
          Seleksi karya terbaik dalam pengembangan web dan sistem.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 gap-8 md:grid-cols-2"
      >
        {data?.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="group bg-card hover:shadow-primary/5 relative flex flex-col overflow-hidden rounded-3xl border transition-all hover:shadow-2xl"
          >
            <div className="bg-background relative aspect-video w-full overflow-hidden">
              {project.image ? (
                <>
                  <img
                    src={urlFor(project.image).width(200).blur(50).url()}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-30 transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="bg-background/20 absolute inset-0 backdrop-blur-[2px]" />
                  <div className="relative flex h-full w-full items-center justify-center p-6">
                    <img
                      src={urlFor(project.image).width(800).url()}
                      alt={project.title}
                      className="h-full w-full object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </>
              ) : (
                <div className="bg-secondary flex h-full w-full items-center justify-center">
                  <span className="text-4xl">🖼️</span>
                </div>
              )}
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center justify-between">
                <span className="text-primary text-xs font-bold tracking-widest uppercase">
                  {project.tags?.[0] || 'Web Dev'}
                </span>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-primary text-sm font-medium transition-colors"
                    >
                      Github
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-primary text-sm font-medium transition-colors"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>

              <h3 className="mt-3 text-2xl font-bold">{project.title}</h3>
              <p className="text-muted-foreground mt-2 line-clamp-2 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="hover:bg-secondary rounded-full border px-3 py-1 text-[10px] font-medium transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Projects
