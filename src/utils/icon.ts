import { toPascalCase } from "./string"
import * as Icons from 'lucide-react'
import { type LucideProps } from 'lucide-react'

export const getIconComponent = (iconName: string) => {
  const pascalName = toPascalCase(iconName)
  return (
    (Icons[pascalName as keyof typeof Icons] as React.FC<LucideProps>) ||
    Icons.Code
  )
}
