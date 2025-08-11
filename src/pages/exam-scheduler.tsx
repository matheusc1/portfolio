import { LucideArrowLeft } from 'lucide-react'
import { NavLink } from 'react-router'

export function ExamScheduler() {
  return (
    <div className="w-full bg-gray-950 text-gray-100 flex flex-col items-start px-20 py-20 gap-10">
      <div className="space-y-2">
        <NavLink
          to="/"
          className="flex gap-2 items-center text-blue-400 font-medium hover:underline"
        >
          <LucideArrowLeft className="size-5" />
          Voltar
        </NavLink>
        <h2 className="font-title text-3xl leading-tight text-shadow-lg/40">
          Exam Scheduler
        </h2>
      </div>

      <section className="space-y-4 max-w-[768px]">
        <p className="text-gray-200 leading-text">
          <strong className="font-bold text-gray-100">Exam Scheduler</strong> é
          um sistema Full Stack criado para facilitar o agendamento de
          avaliações na UNIFAA. A aplicação permite que estudantes agendem
          provas, que coordenadores visualizem os agendamentos e que
          administradores gerenciem dados acadêmicos e operacionais.
        </p>
        <p className="text-gray-200 leading-text">
          O projeto foi desenvolvido como parte da formação acadêmica em Análise
          e Desenvolvimento de Sistemas e é dividido em duas partes: uma API com
          Node.js + Fastify e um front-end em React.
        </p>
        <p className="text-gray-200 leading-text">
          O projeto foi encerrado com um bom nível de conclusão, restando apenas
          ajustes finais como mensagens de erro personalizadas, skeletons
          durante o carregamento das informações e testes automatizados. O
          encerramento ocorreu após uma pausa no programa EAD da faculdade, o
          que retirou o principal foco e propósito institucional do sistema.
        </p>
      </section>

      <section className="space-y-4 max-w-[768px]">
        <h3 className="font-semibold text-xl mb-2">⚙️ Desafios técnicos</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-300">
          <li>
            Este foi meu primeiro projeto completo utilizando{' '}
            <strong className="text-gray-100">Node.js e Fastify</strong>, o que
            exigiu aprendizado prático da linguagem e do framework durante o
            desenvolvimento.
          </li>
          <li>
            Como ainda não tinha muita referência de projetos back-end, a{' '}
            <strong className="text-gray-100">arquitetura da API</strong> foi um
            desafio. Optei por uma estrutura que priorizasse a separação de
            responsabilidades e a reutilização de código, mesmo sem saber se era
            o padrão mais ideal.
          </li>
          <li>
            A implementação da{' '}
            <strong className="text-gray-100">
              autenticação com controle de acesso
            </strong>{' '}
            também foi desafiadora. O sistema exigia regras diferentes para
            estudantes, coordenadores e administradores, então precisei
            estruturar uma lógica de{' '}
            <strong className="text-gray-100">roles</strong> que garantisse a
            segurança e o acesso adequado a cada rota.
          </li>
        </ul>
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
        <div className="mb-1">
          <span>Front-End: </span>
          <a
            href="https://github.com/matheusc1/exam-scheduler"
            className="text-blue-400 hover:underline mb-1"
            target="_blank"
            rel="noreferrer"
          >
            github.com/matheusc1/exam-scheduler
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

      <section>
        <h3 className="font-semibold text-xl mb-2">📸 Screenshots</h3>
        <div className="flex flex-col gap-4">
          <img
            src={`${import.meta.env.BASE_URL}screenshots/login-dark.png`}
            alt="Login modo claro"
            className="rounded-lg shadow-lg"
          />
          <img
            src={`${import.meta.env.BASE_URL}screenshots/login-light.png`}
            alt="Login modo escuro"
            className="rounded-lg shadow-lg"
          />

          <img
            src={`${import.meta.env.BASE_URL}screenshots/enrollment-dark.png`}
            alt="Painel de matrículas modo escuro"
            className="rounded-lg shadow-lg"
          />
          <img
            src={`${import.meta.env.BASE_URL}screenshots/enrollment-light.png`}
            alt="Painel de matrículas modo claro"
            className="rounded-lg shadow-lg"
          />

          <img
            src={`${import.meta.env.BASE_URL}screenshots/schedules-dark.png`}
            alt="Avaliações agendadas modo escuro"
            className="rounded-lg shadow-lg"
          />
          <img
            src={`${import.meta.env.BASE_URL}screenshots/schedules-light.png`}
            alt="Avaliações agendadas modo claro"
            className="rounded-lg shadow-lg"
          />

          <img
            src={`${import.meta.env.BASE_URL}screenshots/schedule-dark.png`}
            alt="Painel de agendamento de avaliações para alunos modo escuro"
            className="rounded-lg shadow-lg"
          />
          <img
            src={`${import.meta.env.BASE_URL}screenshots/schedule-light.png`}
            alt="Painel de agendamento de avaliações para alunos modo claro"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
    </div>
  )
}
