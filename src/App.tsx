import { Navbar, SectionWrapper } from '@/components/layout'

import Hero from '@/components/features/Hero'
import Projects from '@/components/features/Projects'
import Contact from '@/components/features/Contact'
import Education from '@/components/features/Education'
import Experience from '@/components/features/Experience'
import Skillset from '@/components/features/Skillset'

const App = () => {
  return (
    <div className="bg-background text-foreground selection:bg-primary/10 min-h-screen transition-colors duration-300">
      <Navbar />

      <main className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary/5 pointer-events-none absolute top-0 left-1/2 -z-10 h-125 w-full -translate-x-1/2 blur-3xl" />

        <SectionWrapper id="hero">
          <Hero />
        </SectionWrapper>

        <SectionWrapper id="projects">
          <Projects />
        </SectionWrapper>

        <SectionWrapper id="skillset">
          <Skillset />
        </SectionWrapper>

        <SectionWrapper id="experience">
          <Experience />
        </SectionWrapper>

        <SectionWrapper id="education">
          <Education />
        </SectionWrapper>

        <SectionWrapper id="contact">
          <Contact />
        </SectionWrapper>
      </main>
    </div>
  )
}

export default App
