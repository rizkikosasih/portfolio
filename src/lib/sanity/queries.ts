export const heroQuery = `*[_type == "hero"][0]`

export const skillsQuery = `*[_type == "skill"] | order(title asc)`

export const experienceQuery = `*[_type == "experience"] | order(order asc)`

export const educationQuery = `*[_type == "education"] | order(order asc)`

export const projectQuery = `*[_type == "project"] | order(order asc) {
  ...,
  "category": category->title,
  "tools": tools[]->{
    _id,
    title,
    icon
  }
}`

export const contactQuery = `*[_type == "contact"][0]`
