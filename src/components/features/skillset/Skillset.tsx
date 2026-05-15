import { useSanity } from '@/hooks/useSanity'
import { skillsQuery } from '@/lib/sanity'
import { SectionHeader } from '@/components/layout'
import { Skeleton } from '@/components/ui'

import type { SkillData } from './skill.types'
import SkillGrid from './SkillGrid'

const Skillset = () => {
  const { data: skills, loading } = useSanity<SkillData[]>(skillsQuery)

  if (loading)
    return <Skeleton className="bg-muted h-40 animate-pulse rounded-3xl" />

  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[40px_40px]" />

      <SectionHeader
        title="Skillset"
        subtitle="Teknologi yang saya gunakan untuk membangun solusi digital yang efisien."
      />

      {skills && <SkillGrid skills={skills} />}
    </div>
  )
}

export default Skillset
