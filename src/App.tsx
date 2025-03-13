import { Footer } from './components/footer'
import { Header } from './components/header'
import { Projects } from './components/projects'
import { Services } from './components/services'

export function App() {
  return (
    <div className="h-dvh w-full mx-auto">
      <Header />
      <Projects />
      <Services />
      <Footer />
    </div>
  )
}
