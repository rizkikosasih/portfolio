const sanityCache = new Map<string, unknown>()

export const getCache = <T>(key: string) => {
  return sanityCache.get(key) as T | undefined
}

export const setCache = <T>(key: string, data: T) => {
  sanityCache.set(key, data)
}
