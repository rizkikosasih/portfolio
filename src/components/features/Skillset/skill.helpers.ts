import type { SkillData, SkillType } from './skill.types'

/* -----------------------------
 * PRIORITY / DOMAIN LOGIC
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
 * LAYOUT LOGIC (GRID)
 * ----------------------------- */

export const getSkillSpan = (type: SkillType, title?: string): string => {
  if (title === 'Laravel') return 'col-span-2 row-span-2'
  if (type === 'Backend') return 'col-span-2 row-span-1'
  if (type === 'Frontend') return 'col-span-1 row-span-1'
  if (type === 'Database') return 'col-span-1 row-span-1'

  return 'col-span-1 row-span-1'
}

/* -----------------------------
 * PRESENTATION (UI MAPPING)
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
