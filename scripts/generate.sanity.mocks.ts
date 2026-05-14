import 'dotenv/config'
import fs from 'node:fs'
import path from 'node:path'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: false,
})

const write = (file: string, data: unknown) => {
  const filePath = path.join(process.cwd(), 'src/mocks', file)
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
}

const fetchAll = async () => {
  const [hero, contact, education, experience, projects, skills] =
    await Promise.all([
      client.fetch(`*[_type == "hero"][0]`),
      client.fetch(`*[_type == "contact"][0]`),
      client.fetch(`*[_type == "education"] | order(_createdAt asc)`),
      client.fetch(`*[_type == "experience"] | order(_createdAt asc)`),
      client.fetch(`*[_type == "project"] | order(_createdAt desc)`),
      client.fetch(`*[_type == "skill"] | order(title asc)`),
    ])

  write('hero.mock.json', hero)
  write('contact.mock.json', contact)
  write('education.mock.json', education)
  write('experience.mock.json', experience)
  write('projects.mock.json', projects)
  write('skills.mock.json', skills)
}

fetchAll().catch((err) => {
  console.error(err)
  process.exit(1)
})
