import type { ProjectTagProps } from './project.types'
import { Badge } from '@/components/ui'

const ProjectTags = ({ tags }: ProjectTagProps) => {
  if (!tags?.length) return null

  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Badge
          key={tag}
          variant="secondary"
          className="bg-muted/40 border-border/50 hover:bg-secondary flex items-center p-4 gap-1 border text-xs backdrop-blur-sm"
        >
          {tag}
        </Badge>
      ))}
    </div>
  )
}

export default ProjectTags
