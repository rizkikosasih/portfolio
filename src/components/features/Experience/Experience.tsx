import { motion } from 'framer-motion'
import { useSanity } from '@/hooks'
import { experienceQuery } from '@/lib/sanity'
import type { ExperienceData } from './experience.types'

const Experience = () => {
  const { data, loading } = useSanity<ExperienceData[]>(experienceQuery)

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
    <div className="py-10">
      <div className="mb-12 flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          Work Experience
        </h2>
        <p className="text-muted-foreground">
          Perjalanan profesional saya sebagai developer.
        </p>
      </div>

      <div className="before:bg-border relative space-y-8 before:absolute before:top-2 before:left-4 before:h-[95%] before:w-0.5 md:before:left-1/2">
        {data?.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative flex flex-col md:flex-row md:justify-between ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="border-background bg-primary absolute top-2 left-2.5 h-4 w-4 rounded-full border-4 md:left-1/2 md:-ml-2" />

            <div className="bg-card ml-10 rounded-3xl border p-6 shadow-sm transition-all hover:shadow-md md:ml-0 md:w-[45%]">
              <span className="text-primary text-sm font-bold">{exp.date}</span>
              <h3 className="mt-1 text-xl font-bold">{exp.role}</h3>
              <p className="text-muted-foreground text-sm font-medium">
                {exp.company}
              </p>
              <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Experience
