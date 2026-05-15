import { motion } from 'framer-motion'
import type { EducationCardProps } from './education.types'

const EducationCard = ({ edu, variants }: EducationCardProps) => {
  return (
    <motion.div
      variants={variants}
      className="group bg-card/40 hover:bg-card border-border/50 hover:border-primary/50 relative flex flex-col justify-between overflow-hidden rounded-3xl border p-8 backdrop-blur-md transition-all duration-500 hover:shadow-2xl"
    >
      <div
        className="bg-primary/10 absolute -top-4 -right-4 h-24 w-24 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div className="relative z-10 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-primary text-xs font-bold tracking-widest uppercase">
            {edu?.period ?? 'Ongoing'}
          </span>
        </div>
        <div>
          <h3 className="text-2xl leading-tight font-bold">
            {edu?.school ?? 'Unknown Institution'}
          </h3>
          {edu?.major && (
            <p className="text-muted-foreground text-lg font-medium">
              {edu.major}
            </p>
          )}
        </div>
      </div>

      {edu?.description && (
        <p className="text-muted-foreground mt-6 text-sm leading-relaxed">
          {edu.description}
        </p>
      )}

      <div
        className="from-primary/50 absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r to-transparent transition-all duration-500 group-hover:w-full"
        aria-hidden="true"
      />
    </motion.div>
  )
}

export default EducationCard
