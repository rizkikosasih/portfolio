export const portfolioQuery = `{
  "about": *[_type == "about"][0],
  "experiences": *[_type == "experience"] | order(_createdAt desc),
  "projects": *[_type == "project"] | order(_createdAt desc),
  "skills": *[_type == "skill"] | order(title asc),
  "contact": *[_type == "contact"][0],
  "education": *[_type == "education"] | order(_createdAt desc)
}`

export const heroQuery = `*[_type == "about"][0]`

export const skillsQuery = `*[_type == "skill"] | order(title asc)`

export const experienceQuery = `*[_type == "experience"] | order(_createdAt desc)`

export const educationQuery = `*[_type == "education"] | order(_createdAt desc)`

export const projectQuery = `*[_type == "project"] | order(_createdAt desc) {
  ...,
  "category": category->title,
  "tools": tools[]->{
    _id,
    title,
    icon
  }
}`

export const contactQuery = `*[_type == "contact"][0]`
