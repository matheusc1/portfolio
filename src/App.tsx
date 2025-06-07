import { useRef } from 'react'
import { Header } from './components/header'
import { Projects } from './components/projects'
import { Services } from './components/services'
import { Contact } from './components/contact'

export function App() {
  const projectsRef = useRef<HTMLDivElement>(null)

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="h-dvh w-full mx-auto">
      <Header onScrollClick={scrollToProjects} />

      <div ref={projectsRef}>
        <Projects />
      </div>

      <Services />
      <Contact />
    </div>
  )
}
