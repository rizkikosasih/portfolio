import { motion } from 'framer-motion'
import type { ProjectIndicatorProps } from './project.types'

const ProjectIndicators = ({ total, activeIndex }: ProjectIndicatorProps) => {
  const progress = total > 0 ? ((activeIndex + 1) / total) * 100 : 0

  return (
    <div className="mt-10 flex flex-col items-center gap-3">
      <div className="text-muted-foreground text-[10px] font-bold tracking-[0.2em] uppercase">
        {String(activeIndex + 1).padStart(2, '0')}
        <span className="mx-2 opacity-30">/</span>
        {String(total).padStart(2, '0')}
      </div>

      <div className="bg-primary/10 relative h-0.5 w-40 overflow-hidden rounded-full">
        <motion.div
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="bg-primary absolute h-full"
        />
      </div>
    </div>
  )
}

export default ProjectIndicators
