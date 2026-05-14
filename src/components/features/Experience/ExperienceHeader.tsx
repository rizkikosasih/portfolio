import type { ExperienceHeaderProps } from './experience.types'
import { cn } from '@/utils'
import { getExperienceSummary } from './experience.helpers'

export const ExperienceHeader = ({
  data,
  isActive,
  onToggle,
}: ExperienceHeaderProps) => {
  return (
    <button
      onClick={onToggle}
      className={cn(
        'flex w-full cursor-pointer items-start justify-between p-5 text-left transition-all duration-200',
        isActive
          ? 'text-foreground opacity-100'
          : 'text-muted-foreground opacity-90',
      )}
      aria-expanded={isActive}
      onKeyDown={(e) => e.key === 'Enter' && onToggle()}
    >
      <div className="space-y-1">
        <h3 className="text-lg font-bold">{data.role}</h3>

        <p className="text-muted-foreground text-sm">{data.company}</p>

        {!isActive && (
          <p className="text-muted-foreground wrap-break-words text-xs leading-relaxed whitespace-normal">
            {getExperienceSummary(data.description)}{' '}
            <span className="text-primary/60 font-medium">Lihat Detail</span>
          </p>
        )}
      </div>

      <span className="text-muted-foreground text-sm whitespace-nowrap">
        {data.date}
      </span>
    </button>
  )
}
