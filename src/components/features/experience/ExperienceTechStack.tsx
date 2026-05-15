import type { ExperienceTechStackProps } from './experience.types'
import { getTechMeta } from './experience.helpers'
import { Badge } from '@/components/ui'

export const ExperienceTechStack = ({
  technologies,
}: ExperienceTechStackProps) => {
  if (!technologies?.length) return null

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {technologies.map((tech) => {
        const { icon: Icon, color } = getTechMeta(tech)

        return (
          <Badge
            key={tech}
            variant="secondary"
            className="bg-muted/40 border-border/50 hover:bg-muted/60 flex items-center gap-1 border text-xs backdrop-blur-sm transition-all duration-150 hover:-translate-y-0.5 hover:scale-105"
          >
            <Icon className={`h-3.5 w-3.5 ${color}`} />
            {tech}
          </Badge>
        )
      })}
    </div>
  )
}
