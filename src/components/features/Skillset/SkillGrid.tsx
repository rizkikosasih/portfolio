import { motion } from 'framer-motion'
import SkillCard from './SkillCard'
import type { SkillGridProps } from './skill.types'
import { getIconComponent } from '@/utils'
import { getSkillSpan, getSkillColor, isPrioritySkill } from './skill.helpers'
import { useState } from 'react'

const SkillGrid = ({ skills }: SkillGridProps) => {
  const desktopSorted = [...skills].sort(
    (a, b) => (a.order?.desktop ?? 0) - (b.order?.desktop ?? 0),
  )
  const mobileSorted = [...skills].sort(
    (a, b) => (a.order?.mobile ?? 0) - (b.order?.mobile ?? 0),
  )
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <>
      {/* DESKTOP */}
      <div className="hidden grid-cols-6 gap-6 md:grid">
        {desktopSorted.map((skill, index) => {
          const Icon = getIconComponent(skill.icon ?? '')
          const colorClass = getSkillColor(skill.title ?? '')
          const priority = isPrioritySkill(skill.title ?? '')
          const type = skill.type ?? 'Other'
          const title = skill.title ?? ''

          return (
            <motion.div
              key={`${skill.title}-${index}`}
              className={getSkillSpan(type, title)}
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
                title={title}
                type={type}
                Icon={Icon}
                colorClass={colorClass}
                isPriority={priority}
              />
            </motion.div>
          )
        })}
      </div>

      {/* MOBILE */}
      <div className="grid grid-cols-2 gap-3 md:hidden">
        {mobileSorted.map((skill, index) => {
          const Icon = getIconComponent(skill.icon ?? '')
          const colorClass = getSkillColor(skill.title ?? '')

          const order = skill.order?.mobile ?? 0
          const isBackend = order % 3 === 1

          return (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.06,
              }}
              viewport={{ once: true }}
              className={isBackend ? 'col-span-2' : 'col-span-1'}
            >
              <SkillCard
                title={skill.title ?? ''}
                type={isBackend ? 'Backend' : 'Other'}
                Icon={Icon}
                colorClass={colorClass}
              />
            </motion.div>
          )
        })}
      </div>
    </>
  )
}

export default SkillGrid
