import { LucideArrowLeft } from 'lucide-react'
import { NavLink } from 'react-router'

export function MyBookList() {
  return (
    <div className="w-full h-dvh bg-gray-950 text-gray-100 flex flex-col items-start px-20 py-20 gap-10">
      <div className="space-y-2">
        <NavLink
          to="/"
          className="flex gap-2 items-center text-blue-400 hover:underline"
        >
          <LucideArrowLeft className="size-5" />
          Voltar
        </NavLink>
        <h2 className="font-title text-3xl leading-tight text-shadow-lg/40">
          MyBookList
        </h2>
      </div>

      <section className="space-y-4 max-w-[768px]">
        <p className="text-gray-200 leading-text">
          <strong className="font-bold text-gray-100">MyBookList</strong> é uma
          aplicação voltada para leitores que desejam registrar e acompanhar
          suas leituras de forma organizada e visual. Ela permite que os
          usuários cadastrem os livros que estão lendo, já leram ou desejam ler,
          além de registrar detalhes como datas de início e término, número de
          páginas, gênero literário e notas pessoais.
        </p>
        <p className="text-gray-200 leading-text">Em construção...</p>
      </section>
    </div>
  )
}
