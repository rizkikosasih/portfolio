import { motion } from 'framer-motion'
import SkillCard from './SkillCard'
import type { SkillGridProps } from './skill.types'
import { getIconComponent } from '@/utils'
import {
  getSkillSpan,
  getSkillColor,
  arrangeSkills,
  buildMobileRows,
  isPrioritySkill,
} from './skill.helpers'
import { useState } from 'react'

const SkillGrid = ({ skills }: SkillGridProps) => {
  const sortedSkills = arrangeSkills(skills)
  const mobileRows = buildMobileRows(sortedSkills)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <>
      {/* DESKTOP */}
      <div className="hidden grid-cols-6 gap-6 md:grid">
        {sortedSkills.map((skill, index) => {
          const Icon = getIconComponent(skill.icon)
          const colorClass = getSkillColor(skill.title)
          const priority = isPrioritySkill(skill.title)

          return (
            <motion.div
              key={`${skill.title}-${index}`}
              className={getSkillSpan(skill.type, skill.title)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              animate={{
                opacity:
                  activeIndex === null || activeIndex === index ? 1 : 0.35,
                scale: activeIndex === index ? 1.05 : 1,
              }}
            >
              <SkillCard
                title={skill.title}
                type={skill.type}
                Icon={Icon}
                colorClass={colorClass}
                isPriority={priority}
              />
            </motion.div>
          )
        })}
      </div>

      {/* MOBILE */}
      <div className="flex flex-col gap-3 md:hidden">
        {mobileRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={
              row.length === 1 ? 'grid grid-cols-1' : 'grid grid-cols-2 gap-3'
            }
          >
            {row.map((skill, index) => {
              const Icon = getIconComponent(skill.icon)
              const colorClass = getSkillColor(skill.title)

              const delay = (rowIndex * 2 + index) * 0.06

              return (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay,
                  }}
                  viewport={{ once: true }}
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
        ))}
      </div>
    </>
  )
}

export default SkillGrid
