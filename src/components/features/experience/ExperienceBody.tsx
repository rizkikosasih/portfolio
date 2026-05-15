import { motion, AnimatePresence } from 'framer-motion'
import type { ExperienceBodyProps } from './experience.types'
import { ExperienceTechStack } from './ExperienceTechStack'

export const ExperienceBody = ({ data, isActive }: ExperienceBodyProps) => {
  return (
    <AnimatePresence initial={false}>
      {isActive && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="overflow-hidden"
        >
          <div className="px-5 pb-5">
            <p className="text-muted-foreground max-w-full text-sm leading-relaxed sm:max-w-[70%] md:max-w-[80%] lg:max-w-[85%] xl:max-w-[90%]">
              {data.description}
            </p>

            <ExperienceTechStack technologies={data.technologies} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
