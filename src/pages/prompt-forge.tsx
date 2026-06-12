import { ProjectLayout } from '../components/project-layout'
import { ProjectSection } from '../components/project-section'

const FRONTEND = [
  'React',
  'TypeScript',
  'Vite',
  'Tailwind CSS',
  'TanStack Query',
  'Vitest + Testing Library',
]
const BACKEND = [
  'Node.js',
  'Fastify',
  'TypeScript',
  'Zod',
  'OpenRouter API',
  'Vitest',
]

export function PromptForge() {
  return (
    <ProjectLayout
      title="Prompt Forge"
      liveUrl="https://prompt-forge-wheat.vercel.app/"
      liveNote="(pode ter lentidão — back-end no Render)"
    >
      <ProjectSection title="Sobre o projeto">
        <p className="font-sans text-gray-200 leading-text text-sm">
          <strong className="font-semibold text-gray-100">Prompt Forge</strong>{' '}
          é uma aplicação web para avaliar e melhorar prompts com IA. Insira sua
          API Key do OpenRouter, escolha um modelo e receba feedback baseado em
          critérios como clareza, precisão, completude, verbosidade e
          alinhamento com o intent.
        </p>
        <p className="font-sans text-gray-200 leading-text text-sm">
          Desenvolvido para explorar a integração de um front-end React com um
          back-end Fastify consumindo APIs externas de IA.
        </p>
      </ProjectSection>

      <ProjectSection title="Como funciona">
        <ol className="font-sans text-gray-200 text-sm leading-text space-y-2 list-decimal list-inside">
          <li>Selecione um modelo e insira sua API Key do OpenRouter</li>
          <li>Escreva seu prompt e defina o intent</li>
          <li>Adicione contexto adicional se necessário</li>
          <li>Receba notas em 5 critérios + feedback detalhado</li>
          <li>Opcionalmente, gere uma versão otimizada do prompt</li>
        </ol>
      </ProjectSection>

      <ProjectSection title="Aprendizados">
        <ul className="font-sans text-gray-200 text-sm leading-text space-y-3 list-disc list-inside">
          <li>
            <strong className="text-gray-100">
              Integração com APIs externas
            </strong>{' '}
            — gerenciei comunicação com a OpenRouter API incluindo tratamento de
            erros, retry logic, timeouts e normalização de respostas entre
            modelos.
          </li>
          <li>
            <strong className="text-gray-100">
              IA como ferramenta de desenvolvimento
            </strong>{' '}
            — usei IA para acelerar validação de dados, testes e documentação,
            com revisão manual, focando mais em arquitetura e regras de negócio.
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

      <ProjectSection title="Recursos">
        <div>
          <span className="font-sans text-gray-300 text-sm">
            Código fonte:{' '}
          </span>
          <a
            href="https://github.com/matheusc1/prompt-forge"
            target="_blank"
            rel="noreferrer"
            className="font-sans text-cyan text-sm hover:underline"
          >
            github.com/matheusc1/prompt-forge
          </a>
        </div>
      </ProjectSection>
    </ProjectLayout>
  )
}
