import { useRef } from 'react'
import { Header } from './components/header'
import { Projects } from './components/projects'
import { Services } from './components/services'
import { Contact } from './components/contact'
import { AboutMe } from './components/about-me'

export function App() {
  const aboutMeRef = useRef<HTMLDivElement>(null)

  const scrollToProjects = () => {
    aboutMeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="h-dvh w-full mx-auto">
      <Header onScrollClick={scrollToProjects} />
      <div ref={aboutMeRef}>
        <AboutMe />
      </div>

      <Projects />

      <Services />
      <Contact />
    </div>
  )
}
