import { useRef } from 'react'
import { Header } from './components/header'
import { Projects } from './components/projects'
import { Stack } from './components/stack'
import { Contact } from './components/contact'
import { AboutMe } from './components/about-me'
import { Footer } from './components/footer'

export function App() {
  const projectsRef = useRef<HTMLDivElement>(null)

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="h-dvh w-full mx-auto">
      <Header onScrollClick={scrollToProjects} />
      <div ref={projectsRef}>
        <Projects />
      </div>
      <AboutMe />

      <Stack />
      <Contact />
      <Footer />
    </div>
  )
}
