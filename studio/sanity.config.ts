import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

const projectId = import.meta.env.SANITY_STUDIO_PROJECT_ID || ''
const dataset = import.meta.env.SANITY_STUDIO_DATASET || ''

if (!projectId || !dataset) {
  console.warn(
    '⚠️ Warning: Variabel lingkungan SANITY_STUDIO_PROJECT_ID atau SANITY_STUDIO_DATASET belum terdefinisi di file .env root!',
  )
}

export default defineConfig({
  name: 'default',
  title: 'Portfolio Web',

  projectId: projectId,
  dataset: dataset,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
