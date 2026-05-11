import { motion } from 'framer-motion'
import { useSanity } from '@/hooks/useSanity'
import { skillsQuery } from '@/lib/sanity'
import { getSkillColor, getIconComponent } from '@/utils'
import type { Skills } from './skillset.types'

const Skillset = () => {
  const { data: skills, loading } = useSanity<Skills[]>(skillsQuery)

  if (loading)
    return <div className="bg-muted h-40 animate-pulse rounded-3xl" />

  return (
    <section className="py-20" id="skillset">
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Skillset
        </h2>
        <p className="text-muted-foreground mt-4 max-w-150">
          Teknologi yang saya gunakan untuk membangun solusi digital yang
          efisien.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {skills?.map((skill) => {
          const IconComponent = getIconComponent(skill.icon)
          const colorClass = getSkillColor(skill.title)

          return (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-card hover:border-primary/40 flex flex-col items-center justify-center rounded-3xl border p-6 text-center transition-all hover:-translate-y-1"
            >
              <div className="bg-primary/5 group-hover:bg-primary/10 mb-4 rounded-2xl p-4 transition-all">
                <IconComponent
                  className={`h-8 w-8 transition-transform duration-300 group-hover:scale-110 ${colorClass}`}
                />
              </div>
              <h3 className="text-sm font-bold tracking-tight">
                {skill.title}
              </h3>
              <span className="text-muted-foreground mt-1.5 text-[10px] font-medium tracking-widest uppercase">
                {skill.type}
              </span>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Skillset
