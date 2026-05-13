import type { SkillCardProps } from './skill.types'

const SkillCard = ({ title, type, Icon, colorClass }: SkillCardProps) => {
  return (
    <div
      className={`group bg-card hover:border-primary/40 flex h-full flex-col items-center justify-center rounded-3xl border p-6 text-center transition-all hover:-translate-y-1`}
    >
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
