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
        'flex w-full cursor-pointer flex-col justify-between p-5 text-left transition-all duration-200 sm:flex-row sm:items-start',
        isActive
          ? 'text-foreground opacity-100'
          : 'text-muted-foreground opacity-90',
      )}
      aria-expanded={isActive}
    >
      <div className="w-full space-y-1 sm:max-w-[70%] md:max-w-[80%] lg:max-w-[85%] xl:max-w-[90%]">
        <h3 className="text-lg leading-tight font-bold">{data.role}</h3>

        <div className="flex flex-col space-y-1 sm:block">
          <p className="text-muted-foreground text-sm font-medium">
            {data.company}
          </p>

          <span className="text-muted-foreground block text-xs sm:hidden">
            {data.date}
          </span>
        </div>

        {!isActive && (
          <p className="text-muted-foreground wrap-break-words mt-2 text-xs leading-relaxed whitespace-normal">
            {getExperienceSummary(data.description ?? '')}{' '}
            <span className="text-primary/60 font-medium">Lihat Detail</span>
          </p>
        )}
      </div>

      <span className="text-muted-foreground hidden text-sm whitespace-nowrap sm:block">
        {data.date}
      </span>
    </button>
  )
}
