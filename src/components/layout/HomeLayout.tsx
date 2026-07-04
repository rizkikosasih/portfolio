import { Navbar, SectionWrapper } from '@/components/layout'
import Hero from '@/components/features/hero'
import Projects from '@/components/features/projects'
import Contact from '@/components/features/contact'
import Education from '@/components/features/education'
import Experience from '@/components/features/experience'
import Skillset from '@/components/features/skillset'

const HomeLayout = () => {
  return (
    <div className="bg-background text-foreground selection:bg-primary/10 min-h-screen transition-colors duration-300">
      <Navbar />

      <main className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary/5 pointer-events-none absolute top-0 left-1/2 -z-10 h-125 w-full -translate-x-1/2 blur-3xl" />

        <SectionWrapper id="about">
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

export default HomeLayout
