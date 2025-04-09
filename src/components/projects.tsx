import { NavLink } from "react-router"

export function Projects() {
  return (
    <div className="min-h-[480px] bg-gray-500 space-y-14">
      <div className="pt-16 space-y-2 text-center">
        <p className="text-red font-subtitle leading-title text-xl">
          Meu trabalho
        </p>
        <h2 className="text-gray-100 font-title leading-title text-2xl text-shadow-sm/40">
          Veja os projetos em destaque
        </h2>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6 pb-36">
        <div className="w-[330px] h-[280px] bg-gray-400 border-2 border-transparent p-3 rounded-xl space-y-5 cursor-pointer shadow-md shadow-black/25 hover:border-gray-300">
          <div className="bg-gradient-to-br from-[#F4EDE4] to-[#5A3E36] w-[306px] h-[156px] rounded-lg flex items-center justify-center">
            <span className="text-xl font-title leading-title text-gray-100 text-center">
              Em construção...
            </span>
          </div>
          <div className="space-y-2">
            <p className="font-title leading-title text-gray-100">MyBookList</p>
            <span className="text-sm leading-text text-gray-200">
              Aplicação para registros de leituras e acompanhamento de métricas.
            </span>
          </div>
        </div>

        <NavLink to="/exam-scheduler" className="w-[330px] h-[280px] bg-gray-400 border-2 border-transparent p-3 rounded-xl space-y-5 cursor-pointer shadow-md shadow-black/25 hover:border-gray-300">
          <img src="/exam-scheduler.png" alt="Exam Scheduler card" />
          <div className="space-y-2">
            <p className="font-title leading-title text-gray-100">
              Exam Scheduler
            </p>
            <span className="text-sm leading-text text-gray-200">
              Sistema completo para agendamento de avaliações.
            </span>
          </div>
        </NavLink>

        <div className="w-[330px] h-[280px] bg-gray-400 border-2 border-transparent p-3 rounded-xl space-y-5 cursor-pointer shadow-md shadow-black/25 hover:border-gray-300">
          <div className="bg-gradient-to-br from-[#00E5FF] to-[#002171] w-[306px] h-[156px] rounded-lg flex items-center justify-center">
            <span className="text-xl font-title leading-title text-gray-100 text-center">
              Em construção...
            </span>
          </div>
          <div className="space-y-2">
            <p className="font-title leading-title text-gray-100">Outros</p>
            <span className="text-sm leading-text text-gray-200">
              Lista de projetos menores e com fins de estudo.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
