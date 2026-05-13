import { motion } from 'framer-motion'
import SkillCard from './SkillCard'
import type { SkillGridProps } from './skill.types'
import { getIconComponent } from '@/utils'
import {
  getSkillSpan,
  getSkillColor,
  arrangeSkills,
  buildMobileRows,
} from './skill.helpers'

const SkillGrid = ({ skills }: SkillGridProps) => {
  const sortedSkills = arrangeSkills(skills)
  const mobileRows = buildMobileRows(sortedSkills)

  return (
    <>
      {/* DESKTOP */}
      <div className="hidden grid-cols-6 gap-4 md:grid">
        {sortedSkills.map((skill, index) => {
          const Icon = getIconComponent(skill.icon)
          const colorClass = getSkillColor(skill.title)

          return (
            <motion.div
              key={`${skill.title}-${index}`}
              className={getSkillSpan(skill.type, index)}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
            >
              <SkillCard
                title={skill.title}
                type={skill.type}
                Icon={Icon}
                colorClass={colorClass}
              />
            </motion.div>
          )
        })}
      </div>

      {/* MOBILE */}
      <div className="flex flex-col gap-3 md:hidden">
        {mobileRows.map((row, i) => (
          <div
            key={i}
            className={
              row.length === 1 ? 'grid grid-cols-1' : 'grid grid-cols-2 gap-3'
            }
          >
            {row.map((skill) => {
              console.log('skill:', skill)
              const Icon = getIconComponent(skill.icon)
              const colorClass = getSkillColor(skill.title)

              return (
                <motion.div key={skill.title}>
                  <SkillCard
                    title={skill.title}
                    type={skill.type}
                    Icon={Icon}
                    colorClass={colorClass}
                  />
                </motion.div>
              )
            })}
          </div>
        ))}
      </div>
    </>
  )
}

export default SkillGrid
