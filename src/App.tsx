import { Contact } from './components/contact'
import { Header } from './components/header'
import { Projects } from './components/projects'
import { Services } from './components/services'

export function App() {
  return (
    <div className="h-dvh w-full mx-auto">
      <Header />
      <Projects />
      <Services />
      <Contact />
    </div>
  )
}
