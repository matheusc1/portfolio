import { LucideChevronsDown, LucideCode2 } from 'lucide-react'

export function Header() {
  return (
    <div className="bg-[url(/top-cover.png)] bg-cover bg-top h-full w-full px-5 md:px-0 flex flex-col items-center justify-center text-center">
      <div className="relative inline-block rounded-full border-2 border-red mt-10">
        <img
          src="https://github.com/matheusc1.png"
          alt="profile"
          className="rounded-full p-1 size-22"
        />
        <LucideCode2 className='text-green size-8 absolute -bottom-2 -right-1.5 bg-gray-500 rounded-full' />
      </div>
      
      <div className="space-y-2 mt-16">
        <p className="text-gray-200 font-subtitle leading-title text-xl">
          Hello! Meu nome é <span className="text-red">Matheus Cardoso</span> e
          sou
        </p>
        <h1 className="text-gray-100 font-title leading-title text-[3.5rem]">
          Desenvolvedor Front-End
        </h1>
      </div>

      <p className="text-gray-300 max-w-[680px] text-sm leading-text mt-5">
        Transformo necessidades em aplicações reais, evolventes e funcionais.
        Desenvolvo sistemas através da minha paixão pela tecnologia,
        contribuindo com soluções inovadoras e eficazes para desafios complexos.
      </p>

      <div className="flex justify-center gap-4 mt-20 flex-wrap">
        <div className="bg-gray-400 px-4 h-10 flex items-center justify-center gap-2 rounded-full">
          <span className="text-gray-200 leading-text">React</span>
        </div>
        <div className="bg-gray-400 px-4 h-10 flex items-center justify-center gap-2 rounded-full">
          <span className="text-gray-200 leading-text">Next.js</span>
        </div>
        <div className="bg-gray-400 px-4 h-10 flex items-center justify-center gap-2 rounded-full">
          <span className="text-gray-200 leading-text">TypeScript</span>
        </div>
        <div className="bg-gray-400 px-4 h-10 flex items-center justify-center gap-2 rounded-full">
          <span className="text-gray-200 leading-text">JavaScript</span>
        </div>
        <div className="bg-gray-400 px-4 h-10 flex items-center justify-center gap-2 rounded-full">
          <span className="text-gray-200 leading-text">Github</span>
        </div>
        <div className="bg-gray-400 px-4 h-10 flex items-center justify-center gap-2 rounded-full">
          <span className="text-gray-200 leading-text">HTML</span>
        </div>
        <div className="bg-gray-400 px-4 h-10 flex items-center justify-center gap-2 rounded-full">
          <span className="text-gray-200 leading-text">CSS</span>
        </div>
      </div>

      <LucideChevronsDown className="text-gray-300 mt-24 size-9 cursor-pointer" />
    </div>
  )
}
