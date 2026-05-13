import * as Icons from 'lucide-react'
import { type LucideProps } from 'lucide-react'

export const toPascalCase = (str: string): string => {
  return str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}

export const getSkillColor = (title: string): string => {
  const t = title.toLowerCase()

  // Frontend & UI
  if (t.includes('react')) return 'text-cyan-400 fill-cyan-400'
  if (t.includes('vue')) return 'text-emerald-500 fill-emerald-500'
  if (t.includes('tailwind')) return 'text-sky-400 fill-sky-400'
  if (t.includes('bootstrap')) return 'text-purple-500 fill-purple-500'
  if (t.includes('css')) return 'text-blue-500 fill-blue-500'
  if (t.includes('html')) return 'text-orange-600 fill-orange-600'
  if (t.includes('vite')) return 'text-purple-400 fill-purple-400'
  if (t.includes('livewire')) return 'text-pink-500 fill-pink-500'

  // Backend & Frameworks
  if (t.includes('laravel')) return 'text-red-600 fill-red-600'
  if (t.includes('php')) return 'text-indigo-400 fill-indigo-400'
  if (t.includes('node')) return 'text-green-500 fill-green-500'
  if (t.includes('codeigniter')) return 'text-orange-700 fill-orange-700'
  if (t.includes('express')) return 'text-gray-400 fill-gray-400'
  if (t.includes('yii')) return 'text-blue-600 fill-blue-600'

  // Database
  if (t.includes('mysql')) return 'text-blue-400 fill-blue-400'
  if (t.includes('postgre')) return 'text-sky-600 fill-sky-600'
  if (t.includes('oracle')) return 'text-red-500 fill-red-500'

  // Language & Tools
  if (t.includes('javascript') || t.includes('js'))
    return 'text-yellow-400 fill-yellow-400'
  if (t.includes('git')) return 'text-orange-500 fill-orange-500'
  if (t.includes('ajax')) return 'text-blue-300 fill-blue-300'
  if (t.includes('api')) return 'text-emerald-400 fill-emerald-400'

  return 'text-primary fill-primary'
}

export const getIconComponent = (iconName: string) => {
  const pascalName = toPascalCase(iconName)
  return (
    (Icons[pascalName as keyof typeof Icons] as React.FC<LucideProps>) ||
    Icons.Code
  )
}
