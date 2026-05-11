import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"

import { Button } from "./button"

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true)
    }, 0)

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) {
    return <div className="bg-secondary/50 h-10 w-10 rounded-xl border" />
  }

  const isDark = theme === "dark"

  return (
    <Button
      variant="secondary"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative h-8 w-8 hover:cursor-pointer overflow-hidden"
      aria-label="Toggle Theme"
    >
      <motion.div
        initial={false}
        animate={{ y: isDark ? 0 : 30 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="absolute"
      >
        <Moon
          className="h-4 w-4 fill-yellow-300 text-yellow-300"
          style={{ filter: "drop-shadow(0 0 5px rgba(253, 224, 71, 0.5))" }}
        />
      </motion.div>

      <motion.div
        initial={false}
        animate={{ y: isDark ? -30 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="absolute"
      >
        <Sun
          className="h-4 w-4 fill-orange-400 text-orange-400"
          style={{ filter: "drop-shadow(0 0 5px rgba(251, 146, 60, 0.5))" }}
        />
      </motion.div>
    </Button>
  )
}

export default ThemeToggle
