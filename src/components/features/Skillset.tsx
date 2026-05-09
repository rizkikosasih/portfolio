import { motion } from 'framer-motion'
import { useSanity } from '../../hooks/useSanity'
import { skillsQuery } from '../../lib/sanity.queries'
import type { Skill } from '../../types/portfolio'

const Skillset = () => {
  const { data, loading } = useSanity<Skill[]>(skillsQuery)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  if (loading) {
    return (
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-muted h-24 animate-pulse rounded-2xl" />
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-8 py-10">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          Technical Stack
        </h2>
        <p className="text-muted-foreground">
          Teknologi yang saya gunakan untuk membangun solusi digital.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-2 gap-4 md:grid-cols-4"
      >
        {data?.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group bg-card hover:border-primary/50 flex items-center gap-4 rounded-2xl border p-4 transition-all"
          >
            <div className="bg-muted flex h-12 w-12 items-center justify-center rounded-xl text-2xl transition-transform group-hover:scale-110">
              {skill.icon || '🛠️'}
            </div>
            <div>
              <h3 className="leading-none font-semibold">{skill.title}</h3>
              <span className="text-muted-foreground text-[10px] tracking-wider uppercase">
                {skill.type}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Skillset
