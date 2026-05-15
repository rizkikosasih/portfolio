import { cn } from '@/utils'
import type { SkillCardProps } from './skill.types'

const SkillCard = ({
  title,
  type,
  Icon,
  colorClass,
  isPriority,
}: SkillCardProps) => {
  return (
    <div
      className={cn(
        'group bg-card hover:border-primary/40 relative flex h-full flex-col items-center justify-center rounded-3xl border p-6 text-center transition-all duration-300 hover:-translate-y-1',
        isPriority && 'ring-primary/40 shadow-primary/20 shadow-lg ring-1',
      )}
    >
      {isPriority && (
        <div className="bg-primary/10 pointer-events-none absolute -inset-1 -z-10 rounded-3xl blur-xl" />
      )}

      <div className="bg-primary/5 group-hover:bg-primary/10 mb-4 rounded-2xl p-4 transition-all">
        <Icon
          className={`h-8 w-8 transition-transform group-hover:scale-110 ${colorClass}`}
        />
      </div>

      <h3 className="text-sm font-bold">{title}</h3>

      <span className="text-muted-foreground mt-1.5 text-[10px] font-medium tracking-widest uppercase">
        {type}
      </span>
    </div>
  )
}

export default SkillCard
