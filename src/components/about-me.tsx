import { motion } from 'motion/react'

export function AboutMe() {
  return (
    <div className="pt-10 space-y-2 text-center bg-gray-500">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-red font-subtitle leading-title text-xl">
          Sobre mim
        </p>
        <h2 className="text-gray-100 font-title leading-title text-2xl text-shadow-sm/40">
          Quem está por trás do código
        </h2>
        <p className="text-gray-200 leading-text pt-12 max-w-[720px] mx-auto text-left">
          Desde meados de 2022, venho me dedicando à programação, sempre
          buscando transformar ideias em soluções reais. Sou formado em Análise
          e Desenvolvimento de Sistemas e meu foco principal é o desenvolvimento
          Front-End, criando interfaces modernas, responsivas e com foco na
          experiência do usuário usando React.
        </p>
        <p className="text-gray-200 leading-text max-w-[720px] mx-auto text-left">
          Também exploro o back-end com Node.js, desenvolvendo projetos full
          stack do início ao fim quando necessário. Gosto de unir design e
          funcionalidade, escrevendo código limpo e buscando sempre evoluir como
          desenvolvedor. Estou sempre em busca de novos desafios para aplicar e
          aprimorar minhas habilidades.
        </p>
        <p className="text-gray-200 leading-text max-w-[720px] mx-auto text-left">
          Atualmente, estou buscando oportunidades para colaborar em projetos
          onde eu possa contribuir e continuar evoluindo como desenvolvedor. Meu
          foco é sempre entregar soluções bem estruturadas e funcionais, unindo
          eficiência e estética.
        </p>
      </motion.section>
    </div>
  )
}
