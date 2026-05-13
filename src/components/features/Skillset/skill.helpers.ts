import type { Skill, SkillType } from './skill.types'

/* -----------------------------
 * 1. PRIORITY / DOMAIN LOGIC
 * ----------------------------- */

export const isPrioritySkill = (title: string) => {
  const priority = [
    'Laravel',
    'Node JS',
    'React JS',
    'TypeScript',
    'MySQL',
    'Git',
  ]

  return priority.includes(title)
}

export const getSkillPriority = (type: SkillType, title?: string): number => {
  if (title?.toLowerCase().includes('laravel')) return 0

  const base: Record<SkillType, number> = {
    Backend: 1,
    Frontend: 2,
    Database: 3,
    Other: 4,
  }

  return base[type]
}

/* -----------------------------
 * 2. DATA ARRANGEMENT
 * ----------------------------- */

export const arrangeSkills = (skills: Skill[]): Skill[] => {
  const sorted = [...skills].sort(
    (a, b) =>
      getSkillPriority(a.type, a.title) - getSkillPriority(b.type, b.title),
  )

  const codeigniterIndex = sorted.findIndex((s) =>
    s.title.toLowerCase().includes('codeigniter'),
  )

  const nodeIndex = sorted.findIndex((s) =>
    s.title.toLowerCase().includes('node'),
  )

  const codeigniter = codeigniterIndex !== -1 ? sorted[codeigniterIndex] : null
  const node = nodeIndex !== -1 ? sorted[nodeIndex] : null

  const base = sorted.filter(
    (_, i) => i !== codeigniterIndex && i !== nodeIndex,
  )

  const result = [...base]

  if (codeigniter) result.splice(5, 0, codeigniter)
  if (node) result.splice(6, 0, node)

  return result
}

/* -----------------------------
 * 3. LAYOUT LOGIC (GRID)
 * ----------------------------- */

export const getSkillSpan = (type: SkillType, title?: string): string => {
  if (title === 'Laravel') return 'col-span-2 row-span-4'
  if (type === 'Backend') return 'col-span-2 row-span-2'
  if (type === 'Frontend') return 'col-span-1 row-span-1'
  if (type === 'Database') return 'col-span-1 row-span-1'

  return 'col-span-1 row-span-1'
}

/* -----------------------------
 * 4. MOBILE COMPOSITION
 * ----------------------------- */

export const buildMobileRows = (skills: Skill[]) => {
  const backends = skills.filter((s) => s.type === 'Backend')
  const others = skills.filter((s) => s.type !== 'Backend')

  const rows: Skill[][] = []

  let backendIndex = 0
  let otherIndex = 0

  while (backendIndex < backends.length) {
    rows.push([backends[backendIndex]])
    backendIndex++

    if (otherIndex < others.length) {
      rows.push(others.slice(otherIndex, otherIndex + 2))
      otherIndex += 2
    }
  }

  return rows
}

/* -----------------------------
 * 5. PRESENTATION (UI MAPPING)
 * ----------------------------- */

export const getSkillColor = (title: string): string => {
  const t = title.toLowerCase()

  if (t.includes('react')) return 'text-cyan-400 fill-cyan-400'
  if (t.includes('vue')) return 'text-emerald-500 fill-emerald-500'
  if (t.includes('tailwind')) return 'text-sky-400 fill-sky-400'
  if (t.includes('bootstrap')) return 'text-purple-500 fill-purple-500'
  if (t.includes('css')) return 'text-blue-500 fill-blue-500'
  if (t.includes('html')) return 'text-orange-600 fill-orange-600'
  if (t.includes('vite')) return 'text-purple-400 fill-purple-400'
  if (t.includes('livewire')) return 'text-pink-500 fill-pink-500'

  if (t.includes('laravel')) return 'text-red-600 fill-red-600'
  if (t.includes('php')) return 'text-indigo-400 fill-indigo-400'
  if (t.includes('node')) return 'text-green-500 fill-green-500'
  if (t.includes('codeigniter')) return 'text-orange-700 fill-orange-700'
  if (t.includes('express')) return 'text-gray-400 fill-gray-400'
  if (t.includes('yii')) return 'text-blue-600 fill-blue-600'

  if (t.includes('mysql')) return 'text-blue-400 fill-blue-400'
  if (t.includes('postgre')) return 'text-sky-600 fill-sky-600'
  if (t.includes('oracle')) return 'text-red-500 fill-red-500'

  if (t.includes('javascript') || t.includes('js'))
    return 'text-yellow-400 fill-yellow-400'
  if (t.includes('git')) return 'text-orange-500 fill-orange-500'
  if (t.includes('ajax')) return 'text-blue-300 fill-blue-300'
  if (t.includes('api')) return 'text-emerald-400 fill-emerald-400'

  return 'text-primary fill-primary'
}
