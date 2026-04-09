import { motion } from 'motion/react'
import {
  LucideMonitorSmartphone,
  LucideDatabase,
  LucidePalette,
} from 'lucide-react'

export function Services() {
  return (
    <div className="min-h-[480px] bg-gray-600 space-y-10 pb-10 md:pb-0">
      <div className="pt-20 space-y-2 text-center">
        <p className="text-red font-subtitle leading-title text-xl">
          Meus serviços
        </p>
        <h2 className="text-gray-100 font-title leading-title text-2xl text-shadow-sm/40">
          Como posso ajudar seu negócio
        </h2>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-2 border-gray-500 w-[280px] rounded-xl p-5 space-y-5"
        >
          <LucideMonitorSmartphone className="size-10 text-purple" />
          <div className="space-y-2">
            <p className="font-title leading-title text-gray-100">
              Websites e Aplicativos
            </p>
            <span className="text-sm leading-text text-gray-200">
              Interfaces modernas e responsivas com React, focadas em
              usabilidade e performance.
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-2 border-gray-500 w-[280px] rounded-xl p-5 space-y-5"
        >
          <LucideDatabase className="size-10 text-yellow" />
          <div className="space-y-2">
            <p className="font-title leading-title text-gray-100">
              API e banco de dados
            </p>
            <span className="text-sm leading-text text-gray-200">
              Integração de APIs REST e modelagem de dados com Node.js para
              aplicações full stack.
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-2 border-gray-500 w-[280px] rounded-xl p-5 space-y-5"
        >
          <LucidePalette className="size-10 text-green" />
          <div className="space-y-2">
            <p className="font-title leading-title text-gray-100">Design</p>
            <span className="text-sm leading-text text-gray-200">
              Prototipação e design de interfaces no Figma, do conceito à
              entrega para desenvolvimento.
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
