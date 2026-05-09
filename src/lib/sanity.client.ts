import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'cu65sznd',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2026-05-08',
})
