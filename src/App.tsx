import topCover from './assets/top-cover.png'

export function App() {
  return (
    <div className="h-screen w-full">
      <div
        className="bg-cover bg-center h-full w-full flex flex-col items-center justify-center gap-5"
        style={{ backgroundImage: `url(${topCover})` }}
      >
        <div className="space-y-2 text-center">
          <p className="text-gray-200 font-subtitle text-xl">
            Hello! Meu nome é <span className="text-red">Matheus Cardoso</span>{' '}
            e sou
          </p>
          <h1 className="text-gray-100 font-title text-5xl">
            Desenvolvedor Front-End
          </h1>
        </div>
        <span className="text-gray-300 w-[660px] text-sm text-center">
          Transformo necessidades em aplicações reais, evolventes e funcionais.
          Desenvolvo sistemas através da minha paixão pela tecnologia,
          contribuindo com soluções inovadoras e eficazes para desafios
          complexos.
        </span>
      </div>
    </div>
  )
}
