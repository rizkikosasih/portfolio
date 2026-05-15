import { Button } from '@/components/ui'

import ExternalLinkIcon from '@/assets/icons/external-link.svg?react'
import GithubIcon from '@/assets/icons/github.svg?react'

const ProjectActions = ({
  github,
  demo,
}: {
  github?: string
  demo?: string
}) => (
  <>
    {github && (
      <Button
        asChild
        variant="ghost"
        className="rounded-full border border-zinc-300/60 bg-white/80 px-6 backdrop-blur-md transition-all hover:bg-white dark:border-zinc-700 dark:bg-zinc-900/70"
      >
        <a href={github} target="_blank" rel="noreferrer">
          <GithubIcon className="text-muted-foreground group-hover:text-foreground h-5 w-5 transition-colors" />
          <span>Github</span>
        </a>
      </Button>
    )}
    {demo && (
      <Button
        asChild
        className="shadow-primary/20 rounded-full px-8 shadow-xl transition-transform active:scale-95"
      >
        <a href={demo} target="_blank" rel="noreferrer">
          <ExternalLinkIcon className="stroke-muted-foreground group-hover:stroke-foreground h-5 w-5 transition-colors" />
          <span>Demo</span>
        </a>
      </Button>
    )}
  </>
)

export default ProjectActions
