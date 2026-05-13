import { useSanity } from '@/hooks/useSanity'
import { skillsQuery } from '@/lib/sanity'
import type { Skill } from './skill.types'
import SkillGrid from './SkillGrid'
import { SectionHeader } from '@/components/layout'

const Skillset = () => {
  const { data: skills, loading } = useSanity<Skill[]>(skillsQuery)

  if (loading)
    return <div className="bg-muted h-40 animate-pulse rounded-3xl" />

  return (
    <>
      <SectionHeader
        title="Skillset"
        subtitle="Teknologi yang saya gunakan untuk membangun solusi digital yang
          efisien."
      />

      {skills && <SkillGrid skills={skills} />}
    </>
  )
}

export default Skillset
