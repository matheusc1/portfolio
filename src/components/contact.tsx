import { motion } from 'motion/react'
import {
  LucideArrowUpRight,
  LucideGithub,
  LucideLinkedin,
  LucideMail,
} from 'lucide-react'

const LINKS = [
  {
    href: 'https://www.linkedin.com/in/matheusc1/',
    icon: LucideLinkedin,
    label: 'LinkedIn',
    fill: true,
  },
  {
    href: 'https://github.com/matheusc1',
    icon: LucideGithub,
    label: 'GitHub',
    fill: false,
  },
  {
    href: 'mailto:cardoso.matheusbs@gmail.com',
    icon: LucideMail,
    label: 'E-mail',
    fill: false,
  },
]

export function Contact() {
  return (
    <section className="bg-gray-600 py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-[520px] mx-auto text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-10 bg-cyan" />
          <span className="font-subtitle text-cyan text-xs tracking-[0.22em] uppercase">
            Contato
          </span>
          <div className="h-px w-10 bg-cyan" />
        </div>
        <h2 className="font-title text-gray-100 font-black text-3xl mt-4 mb-4">
          Vamos trabalhar juntos?
        </h2>
        <p className="font-sans text-gray-200 text-sm leading-text mb-12">
          Estou disponível para oportunidades de emprego e projetos freelance.
          Entre em contato.
        </p>

        <div className="flex flex-col gap-3">
          {LINKS.map(({ href, icon: Icon, label, fill }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group flex items-center justify-between px-6 py-4 bg-gray-400 border border-border rounded-xl hover:border-cyan transition-colors duration-300"
            >
              <div className="flex items-center gap-4">
                <Icon
                  className={`size-5 text-gray-300 group-hover:text-cyan transition-colors duration-300 ${fill ? 'fill-gray-300 group-hover:fill-cyan' : ''}`}
                />
                <span className="font-sans text-gray-200 text-sm font-medium group-hover:text-gray-100 transition-colors duration-300">
                  {label}
                </span>
              </div>
              <LucideArrowUpRight className="size-4 text-gray-300 group-hover:text-cyan transition-colors duration-300" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
