import { Code, Database, Server, FileText, Globe } from 'lucide-react'
import type { TechMeta } from './experience.types'

export const getTechMeta = (tech: string): TechMeta => {
  const key = tech.toLowerCase().replace(/\s/g, '')

  switch (key) {
    // Backend
    case 'php':
    case 'nodejs(expressjs)':
    case 'yii2':
      return {
        icon: Server,
        color: 'text-blue-400',
      }

    // Database
    case 'postgresql':
    case 'mysql':
    case 'oracledb':
      return {
        icon: Database,
        color: 'text-emerald-400',
      }

    // Frontend / UI
    case 'jquery':
    case 'bootstrap':
      return {
        icon: Globe,
        color: 'text-violet-400',
      }

    // Tools / reporting
    case 'jsreport':
      return {
        icon: FileText,
        color: 'text-amber-400',
      }

    default:
      return {
        icon: Code,
        color: 'text-muted-foreground',
      }
  }
}

export const getExperienceSummary = (text: string) => {
  const index = text.indexOf('.')

  if (index === -1) return text

  return text.slice(0, index + 1)
}
