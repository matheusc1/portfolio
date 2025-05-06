import { LucideArrowLeft } from 'lucide-react'
import { NavLink } from 'react-router'

export function ExamScheduler() {
  return (
    <div className="w-full bg-gray-950 text-gray-100 flex flex-col items-start px-20 py-20 gap-10">
      <div className="space-y-2">
        <NavLink
          to="/"
          className="flex gap-2 items-center text-blue-400 hover:underline"
        >
          <LucideArrowLeft className="size-5" />
          Voltar
        </NavLink>
        <h2 className="font-title text-3xl leading-tight text-shadow-lg/40">
          Exam Scheduler
        </h2>
      </div>

      <section className="space-y-4 max-w-[728px]">
        <p className="text-gray-200 leading-text">
          <strong className="font-bold text-gray-100">Exam Scheduler</strong> é um sistema
          Full Stack criado para facilitar o agendamento de avaliações na
          UNIFAA. A aplicação permite que estudantes agendem provas, que
          coordenadores visualizem os agendamentos e que administradores
          gerenciem dados acadêmicos e operacionais.
        </p>
        <p className="text-gray-200 leading-text">
          O projeto foi desenvolvido como parte da formação acadêmica em Análise
          e Desenvolvimento de Sistemas e é dividido em duas partes: uma API com
          Node.js + Fastify e um front-end em React.
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-xl mb-2">🛠 Tecnologias utilizadas</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-300">
          <li>React + TypeScript</li>
          <li>Tailwind CSS e shadcn/ui</li>
          <li>React Hook Form + Zod</li>
          <li>Tanstack Query + Axios</li>
          <li>Day.js</li>
          <li>Node.js + Fastify</li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold text-xl mb-2">
          🚀 Funcionalidades principais
        </h3>
        <ul className="list-disc list-inside space-y-1 text-gray-300">
          <li>Estudantes podem agendar e reagendar avaliações</li>
          <li>Coordenadores filtram agendamentos por polo</li>
          <li>
            Administradores gerenciam polos, períodos, disciplinas, alunos e
            horários
          </li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold text-xl mb-2">🔗 Repositórios</h3>
        <div className='mb-1'>
          <span>Front-End: </span>
          <a
            href="https://github.com/matheusc1/unifaa-exam-scheduler"
            className="text-blue-400 hover:underline mb-1"
            target="_blank"
            rel="noreferrer"
          >
            github.com/matheusc1/unifaa-exam-scheduler
          </a>
        </div>
        <div>
          <span>Back-End: </span>
          <a
            href="https://github.com/matheusc1/exam-scheduler-server"
            className="text-blue-400 hover:underline mb-1"
            target="_blank"
            rel="noreferrer"
          >
            github.com/matheusc1/exam-scheduler-server
          </a>
        </div>
      </section>
    </div>
  )
}
