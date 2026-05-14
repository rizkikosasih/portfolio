import type { ExperienceItemProps } from './experience.types'
import { ExperienceHeader } from './ExperienceHeader'
import { ExperienceBody } from './ExperienceBody'
import { cn } from '@/utils'

export const ExperienceItem = ({
  data,
  isActive,
  onToggle,
}: ExperienceItemProps) => {
  return (
    <div
      className={cn(
        'relative rounded-3xl border transition-all duration-200',
        isActive
          ? 'border-primary/40 bg-muted/20 scale-[1.01] shadow-md'
          : 'border-border/60 hover:bg-muted/10',
      )}
    >
      <div
        className={cn(
          'absolute top-6 -left-3 hidden h-2 w-2 rounded-full md:block',
          isActive ? 'bg-primary/60' : 'bg-transparent',
        )}
      />

      <ExperienceHeader data={data} isActive={isActive} onToggle={onToggle} />

      <ExperienceBody data={data} isActive={isActive} />
    </div>
  )
}
