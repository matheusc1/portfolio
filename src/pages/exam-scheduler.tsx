import { ProjectLayout } from '../components/project-layout'
import { ProjectSection } from '../components/project-section'

const FRONTEND = [
  'React',
  'TypeScript',
  'Tailwind CSS',
  'TanStack Query',
  'shadcn/ui',
  'Axios',
]
const BACKEND = ['Node.js', 'Fastify', 'TypeScript', 'Zod']

const SCREENSHOTS = [
  { src: 'login-dark', alt: 'Login — modo escuro' },
  { src: 'login-light', alt: 'Login — modo claro' },
  { src: 'enrollment-dark', alt: 'Matrículas — modo escuro' },
  { src: 'enrollment-light', alt: 'Matrículas — modo claro' },
  { src: 'schedules-dark', alt: 'Agendamentos — modo escuro' },
  { src: 'schedules-light', alt: 'Agendamentos — modo claro' },
  { src: 'schedule-dark', alt: 'Agendamento — modo escuro' },
  { src: 'schedule-light', alt: 'Agendamento — modo claro' },
]

export function ExamScheduler() {
  return (
    <ProjectLayout title="Exam Scheduler">
      <ProjectSection title="Sobre o projeto">
        <p className="font-sans text-gray-200 leading-text text-sm">
          <strong className="font-semibold text-gray-100">
            Exam Scheduler
          </strong>{' '}
          é um sistema Full Stack criado para facilitar o agendamento de
          avaliações na UNIFAA. Estudantes agendam provas, coordenadores
          visualizam agendamentos e administradores gerenciam dados acadêmicos.
        </p>
        <p className="font-sans text-gray-200 leading-text text-sm">
          Projeto acadêmico desenvolvido em grupo como parte da formação em
          Análise e Desenvolvimento de Sistemas.
        </p>
      </ProjectSection>

      <ProjectSection title="Minha atuação">
        <p className="font-sans text-gray-200 leading-text text-sm">
          Atuei no design da interface, desenvolvimento front-end e back-end, e
          integração entre as camadas. Organizado em duas camadas: back-end com
          Node.js + Fastify e front-end com React + TypeScript.
        </p>
      </ProjectSection>

      <ProjectSection title="Desafios técnicos">
        <ul className="font-sans text-gray-200 text-sm leading-text space-y-3 list-disc list-inside">
          <li>
            Primeiro projeto completo com{' '}
            <strong className="text-gray-100">Node.js e Fastify</strong> —
            aprendizado prático durante o desenvolvimento.
          </li>
          <li>
            <strong className="text-gray-100">Arquitetura da API</strong> sem
            referências anteriores — priorizei separação de responsabilidades e
            reuso de código.
          </li>
          <li>
            <strong className="text-gray-100">Autenticação com roles</strong>{' '}
            para três perfis distintos (estudante, coordenador, administrador),
            garantindo acesso adequado por rota.
          </li>
        </ul>
      </ProjectSection>

      <ProjectSection title="Funcionalidades">
        <ul className="font-sans text-gray-200 text-sm leading-text space-y-2 list-disc list-inside">
          <li>Estudantes agendam e reagendam avaliações</li>
          <li>Coordenadores filtram agendamentos por polo</li>
          <li>
            Administradores gerenciam polos, períodos, disciplinas e horários
          </li>
        </ul>
      </ProjectSection>

      <ProjectSection title="Stack">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="font-subtitle text-gray-300 text-xs tracking-[0.15em] uppercase mb-3">
              Front-end
            </p>
            <ul className="space-y-2">
              {FRONTEND.map(item => (
                <li key={item} className="flex items-center gap-2.5">
                  <span className="w-1 h-1 rounded-full bg-cyan flex-shrink-0" />
                  <span className="font-sans text-gray-200 text-sm">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-subtitle text-gray-300 text-xs tracking-[0.15em] uppercase mb-3">
              Back-end
            </p>
            <ul className="space-y-2">
              {BACKEND.map(item => (
                <li key={item} className="flex items-center gap-2.5">
                  <span className="w-1 h-1 rounded-full bg-cyan flex-shrink-0" />
                  <span className="font-sans text-gray-200 text-sm">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Repositórios">
        <div className="space-y-1">
          <div>
            <span className="font-sans text-gray-300 text-sm">Front-end: </span>
            <a
              href="https://github.com/matheusc1/exam-scheduler"
              target="_blank"
              rel="noreferrer"
              className="font-sans text-cyan text-sm hover:underline"
            >
              github.com/matheusc1/exam-scheduler
            </a>
          </div>
          <div>
            <span className="font-sans text-gray-300 text-sm">Back-end: </span>
            <a
              href="https://github.com/matheusc1/exam-scheduler-server"
              target="_blank"
              rel="noreferrer"
              className="font-sans text-cyan text-sm hover:underline"
            >
              github.com/matheusc1/exam-scheduler-server
            </a>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Screenshots">
        <div className="flex flex-col gap-4">
          {SCREENSHOTS.map(({ src, alt }) => (
            <img
              key={src}
              src={`${import.meta.env.BASE_URL}screenshots/exam-scheduler/${src}.png`}
              alt={alt}
              className="rounded-xl border border-border"
            />
          ))}
        </div>
      </ProjectSection>
    </ProjectLayout>
  )
}
