import { LucideArrowLeft } from 'lucide-react'
import { NavLink } from 'react-router'

export function ExamScheduler() {
  return (
    <div className="h-dvh w-full bg-gray-500 flex flex-col items-start px-20 py-20 gap-10">
      <div className="space-y-2">
        <NavLink to="/" className="flex gap-2  items-center text-blue">
          <LucideArrowLeft className="size-5" />
          Voltar
        </NavLink>
        <h2 className="text-gray-100 font-title leading-title text-3xl text-shadow-lg/40">
          Exam Scheduler
        </h2>
      </div>
      <p className="text-gray-200 leading-text">
        Exam Scheduler é um projeto Full Stack construído utilizando Node.js com
        Fastify e React. A aplicação foi desenvolvida para facilitar o
        agendamento de avaliações, requisitada pela UNIFAA (Universidade Federal
        de Valença) como um projeto de formação.
      </p>
    </div>
  )
}
