import { ProjectLayout } from '../components/project-layout'
import { ProjectSection } from '../components/project-section'

const STACK = [
  'React',
  'TypeScript',
  'Tailwind CSS',
  'TanStack Query',
  'TMDB API',
]

const SCREENSHOTS = [
  { src: 'home-dark', alt: 'Home — modo escuro' },
  { src: 'home-light', alt: 'Home — modo claro' },
  { src: 'search-dark', alt: 'Search — modo escuro' },
  { src: 'search-light', alt: 'Search — modo claro' },
  { src: 'details-dark', alt: 'Details — modo escuro' },
  { src: 'details-light', alt: 'Details — modo claro' },
]

export function MovieCatalog() {
  return (
    <ProjectLayout
      title="Movie Catalog"
      liveUrl="https://movie-catalog-sage.vercel.app/"
    >
      <ProjectSection title="Sobre o projeto">
        <p className="font-sans text-gray-200 leading-text text-sm">
          <strong className="font-semibold text-gray-100">Movie Catalog</strong>{' '}
          é uma aplicação para explorar filmes via API do TMDB. Permite buscar
          títulos, visualizar informações detalhadas e descobrir os mais
          populares do momento.
        </p>
        <p className="font-sans text-gray-200 leading-text text-sm">
          Criado para explorar e testar ideias de design, usabilidade e
          responsividade, com foco em UI e apresentação de informações.
        </p>
      </ProjectSection>

      <ProjectSection title="Funcionalidades">
        <ul className="font-sans text-gray-200 text-sm leading-text space-y-2 list-disc list-inside">
          <li>20 filmes mais populares do momento via TMDB</li>
          <li>Pesquisa por título</li>
          <li>Página de detalhes com sinopse, avaliação e mais</li>
          <li>Tema claro e escuro com alternância dinâmica</li>
        </ul>
      </ProjectSection>

      <ProjectSection title="Stack">
        <ul className="space-y-2">
          {STACK.map(item => (
            <li key={item} className="flex items-center gap-2.5">
              <span className="w-1 h-1 rounded-full bg-cyan flex-shrink-0" />
              <span className="font-sans text-gray-200 text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </ProjectSection>

      <ProjectSection title="Recursos">
        <div className="space-y-1">
          <div>
            <span className="font-sans text-gray-300 text-sm">
              Código fonte:{' '}
            </span>
            <a
              href="https://github.com/matheusc1/movie-catalog"
              target="_blank"
              rel="noreferrer"
              className="font-sans text-cyan text-sm hover:underline"
            >
              github.com/matheusc1/movie-catalog
            </a>
          </div>
          <div>
            <span className="font-sans text-gray-300 text-sm">Figma: </span>
            <a
              href="https://www.figma.com/design/8FRBJSj3mKpcv6s6ZulXaE/movie-catalog?node-id=82-2"
              target="_blank"
              rel="noreferrer"
              className="font-sans text-cyan text-sm hover:underline"
            >
              figma.com/design
            </a>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Screenshots">
        <div className="flex flex-col gap-4">
          {SCREENSHOTS.map(({ src, alt }) => (
            <img
              key={src}
              src={`${import.meta.env.BASE_URL}screenshots/movie-catalog/${src}.png`}
              alt={alt}
              className="rounded-xl border border-border"
            />
          ))}
        </div>
      </ProjectSection>
    </ProjectLayout>
  )
}
