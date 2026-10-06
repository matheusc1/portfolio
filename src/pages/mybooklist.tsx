import { ProjectLayout } from '../components/project-layout'
import { ProjectSection } from '../components/project-section'

const FRONTEND = [
  'React',
  'TypeScript',
  'TanStack Start',
  'TanStack Router',
  'TanStack Query',
  'Tailwind CSS v4',
  'Radix UI',
  'Base UI',
  'Zustand',
]

const BACKEND = [
  'NestJS',
  'TypeScript',
  'Drizzle ORM',
  'PostgreSQL (Neon)',
  'Passport.js',
  'class-validator',
]

const TESTS_AND_INFRA = [
  'Vitest + React Testing Library',
  'Playwright (E2E)',
  'Jest (unitários e E2E na API)',
  'Swagger / Scalar',
  'Vercel (front-end)',
  'Render (API)',
]

const STACK_GROUPS = [
  { title: 'Front-end', items: FRONTEND },
  { title: 'Back-end', items: BACKEND },
  { title: 'Testes e infra', items: TESTS_AND_INFRA },
]

const FEATURES = [
  'Estante pessoal com status: lendo, finalizado, pausado, quero ler e abandonado',
  'Registro de sessões de leitura com página inicial e final',
  'Dashboard com estatísticas semanais, metas e histórico de atividade',
  'Calendário de leitura com visualização mensal por sessão',
  'Teste e acompanhamento da velocidade de leitura (páginas por minuto)',
  'Metas anuais de leitura com acompanhamento de progresso',
  'Login com Google ou GitHub',
]

const SCREENSHOTS = [
  {
    src: 'dashboard',
    alt: 'Dashboard com meta anual e estatísticas da semana',
  },
  { src: 'books', alt: 'Biblioteca com busca e filtro por status' },
  { src: 'activity', alt: 'Calendário mensal de atividade de leitura' },
  {
    src: 'reading-speed',
    alt: 'Resultado do teste de velocidade de leitura',
  },
  { src: 'landing', alt: 'Landing page do MyBookList' },
  { src: 'login', alt: 'Página de login com Google e GitHub' },
]

const RESOURCES = [
  {
    label: 'Aplicação',
    href: 'https://mybooklist.site',
    text: 'mybooklist.site',
  },
  {
    label: 'Documentação da API',
    href: 'https://api.mybooklist.site/reference',
    text: 'api.mybooklist.site/reference',
  },
  {
    label: 'Design / Protótipo',
    href: 'https://www.figma.com/design/MOwkEdPxgACp1qcBrqiVhR/MyBookList?m=auto&t=7iCBu3r1HVutww9q-7',
    text: 'figma.com/design',
  },
  {
    label: 'Repositório (front-end)',
    href: 'https://github.com/matheusc1/mybooklist',
    text: 'github.com/matheusc1/mybooklist',
  },
  {
    label: 'Repositório (back-end)',
    href: 'https://github.com/matheusc1/mybooklist-api',
    text: 'github.com/matheusc1/mybooklist-api',
  },
]

function Code({ children }: { children: React.ReactNode }) {
  return <code className="text-cyan text-xs">{children}</code>
}

function Highlight({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <li>
      <strong className="text-gray-100">{title}</strong>: {children}
    </li>
  )
}

export function MyBookList() {
  return (
    <ProjectLayout
      title="MyBookList"
      liveUrl="https://mybooklist.site"
      liveNote="(o primeiro acesso pode demorar até um minuto)"
    >
      <ProjectSection title="Sobre o projeto">
        <p className="font-sans text-gray-200 leading-text text-sm">
          <strong className="font-semibold text-gray-100">MyBookList</strong> é
          uma aplicação para quem quer registrar e acompanhar as próprias
          leituras. Dá para organizar os livros por status, registrar sessões de
          leitura, ver métricas como páginas por dia e ritmo de leitura, e
          acompanhar a atividade em um calendário mensal.
        </p>
        <p className="font-sans text-gray-200 leading-text text-sm">
          É meu projeto principal de portfólio, desenvolvido para aplicar
          arquitetura front-end e full stack em um produto completo, do design
          ao deploy. O MVP está pronto e funcionando, com testes automatizados
          no front-end e na API.
        </p>
        <p className="font-sans text-gray-300 leading-text text-sm">
          Para testar, é preciso entrar com uma conta Google ou GitHub. A API
          roda em um plano gratuito, então o primeiro acesso após um período de
          inatividade pode levar até um minuto.
        </p>
      </ProjectSection>

      <ProjectSection title="Funcionalidades">
        <ul className="font-sans text-gray-200 text-sm leading-text space-y-2 list-disc list-inside">
          {FEATURES.map(feature => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </ProjectSection>

      <ProjectSection title="Destaques técnicos">
        <ul className="font-sans text-gray-200 text-sm leading-text space-y-3 list-disc list-inside">
          <Highlight title="Autenticação com cookie httpOnly">
            login via Google e GitHub com Passport.js, e JWT guardado em cookie{' '}
            <Code>httpOnly</Code> compartilhado entre o front e a API, que ficam
            em subdomínios do mesmo domínio. O front usa{' '}
            <Code>createServerFn</Code> para verificar a sessão durante o SSR.
          </Highlight>

          <Highlight title="Endpoint de atividade agregado">
            a rota <Code>GET /activity?month=YYYY-MM</Code> agrega os dados
            necessários para o dashboard em uma única chamada, reduzindo
            roundtrips no front-end.
          </Highlight>

          <Highlight title="Sessões de leitura transacionais">
            criar uma sessão atualiza <Code>currentPage</Code>, verifica se{' '}
            <Code>currentPage &gt;= totalPages</Code> e marca o livro como
            finalizado, tudo na mesma transação. As operações que precisam de
            atomicidade recebem a <Code>Transaction</Code> como parâmetro, como{' '}
            <Code>syncProgress</Code> e <Code>resetProgress</Code>.
          </Highlight>

          <Highlight title="Inversão de dependência na API">
            os módulos definem uma classe abstrata de repositório (por exemplo,{' '}
            <Code>BooksRepository</Code> e <Code>GoalsRepository</Code>), usada
            como token de injeção do NestJS, e uma implementação com Drizzle
            registrada no módulo. Os services só conhecem o contrato, então os
            testes unitários injetam repositórios falsos, e os testes dos
            repositórios usam um <Code>Database</Code> mockado, sem banco real.
          </Highlight>

          <Highlight title="Cache com TanStack Query">
            as mutações invalidam as queries relacionadas a partir de um grafo
            central de query keys. Um teste E2E revelou uma invalidação que
            faltava entre sessões e metas.
          </Highlight>

          <Highlight title="Testes e acessibilidade">
            testes unitários e E2E na API com Jest, Vitest com React Testing
            Library no front e specs Playwright rodando contra uma API de teste
            com banco isolado. A interface passou por uma auditoria de
            acessibilidade com HTML semântico e atributos <Code>aria-*</Code>.
          </Highlight>
        </ul>
      </ProjectSection>

      <ProjectSection title="Stack">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STACK_GROUPS.map(group => (
            <div key={group.title}>
              <p className="font-subtitle text-gray-300 text-xs tracking-[0.15em] uppercase mb-3">
                {group.title}
              </p>
              <ul className="space-y-2">
                {group.items.map(item => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="w-1 h-1 rounded-full bg-cyan flex-shrink-0" />
                    <span className="font-sans text-gray-200 text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ProjectSection>

      <ProjectSection title="Recursos">
        <div className="space-y-1">
          {RESOURCES.map(resource => (
            <div key={resource.href}>
              <span className="font-sans text-gray-300 text-sm">
                {resource.label}:{' '}
              </span>
              <a
                href={resource.href}
                target="_blank"
                rel="noreferrer"
                className="font-sans text-cyan text-sm hover:underline"
              >
                {resource.text}
              </a>
            </div>
          ))}
        </div>
      </ProjectSection>

      <ProjectSection title="Screenshots">
        <div className="flex flex-col gap-4">
          {SCREENSHOTS.map(({ src, alt }) => (
            <img
              key={src}
              src={`${import.meta.env.BASE_URL}screenshots/mybooklist/${src}.png`}
              alt={alt}
              className="rounded-xl border border-border"
            />
          ))}
        </div>
      </ProjectSection>
    </ProjectLayout>
  )
}
