type MockKey =
  | 'hero'
  | 'skills'
  | 'projects'
  | 'experience'
  | 'education'
  | 'contact'

export const getMockKey = (query: string): MockKey | null => {
  if (query.includes('_type == "project"')) return 'projects'
  if (query.includes('_type == "skill"')) return 'skills'
  if (query.includes('_type == "hero"')) return 'hero'
  if (query.includes('_type == "experience"')) return 'experience'
  if (query.includes('_type == "education"')) return 'education'
  if (query.includes('_type == "contact"')) return 'contact'
  return null
}

export const loadMock = async <T>(key: MockKey): Promise<T> => {
  const modules = import.meta.glob('@/mocks/*.json')

  const path = `/src/mocks/${key}.mock.json`
  const loader = modules[path]

  if (!loader) {
    throw new Error(`Mock file not found: ${path}`)
  }

  const mod = await loader()
  return (mod as { default: T }).default
}
