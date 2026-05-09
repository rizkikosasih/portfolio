import { motion, type Variants } from 'framer-motion'
import { useSanity } from '../../hooks/useSanity'
import { projectQuery } from '../../lib/sanity.queries'
import { urlFor } from '../../lib/sanity.image'
import type { Project } from '../../types/portfolio'

const Projects = () => {
  const { data, loading } = useSanity<Project[]>(projectQuery)

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
        ease: 'easeOut'
      },
    },
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {[1, 2].map((i) => (
          <div key={i} className="aspect-video animate-pulse rounded-3xl bg-muted" />
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
            className="group relative flex flex-col overflow-hidden rounded-3xl border bg-card transition-all hover:shadow-2xl hover:shadow-primary/5"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-background">
              {project.image ? (
                <>
                  <img
                    src={urlFor(project.image).width(200).blur(50).url()}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-30 transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px]" />
                  <div className="relative flex h-full w-full items-center justify-center p-6">
                    <img
                      src={urlFor(project.image).width(800).url()}
                      alt={project.title}
                      className="h-full w-full object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </>
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-secondary">
                  <span className="text-4xl">🖼️</span>
                </div>
              )}
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  {project.tags?.[0] || 'Web Dev'}
                </span>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium transition-colors hover:text-primary"
                    >
                      Github
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium transition-colors hover:text-primary"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>

              <h3 className="mt-3 text-2xl font-bold">{project.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border px-3 py-1 text-[10px] font-medium transition-colors hover:bg-secondary"
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
