import { motion } from 'motion/react'

export function AboutMe() {
  return (
    <section className="bg-gray-500 border-y border-border">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-[1080px] mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-12 md:gap-20 items-start"
      >
        <div>
          <span className="font-subtitle text-cyan text-xs tracking-[0.22em] uppercase">
            Sobre mim
          </span>
          <h2 className="font-title text-gray-100 font-black text-3xl mt-4 leading-title">
            Quem está por trás do código
          </h2>
          <div className="mt-8 flex flex-col gap-6">
            <div>
              <span className="font-subtitle text-cyan text-2xl font-black">
                2022
              </span>
              <p className="font-sans text-gray-300 text-xs mt-1">
                Início dos estudos
              </p>
            </div>
            <div>
              <span className="font-subtitle text-cyan text-2xl font-black">
                10+
              </span>
              <p className="font-sans text-gray-300 text-xs mt-1">
                Projetos entregues
              </p>
            </div>
            <div>
              <span className="font-subtitle text-cyan text-2xl font-black">
                Front-End
              </span>
              <p className="font-sans text-gray-300 text-xs mt-1">
                Com suporte a back-end
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-5 pt-1 md:pt-8">
          <p className="font-sans text-gray-200 leading-text">
            Desenvolvedor Front-End com foco em React, formado em Análise e
            Desenvolvimento de Sistemas. Desde 2022 me dedico a transformar
            ideias em interfaces modernas, responsivas e centradas na
            experiência do usuário. Quando necessário, estendo isso ao back-end
            com Node.js para entregas full stack.
          </p>
          <p className="font-sans text-gray-200 leading-text">
            Atualmente em busca de oportunidades para contribuir em projetos
            desafiadores, unindo código limpo, design e funcionalidade.
          </p>
          <div className="mt-2 h-px w-full bg-border" />
          <p className="font-subtitle text-gray-300 text-xs tracking-[0.15em] uppercase">
            Análise e Desenvolvimento de Sistemas — Formado
          </p>
        </div>
      </motion.div>
    </section>
  )
}
