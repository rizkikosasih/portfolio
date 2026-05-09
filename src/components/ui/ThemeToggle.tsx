import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setMounted(true)
    })
    return () => cancelAnimationFrame(frame)
  }, [])

  if (!mounted) {
    return <div className="h-9 w-9" />
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring border-input bg-background hover:bg-accent hover:text-accent-foreg-g items-cente-smcus-visible:ring-1 focus-visible:outoutline-none inline-flex h-9 w-9 hover:cursor-pointer"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <span className="text-lg">🌙</span>
      ) : (
        <span className="text-lg">☀️</span>
      )}
    </button>
  )
}

export default ThemeToggle
