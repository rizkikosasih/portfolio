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
