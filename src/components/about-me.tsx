import { motion } from 'motion/react'

export function AboutMe() {
  return (
    <div className="pt-10 space-y-2 text-center bg-gray-500">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-[720px] mx-auto px-6"
      >
        <p className="text-red font-subtitle leading-title text-xl">
          Sobre mim
        </p>
        <h2 className="text-gray-100 font-title leading-title text-2xl text-shadow-sm/40">
          Quem está por trás do código
        </h2>
        <p className="text-gray-200 leading-text pt-8 text-left">
          Desenvolvedor Front-End com foco em React, formado em Análise e
          Desenvolvimento de Sistemas. Desde 2022 venho me dedicando a
          transformar ideias em interfaces modernas, responsivas e centradas na
          experiência do usuário. Quando necessário, estendo isso ao back-end
          com Node.js para entregas full stack.
        </p>
        <p className="text-gray-200 leading-text pt-2 text-left">
          Atualmente em busca de oportunidades para contribuir em projetos
          desafiadores, unindo código limpo, design e funcionalidade.
        </p>
      </motion.section>
    </div>
  )
}
