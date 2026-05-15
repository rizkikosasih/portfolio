import { Button } from '@/components/ui'

import ExternalLinkIcon from '@/assets/icons/external-link.svg?react'
import GithubIcon from '@/assets/icons/github.svg?react'

const ProjectActions = ({
  github,
  demo,
  isCompact = false, // Prop baru untuk kontrol ukuran
}: {
  github?: string
  demo?: string
  isCompact?: boolean
}) => (
  <div className={`flex items-center ${isCompact ? 'gap-1.5' : 'gap-4'}`}>
    {github && (
      <Button
        asChild
        variant="ghost"
        size={isCompact ? 'icon' : 'default'}
        className={`rounded-full border border-zinc-300/60 bg-white/80 backdrop-blur-md transition-all hover:bg-white dark:border-zinc-700 dark:bg-zinc-900/70 ${isCompact ? 'h-8 w-8' : 'px-6'}`}
      >
        <a href={github} target="_blank" rel="noreferrer" title="Github">
          <GithubIcon className="text-muted-foreground group-hover:text-foreground h-4 w-4 transition-colors" />
          {!isCompact && <span className="ml-2">Github</span>}
        </a>
      </Button>
    )}

    {demo && (
      <Button
        asChild
        size={isCompact ? 'icon' : 'default'}
        className={`shadow-primary/20 rounded-full shadow-xl transition-transform active:scale-95 ${isCompact ? 'h-8 w-8' : 'px-8'}`}
      >
        <a href={demo} target="_blank" rel="noreferrer" title="Live Demo">
          <ExternalLinkIcon className="h-4 w-4" />
          {!isCompact && <span className="ml-2">Demo</span>}
        </a>
      </Button>
    )}
  </div>
)

export default ProjectActions
