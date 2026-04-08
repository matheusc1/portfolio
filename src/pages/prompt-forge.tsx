import { LucideArrowLeft } from 'lucide-react'
import { NavLink } from 'react-router'

export function PromptForge() {
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
        <div className="space-y-1">
          <h2 className="font-title text-3xl leading-tight text-shadow-lg/40">
            Prompt Forge
          </h2>
          <div className="space-x-1.5">
            <span>🔗</span>
            <a
              href="https://prompt-forge-wheat.vercel.app/"
              className="text-blue-400 hover:underline mb-1"
              target="_blank"
              rel="noreferrer"
            >
              prompt-forge-wheat.vercel.app
            </a>
            <span className="text-gray-400 text-sm">
              (pode ter lentidão nas requisições por conta da hospedagem do
              back-end no Render)
            </span>
          </div>
        </div>
      </div>

      <section className="space-y-4 max-w-[768px]">
        <p className="text-gray-200 leading-text">
          <strong className="font-bold text-gray-100">Prompt Forge</strong> é
          uma aplicação web para avaliar e melhorar prompts com IA. Use sua API
          Key do OpenRouter, escolha um modelo de IA e receba feedback com
          sugestões e uma versão otimizada do prompt, tudo baseado em critérios
          como clareza, precisão, completude, verbosidade e alinhamento com o
          intent.
        </p>
        <p className="text-gray-200 leading-text">
          O projeto foi desenvolvido para explorar a integração de um front-end
          React com um back-end Fastify consumindo APIs externas de IA e
          gerenciando estado complexo com TanStack Query.
        </p>
      </section>

      <section className="space-y-4 max-w-[768px]">
        <h3 className="font-semibold text-xl mb-2">⚙️ Como funciona</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-300">
          <li>Selecione um modelo de IA e insira sua API Key do OpenRouter</li>
          <li>Escreva seu prompt e defina o intent (objetivo)</li>
          <li>
            Adicione contexto adicional se necessário para melhor compreensão
          </li>
          <li>
            Clique em "Avaliar prompt" e receba notas em 5 critérios + feedback
            detalhado
          </li>
          <li>
            Opcionalmente, gere uma versão melhorada do prompt com base no
            feedback
          </li>
        </ol>
      </section>

      <section className="space-y-4 max-w-[768px]">
        <h3 className="font-semibold text-xl mb-2">
          🚀 Funcionalidades principais
        </h3>
        <ul className="list-disc list-inside space-y-1 text-gray-300">
          <li>
            Avaliação automática de prompts com critérios: clareza, precisão,
            completude, verbosidade e alinhamento com intent
          </li>
          <li>Geração de feedback detalhado com sugestões práticas</li>
          <li>Otimização automática de prompts com base na avaliação</li>
          <li>
            Suporte a 5 modelos diferentes: GPT-4o Mini, Gemini 2.5 Flash Lite,
            Claude 3 Haiku, Auto (Melhor disponível) e Free
          </li>
          <li>Interface responsiva e intuitiva com feedback visual</li>
        </ul>
      </section>

      <section className="space-y-4 max-w-[768px]">
        <h3 className="font-semibold text-xl mb-2">
          👤 Minha atuação no projeto
        </h3>
        <p className="text-gray-200 leading-text">
          Responsável pelo desenvolvimento completo do projeto, desde o design
          inicial até a implementação e deploy de ambas as camadas. O foco
          esteve em criar uma arquitetura sólida no back-end e uma experiência
          de usuário fluida no front-end.
        </p>
      </section>

      <section className="space-y-4 max-w-[768px]">
        <h3 className="font-semibold text-xl mb-2">⚡ Aprendizados técnicos</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>
            Implementação de{' '}
            <strong className="text-gray-100">
              integração com APIs externas
            </strong>
            . O desafio foi gerenciar a comunicação com a OpenRouter API,
            incluindo tratamento de erros, retry logic, timeouts e normalização
            de respostas para diferentes modelos de IA.
          </li>
          <li>
            <strong className="text-gray-100">
              Desenvolvimento com IA como ferramenta
            </strong>
            . Utilizei IA para acelerar tarefas como validação de dados, escrita
            de testes e documentação, sempre com revisão e ajustes manuais
            quando necessário. Isso permitiu focar mais na arquitetura da
            aplicação e nas regras de negócio, otimizando o fluxo de
            desenvolvimento.
          </li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold text-xl mb-2">🛠 Stack — Front-end</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-300">
          <li>React + TypeScript</li>
          <li>Vite</li>
          <li>Tailwind CSS</li>
          <li>TanStack Query (React Query)</li>
          <li>Vitest + Testing Library</li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold text-xl mb-2">🛠 Stack — Back-end</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-300">
          <li>Node.js + Fastify</li>
          <li>TypeScript</li>
          <li>Zod (validação de schemas)</li>
          <li>OpenRouter API (integração com modelos de IA)</li>
          <li>Vitest</li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold text-xl mb-2">🔗 Recursos do projeto</h3>
        <div className="mb-1">
          <span>Código fonte: </span>
          <a
            href="https://github.com/matheusc1/prompt-forge"
            className="text-blue-400 hover:underline mb-1"
            target="_blank"
            rel="noreferrer"
          >
            github.com/matheusc1/prompt-forge
          </a>
        </div>
        <div className="mb-1">
          <span>Documentação interativa: </span>
          <span className="text-gray-300">
            /docs (disponível com o servidor rodando)
          </span>
        </div>
      </section>
    </div>
  )
}
