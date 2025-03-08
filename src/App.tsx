import { Footer } from './components/footer'
import { Header } from './components/header'
import { Services } from './components/services'

export function App() {
  return (
    <div className="h-dvh w-full mx-auto">
      <Header />
      <div className="min-h-[480px] bg-gray-500 space-y-14">
        <div className="pt-16 space-y-2 text-center">
          <p className="text-red font-subtitle leading-title text-xl">
            Meus trabalho
          </p>
          <h2 className="text-gray-100 font-title leading-title text-2xl">
            Veja os projetos em destaque
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 pb-36">
          <div className="w-[330px] h-[280px] bg-gray-400 border-2 border-transparent p-3 rounded-xl space-y-5 cursor-pointer hover:border-gray-300">
            <div className="bg-gray-300 w-[306px] h-[156px] rounded-lg" />
            <div>
              <p className="font-title leading-title text-gray-100">Title</p>
              <span className="text-sm leading-text text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </span>
            </div>
          </div>

          <div className="w-[330px] h-[280px] bg-gray-400 border-2 border-transparent p-3 rounded-xl space-y-5 cursor-pointer hover:border-gray-300">
            <div className="bg-gray-300 w-[306px] h-[156px] rounded-lg" />
            <div>
              <p className="font-title leading-title text-gray-100">Title</p>
              <span className="text-sm leading-text text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </span>
            </div>
          </div>

          <div className="w-[330px] h-[280px] bg-gray-400 border-2 border-transparent p-3 rounded-xl space-y-5 cursor-pointer hover:border-gray-300">
            <div className="bg-gray-300 w-[306px] h-[156px] rounded-lg" />
            <div>
              <p className="font-title leading-title text-gray-100">Title</p>
              <span className="text-sm leading-text text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </span>
            </div>
          </div>
        </div>
      </div>
      <Services />
      <Footer />
    </div>
  )
}
