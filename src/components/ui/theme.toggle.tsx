import { useSyncExternalStore, useMemo } from 'react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'

const subscribe = () => () => {}
const getSnapshot = () => true
const getServerSnapshot = () => false

export const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme()

  const isMounted = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  )

  // Memoize status tema agar lebih efisien
  const isDark = useMemo(() => resolvedTheme === 'dark', [resolvedTheme])

  if (!isMounted) {
    return (
      <Button
        variant="secondary"
        size="icon"
        disabled
        className="h-8 w-8 rounded-xl opacity-50"
      >
        <div className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <Button
      variant="secondary"
      size="icon"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative h-8 w-8 overflow-hidden rounded-xl border shadow-sm hover:cursor-pointer"
      aria-label="Toggle Theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? 'dark' : 'light'}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Moon className="h-4 w-4 fill-yellow-300 text-yellow-300" />
          ) : (
            <Sun className="h-4 w-4 fill-orange-400 text-orange-400" />
          )}
        </motion.div>
      </AnimatePresence>
    </Button>
  )
}

export default ThemeToggle
