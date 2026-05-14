const CACHE_VERSION = import.meta.env.VITE_CACHE_VERSION ?? '1'

export const getQueryKey = (query: string) => {
  return `${CACHE_VERSION}:${query}`
}
