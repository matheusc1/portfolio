import { ProjectLayout } from '../components/project-layout'
import { ProjectSection } from '../components/project-section'

const FRONTEND = [
  'React',
  'TypeScript',
  'TanStack Router',
  'TanStack Query',
  'Tailwind CSS v4',
  'Radix UI',
  'Zustand',
]

const BACKEND = ['NestJS', 'TypeScript', 'PostgreSQL', 'Zod']

export function MyBookList() {
  return (
    <ProjectLayout title="MyBookList">
      <ProjectSection title="Sobre o projeto">
        <p className="font-sans text-gray-200 leading-text text-sm">
          <strong className="font-semibold text-gray-100">MyBookList</strong> é
          uma aplicação para leitores que desejam registrar e acompanhar suas
          leituras de forma organizada e visual. Permite cadastrar livros em
          leitura, já lidos ou desejados, registrar sessões de leitura,
          acompanhar métricas como páginas por dia e ritmo de leitura, e
          visualizar a atividade em um calendário mensal.
        </p>
        <p className="font-sans text-gray-200 leading-text text-sm">
          Projeto principal de portfólio — em construção ativa. Iniciado com o
          objetivo de aprofundar fundamentos de arquitetura front-end e full
          stack em um contexto real.
        </p>
      </ProjectSection>

      <ProjectSection title="Funcionalidades planejadas">
        <ul className="font-sans text-gray-200 text-sm leading-text space-y-2 list-disc list-inside">
          <li>
            Estante pessoal com status: lendo, finalizado, pausado, quero ler
          </li>
          <li>Registro de sessões de leitura com página inicial e final</li>
          <li>Dashboard com estatísticas semanais e histórico de atividade</li>
          <li>Calendário de leitura com visualização mensal por sessão</li>
          <li>Medição de velocidade de leitura (páginas/minuto)</li>
          <li>Metas de leitura com acompanhamento de progresso</li>
          <li>Autenticação via OAuth (Google / GitHub)</li>
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

      <ProjectSection title="Recursos">
        <div className="space-y-1">
          <div>
            <span className="font-sans text-gray-300 text-sm">
              Design / Protótipo:{' '}
            </span>
            <a
              href="https://www.figma.com/design/MOwkEdPxgACp1qcBrqiVhR/MyBookList?m=auto&t=7iCBu3r1HVutww9q-7"
              target="_blank"
              rel="noreferrer"
              className="font-sans text-cyan text-sm hover:underline"
            >
              figma.com/design
            </a>
          </div>
          <div>
            <span className="font-sans text-gray-300 text-sm">
              Repositório (front-end):{' '}
            </span>
            <a
              href="https://github.com/matheusc1/mybooklist"
              target="_blank"
              rel="noreferrer"
              className="font-sans text-cyan text-sm hover:underline"
            >
              github.com/matheusc1/mybooklist
            </a>
          </div>
        </div>
      </ProjectSection>
    </ProjectLayout>
  )
}
