export const portfolioQuery = `{
  "about": *[_type == "about"][0],
  "experiences": *[_type == "experience"] | order(_createdAt desc),
  "projects": *[_type == "project"] | order(_createdAt desc),
  "skills": *[_type == "skill"] | order(title asc),
  "contact": *[_type == "contact"][0],
  "education": *[_type == "education"] | order(_createdAt desc)
}`
