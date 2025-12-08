import { LucideArrowLeft } from 'lucide-react'
import { NavLink } from 'react-router'

export function MovieCatalog() {
  return (
    <div className="w-full bg-gray-950 text-gray-100 flex flex-col items-start px-20 py-20 gap-10">
      <section className="space-y-2">
        <NavLink
          to="/"
          className="flex gap-2 items-center text-blue-400 font-medium hover:underline"
        >
          <LucideArrowLeft className="size-5" />
          Voltar
        </NavLink>
        <div className="space-y-1">
          <h2 className="font-title text-3xl leading-tight text-shadow-lg/40">
            Movie Catalog
          </h2>
          <div className="space-x-1.5">
            <span>🔗</span>
            <a
              href="https://movie-catalog-sage.vercel.app/"
              className="text-blue-400 hover:underline mb-1"
              target="_blank"
              rel="noreferrer"
            >
              movie-catalog-sage.vercel.app
            </a>
          </div>
        </div>
      </section>

      <section className="space-y-4 max-w-[768px]">
        <p className="text-gray-200 leading-text">
          <strong className="font-bold text-gray-100">Movie Catalog</strong> é
          uma aplicação web para explorar filmes utilizando a API do TMDB (The
          Movie Database). O sistema permite buscar títulos, visualizar
          informações detalhadas e descobrir os filmes mais populares do
          momento.
        </p>
        <p className="text-gray-200 leading-text">
          O projeto foi desenvolvido como uma base para testes e validação de
          ideias para uma aplicação maior. O foco esteve na criação de uma
          estrutura sólida e na experimentação de interfaces e fluxos de
          usuário.
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-xl mb-2">
          🚀 Funcionalidades principais
        </h3>
        <ul className="list-disc list-inside space-y-1 text-gray-300">
          <li>Descobrir os 20 filmes mais populares do momento pelo TMDB</li>
          <li>Pesquisar por filmes específicos</li>
          <li>
            Visualizar detalhes dos filmes, incluindo sinopse, avaliação e mais
          </li>
          <li>Suporte a tema claro e escuro, com alternância dinâmica.</li>
        </ul>
      </section>

      <section className="space-y-4 max-w-[768px]">
        <h3 className="font-semibold text-xl mb-2">🛠️ Foco do projeto</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-300">
          <li>
            Projeto criado para explorar e testar ideias de design, usabilidade
            e responsividade.
          </li>
          <li>Focado em UI, navegação e apresentação de informações.</li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold text-xl mb-2">🛠 Tecnologias utilizadas</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-300">
          <li>React + TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Tanstack Query</li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold text-xl mb-2">🔗 Recursos do projeto</h3>
        <div className="mb-1">
          <span>Código fonte: </span>
          <a
            href="https://github.com/matheusc1/movie-catalog"
            className="text-blue-400 hover:underline mb-1"
            target="_blank"
            rel="noreferrer"
          >
            github.com/matheusc1/movie-catalog
          </a>
        </div>
        <div className="mb-1">
          <span>Design / Protótipo (Figma): </span>
          <a
            href="https://www.figma.com/design/8FRBJSj3mKpcv6s6ZulXaE/movie-catalog?node-id=82-2&t=3sWvVZyVZViMxsif-1"
            className="text-blue-400 hover:underline mb-1"
            target="_blank"
            rel="noreferrer"
          >
            figma.com/design
          </a>
        </div>
      </section>

      <section>
        <h3 className="font-semibold text-xl mb-2">📸 Screenshots</h3>
        <div className="flex flex-col gap-4">Em construção</div>
      </section>
    </div>
  )
}
