import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID || '',
    dataset: import.meta.env.SANITY_STUDIO_DATASET || '',
  },
  typegen: {
    path: '../src/**/*.{ts,tsx,js,jsx}',
    schema: './schema.json',
    generates: '../src/types/sanity.types.ts',
  },
})
