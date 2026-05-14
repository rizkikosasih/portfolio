import { client } from './client'
import { getQueryKey } from './queryKey'
import { getMockKey, loadMock } from './mock'
import { getCache, setCache } from '@/store/sanity.cache'

const USE_MOCK = import.meta.env.DEV

export const fetchSanity = async <T>(query: string): Promise<T> => {
  const key = getQueryKey(query)

  const cached = getCache<T>(key)
  if (cached) return cached

  let result: T

  if (USE_MOCK) {
    const mockKey = getMockKey(query)
    if (!mockKey) throw new Error(`No mock found for query: ${query}`)

    result = await loadMock<T>(mockKey)
  } else {
    result = await client.fetch<T>(query)
  }

  setCache(key, result)

  return result
}
